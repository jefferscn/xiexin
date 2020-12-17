export default {
    "formTemplate": "listwithquery",
    "refresh": {
        "type": "button",
        "buttonId": "Button1"
    },
    queryId: 'Button1',
    "head": {
        "type": "element",
        "elementType": "Header",
        "elementProps": {
            "canBack": true,
            "headerStyle": {
                "borderBottomWidth": 0
            },
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
    queryItems: [
        {
            text: '单据名称',
            content: {
                "type": "element",
                "elementType": "QueryContainer",
                "elementProps": {
                    "supportClear": true,
                    "clearControls": ['BillType_NODB4Other'],
                    "content": {
                        "type": "element",
                        "elementType": "PopoverCombobox",
                        "elementProps": {
                            "yigoid": 'BillType_NODB4Other',
                            inline: true,
                        }
                    }
                }
            }
        }, {
            text: '制单人',
            content: {
                "type": "element",
                "elementType": "QueryContainer",
                "elementProps": {
                    "supportClear": true,
                    "clearControls": ['Creator_NODB4Other'],
                    "content": {
                        "type": "element",
                        "elementType": "ChainDict",
                        "elementProps": {
                            "yigoid": 'Creator_NODB4Other',
                            inline: true,
                            hideTitle: true,
                        }
                    }
                }
            }
        }],
    advanceQuery: {
        type: 'button',
        yigoid: 'Button2'
    },
    "list": {
        "type": "element",
        "elementType": "GridView",
        "elementProps": {
            "yigoid": "Grid1",
            "hideAction": true,
            "primaryKey": "FormName",
            "removeable": false,
            "clickMode": "dblclick",
            "secondKey": [
                "Cause"
            ],
            "style": {
                "flex": 1,
                backgroundColor: '#F8F8F8'
            },
            rowStyle: {
                height: 76
            },
            "tertiaryKey": [
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "NO",
                        "template": "单据编号:${displayValue}",
                        "style": {
                            "whiteSpace": "nowrap",
                            "overflow": 'hidden',
                            "color": "rgba(0,0,0,0.6)",
                            fontSize: 12,
                        }
                    }
                }
            ],
            "leftElement": {
                "type": "element",
                "elementType": "BooksTypeImage",
                "elementProps": {
                    yigoid: "formkey",
                    style: {
                        paddingRight: 12,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }
            },
            "rightElement": {
                "type": "element",
                "elementType": "FlexBox",
                "elementProps": {
                    "direction": "column",
                    "style": {
                        "justifyContent": "space-between",
                        "paddingRight": 8,
                        "marginLeft": 8
                    },
                    "items": [
                        {
                            "type": "element",
                            "elementType": "SplitText",
                            "elementProps": {
                                "yigoid": "FinishTime",
                                "style": {
                                    "fontSize": 12,
                                    "textAlign": "right"
                                }
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "MoneyWithCurrency",
                            "elementProps": {
                                moneyField: 'Money',
                                currencyField: 'Currency',
                                showCurrencySign: true,
                                containerStyle: {
                                    paddingRight: 0,
                                    justifyContent: 'flex-end',
                                },
                                currencyStyle: {
                                    color: '#F4333C',
                                    fontSize: 16,
                                },
                                moneyStyle: {
                                    color: '#F4333C',
                                    fontSize: 16,
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    "controls": {
    }
}
