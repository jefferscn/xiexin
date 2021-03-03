import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListText } from 'yes-framework/export';
import Avator from './Avator';
import { SplitText } from 'yes-framework/export';

const styles = StyleSheet.create({
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
    columnTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
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

export default class ExpenseAccountBillCard extends PureComponent {
    static defaultProps = {
        statusField: 'Status',
        personField: 'PersonnelID',
        deptField: 'CostDept',
        applyMoneyField: 'ApplyMoney',
        hasCostField: 'HasCost',
        balanceField: 'Balance',
    }
    render() {
        const { statusField, personField, deptField, applyMoneyField, hasCostField, balanceField } = this.props;
        return (
            <View style={[styles.card, styles.topCard]}>
                <View style={styles.bookmark}>
                    <ListText style={styles.bookmarkText} yigoid={statusField} />
                    <View style={styles.bookmarkCornor}>
                    </View>
                </View>
                <View style={[styles.row, styles.row1]}>
                    <Avator yigoid={personField} />
                    <View style={styles.row11}>
                        <View style={[styles.row, { paddingBottom: 8 }]}>
                            <Text style={styles.colorWhite}>申请人:</Text>
                            <SplitText showIndex={1} style={styles.colorWhite} yigoid={personField} />
                        </View>
                        <View style={[styles.row, styles.round1]}>
                            <Text style={styles.colorWhite}>部门:</Text>
                            <ListText style={styles.colorWhite} yigoid={deptField} />
                        </View>
                    </View>
                </View>
                <View style={[styles.row, styles.row2]}>
                    <ColumnLabelText style={styles.flex1} yigoid={applyMoneyField} label="申请金额" />
                    <ColumnLabelText style={styles.flex1} yigoid={hasCostField} label="已用金额" />
                    <ColumnLabelText style={styles.flex1} yigoid={balanceField} label="余额" />
                </View>
            </View>
        )
    }
}
