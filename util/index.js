import ProjectCfg from '../config/project';

const currencyData = {
    'CNY': '¥',
    'USD': '$',
    'GBP ': '￡',
    'EURO': '€',
    'JPY': '￥',
};
export default {
    showModal: ()=>{},
    currencyCodeToSign: (code)=> {
        if(!code){
            return '';
        }
        const result = currencyData[code.toUpperCase()];
        return result || code;
    },
    getProjectKey: (v)=>{
        return `${ProjectCfg.sessionKey}_${v}`;
    },
}