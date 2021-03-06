import React, { PureComponent } from 'react';
import { Modal } from 'antd-mobile';
import PropTypes from 'prop-types';
import { YIUI } from 'yes-core';
import { ComboBox, ListComponents } from 'yes-comp-react-native-web';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { CheckboxLabel, SegementButtons, FilterBlock, Header, ListText, GridView, GridSelect } from 'yes-framework/export';
import { BackHandler, Util } from 'yes-intf';
import SourceTypeIcon from './SourceTypeIcon';
import ScriptWrap from './ScriptWrap';

const { ListImage } = ListComponents;

const styles = StyleSheet.create({
    label: {
        color: 'orangered',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 12,
    },
    gridContainer: {
        flex: 1,
    },
    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(211,211,211,0.5)',
    }
});

const script = 'PushPara("resource", 1); Open(Macro_GetBillKeyByInvoiceType(cell1), InvoiceID, "modal", "View");';
export default class InvoiceEntry extends PureComponent {
    static contextTypes = {
        getPicture: PropTypes.func,
        getPictures: PropTypes.func,
        getBillForm: PropTypes.func,
        uploadImage: PropTypes.func,
        onValueChange: PropTypes.func,
        onControlClick: PropTypes.func,
        getContextComponent: PropTypes.func,
    }
    state = {
        step: 1,
        modalVisible: true,
        selectType: null,
    }
    componentDidMount() {
        const { formStatus } = this.props;
        if (formStatus === 'ok') {
            this.addChildCloseHandler();
        }
    }
    UNSAFE_componentWillReceiveProps(props) {
        if (props.formStatus === 'ok' && this.props.formStatus !== 'ok') {
            this.addChildCloseHandler();
        }
    }
    componentWillUnmount() {
        this.backHandler && this.backHandler();
        const billform = this.context.getBillForm();
        billform && billform.form && (billform.form.onChildClose = null);
    }

