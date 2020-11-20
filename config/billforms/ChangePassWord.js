export default {
    formTemplate: 'normal',
    head: {
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
    items: ['OPERATOR_NAME', 'PASSWORD', 'NEW_PASSWORD', 'CONFIRM_PASSWORD'],
    "foot": {
        "type": "element",
        "elementType": "SegementButtons",
        "elementProps": {
            items: [{
                key: 'OK',
                text: '修改'
            },{
                key: 'Cancel',
                text: '取消'
            }]
        }
    }
}
