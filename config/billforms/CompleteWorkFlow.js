export default {
    "formTemplate": "list",
    "refresh": {
        "type": "button",
        "buttonId": "Button1"
    },
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
    "filterBlock": {
        "type": "element",
        "elementType": "FilterBlock",
        "elementProps": {
            "filterItems": [
                {
                    "type": "element",
                    "elementType": "PopoverCombobox",
                    "elementProps": {
                        "type": "popup",
                        "yigoid": "BillType_NODB4Other",
                        "placeholder": "类型",
                        "layoutStyles": {
                            "justifyContent": "center"
                        },
                        "textStyles": {
                            "fontSize": 11
                        },
                        "style": {
                            "flex": 1
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "PopoverCombobox",
                    "elementProps": {
                        "type": "popup",
                        "yigoid": "IsLinked_NODB4Other",
                        "placeholder": "状态",
                        "layoutStyles": {
                            "justifyContent": "center"
                        },
                        "textStyles": {
                            "fontSize": 11
                        },
                        "style": {
                            "flex": 1
                        }
                    }
                },
                {
                    "type": "element",
                    "elementType": "DateRangeSelect",
                    "elementProps": {
                        "startDateField": "StartDate_NODB4Other",
                        "endDateField": "EndDate_NODB4Other",
                        "placeholder": "期间",
                        "value": "last week",
                        "style": {
                            "flex": 1,
                            "alignItems": "center",
                            "justifyContent": "center"
                        },
                        "openIconStyle": {
                            "color": "#3D8AD0"
                        },
                        "openTextStyle": {
                            "color": "#3D8AD0"
                        }
                    }
                }
            ],
            "style": {
                "height": 45
            },
            "hasMore": false,
            "queryButton": "Query"
        }
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
                "marginLeft": 12,
                "flex": 1
            },
            "tertiaryKey": [
                {
                    "type": "element",
                    "elementType": "ListText",
                    "elementProps": {
                        "yigoid": "NO",
                        "template": "单据编号:${displayValue}"
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
