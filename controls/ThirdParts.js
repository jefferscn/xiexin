import React, { PureComponent } from 'react';
import { List } from 'antd-mobile';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
    }
});

export default class ThirdParts extends PureComponent {
    render() {
        return (<View style={styles.page}>
            <List>
            </List>
        </View>);
    }
}
