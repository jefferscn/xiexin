import React, { PureComponent, useEffect, useRef } from 'react';
import {
    View, StyleSheet, Text, ScrollView, Animated,
    TouchableHighlight, PanResponder, LayoutAnimation,
    TouchableOpacity, Dimensions,
} from 'react-native';
import IconFont from 'yes-framework/font';
import { Modal, WhiteSpace } from 'antd-mobile';
import util from '../util';
import { openForm, openModal } from 'yes-framework/util/navigateUtil';
import { CustomBillForm } from 'yes-comp-react-native-web';
import PropTypes from 'prop-types';
import { ImageCarouselGrid, Header, OperationExecTimer, SnapCarousel } from 'yes-framework/export';
import { Svr } from 'yes-core';
import { allList, selectedList, saveSelectedList } from '../res/entrylist';
import AwesomeFontIcon from 'react-native-vector-icons/FontAwesome';
import { History } from 'yes-web';
import BillContainer from './BillContainer';
import { Util } from 'yes-intf';
import Global from 'global';
import { GridChart } from 'yg-echarts';
import GridTotal from 'yes-framework/hoc/GridTotal';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F7F7F7',
    },
    headImg: {
        height: 200,
    },
    entry: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 34,
    },
    entryText: {

    },
    entryList: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    entryStyle: {
        justifyContent: 'center',
        height: 80,
    },
    container: {
    },
    favoriteLine: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    },
    favoriteList: {
        flexDirection: 'row',
        flex: 1,
        paddingLet: 8,
    },
    favoriteLineTextLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
    },
    favoriteLineTextRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16,
        paddingLeft: 8,
    },
    smallIcon: {
        paddingLeft: 4,
    },
    button: {
        color: '#00bfff',
    },
    favoritePanel: {
        paddingTop: 12,
    },
    categoryPanel: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    categoryPanelTitle: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 12,
        paddingLeft: 12,
        backgroundColor: '#fff',
    },
    removeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: 'cornflowerblue',
    },
    todolistview: {
        backgroundColor: 'white',
    },
    todolistviewheader: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 12,
    },
    todolistviewtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    todolistviewcontent: {
        flexDirection: 'row',
        height: 40,
    },
    todolistviewitem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 12,
    },
    todolistviewitemcontent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todolistviewicon: {
        color: '#2598F3',
        fontSize: 20,
        paddingRight: 6,
    },
    todolistviewitembadge: {
        color: '#E02020',
        fontSize: 21,
    },
    todolistviewitemtext: {
        paddingRight: 6,
        color: '#666666',
    },
});

