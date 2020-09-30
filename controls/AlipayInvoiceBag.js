import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from 'yes-framework/controls/Header';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
    }
});

const AlipayService = {
    /**
     * 获取当前用户的支付宝发票列表
     */
    fetchInvoiceList: async ()=> {

    },
    /**
     * 查询当前用户是否已经绑定了支付宝
     */
    checkValid: async ()=> {

    },
    fetchInvoiceDetail: async (item)=> {

    },
};

class InvoiceItem extends PureComponent {
    render() {
        return <View>

        </View>
    }
}

export default class AlipayInvoiceBag extends PureComponent {
    static defaultProps = {
        limit: 20,
    }
    state = {
        page: 1,
        limit: this.props.limit,
        items: [],
        selectedItems: [],
    } 
    renderItem = (item)=> {

    }
    keyExtractor = (item)=> {
        return item.invoiceCode;
    }
    onEndReached = ()=> {

    }
    componentDidMount() {

    }
    render() {
        return (
            <View style = {styles.page}>
                <Header />
                <FlatList 
                    data={this.state.items}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    extraData={this.state.selectedItems}
                    onEndReached={this.onEndReached}
                />
            </View>
        )
    }
}