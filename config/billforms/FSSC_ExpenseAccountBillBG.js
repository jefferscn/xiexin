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
                "bookmark": "Status",
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
                            "NO",
                            "BillDate",
                            "Region",
                            "StartDate",
                            "EndDate"
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
                            "PersonnelID",
                            "BillNO"
                        ]
                    }
                }
            }
        },
        {
            "type": "element",
            "elementType": "GridView",
            "elementProps": {
                "showHead": true,
                "yigoid": "Grid1",
                "headTitle": "费用明细",
                "useBodyScroll": true,
                "layoutStyles": {
                    borderRadius: 10,
                    marginTop: 20,
                    marginLeft: 13,
                    marginRight: 13,
                    overflow: 'hidden',
                    boxShadow: '0 3px 3px #888888',
                    backgroundColor: 'white',
                    flexBasis: 'auto',
                },
                "newElement": {
                    "type": "element",
                    "elementType": "NativeButton",
                    "elementProps": {
                        "title": "新增"
                    }
                },
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
                        "moneyField": "ApplyMoney",
                        "containerStyle": {
                            "flex": 1
                        }
                    }
                },
                "rightElement": {
                    "type": "element",
                    "elementType": "MoneyWithCurrency",
                    "elementProps": {
                        "currencyField": {
                            "type": "element",
                            "elementType": "SplitText",
                            "elementProps": {
                                "yigoid": "Currency",
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
                        "moneyField": "SumCost"
                    }
                },
                "centerElement": {
                    "type": "element",
                    "elementType": "FlexBox",
                    "elementProps": {
                        "direction": "row",
                        "style": {
                            "flex": 1
                        },
                        "items": [
                            {
                                "type": "element",
                                "elementType": "FromTo",
                                "elementProps": {
                                    "fromId": {
                                        "type": "element",
                                        "elementType": "SplitText",
                                        "elementProps": {
                                            "yigoid": "StartRegion",
                                            "showIndex": 1,
                                            "emptyStr": "未填",
                                            "style": {
                                                "display": "flex",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "fontSize": 12,
                                                "paddingRight": 4
                                            }
                                        }
                                    },
                                    "toId": {
                                        "type": "element",
                                        "elementType": "SplitText",
                                        "elementProps": {
                                            "yigoid": "EndRegion",
                                            "showIndex": 1,
                                            "emptyStr": "未填",
                                            "style": {
                                                "display": "flex",
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "fontSize": 12,
                                                "paddingRight": 4
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                "detailElement": {
                    "type": "element",
                    "elementType": "FlexBox",
                    "elementProps": {
                        "direction": "row",
                        "style": {
                            "paddingLeft": 12,
                            "alignItems": "center",
                            "height": 30
                        },
                        "items": [
                            {
                                "type": "element",
                                "elementType": "ListText",
                                "elementProps": {
                                    "yigoid": "YGJTCost",
                                    "icon": {
                                        "type": "element",
                                        "elementType": "IconFont",
                                        "elementProps": {
                                            "name": "icon-jiaotong",
                                            "size": 20,
                                            "color": "#008cd7",
                                            "style": {
                                                "paddingRight": 6
                                            }
                                        }
                                    },
                                    "style": {
                                        "flex": 1,
                                        "alignItems": "center",
                                        "display": "flex"
                                    }
                                }
                            },
                            {
                                "type": "element",
                                "elementType": "ListText",
                                "elementProps": {
                                    "yigoid": "YGZSCost",
                                    "icon": {
                                        "type": "element",
                                        "elementType": "IconFont",
                                        "elementProps": {
                                            "name": "icon-jiudian",
                                            "size": 20,
                                            "color": "#008cd7",
                                            "style": {
                                                "paddingRight": 6
                                            }
                                        }
                                    },
                                    "style": {
                                        "flex": 1,
                                        "alignItems": "center",
                                        "display": "flex"
                                    }
                                }
                            },
                            {
                                "type": "element",
                                "elementType": "ListText",
                                "elementProps": {
                                    "yigoid": "YGCYCost",
                                    "icon": {
                                        "type": "element",
                                        "elementType": "IconFont",
                                        "elementProps": {
                                            "name": "icon-canyin",
                                            "size": 20,
                                            "color": "#008cd7",
                                            "style": {
                                                "paddingRight": 6
                                            }
                                        }
                                    },
                                    "style": {
                                        "flex": 1,
                                        "alignItems": "center",
                                        "display": "flex"
                                    }
                                }
                            },
                            {
                                "type": "element",
                                "elementType": "ListText",
                                "elementProps": {
                                    "yigoid": "YGBZCost",
                                    "icon": {
                                        "type": "element",
                                        "elementType": "IconFont",
                                        "elementProps": {
                                            "name": "icon-x-",
                                            "size": 20,
                                            "color": "#008cd7",
                                            "style": {
                                                "paddingRight": 6
                                            }
                                        }
                                    },
                                    "style": {
                                        "flex": 1,
                                        "alignItems": "center",
                                        "display": "flex"
                                    }
                                }
                            }
                        ]
                    }
                },
                "primaryKey": "budgetindex",
                "secondKey": [
                    "remarkdtl"
                ]
            }
        },
        {
            "type": "element",
            "elementType": "Card",
            "elementProps": {
                "collapseable": false,
                "headIcon": "",
                "title": "人员明细",
                "expanded": true,
                "extra": {
                    "type": "element",
                    "elementType": "GridAddRow",
                    "elementProps": {
                        yigoid: "detail",
                        children: {
                            "type": "element",
                            "elementType": "IconButton",
                            "elementProps": {
                                icon: "plus",
                                style: {
                                    width: 24,
                                    fontSize: 16,
                                },
                                iconStyle: {
                                    color: 'rgb(33, 150, 243)',
                                }
                            }
                        }
                    }
                },
                "content": {
                    "type": "element",
                    "elementType": "GridView",
                    "elementProps": {
                        "yigoid": "detail",
                        "useBodyScroll": true,
                        "primaryKey": "Personnel",
                        "secondKey": [
                            "ExplainDtl"
                        ],
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
                "Refresh",
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
