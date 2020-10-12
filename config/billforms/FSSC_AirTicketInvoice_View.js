import invoiceImage from '../../res/invoice.png';

export default {
    formTemplate: "modal",
    popup: true,
    content: {
        type: "element",
        elementType: "Invoice",
        elementProps: {
            invoiceImage: invoiceImage,
            rows: [{
                type: 'grid',
                yigoid: 'Grid1',
                rows: [
                    [{
                        key: 'cell1',
                        label: '出发'
                    },
                    {
                        "type": "element",
                        "elementType": "AwesomeFontIcon",
                        "elementProps": {
                            name: "long-arrow-right",
                            size: 40,
                        }
                    },
                    {
                        key: 'cell2',
                        label: '到达'
                    }], [
                        {
                            key: 'cell3',
                            label: '航班号'
                        },
                        {
                            key: 'cell7',
                            label: '承运人'
                        },
                        {
                            key: 'cell6',
                            label: '等级'
                        }
                    ],
                ]
            },
            [
                {
                    key: 'User_name',
                    label: '姓名'
                },
                {
                    key: 'FSSC_Total',
                    label: '金额'
                },
                {
                    key: 'FSSC_Date',
                    label: '日期'
                }
            ],

            [
                {
                    key: 'Serial_number',
                    label: '发票码'
                }
            ]
            ]
        }
    }
}
