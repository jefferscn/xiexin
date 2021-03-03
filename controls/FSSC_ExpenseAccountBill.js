import React, { PureComponent } from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import ListText from 'yes-framework/controls/Yigo/Text/ListText';
import Avator from './Avator';
import ExpenseImage from '../res/expense.png';
import SplitText from 'yes-framework/controls/Yigo/Text/SplitText';
import CellLayoutTemplate from 'yes-framework/template/TabTemplate/CellLayoutTemplate';
import AttachmentList from 'yes-framework/controls/Yigo/Grid/AttachmentList';
import GridView from 'yes-framework/controls/Yigo/Grid/GridView';
import { SegementToolbar, Header, Card } from 'yes-framework/export';
import { Modal } from 'antd-mobile';
import { History } from 'yes-web';

const actionMeta = {
    "type": "element",
    "elementType": "GridActionButton",
    "elementProps": {
        "yigoid": "Grid1",
        "style": {
            "right": "50%",
            "transform": "translateX(30px)"
        }
    }
}

const detailMeta = {
    "control": "GridView",
    "showHead": true,
    "headTitle": "人员明细",
    "useBodyScroll": true,
    "primaryKey": "Personnel",
    "secondKey": [
        "ExplainDtl"
    ],
    headExtra: {
        "type": "element",
        "elementType": "ComboboxSelect",
        "elementProps": {
            yigoid: "TravelersSelect",
            children: {
                "type": "element",
                "elementType": "IconButton",
                "elementProps": {
                    title: "添加",
                    textStyle: {

                    },
                    style: {
                        flex: 1,
                        width: 50,
                    },
                    iconStyle: {
                        color: 'rgb(33, 150, 243)',
                    }
                }
            }
        }
    },
};

