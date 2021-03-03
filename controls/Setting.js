import React, { PureComponent } from 'react';
import { Header } from 'yes-framework/export';
import { View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { List } from 'antd-mobile';
import { AppDispatcher } from 'yes-intf';
import AppStatusWrap from 'yes-framework/hoc/AppStatusWrap';
import { History } from 'yes-web';
import { Update } from 'yes-framework/export';
import { openForm } from 'yes-framework/util/navigateUtil';

const Item = List.Item;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1
    }
});

@AppStatusWrap
class VersionCheckItem extends PureComponent {
    componentWillMount() {
        this.props.updateVersion();
    }
    render() {
        const { fetching, currentVersion, latestVersion, canUpdate, url, title, platform } = this.props;
        let extra = null;
        if(fetching) {
            extra = <ActivityIndicator size="small" />;
        } else {
            if(canUpdate) {
                extra = <Update title="可更新" platform={platform} url={url} /*{...this.props}*/ />
            }
        }
        return (<Item extra={extra} >
            {`${title}(${currentVersion})`}
        </Item>);
    }
}
export default class Setting extends PureComponent {
    doLogout = () => {
        History.push('/');
        AppDispatcher.dispatch({
            type: 'XIEXINLOGOUT',
        });
    }
    changePassword = ()=> {
        openForm('ChangePassWord', -1, 'EDIT');
    }
    render() {
        return (
            <View style={styles.page}>
                <Header title="设置" />
                <View style={styles.content}>
                    <List>
                        <Item arrow="horizontal" onClick={() => { }}>
                            清除缓存
                        </Item>
                        <VersionCheckItem 
                            title="检测更新"
                        />
                        <Item arrow="horizontal" onClick={this.changePassword}>
                            修改密码
                        </Item>
                    </List>
                </View>
                <Button
                    title="退出登录"
                    onPress={this.doLogout}
                />
            </View>
        )
    }
}
