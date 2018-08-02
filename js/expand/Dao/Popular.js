import HttpUtils from '../../utils/HttpUtils'

export default class PopularDao {
    /**
     *
     * @param url
     * @param params
     * @returns {null}
     */
    static getDataByGet(url,params){

        // url 是必选项所以要验证是否为空
        if(!url){
            alert(" 请检查getDataByGet 方法url参数是否填写！")
            return null
        }
        let Url = [];
        // 如果参数没有
        if(typeof params === 'undefined'){
            Url = url;
        }else {
            if(!(params instanceof Object) || params instanceof Array){
                alert("参数值必须是对象类型！")
                return null
            }

            for(var item in params){
                Url.push(item+"="+params[item])
            }
            Url = url+'?'+Url.join('&')
        }
        return HttpUtils.get(Url)
    }
}