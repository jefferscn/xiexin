export default {
    "formTemplate": "normal",
    "blockHardBack": true,
    items: ['NEW_PASSWORD','Confirm_Paeeword'],
    "head": {
        "type": "element",
        "elementType": "Header",
        "elementProps": {
            "canBack": false,
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
    "foot": {
        "type": "element",
        "elementType": "SegementButtons",
        "elementProps": {
            items: [{
                key: 'OK',
                text: '重置',
            }]
        }
    },
}