const openUrl = async (service) => {
    const data = {
        service: "InvokeUnsafeService",
        extSvrName: service,
        cmd: "InvokeExtService",
    };
    const dt = await Svr.Request.getData(data);
    const result = JSON.parse(dt);
    if (!result.result) {
        alert(result.msg);
        return;
    }
    if (Global.cordova) {
        if (Global.cordova.platformId != "android") {
            StatusBar.hide();
        }
    }
    let ref = open(result.data, '_blank', 'location=no,footer=yes,closebuttoncaption=返回,hidenavigationbuttons=yes,lefttoright=yes');

    ref.addEventListener('exit', () => {
        if (cordova) {
            if (cordova.platformId != "android") {
                StatusBar.show();
            }
        }
    });
    ref.addEventListener('message', (params) => {
        if (params.data.msgType === 'close') {
            ref.close();
            ref = null;
        }
    });
}
class Entry extends PureComponent {
    static defaultProps = {
        removable: false,
        editing: false,
    }
    onPress = () => {
        this.props.onPress && this.props.onPress(this.props.entry);
    }
    onRemove = () => {

    }
    render() {
        const { icon, text, entry, containerStyle, removable,
            iconStyle, textStyle, iconSize, editing, selected } = this.props;
        return (
            <TouchableOpacity style={containerStyle} onPress={this.onPress}>
                <View style={[styles.entry]}>
                    {(editing && selected) ? <TouchableHighlight style={styles.removeButton}>
                        <AwesomeFontIcon name="check" color="white" /></TouchableHighlight> : null}
                    {removable ? <TouchableHighlight style={styles.removeButton} onPress={this.onRemove}>
                        <AwesomeFontIcon name="times" color="white" /></TouchableHighlight> : null}
                    <IconFont name={icon} size={iconSize} style={[iconStyle]} color={entry.color || "#008CD7"} />
                    <Text style={[styles.entryText, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const DragableEntry = (props) => {
    const getPosition = () => {
        const { column, position, width, height } = props;
        return {
            x: (position % column) * width,
            y: Math.floor(position / column) * height,
        }
    }
    const onRemove = () => {
        props.onRemove && props.onRemove(props.entry);
    }
    const { icon, text, entry, containerStyle, removable, translate,
        iconStyle, textStyle, iconSize, position, width, height, column } = props;
    const translateXY = useRef(new Animated.ValueXY()).current;
    const posStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
    };
    useEffect(() => {
        if (props.translate) {
            translateXY.setValue(props.translate);
            return;
        }
        const calcPos = getPosition();
        Animated.spring(translateXY, {
            toValue: calcPos,
            duration: 500,
        }).start();
    }, [translate, position, width, height, column])
    return (
        <Animated.View style={[styles.entry, containerStyle, posStyle, {
            transform: translateXY.getTranslateTransform(),
        }]}>
            {removable ? <TouchableHighlight style={styles.removeButton} onPress={onRemove}>
                <AwesomeFontIcon name="times" color="white" /></TouchableHighlight> : null}
            <IconFont name={icon} size={iconSize} style={[iconStyle]} color={entry.color || "#008CD7"} />
            <Text style={[styles.entryText, textStyle]}>{text}</Text>
        </Animated.View>
    )
}

// const DragableEntry = Animated.createAnimatedComponent(DragableEntry_);
class FavoriteLine extends PureComponent {
    state = {
        editing: false,
    }
    onPress = () => {
        this.setState({
            editing: !this.state.editing,
        }, () => {
            this.props.changeEditStatus(this.state.editing);
        });
    }
    onRemove = (entry) => {
        this.props.changeSelected(entry, false);
    }
    componentWillReceiveProps(props) {
        console.log(props);
        console.log(props.list === this.props.list);
    }
    render() {
        const { list } = this.props;
        return (<View style={styles.container}>
            <View style={styles.favoriteLine}>
                <Text style={styles.favoriteLineTextLeft} >常用功能</Text>
                <ScrollView style={[{ flex: 1, flexDirection: 'row' }]} horizontal={true} >
                    {
                        list.map(item => {
                            return (item.category != "system") ? <IconFont style={styles.smallIcon} name={item.icon} size={30} /> : null;
                        })
                    }
                </ScrollView>
                <TouchableHighlight style={styles.favoriteLineTextRight} onPress={this.onPress}>
                    <Text style={styles.button}>{this.state.editing ? '保存' : '编辑'}</Text>
                </TouchableHighlight>
            </View>
            {this.state.editing ?
                <DragableEntryList
                    onRemove={this.onRemove}
                    selectedList={list}
                    editing={this.state.editing}
                    iconSize={34}
                    iconStyle={styles.icon}
                    entryStyle={styles.entryStyle}
                    changeLocation={this.props.changeLocation}
                /> : null}
        </View>);
    }
}

const { width, height } = Dimensions.get('window');
const WIDTH = width / 4;
const HEIGHT = WIDTH;
class DragableEntryList extends PureComponent {
    static defaultProps = {
        column: 4,
        iconSize: 50,
    }
    static contextTypes = {
        getTopPadding: PropTypes.func,
    }
    state = {
        dragging: false,
        dragX: 0,
        dragY: 0,
        dragEntry: null,
    }
    onRemove = (entry) => {
        this.props.onRemove(entry);
    }
    UNSAFE_componentWillUpdate(props) {
        if (this.state.dragging && this.state.dragEntry) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            const dragIndex = props.selectedList.findIndex(item => item.key === this.state.dragEntry.key);
            this.setState({
                dragIndex: dragIndex
            });
        }
        // LayoutAnimation.spring();
    }
    calcIndex = (nativeEvent) => {
        const { pageX, locationY } = nativeEvent;
        const leftIndex = Math.floor((pageX * 4) / width);  // 根据坐标Y获取当前所在的行
        const topIndex = Math.floor((locationY) / 80);             // 根据坐标X获取当前所在的列    
        console.log(`x=${leftIndex};y=${topIndex}`);
        const index = topIndex * 4 + leftIndex;
        return index;
    }
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt, gestureState) => {
            const index = this.calcIndex(evt.nativeEvent);
            const top = Math.floor(index / this.props.column);
            const left = index % this.props.column;
            if (this.props.selectedList.length <= index) {
                return;
            }
            const dragItem = this.props.selectedList[index];
            this.setState({
                dragging: true,
                dragIndex: index,
                dragEntry: dragItem,
                dragX: left * width * 0.25,
                dragY: top * 80,
                dragXOrigin: left * width * 0.25,
                dragYOrigin: top * 80,
            })
        },
        onPanResponderMove: (evt, gestureState) => {
            if(!this.state.dragging) {
                return;
            }
            const index = this.calcIndex(evt.nativeEvent);
            if (index !== this.state.dragIndex) {//需要交换两个Entry
                if (!(index < 0 || index >= this.props.selectedList.length)) {
                    this.props.changeLocation(index, this.state.dragIndex);
                }
            }
            this.setState({
                dragX: this.state.dragXOrigin + gestureState.dx,
                dragY: this.state.dragYOrigin + gestureState.dy,
            });
        },
        onPanResponderRelease: () => {
            this.setState({
                dragging: false,
            });
        }
    })
    calcDragStyle = () => {
        return {
            position: 'absolute',
            top: this.state.dragY,
            left: this.state.dragX,
            transform: [{ scale: 1.1 }],
            borderWidth: 1,
            borderStyle: 'dotted',
            backgroundColor: 'aliceblue',
        };
    }
    render() {
        const { entryStyle, iconSize, iconStyle, selectedList, column } = this.props;
        const entryWidth = {
            width: `${100 / this.props.column}%`,
        }
        const dragEntry = this.state.dragEntry;
        const dragStyle = this.calcDragStyle();
        return (<View style={[styles.entryList, {
            height: HEIGHT * Math.ceil(selectedList.length / this.props.column),
        }]}
            {...this.panResponder.panHandlers}
        >
            {
                selectedList.map((item, index) => {
                    return <DragableEntry
                        // panHandler={this.panResponder.panHandlers}
                        key={item.key}
                        position={index}
                        icon={item.icon}
                        text={item.text}
                        iconSize={iconSize}
                        iconStyle={iconStyle}
                        width={WIDTH}
                        height={HEIGHT}
                        column={column}
                        removable={true}
                        entry={item}
                        onRemove={this.onRemove}
                        containerStyle={[entryStyle]}
                    />;
                })
            }
            {
                (this.state.dragging && dragEntry) ? <DragableEntry
                    key={`drag_${this.state.dragEntry.key}`}
                    icon={dragEntry.icon}
                    text={dragEntry.text}
                    iconSize={iconSize}
                    width={WIDTH}
                    height={HEIGHT}
                    iconStyle={iconStyle}
                    removable={false}
                    entry={dragEntry}
                    translate={{
                        x: this.state.dragX,
                        y: this.state.dragY,
                    }}
                    containerStyle={[entryStyle, dragStyle]}
                /> : null
            }
        </View>);
    }
};

