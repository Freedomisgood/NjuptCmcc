/**
 * @Author: mrli
 * @Date: 2020年11月9日
 */

const storageName = "njuptCmcc_nymrli.top";

var headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Origin': 'http://p.njupt.edu.cn',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
};


var data = {
    // "DDDDD": ",0,*@cmcc",
    // "upass": "*",
    "R1": "0",
    "R2": "0",
    "R3": "0",
    "R6": "0",
    "para": "00",
    "0MKKey": "123456",
    "buttonClicked": "",
    "redirect_url": "",
    "err_flag": "",
    "username": "",
    "password": "",
    "user": "",
    "cmd": "",
    "Login": "",
    "v6ip": ""
};

var params = {
    "c": "ACSetting",
    "a": "Login",
    "protocol": "http:",
    "hostname": "p.njupt.edu.cn",
    "iTermType": "1",
    "wlanacname": "XL-BRAS-SR8806-X",
    "mac": "00-00-00-00-00-00",
    "enAdvert": "0",
    "queryACIP": "0",
    "loginMethod": "1"
    // "wlanuserip": "10.163.137.68",
    // "wlanacip": "10.255.252.150",
    // "ip": "10.163.137.68",
};

/**
 * 传入对象返回url参数
 * @param {Object} data {a:1}
 * @returns {string}
 */
function getParam(data){
    let url = '';
    for(var k in data){
        let value = data[k] !==undefined ? data[k] : '';
        url += '&' + k + '=' + value
        // autoJS不支持下面的语法
        // url += '&' + k + '=' +  encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
}

/**
 * 将url和参数拼接成完整地址
 * @param {string} url url地址
 * @param {Json} data json对象
 * @returns {string}
 */
function getUrl(url, data){
    //看原始url地址中开头是否带?，然后拼接处理好的参数
    return url += (url.indexOf('?') < 0 ? '?' : '') + this.getParam(data)
}
 

// url参数解析
function getUrlkey(url) {
    var params = {};
    var urls = url.split("?");                  
    // console.log('1_分割url:', urls)
    var arr = urls[1].split("&");               
    // console.log('2_分割urls[1]:', arr)
    for (var i = 0, l = arr.length; i < l; i++) {
      var a = arr[i].split("=");                
    //   console.log('3_遍历 arr 并分割后赋值给a:', a[0], a[1])
      params[a[0]] = a[1];                      
    //   console.log('4_a给params对象赋值:', params)
    }                                           
    console.log('5_结果:', params)
    return params;
}


function doConfig(){
    var url = "http://6.6.6.6/";
    var response = http.get(url);
    if (response.statusCode == 200){
        var html = response.body.string();
        var url = html.match("location.href=\\\"(http://.*)\\\"")[0]
        var cfg = getUrlkey(url);
        return cfg;
    }else{
        toast("Unknown Error~")
    }
};



function getUserConfig(){
    const mainkey = "DDDDD";
    var ctx = storages.create(storageName);
    var userConfig = {}
    if ( !ctx.contains(mainkey) ) {
        var user = rawInput("请输入CMCC账号(校园卡号):");
        var pwd = rawInput("请输入密码(默认身份证后6位):")
        toastLog("你输入的账号为: " + user)
        var DDDDD = ",0," + user + "@cmcc";
        // log("存入的值为: ", DDDDD);
        if (user != null && pwd != null){
            ctx.put("DDDDD", DDDDD);
            ctx.put("upass", pwd);
        }else{
            toastLog("账号密码无效!");
            exit();
        }
    }
    userConfig["DDDDD"] = ctx.get("DDDDD");
    userConfig["upass"] = ctx.get("upass");
    return userConfig;
 }
 


function login(cfg, userConfig){
    var finishParams = Object.assign(cfg, params);
    var finishData = Object.assign(data, userConfig);
    let newUrl = getUrl("http://p.njupt.edu.cn:801/eportal/", finishParams);
    // log(finishParams);
    // log(finishData);
    http.post(newUrl, finishData, {
        headers: headers
    }, function(res, err){
            if(err){
                toast("登录失败!~");
                return;
            }
            // log(res.body.string())
            var redirect_url = res.url.toString();
            log(redirect_url);
            var res = redirect_url.match("\\d\.htm");
            var login = res[0];

            if ( login == "3.htm" ){
                toast("登录成功!~");
            }else if (login == "2.htm"){
                // var ip = redirect_url.match("ACLogOut=5&ErrorMsg=Mw%3D%3D");
                var ipLogin = redirect_url.match("ACLogOut=5&ErrorMsg=Mg%3D%3D");
                var outTime = redirect_url.match("ACLogOut=5&ErrorMsg=QXV0aGVudGljYXRpb24gRmFpbCBFcnJDb2RlPTE2");
                var wrongAccount = redirect_url.match("ACLogOut=5&ErrorMsg=dXNlcmlkIGVycm9yMQ%3D%3D")
                if (ipLogin != null) {
                    toast("登录失败, IP终端已在线!~");
                } else if (outTime != null ){
                    toast("登录失败, 不在运营商服务时间内!~");
                } else if (wrongAccount != null){
                    toast("登录失败, 账号密码有误, 请重新输入账号!~");
                    storages.remove(storageName)
                }else{
                    toast("登录失败, 检查是否已连接CMCC!~");
                }
            }else{
                toast("Unknown error!~");
            }
        }
    );
};



// storages.remove("njuptCmcc_nymrli.top")
log("\n/**\n * @author: Mrli\n **/");
var userConfig = getUserConfig();
var cfg = doConfig();
login(cfg, userConfig);