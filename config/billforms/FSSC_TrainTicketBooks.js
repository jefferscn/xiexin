export default {
    "formTemplate": "auto",
    "head": {
        "type": "element",
        "elementType": "Header",
        "elementProps": {
            "canBack": true,
            "titleElement": {
                "type": "element",
                "elementType": "FormTitle",
                "elementProps": {
                    "containerStyle": {
                        "alignItems": "center",
                        "justifyContent": "center"
                    }
                }
            }
        }
    },
    "action": {
        "type": "element",
        "elementType": "VisibleRelatedDisabled",
        "elementProps": {
            "yigoid": "EnteyInvoice",
            "element": {
                "type": "element",
                "elementType": "ButtonActionButton",
                "elementProps": {
                    "buttonKey": "EnteyInvoice",
                    "style": {
                        "right": "50%",
                        "transform": "translateX(30px)"
                    }
                }
            }
        }
    },
    "items": [
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": false,
                "headIcon": "",
                "title": "基本信息",
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
                            "FeeTypeID",
                            "ExpenseDate",
                            "PersonnelID",
                            "IsEnterprisesPay",
                            "CurrencyID",
                            "Reason"
                        ]
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
                "title": "抵扣信息",
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
                            "Rate",
                            "TaxAmount",
                            "NoTaxAmount"
                        ]
                    }
                }
            }
        },
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": true,
                "headIcon": "tag",
                "iconStyle": {
                    color: '#0BA194',
                },
                "title": "发票明细",
                "expanded": true,
                "content": {
                    "type": "element",
                    "elementType": "GridView",
                    "elementProps": {
                        "yigoid": "Grid1",
                        "useBodyScroll": true,
                        // "clickMode": "script",
                        // "clickScript": 'if(IsNewOrEdit()){SetPara("resource", 2);} else{SetPara("resource", 3);} Open(Macro_GetBillKeyByInvoiceType(InvoiceType), InvoiceID, "modal", "View");',
                        "hideAction": true,
                        // "removeType": "column",
                        // "removeColumn": "DeleteDtl",
                        "RowElement": {
                            "type": "element",
                            "elementType": "GridRow",
                            "elementProps": {
                                headLeft: [{
                                    "type": "element",
                                    "elementType": "ListText",
                                    "elementProps": {
                                        yigoid: "InvoiceType",
                                        style: {
                                            fontSize: 17.5,
                                            fontFamily: 'PingFangSC-Medium, PingFang SC',
                                            fontWeight: 500,
                                            color: '#333333',
                                        }
                                    }
                                }],
                                headRight: [{
                                    "type": "element",
                                    "elementType": "ButtonClick",
                                    "elementProps": {
                                        yigoid: "DeleteDtl",
                                        children: {
                                            "type": "element",
                                            "elementType": "IconButton",
                                            "elementProps": {
                                                icon: "trash",
                                                style: {
                                                    maxWidth: 30,
                                                },
                                                iconStyle: {
                                                    fontSize: 16,
                                                    color: 'rgb(33, 150, 243)',
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    "type": "element",
                                    "elementType": "ScriptWrap",
                                    "elementProps": {
                                        "script": 'if(IsNewOrEdit()){SetPara("resource", 2);} else{SetPara("resource", 3);} Open(Macro_GetBillKeyByInvoiceType(InvoiceType), InvoiceID, "modal", "View");',
                                        "element": {
                                            "type": "element",
                                            "elementType": "IconButton",
                                            "elementProps": {
                                                icon: "search",
                                                style: {
                                                    maxWidth: 30,
                                                },
                                                iconStyle: {
                                                    fontSize: 16,
                                                    color: 'rgb(33, 150, 243)',
                                                }
                                            }
                                        }
                                    }
                                }],
                                content: {
                                    "type": "element",
                                    "elementType": "FlexBox",
                                    "elementProps": {
                                        items: [
                                            {
                                                "type": "element",
                                                "elementType": "FlexBox",
                                                "elementProps": {
                                                    direction: 'row',
                                                    style: {
                                                        paddingLeft: 12,
                                                        paddingRight: 12,
                                                        paddingTop: 8,
                                                    },
                                                    items: [
                                                        {
                                                            "type": "element",
                                                            "elementType": "NativeText",
                                                            "elementProps": {
                                                                children: '出发:',
                                                                style: {
                                                                    color: '#808A99',
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "ListText",
                                                            "elementProps": {
                                                                yigoid: 'Station_geton',
                                                                style: {
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "NativeText",
                                                            "elementProps": {
                                                                children: '到达:',
                                                                style: {
                                                                    color: '#808A99',
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "ListText",
                                                            "elementProps": {
                                                                yigoid: 'Station_getoff',
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "element",
                                                "elementType": "FlexBox",
                                                "elementProps": {
                                                    direction: 'row',
                                                    style: {
                                                        paddingLeft: 12,
                                                        paddingRight: 12,
                                                        paddingTop: 8,
                                                    },
                                                    items: [
                                                        {
                                                            "type": "element",
                                                            "elementType": "NativeText",
                                                            "elementProps": {
                                                                children: '乘车日期:',
                                                                style: {
                                                                    color: '#808A99',
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "ListText",
                                                            "elementProps": {
                                                                yigoid: 'FSSC_Date',
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "element",
                                                "elementType": "FlexBox",
                                                "elementProps": {
                                                    direction: 'row',
                                                    style: {
                                                        paddingLeft: 12,
                                                        paddingRight: 12,
                                                        paddingTop: 8,
                                                    },
                                                    items: [
                                                        {
                                                            "type": "element",
                                                            "elementType": "NativeText",
                                                            "elementProps": {
                                                                children: '坐席:',
                                                                style: {
                                                                    color: '#808A99',
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "ListText",
                                                            "elementProps": {
                                                                yigoid: 'FSSC_Seat',
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "element",
                                                "elementType": "FlexBox",
                                                "elementProps": {
                                                    direction: 'row',
                                                    style: {
                                                        paddingLeft: 12,
                                                        paddingRight: 12,
                                                        paddingTop: 8,
                                                    },
                                                    items: [
                                                        {
                                                            "type": "element",
                                                            "elementType": "NativeText",
                                                            "elementProps": {
                                                                children: '发票金额:',
                                                                style: {
                                                                    color: '#808A99',
                                                                    paddingRight: 10,
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "type": "element",
                                                            "elementType": "MoneyWithCurrency",
                                                            "elementProps": {
                                                                "currencyField": {
                                                                    "type": "element",
                                                                    "elementType": "SplitText",
                                                                    "elementProps": {
                                                                        "yigoid": "Currency",
                                                                        "style": {
                                                                            "fontSize": 12,
                                                                            "paddingRight": 2,
                                                                            "textAlign": "right"
                                                                        }
                                                                    }
                                                                },
                                                                "moneyField": "FSSC_Total",
                                                                "containerStyle": {
                                                                    "justifyContent": "flex-end",
                                                                    alignItems: 'center',
                                                                    "paddingRight": 0
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                    }
                                },
                            },
                        },
                    }
                },
            }
        }
    ],
    "foot": {
        "type": "element",
        "elementType": "SegementToolbar",
        "elementProps": {

            "ignoreItems": [
                "New",
                "Close"
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