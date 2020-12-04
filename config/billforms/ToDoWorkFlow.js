export default {
    "formTemplate": "list",
    "refresh": {
        "type": "button",
        "buttonId": "Button1"
    },
    contentStyle: {
        backgroundColor: '#F8F8F8'
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
            "queryButton": "Button1"
        }
    },
    "foot": {
        "type": "element",
        "elementType": "GridBatchOperate",
        "elementProps": {
            "yigoid": "Grid1",
            "optKey": "BatchAudit",
            "autoHide": false,
            "supportSelectAll": true,
            "title": "审批"
        }
    },
    "list": {
        "type": "element",
        "elementType": "GridView",
        "elementProps": {
            "yigoid": "Grid1",
            "hideAction": true,
            "removeable": false,
            "clickMode": 'dblclick',
            "RowElement": {
                "type": "element",
                "elementType": "GridRow",
                "elementProps": {
                    "showSeperator": true,
                    seperatorStyle: {
                        height: 8,
                        backgroundColor: '#F8F8F8',
                    },
                    headStyle: {
                        height: 40,
                    },
                    footStyle: {
                        borderTopWidth: 1,
                        borderTopColor: 'lightgrey'
                    },
                    "headLeft": [
                        {
                            "type": "element",
                            "elementType": "GridSelect",
                            "elementProps": {
                                yigoid: "isSelect",
                                onlyShow: false,
                                size: 22,
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "BooksTypeImage",
                            "elementProps": {
                                yigoid: "formkey"
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "Text",
                            "elementProps": {
                                yigoid: "FormName"
                            }
                        }
                    ],
                    "headRight": [{
                        "type": "element",
                        "elementType": "ListText",
                        "elementProps": {
                            yigoid: "BillTime"
                        }
                    }],
                    "content":
                    {
                        "type": "element",
                        "elementType": "ControlList",
                        "elementProps": {
                            template: '${caption}:${displayValue}',
                            style: {
                                paddingLeft: 12
                            },
                            items: [
                                "Dept",
                                "Creator",
                                "Cause",
                                // {
                                //     "type": "element",
                                //     "elementType": "ListText",
                                //     "elementProps": {
                                //         yigoid: 'Creator'
                                //     }
                                // },
                                // {
                                //     "type": "element",
                                //     "elementType": "ListText",
                                //     "elementProps": {
                                //         yigoid: 'Cause'
                                //     }
                                // },
                            ]
                        }
                    },
                    "footLeft": [
                        {
                            "type": "element",
                            "elementType": "MoneyWithCurrency",
                            "elementProps": {
                                moneyField: 'Money',
                                currencyField: 'Currency',
                                showCurrencySign: true,
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
                    ],
                    "footRight": [
                        {
                            "type": "element",
                            "elementType": "SegementButtons",
                            "elementProps": {
                                containerStyle: {
                                    width: 120,
                                },
                                items: [{
                                    key: 'RevokeButton',
                                    text: '驳回'
                                }, {
                                    key: 'CommitButton',
                                    text: '同意'
                                }]
                            }
                        }
                    ]
                }
            },
            "style": {
                "marginLeft": 12,
                "marginTop": 12,
                "marginRight": 12,
                "flex": 1,
            },
        }
    },
    "controls": {
        "SaGrade": {
            "control": "Rating",
            "visible": true
        }
    }
}