const gridMeta = {
    "control": "GridView",
    "showHead": true,
    "headTitle": "费用明细",
    "useBodyScroll": true,
    "hideAction": true,
    "headExtra": {
        "type": "element",
        "elementType": "MoneyWithCurrency",
        "elementProps": {
            "currencyField": {
                "type": "element",
                "elementType": "SplitText",
                "elementProps": {
                    "yigoid": "CurrencyID",
                    "style": {
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "fontSize": 12,
                        "color": "green",
                        "paddingRight": 4
                    }
                }
            },
            "moneyField": "ApplyMoney",
            "containerStyle": {
                "flex": 1
            }
        }
    },
    "rightElement": {
        "type": "element",
        "elementType": "MoneyWithCurrency",
        "elementProps": {
            "currencyField": {
                "type": "element",
                "elementType": "SplitText",
                "elementProps": {
                    "yigoid": "Currency",
                    "style": {
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "fontSize": 12,
                        "color": "green",
                        "paddingRight": 4
                    }
                }
            },
            "moneyField": "SumCost"
        }
    },
    "centerElement": {
        "type": "element",
        "elementType": "FlexBox",
        "elementProps": {
            "direction": "row",
            "style": {
                "flex": 1
            },
            "items": [
                {
                    "type": "element",
                    "elementType": "FromTo",
                    "elementProps": {
                        "fromId": {
                            "type": "element",
                            "elementType": "SplitText",
                            "elementProps": {
                                "yigoid": "StartRegion",
                                "showIndex": 1,
                                "emptyStr": "未填",
                                "style": {
                                    "display": "flex",
                                    "justifyContent": "center",
                                    "alignItems": "center",
                                    "fontSize": 12,
                                    "paddingRight": 4
                                }
                            }
                        },
                        "toId": {
                            "type": "element",
                            "elementType": "SplitText",
                            "elementProps": {
                                "yigoid": "EndRegion",
                                "showIndex": 1,
                                "emptyStr": "未填",
                                "style": {
                                    "display": "flex",
                                    "justifyContent": "center",
                                    "alignItems": "center",
                                    "fontSize": 12,
                                    "paddingRight": 4
                                }
                            }
                        }
                    }
                }
            ]
        }
    },
    "detailElement": {
        "type": "element",
        "elementType": "FlexBox",
        "elementProps": {
            "direction": "row",
            "style": {
                "paddingLeft": 12,
                "alignItems": "center",
                "height": 30
            },
            "items": [
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "YGJTCost",
                        "icon": {
                            "type": "element",
                            "elementType": "IconFont",
                            "elementProps": {
                                "name": "icon-jiaotong",
                                "size": 20,
                                "color": "#008cd7",
                                "style": {
                                    "paddingRight": 6
                                }
                            }
                        },
                        "style": {
                            "flex": 1,
                            "alignItems": "center",
                            "display": "flex"
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "YGZSCost",
                        "icon": {
                            "type": "element",
                            "elementType": "IconFont",
                            "elementProps": {
                                "name": "icon-jiudian",
                                "size": 20,
                                "color": "#008cd7",
                                "style": {
                                    "paddingRight": 6
                                }
                            }
                        },
                        "style": {
                            "flex": 1,
                            "alignItems": "center",
                            "display": "flex"
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "YGCYCost",
                        "icon": {
                            "type": "element",
                            "elementType": "IconFont",
                            "elementProps": {
                                "name": "icon-canyin",
                                "size": 20,
                                "color": "#008cd7",
                                "style": {
                                    "paddingRight": 6
                                }
                            }
                        },
                        "style": {
                            "flex": 1,
                            "alignItems": "center",
                            "display": "flex"
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "YGBZCost",
                        "icon": {
                            "type": "element",
                            "elementType": "IconFont",
                            "elementProps": {
                                "name": "icon-x-",
                                "size": 20,
                                "color": "#008cd7",
                                "style": {
                                    "paddingRight": 6
                                }
                            }
                        },
                        "style": {
                            "flex": 1,
                            "alignItems": "center",
                            "display": "flex"
                        }
                    }
                }
            ]
        }
    },
    "primaryKey": "budgetindex",
    "secondKey": [
        "remarkdtl"
    ]
};
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexBasis: 0,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    page: {
        flex: 1,
        backgroundColor: '#F7F6F9',
    },
    topBackground: {
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        height: 200,
    },
    card: {
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 13,
        marginRight: 13,
        overflow: 'hidden',
        boxShadow: '0 3px 3px #888888',
        backgroundColor: 'white',
        flexBasis: 'auto',
    },
    topCard: {
        backgroundImage: 'linear-gradient(to bottom right, #41A9FF, #4D78DE);',
        overflow: 'visible',
    },
    row: {
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
    },
    column: {
        flexDirection: 'column',
    },
    row1: {
        paddingTop: 30,
        paddingLeft: 20,
    },
    row11: {
        paddingLeft: 12,
        justifyContent: 'center',
    },
    row2: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    columnTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    round1: {
        border: '1px solid white',
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
    },
    colorWhite: {
        color: 'white',
    },
    bookmark: {
        position: 'absolute',
        right: -4,
        height: 30,
        top: 30,
        width: 120,
        backgroundImage: 'linear-gradient(to right, #E9F3AB, #FCD225)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookmarkText: {
        color: '#CA9300',
    },
    bookmarkCornor: {
        position: 'absolute',
        top: -4,
        right: 0,
        border: '2px solid #CCA34D',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
    },
    cellTitle: {
        justifyContent: 'flex-start',
        fontSize: 15,
        color: '#121F28',
    },
    layoutStyle: {
        justifyContent: 'flex-end',
    },
    textStyle: {
        textAlign: 'right',
        justifyContent: 'flex-end',
    },
    mask: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'whitesmoke',
        opacity: 0.4,
    }
});

class ColumnLabelText extends PureComponent {
    render() {
        const { style, yigoid, label } = this.props;
        return (
            <View style={[styles.columnTextContainer, style]}>
                <ListText style={styles.colorWhite} yigoid={yigoid} emptyStr="0" />
                <Text style={styles.colorWhite}>{label}</Text>
            </View>
        )
    }
}

