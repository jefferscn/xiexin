export default {
    "formTemplate": "list",
    "refresh": {
        "type": "button",
        "buttonId": "Query"
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
    "action": {
        "type": "element",
        "elementType": "OpenFormActionButton",
        "elementProps": {
            "formKey": "FSSC_BooksCreate",
            "modal": true,
            "oid": "-1",
            "style": {
                "right": "50%",
                "transform": "translateX(30px)"
            }
        }
    },
    "list": {
        "type": "element",
        "elementType": "GridView",
        "elementProps": {
            "yigoid": "Grid1",
            "hideAction": true,
            "primaryKey": "BooksNO",
            "clickMode": "button",
            "clickYigoId": "BooksNO",
            "removeable": false,
            "secondKey": [
                "DeptID2"
            ],
            "style": {
                "marginLeft": 12,
                "flex": 1
            },
            "tertiaryKey": [
                "PersonnelID2",
                {
                    "type": "element",
                    "elementType": "CheckboxLabel",
                    "elementProps": {
                        "yigoid": "isreimbursement",
                        "trueLabel": "已报销",
                        "style": {
                            "color": "orangered",
                            "fontSize": 12,
                            "display": "flex",
                            "alignItems": "center",
                            "paddingLeft": 12
                        }
                    }
                }
            ],
            "leftElement": {
                "type": "element",
                "elementType": "BooksTypeImage",
                "elementProps": {
                    "yigoid": "BooksType",
                    "style": {
                        "paddingRight": 8,
                        "justifyContent": "center"
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
                                "yigoid": "BooksDate",
                                "style": {
                                    "fontSize": 12,
                                    "paddingTop": 8,
                                    "textAlign": "right"
                                }
                            }
                        },
                        {
                            "type": "element",
                            "elementType": "ListText",
                            "elementProps": {
                                "yigoid": "TotalMoney",
                                "style": {
                                    "textAlign": "right",
                                    "paddingBottom": 4
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    "controls": {
        "SaGrade": {
            "control": "Rating",
            "visible": true
        }
    }
}
