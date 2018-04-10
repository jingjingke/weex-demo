export default {
    methods: {
        GET(url, param, callback) {
            //拼接参数
            let str = '?';
            for (let key in param) {
                str += key + '=' + param[key] + '&'
            }
            str = str.substring(0, str.length - 1)
            // 网络数据请求
            let stream = weex.requireModule('stream');
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://www.jingjingke.com/api/' + url + str
            }, callback)
        }
    }
}