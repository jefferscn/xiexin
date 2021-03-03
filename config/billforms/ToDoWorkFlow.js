export default {
    "formTemplate": "listwithquery",
    "refresh": {
        "type": "button",
        "buttonId": "Button1"
    },
    contentStyle: {
        backgroundColor: '#F8F8F8'
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
    queryItems: [{
        text: '单据编号',
        content: {
            "type": "element",
            "elementType": "Text",
            "elementProps": {
                "yigoid": 'NO_NODB4Other',
                "clearButtonMode": true,
                "scanMode": true,
                textStyles: {
                    paddingLeft: 24,
                    paddingRight: 12,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 20,
                },
                layoutStyles: {
                    paddingLeft: 12,
                    marginRight: 12,
                    paddingTop: 8,
                    paddingBottom: 8,
                }
            }
        }
    }, {
        text: '单据类型',
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
                                size: 25,
                                color: '#008CD7',
                                style: {
                                    width: 30,
                                }
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "BooksTypeImage",
                            "elementProps": {
                                yigoid: "formkey",
                                style: {
                                    width: 30
                                }
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "ListText",
                            "elementProps": {
                                yigoid: "FormName",
                                style: {
                                    fontSize: 17.5,
                                    fontFamily: 'PingFangSC-Medium, PingFang SC',
                                    fontWeight: 500,
                                    color: '#333333',
                                }
                            }
                        }
                    ],
                    "headRight": [{
                        "type": "element",
                        "elementType": "ListText",
                        "elementProps": {
                            yigoid: "BillTime",
                            style: {
                                color: '#666666',
                                fontSize: 10,
                            }
                        }
                    }],
                    "content":
                    {
                        "type": "element",
                        "elementType": "TextList",
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
                                    height: 36,
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