class FavoriteCategoryPanel extends PureComponent {
    static defaultProps = {
        column: 4,
        iconSize: 50,
    }
    onEntryPress = (entry) => {
        if (this.props.editing) {
            this.props.changeSelected(entry, !this.isEntrySelected(entry));
        }
    }
    isEntrySelected = (entry) => {
        return this.props.selectedList.some(item => entry.key === item.key);
    }
    render() {
        const { title, items, entryStyle, iconSize, column } = this.props;
        const entryWidth = {
            width: `${100 / column}%`,
        }
        return (
            <View style={styles.categoryPanel}>
                <View style={styles.categoryPanelTitle}>
                    <Text>{title}</Text>
                </View>
                <View style={styles.entryList}>
                    {
                        items.map(item => {
                            return <Entry
                                editing={this.props.editing}
                                selected={this.isEntrySelected(item)}
                                key={item.key}
                                icon={item.icon}
                                text={item.text}
                                iconSize={iconSize}
                                entry={item}
                                onPress={() => this.onEntryPress(item)}
                                containerStyle={[entryWidth, entryStyle]}
                            />;
                        })
                    }
                </View>
            </View>
        )
    }
}

class FavoritePanel extends PureComponent {
    groupData = (list) => {
        const data = list.reduce((total, item) => {
            if (!total[item.category]) {
                total[item.category] = [];
            }
            total[item.category].push(item);
            return total;
        }, {});
        return data;
    }
    componentWillReceiveProps(props) {
        this.setState({
            data: this.groupData(props.list),
        });
    }
    state = {
        data: this.groupData(this.props.list),
    }
    render() {
        return (
            <View style={styles.favoritePanel}>
                {
                    Object.keys(this.state.data).map((category) => {
                        if (category === 'system') {
                            return null;
                        }
                        return (
                            <FavoriteCategoryPanel
                                editing={this.props.editing}
                                title={category}
                                changeSelected={this.props.changeSelected}
                                selectedList={this.props.selectedList}
                                items={this.state.data[category]}
                                entryStyle={styles.entryStyle}
                            />
                        )
                    })
                }
            </View>
        )
    }
}
class EntryListManager extends PureComponent {
    state = {
        editing: false,
        selectedList: this.props.selectedList,
    }
    changeEditStatus = (edit) => {
        this.setState({
            editing: edit,
        });
    }
    changeLocation = (indexA, indexB) => {
        const list = this.state.selectedList;
        const tmp = list[indexA];
        list[indexA] = list[indexB];
        list[indexB] = tmp;
        this.setState({
            selectedList: [...list],
        });
        this.props.onChange(this.state.selectedList);
    }
    changeSelected = (item, selected) => {
        if (selected) {
            if (!this.state.selectedList.some(itm => itm.key === item.key)) {
                this.setState({
                    selectedList: [...this.state.selectedList, item],
                }, () => {
                    this.props.onChange(this.state.selectedList);
                });
            }
        } else {
            const index = this.state.selectedList.findIndex(itm => itm.key === item.key);
            if (index >= 0) {
                this.state.selectedList.splice(index, 1);
                this.setState({
                    selectedList: [...this.state.selectedList],
                }, () => {
                    this.props.onChange(this.state.selectedList);
                });
            }
        }
    }
    render() {
        return (<View style={{ flex: 1, backgroundColor: '#e9e9e9' }}>
            {/* <NavBar
                className={(this.context.getTopPadding && this.context.getTopPadding()) ? 'toppadding' : null}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.props.onClose}
            >
                全部应用
                    </NavBar> */}
            <Header headerStyle={{ backgroundColor: 'white' }} title="全部应用" canBack backHandler={this.props.onClose} />
            <FavoriteLine
                changeEditStatus={this.changeEditStatus}
                list={this.state.selectedList}
                editing={this.state.editing}
                changeSelected={this.changeSelected}
                changeLocation={this.changeLocation}
            />
            <FavoritePanel
                list={this.props.list}
                selectedList={this.state.selectedList}
                changeSelected={this.changeSelected}
                editing={this.state.editing}
            />
        </View>
        );
    }
}

