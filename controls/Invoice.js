import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, PixelRatio } from 'react-native';
import Header from 'yes-framework/controls/Header';
import { ListComponents } from 'yes-comp-react-native-web';
import FormTitle from 'yes-framework/controls/FormTitle';
import Element from 'yes-framework/template/Element';
import InvoiceValidBadge from './InvoiceValidBadge';
import GridView from 'yes-framework/controls/GridView';
import { GridRowWrap } from 'yes';

const styles = StyleSheet.create({
    view1: {
    },
    view2: {

    },
    image: {
        height: 200
    },
    row: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    columnTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    columnTextLabel: {
        color: '#A28A7E',
    },
    columnTextText: {
        color: 'black',
        fontSize: 20,
        paddingTop: 6,
        wordBreak: 'break-all',
    },
    flex1: {
        flex: 1,
    },
    invoiceImage: {
        width: 200,
        height: 100,
    },
    invoiceImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    }
});

class ColumnLabelText extends PureComponent {
    render() {
        const { style, yigoid, label } = this.props;
        return (
            <View style={[styles.columnTextContainer, style]}>
                <Text style={[styles.columnTextLabel]}>{label}</Text>
                <ListComponents.ListText style={styles.columnTextText} yigoid={yigoid} emptyStr="" />
            </View>
        )
    }
}

PixelRatio.getPixelSizeForLayoutSize

class InvoiceRow extends PureComponent {
    render() {
        const { row } = this.props;
        return (<View style={styles.row}>
            {
                row.map(item => {
                    if (item.type === 'element') {
                        return <Element style={styles.flex1} meta={item} />
                    }
                    return <ColumnLabelText style={styles.flex1} yigoid={item.key} label={item.label} />
                })
            }
        </View>);
    }
}

/**
 * 用于显示表格的行
 */
@GridRowWrap
class InvoiceGridRow extends PureComponent {
    render() {
        const { rows } = this.props;
        return (
            <View style={styles.view2}>
                {
                    rows.map((row) => (
                        <InvoiceRow row={row} />
                    ))
                }
            </View>
        )
    }
}

export default class Invoice extends PureComponent {
    static defaultProps = {
        imageField: 'SingleBillPictures2',
    }
    render() {
        const { invoiceImage, imageField, rows, style } = this.props;
        return (
            <View style={[styles.container, style]}>
                <View style={styles.view1}>
                    <ListComponents.ListImage
                        h={100}
                        w={200}
                        style={styles.image}
                        yigoid={imageField} />
                </View>
                <View style={styles.view2}>
                    {invoiceImage ? <View style={styles.invoiceImageContainer}><Image source={invoiceImage} style={styles.invoiceImage} /></View> : null}
                    {
                        rows.map((row) => {
                            if (row.type === 'grid') {
                                return <GridView useBodyScroll yigoid={row.yigoid} RowElement={<InvoiceGridRow rows={row.rows} />} />
                            }
                            return <InvoiceRow row={row} />
                        })
                    }
                </View>
                <InvoiceValidBadge yigoid="Validation_Code" />
            </View>
        )
    }
}
