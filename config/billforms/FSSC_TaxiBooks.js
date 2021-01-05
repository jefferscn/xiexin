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
                            "SourcesOfBooks",
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
                "title": "发票明细",
                "expanded": true,
                "extra": {
                    "type": "element",
                    "elementType": "GridRowCountLimit",
                    "elementProps": {
                        yigoid: "Grid1",
                        sizeLimit: 1,
                        element: {
                            "type": "element",
                            "elementType": "ButtonClick",
                            "elementProps": {
                                yigoid: 'EnteyInvoice',
                                element: {
                                    "type": "element",
                                    "elementType": "IconButton",
                                    "elementProps": {
                                        title: '添加',
                                        icon: "plus",
                                        style: {
                                            maxWidth: 50,
                                            fontSize: 16,
                                        },
                                        textStyle: {
                                            color: 'rgb(33, 150, 243)',
                                            paddingLeft: 6,
                                        },
                                        iconStyle: {
                                            color: 'rgb(33, 150, 243)',
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "content": {
                    "type": "element",
                    "elementType": "GridView",
                    "elementProps": {
                        "yigoid": "Grid1",
                        "useBodyScroll": true,
                        "hideAction": true,
                        "removeType": "column",
                        "removeColumn": "DeleteDtl",
                        "headExtra": {
                            "type": "element",
                            "elementType": "MoneyWithCurrency",
                            "elementProps": {
                                "currencyField": {
                                    "type": "element",
                                    "elementType": "SplitText",
                                    "elementProps": {
                                        "yigoid": "CurrencyID",
                                        "style": {
                                            "display": "flex",
                                            "justifyContent": "center",
                                            "alignItems": "center",
                                            "fontSize": 12,
                                            "color": "green",
                                            "paddingRight": 4
                                        }
                                    }
                                },
                                "moneyField": "TotalMoney",
                                "containerStyle": {
                                    "flex": 1
                                }
                            }
                        },
                        "detailElement": {
                            "type": "element",
                            "elementType": "ScriptWrap",
                            "elementProps": {
                                "script": 'if(IsNewOrEdit()){SetPara("resource", 2);} else{SetPara("resource", 3);} Open(Macro_GetBillKeyByInvoiceType(InvoiceType), InvoiceID, "modal", "View");',
                                "element": {
                                    "type": "element",
                                    "elementType": "NativeButton",
                                    "elementProps": {
                                        "title": "打开发票"
                                    }
                                }
                            }
                        },
                        "primaryKey": "FSSC_Place",
                        "secondKey": [
                            {
                                "type": "element",
                                "elementType": "SplitText",
                                "elementProps": {
                                    "yigoid": "FSSC_Date",
                                    "style": {
                                        "fontSize": 12,
                                        "paddingTop": 12,
                                        "textAlign": "right"
                                    }
                                }
                            }
                        ],
                        "tertiaryKey": [
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
                                        "paddingBottom": 6,
                                        "justifyContent": "flex-end",
                                        "paddingRight": 0
                                    }
                                }
                            }
                        ]
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