class ExpenseAccountBillCard extends PureComponent {
    render() {
        return (
            <View style={[styles.card, styles.topCard]}>
                <View style={styles.bookmark}>
                    <ListText style={styles.bookmarkText} yigoid="Status" />
                    <View style={styles.bookmarkCornor}>
                    </View>
                </View>
                <View style={[styles.row, styles.row1]}>
                    <Avator yigoid="PersonnelID" />
                    <View style={styles.row11}>
                        <View style={[styles.row, { paddingBottom: 8 }]}>
                            <Text style={styles.colorWhite}>申请人:</Text>
                            <SplitText showIndex={1} style={styles.colorWhite} yigoid="PersonnelID" />
                        </View>
                        <View style={[styles.row, styles.round1]}>
                            <Text style={styles.colorWhite}>部门:</Text>
                            <ListText style={styles.colorWhite} yigoid="CostDept" />
                        </View>
                    </View>
                </View>
                <View style={[styles.row, styles.row2]}>
                    <ColumnLabelText style={styles.flex1} yigoid="ApplyMoney" label="申请金额" />
                    <ColumnLabelText style={styles.flex1} yigoid="HasCost" label="已用金额" />
                    <ColumnLabelText style={styles.flex1} yigoid="Balance" label="余额" />
                </View>
            </View>
        )
    }
}

export default class ExpendAccountBill extends PureComponent {
    static contextTypes = {
        createElement: PropTypes.func,
        getBillForm: PropTypes.func,
    }
    goBack = () => {
        History.goBack();
    }
    render() {
        const { items, pageStyle, topBackground, formStatus, error, errorMsg } = this.props;
        let actionButton = this.context.createElement(actionMeta);
        return (
            <View style={[styles.page, pageStyle]}>
                {
                    <ImageBackground style={styles.topBackground} source={ExpenseImage} />
                }
                {
                    error ?
                        <Modal
                            title="错误"
                            visible
                            transparent
                            footer={[{
                                text: "OK",
                                onPress: this.goBack,
                            }]}
                        >
                            <View>
                                <Text>{errorMsg.message}</Text>
                            </View>
                        </Modal> : null
                }
                <Header
                    canBack={true}
                    headerStyle={{
                        border: 0,
                    }}
                    title={"出差申请单"}
                    mode="light"
                    transparent
                />
                <ScrollView style={{ paddingBottom: 20 }}>
                    {
                        formStatus != 'ok' ?
                            <View style={styles.mask}><ActivityIndicator /></View> : null
                    }
                    <ExpenseAccountBillCard />
                    <CellLayoutTemplate textStyle={styles.textStyle} layoutStyle={styles.layoutStyle} titleStyle={styles.cellTitle} style={styles.card} items={['Explain']} />
                    <CellLayoutTemplate textStyle={styles.textStyle} layoutStyle={styles.layoutStyle} titleStyle={styles.cellTitle} style={styles.card} 
                        items={['NO', 'Type', 'Companycar', 'PlateNumber', 'Driver', 'Region', 'StartDate', 'EndDate']} />
                    <AttachmentList style={[styles.card]} yigoid="AttachmentGrid" fileName="UploadName" filePath="Path" removable title="附件" />
                    <GridView layoutStyles={styles.card} yigoid="Grid1" {...gridMeta} />
                    <GridView layoutStyles={styles.card} yigoid="detail" {...detailMeta} />
                </ScrollView>
                {
                    actionButton
                }
                <SegementToolbar
                    ignoreItems={[
                        "New",
                        "Close",
                        "Refresh"
                    ]}
                    captionMapping={{
                        "发送PDF文件至邮箱": "封面打印",
                        "撤销已提交审批": "撤销"
                    }}
                />
            </View>
        )
    }
}