class EntryList extends PureComponent {
    static defaultProps = {
        column: 4,
        iconSize: 50,
    }
    static contextTypes = {
        getTopPadding: PropTypes.func,
    }
    state = {
        selectedList: this.props.selectedList,
    }
    closeManager = () => {
        if (this.modalHandler) {
            this.modalHandler();
        }
    }
    onChange = (list) => {
        this.setState({
            selectedList: list,
        });
        this.props.onChange(list);
    }
    moreEntry = {
        key: 'more',
        icon: 'icon-more',
        text: '更多',
        category: 'system',
        favorite: true,
        color: '#FD9B00'
    }
    onEntryPress = (entry) => {
        if (entry.key === 'more') {//用户点击更多
            this.modalHandler = util.showModal(
                <Modal
                    maskStyle={{ zIndex: 899 }}
                    wrapClassName="fullscreen"
                    visible={true}
                    transparent={false}
                >
                    <EntryListManager
                        selectedList={this.state.selectedList}
                        onClose={this.closeManager}
                        list={this.props.list}
                        onChange={this.onChange}
                    />
                </Modal>
            )
            return;
        }
        if (entry.type === 'thirdpart') {
            Util.safeExec(async () => {
                await openUrl(entry.service);
            });
            return;
        }
        if (entry.formKey) {
            if (entry.modal) {
                openModal(entry.formKey, entry.oid, 'EDIT');
            } else {
                openForm(entry.formKey, entry.oid, 'EDIT');
            }
        }
        if (entry.path) {
            History.push(entry.path);
        }
    }

    render() {
        const { list, entryStyle, iconSize, iconStyle } = this.props;
        const entryWidth = {
            width: `${100 / this.props.column}%`,
        }
        return (<View style={styles.entryList}>
            {
                this.state.selectedList.map(item => {
                    return <Entry
                        key={item.key}
                        icon={item.icon}
                        text={item.text}
                        iconSize={iconSize}
                        iconStyle={iconStyle}
                        entry={item}
                        onPress={this.onEntryPress}
                        containerStyle={[entryWidth, entryStyle]}
                    />;
                })
            }
            {
                <Entry
                    key={this.moreEntry.key}
                    icon={this.moreEntry.icon}
                    text={this.moreEntry.text}
                    iconSize={iconSize}
                    iconStyle={iconStyle}
                    entry={this.moreEntry}
                    onPress={this.onEntryPress}
                    containerStyle={[entryWidth, entryStyle]}
                />
            }
        </View>);
    }
};

