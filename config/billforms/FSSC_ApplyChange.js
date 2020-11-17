import ExpenseImage from '../../res/expense.png';

export default {
    "formTemplate": "auto",
    "head": {
        "type": "element",
        "elementType": "Header",
        "elementProps": {
            "canBack": true,
            "mode": "light",
            "transparent": true,
            "headerStyle": {
                "border": 0,
            },
            title: '招待费申请变更单' 
        }
    },
    "action": {
        "type": "element",
        "elementType": "GridActionButton",
        "elementProps": {
            "yigoid": "Grid1",
            "style": {
                "right": "50%",
                "transform": "translateX(30px)"
            }
        }
    },
    backgroundImg: ExpenseImage,
    "items": [
        {
            "type": "element",
            "elementType": "ExpenseAccountBillCard",
            "elementProps": {
                "applyMoneyField": "Amount",
                "deptField": "ApplyDaptID",
            }
        },
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": false,
                "headIcon": "",
                "title": "关联申请单",
                "yigoid": "Button1",
                "expanded": true,
                "content": {
                    "type": "element",
                    "elementType": "CellLayoutTemplate",
                    "elementProps": {
                        "textStyle": {
                            "textAlign": "right",
                            "justifyContent": "flex-end"
                        },
                        "titleStyle": {
                            "justifyContent": "flex-start",
                            "fontSize": "15",
                            "color": "#666666"
                        },
                        "layoutStyle": {
                            "justifyContent": "flex-end"
                        },
                        "items": [
                            "ApplyCode",
                            "CompanyCodeID",
                            "PersonnelID",
                            "ApplyOrgID",
                            "Amount",
                            "ApplyDaptID"
                        ]
                    }
                }
            }
        },
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": false,
                "headIcon": "",
                "title": "可变更内容",
                "expanded": true,
                "content": {
                    "type": "element",
                    "elementType": "CellLayoutTemplate",
                    "elementProps": {
                        items: ['Currency','UndertakeDeptID','ReceptionType1','ReceptionTime1', 'ReceptionMan1','ReceptionName1','ReceptionPhone1', 'Explain']
                    }
                }
            }
        },
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": true,
                "headIcon": "",
                "title": "招待人明细",
                "expanded": true,
                "content": {
                    "type": "element",
                    "elementType": "GridView",
                    "elementProps": {
                        "useBodyScroll": true,
                        yigoid: 'Grid1',
                        "primaryKey": 'Guest',
                        "secondKey": ['GuestOrg', 'GuestJob']
                    }
                }
            }
        }
    ],
    "foot": {
        "type": "element",
        "elementType": "SegementToolbar",
        "elementProps": {
            "ignoreItems": [
                "New",
                "Close",
                "Refresh"
            ],
            "captionMapping": {
                "发送PDF文件至邮箱": "封面打印",
                "撤销已提交审批": "撤销"
            }
        }
    },
    "controls": {
    }
}
