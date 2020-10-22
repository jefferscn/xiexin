import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ListComponents } from 'yes-comp-react-native-web';
import { ListRowWrap } from 'yes-intf';
import TicketNameBadge from './TicketNameBadge';
import SplitText from 'yes-framework/controls/SplitText';

const pressRetentionOffset = { top: 1, left: 1, right: 1, bottom: 1 };

const { ListText } = ListComponents;

const styles = StyleSheet.create({
    container: {
        width: '33%',
        display: 'inline-flex',
        padding: 5,
        height: 250,
    },
    inner: {
        borderRadius: 10,
        // border: '1px solid gray',
        padding: 5,
        backgroundColor: 'white',
        overflow: 'visible',
        boxShadow: '1px 1px 5px #888888',
        flex: 1,
    },
    text1: {
        fontSize: 9,
        // whiteSpace: 'nowrap',
        whiteSpace: 'break-spaces',
        paddingTop: 38,
        overflow: 'hidden',
    },
    text2: {
        fontSize: 9,
        paddingBottom: 34,
    },
    text3: {
        fontSize: 10,
        color: '#141414',
        paddingBottom: 14,
    },
    text4: {
        fontSize: 12,
        paddingBottom: 8,
        fontWeight: 'bold',
    },
    text5: {
        color: '#333333',
        fontSize: 12,
    },
    currency: {
        fontSize: 10,
        color: '#141414',
        paddingRight: 4,
    },
    text6: {
        fontSize: 8,
        color: '#141414',
    },
    textContainer: {
        flexDirection: 'row',
        paddingTop: 4,
        alignItems: 'flex-end',
    },
});

@ListRowWrap
class CardListItem extends PureComponent {
    static defaultProps = {
        formKeyField: 'FormKey_LV',
        causeField: 'Cause',
        currencyField: 'CurrencyID_LV',
        amountField: 'ReimbursementAmount',
        personField: 'ReimbursementPersonID',
        deptField: 'PaymentDeptID',
        billDateField: 'BillDate_LV',
        NOField: 'NO_LV',
    }
    render() {
        const { formKeyField, causeField, currencyField, amountField, personField, deptField, billDateField, NOField } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress} pressRetentionOffset={pressRetentionOffset}>
                <View style={styles.inner}>
                    <ListText style={styles.text1} yigoid={NOField} />
                    <ListText style={styles.text2} yigoid={billDateField} />
                    <ListText style={styles.text3} yigoid={deptField} />
                    <ListText style={styles.text4} yigoid={personField} />
                    <View style={styles.textContainer}>
                        <SplitText style={styles.currency} yigoid={currencyField} />
                        <ListText style={styles.text5} yigoid={amountField} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text6}>事由:  </Text>
                        <ListText style={styles.text6} yigoid={causeField} />
                    </View>
                    <TicketNameBadge yigoid={formKeyField} />
                </View>
            </TouchableOpacity>
        )
    }
}

export default CardListItem;