// class TodoList extends PureComponent {
//     render() {
//         return (<CustomBillForm formKey="ToDoListTotal" oid="-1" status="DEFAULT">
//             <BillContainer>
//                 <OperationExecTimer yigoid="flush" ticks={600000} />
//                 <GridView
//                     yigoid="Grid1"
//                     showHead={false}
//                     clickMode="dblclick"
//                     useBodyScroll={true}
//                     divider={true}
//                     dividerStyle={{
//                         borderBottomWidth: 10,
//                         borderBottomColor: '#F7F7F7',
//                     }}
//                     primaryKey={<FlexBox direction="row" style={{flex: 1, paddingRight: 12, alignItems: 'center' }}>
//                         <BooksTypeImage yigoid="formKey" style={{ paddingRight: 12 }} />
//                         <ListText yigoid="formname" style={{ flex: 1 }} />
//                         <BadgeText yigoid="C" />
//                     </FlexBox>}
//                 />
//             </BillContainer>
//         </CustomBillForm>);
//     }
// }

const TodoCount = GridTotal(({ count, total, style }) => {
    return <Text style={style}>{total}</Text>
});
const openTodoList = () => {
    openForm('ToDoWorkFlow', -1, 'EDIT');
}
const openCompleteList = () => {
    openForm('CompleteWorkFlow', -1, 'EDIT');
}
const TodoListView = () => {
    return (
        <View style={styles.todolistview}>
            <View style={styles.todolistviewheader}>
                <Text style={styles.todolistviewtitle}>审批任务</Text>
            </View>
            <View style={styles.todolistviewcontent}>
                <TouchableHighlight style={styles.todolistviewitem} onPress={openTodoList}>
                    <View style={styles.todolistviewitemcontent}>
                        <IconFont style={styles.todolistviewicon} name="icon-ToDoListTotal" />
                        <Text style={styles.todolistviewitemtext}>待办审批</Text>
                        <TodoCount style={styles.todolistviewitembadge} yigoid="Grid1" sumField="C" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.todolistviewitem} onPress={openCompleteList}>
                    <View style={styles.todolistviewitemcontent}>
                        <IconFont style={styles.todolistviewicon} name="icon-CompleteWorkFlow" />
                        <Text style={styles.todolistviewitemtext}>已办审批</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}
class TodoList extends PureComponent {
    render() {
        return (<CustomBillForm formKey="ToDoListTotal" oid="-1" status="DEFAULT">
            <BillContainer>
                <OperationExecTimer yigoid="flush" ticks={600000} />
                <TodoListView />
            </BillContainer>
        </CustomBillForm>);
    }
}
class ImageCarousel extends PureComponent {
    render() {
        return (
            <CustomBillForm formKey="FSSC_SlideShowList" oid="-1" status="DEFAULT">
                <ImageCarouselGrid
                    needThumbnail={false}
                    w={1000}
                    h={400}
                    style={{ height: 150, width: '100%' }}
                    yigoid="detail"
                    imageColumn="ImgPath"
                    textColumn="Description"
                />
            </CustomBillForm>
        )
    }
}

class PersonelChart extends PureComponent {
    render() {
        return (
            <CustomBillForm formKey="PersonalMobileExport" oid="-1" status="EDIT">
                <GridChart
                    yigoid="Grid1"
                    title={{
                        text: "个人报销统计",
                        left: 'right',
                        top: 'bottom'
                    }}
                    tooltip={{
                        formatter: '{d}'
                    }}
                    legend={{}}
                    style={{ height: 400 }}
                    slice={
                        [
                            "feeTypeID_D",
                            "BillAmount"
                        ]
                    }
                    series={[
                        {
                            type: 'pie',
                            dataColumn: "BillAmount",
                            label: {
                                formatter: "{c}",
                            }
                        }
                    ]}
                />
            </CustomBillForm>
        )
    }
}
export default class Home extends PureComponent {
    onChange = (list) => {
        saveSelectedList(list);
    }
    render() {
        return (
            <View style={styles.page}>
                <ImageCarousel />
                <ScrollView style={styles.page}>
                    <EntryList
                        list={allList}
                        selectedList={selectedList}
                        onChange={this.onChange}
                        iconSize={34}
                        iconStyle={styles.icon}
                        entryStyle={styles.entryStyle}
                    />
                    <WhiteSpace size="md" />
                    <TodoList />
                    {/* <PersonelChart /> */}
                </ScrollView>
            </View>
        )
    }
}