    addChildCloseHandler = () => {
        const billform = this.context.getBillForm();
        billform.form.onChildClose = (child) => {
            if (!child) {
                return;
            }
            if (child.getOperationState() === YIUI.Form_OperationState.New) {
                this.backHandler && this.backHandler();
                this.setState({
                    modalVisible: true,
                    step: 1,
                });
            }
        }
    }
    stepBack = () => {
        this.backHandler && this.backHandler();
        this.setState({
            step: 1,
            modalVisible: true,
        });
    }
    onClose = () => {
        this.props.onClose && this.props.onClose();
    }
    onCancel = () => {
        this.props.onClose && this.props.onClose();
    }
    onSelectTypeChange = async (yigoid, v) => {
        this.backHandler && this.backHandler();
        this.backHandler = BackHandler.addPreEventListener(() => {
            this.stepBack();
            this.backHandler = null;
        });
        this.setState({
            selectType: v,
        });
        if (v == 2) {//picture
            const billform = this.context.getBillForm();
            if (!billform) {
                return;
            }
            const formKey = billform.form.formKey;
            const oid = billform.form.getOID();
            this.setState({
                modalVisible: false,
            });
            let files = null;
            try {
                files = await this.context.getPicture(0, 60, 1000, true);
            } catch (ex) {
                console.log(ex);
                this.setState({
                    step: 1,
                    modalVisible: true,
                });
                if (ex !== 'usercancel') {
                    Util.alert('错误', ex.messsage || ex);
                }
                return;
            }
            // const file = await this.context.getPicture(0, 60, 1000);
            Util.safeExec(async () => {
                try {
                    for (let file of files) {
                        const result = await this.context.uploadImage(formKey, oid, file.file, file.name);
                        await this.context.onValueChange("HeadPath", result);
                        await this.context.onControlClick("InvoiceIndentity");
                    }
                    this.setState({
                        step: 2,
                    });
                } catch (ex) {
                    this.setState({
                        step: 1,
                        modalVisible: true,
                    });
                    Util.alert('错误', ex.message);
                }
            })
        }
        if (v == 5) {//import from database
            this.setState({
                modalVisible: false,
                step: 2,
            });
            //这里需要判断当前的InvoiceType是否为空
            const invoiceType = this.context.getContextComponent('FeeTypeID_NODB4Other');
            if (invoiceType) {
                if (!invoiceType.isNull()) {
                    await this.context.onControlClick("Query");
                }
            }
            // await this.context.onControlClick("Query");
        }
        if (v == 1) {//manual input`
            this.setState({
                modalVisible: true,
                step: 3,
            });
        }
    }
    onInvoiceTypeChange = (yigoid, v) => {
        // this.props.onClose && this.props.onClose();
        this.setState({
            modalVisible: false,
            step: 2,
        });
    }
    colorMapping = (v) => {
        if (!v) {
            return {
                color: '#FFC107',
            };
        }
        if (v == "10000") {
            return {
                color: '#4CAF50',
            }
        }
        return {
            color: '#FF5722',
        }
    }
    txtMapping = {
        "其他错误": "验真失败",
    }
    render() {
        const { formStatus, errorMsg, busying } = this.props;
        // if(formStatus==='error') {
        //     return null;
        // }
        if (this.state.step === 1) {
            return (<Modal
                visible={this.state.modalVisible}
                popup={true}
                animationType={'slide-up'}
                transparent
                maskClosable={true}
                onClose={this.onClose}
                title="发票来源"
                footer={[{
                    text: '取消',
                    onPress: this.onCancel,
                }]}
            // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            // afterClose={this.onClose}
            >
                {formStatus === 'ok' ?
                    <ComboBox
                        yigoid="SelectType_NODB4Other"
                        inline
                        imgElement={<SourceTypeIcon style={{ paddingRight: 8 }} />}
                        onChange={this.onSelectTypeChange}
                        hideSelect
                        itemStyle={{
                            height: 45,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgrey',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    /> : (formStatus === 'error' ? <View><Text>{errorMsg.message}</Text></View> : <ActivityIndicator size="large" />)}
            </Modal>);
        }
        if (this.state.step === 2) {//需要显示一个发票列表
            return (
                <Modal
                    visible={true}
                    // transparent
                    // popup
                    maskStyle={{ zIndex: 899 }}
                    wrapClassName="fullscreen"
                    maskClosable={false}
                >
                    <View style={{ flex: 1 }}>
                        <Header
                            canBack={true}
                            title={"发票列表"}
                            backHandler={this.stepBack}
                        />
                        <FilterBlock
                            queryButton={this.state.selectType == "5" ? "Query" : null}
                            filterItems={[{
                                type: 'element',
                                elementType: 'ChainDict',
                                elementProps: {
                                    yigoid: 'FeeTypeID_NODB4Other',
                                    layoutStyles: {
                                        paddingRight: 12,
                                        paddingleft: 12,
                                        height: 32,
                                    },
                                    textStyles: {
                                        justifyContent: 'flex-end',
                                    }
                                }
                            }]}
                        ></FilterBlock>
                        <View style={styles.gridContainer}>
                            {
                                busying ? <View style={styles.mask}><ActivityIndicator /></View> : null
                            }
                            <GridView
                                style={{ flex: 1, marginLeft: 12, marginRight: 12 }}
                                yigoid="Grid1"
                                clickMode="select"
                                removeable={false}
                                hideAction={true}
                                primaryKey={"cell1"}
                                secondKey={["cell4"]}
                                tertiaryKey={["cell2",
                                    "cell8",
                                    <CheckboxLabel style={styles.label} falseLabel="费用类型不符" yigoid="IsCompliance" />,
                                    <CheckboxLabel style={styles.label} trueLabel="已引用" yigoid="IsUsed" />,
                                    <ListText style={styles.label} emptyStr="未验真" textMapping={this.txtMapping} styleMapping={this.colorMapping} yigoid="Validation_Code" />
                                ]}
                                rightElement={<ScriptWrap script={script}><ListImage yigoid="cell7" containerStyle={{ justifyContent: 'center' }} style={{ width: 60, height: 40 }} /></ScriptWrap>}
                                showArrow={false}
                                leftElement={
                                    <GridSelect yigoid="select" />
                                }
                            />
                        </View>
                        <SegementButtons items={[{
                            text: '导入发票',
                            key: 'OK',
                        }, {
                            text: '新建账本',
                            key: 'NewBooks'
                        }, {
                            text: '取消',
                            key: 'Close',
                        }]} />
                    </View>
                </Modal>);
        }
        if (this.state.step == 3) {
            return (<Modal
                visible={this.state.modalVisible}
                popup={true}
                animationType={'slide-up'}
                transparent
                maskClosable={false}
                // onClose={this.onClose}
                title="发票类型"
                footer={[{
                    text: '取消',
                    onPress: this.onCancel,
                }]}
                // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                afterClose={this.onClose}
            >
                <View style={{ maxHeight: 300 }}>
                    <ComboBox
                        yigoid="InvoiceType_NODB4Other"
                        inline
                        onChange={this.onInvoiceTypeChange}
                        hideSelect
                        itemStyle={{
                            height: 45,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgrey',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    />
                </View>
            </Modal>);
        }
        return null;
    }
}

