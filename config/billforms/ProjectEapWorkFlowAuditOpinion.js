export default {
    "formTemplate": "modal",
    "content": {
        "type": "element",
        "elementType": "TextArea",
        "elementProps": {
            "yigoid": "TextAreaAudit",
        }
    },
    "title": "审批意见",
    "maskClosable": true,
    "actions": [{
        "text": "取消",
        "yigoid": "ButtonCancel"
    },{
        "text": "确认",
        "yigoid": "ButtonAudit"
    }]
}