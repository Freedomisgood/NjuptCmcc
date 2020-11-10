import re
from urllib.parse import parse_qs, urlsplit

import requests


def getURL():
    try:
        response = requests.get("http://6.6.6.6/", timeout=3)
        content = response.text
        url = re.search("location.href=\\\"(http://.*)\\\"", content)
    except requests.exceptions.ConnectTimeout:
        print("已登陆~请勿重复登录")
        exit(0)
    else:
        return url.group(1)


def getConfig(url):
    param = urlsplit(url).query
    return parse_qs(param)


headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Origin': 'http://p.njupt.edu.cn',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}


def getDataParams(cfg: dict, account: dict):
    params = (
        ('c', 'ACSetting'),
        ('a', 'Login'),
        ('protocol', 'http:'),
        ('hostname', 'p.njupt.edu.cn'),
        ('iTermType', '1'),
        ('wlanuserip', cfg.get("wlanuserip")),
        ('wlanacip', cfg.get("wlanacip")),
        ('wlanacip', ''),
        ('wlanacname', cfg.get("wlanacname")),
        ('mac', '00-00-00-00-00-00'),
        ('ip', cfg.get("wlanuserip")),
        ('enAdvert', '0'),
        ('queryACIP', '0'),
        ('loginMethod', '1'),
    )

    data = {
        'DDDDD': ',0,{username}@cmcc'.format(username=account.get('user')),
        'upass': '{password}'.format(password=account.get('pwd')),
        'R1': '0',
        'R2': '0',
        'R3': '0',
        'R6': '0',
        'para': '00',
        '0MKKey': '123456',
        'buttonClicked': '',
        'redirect_url': '',
        'err_flag': '',
        'username': '',
        'password': '',
        'user': '',
        'cmd': '',
        'Login': '',
        'v6ip': ''
    }

    return data, params


def Login(account: dict):
    url = getURL()
    print(url)
    cfg = getConfig(url)
    data, params = getDataParams(cfg, account)
    response = requests.post('http://p.njupt.edu.cn:801/eportal/', headers=headers, params=params, data=data)
    if ( response.status_code == 200):
        html = response.text
        if re.search("认证成功页", html):
            print("登录成功~")
        else:
            print("登录失败~密码错误~")
    else:
        print("登录失败, Unknown Error")


if __name__ == "__main__":
    user = input("请输入CMCC账号(校园卡号):")
    pwd = input("请输入密码(默认身份证后6位):")
    account = {'user': user, 'pwd': pwd}
    Login(account)
 