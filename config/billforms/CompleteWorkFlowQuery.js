export default {
    "formTemplate": "modal",
    "content": {
        "type": "element",
        "elementType": "ColumnView",
        "elementProps": {
            "items": [
                {
                    "type": "element",
                    "elementType": "NativeText",
                    "elementProps": {
                        "children": "单据状态",
                        style: {
                            textAlign: 'left',
                            paddingTop: 8,
                            paddingBottom: 8,
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "SegementCombobox",
                    "elementProps": {
                        "yigoid": "BillStatus_NODB4Other"
                    }
                },
                {
                    "type": "element",
                    "elementType": "NativeText",
                    "elementProps": {
                        "children": "单据金额",
                        style: {
                            textAlign: 'left',
                            paddingTop: 8,
                            paddingBottom: 8,
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "DecimalFromTo",
                    "elementProps": {
                        fromId: 'MinAmount_NODB4Other',
                        toId: 'MaxAmount_NODB4Other',
                        fromPlaceholder: '最低金额',
                        toPlaceholder: '最高金额',
                    }
                },
                {
                    "type": "element",
                    "elementType": "NativeText",
                    "elementProps": {
                        "children": "单据日期",
                        style: {
                            textAlign: 'left',
                            paddingTop: 8,
                            paddingBottom: 8,
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "DateFromTo",
                    "elementProps": {
                        fromId: 'StartTime_NODB4Other',
                        fromPlaceholder: '起始日期',
                        toPlaceholder: '结束日期',
                        toId: 'EndTime_NODB4Other'
                    }
                },
                {
                    "type": "element",
                    "elementType": "NativeText",
                    "elementProps": {
                        "children": "事由",
                        style: {
                            textAlign: 'left',
                            paddingTop: 8,
                            paddingBottom: 8,
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "TextArea",
                    "elementProps": {
                        yigoid: 'Cause_NODB4Other',
                        placeholder: '请输入事由查询'
                    }
                }
            ]
        }
    },
    "title": "筛选",
    "maskClosable": true,
    "actions": [{
        "text": "查询",
        "yigoid": "Button1"
    }]
}