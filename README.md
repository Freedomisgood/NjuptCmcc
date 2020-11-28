<h1 align="center">NjuptCmcc</p>

<h3  align="center">
校园网一键上网脚本
</h3>
<p align="center">
  <a href="https://nymrli.top"><img alt="author" src="https://img.shields.io/badge/Author-Mrli-blue.svg"/></a>  <a href="https://xkcoding.com"><img alt="author" src="https://img.shields.io/badge/License-MIT-{}.svg"/></a>
</p>
<p align="center">
  <a href="https://github.com/Freedomisgood/NjuptCmcc/stargazers"><img alt="star" src="https://img.shields.io/github/stars/Freedomisgood/NjuptCmcc.svg?label=Stars&style=social"/></a>
  <a href="https://github.com/Freedomisgood/NjuptCmcc/network/members"><img alt="star" src="https://img.shields.io/github/forks/Freedomisgood/NjuptCmcc.svg?label=Fork&style=social"/></a>
  <a href="https://github.com/Freedomisgood/NjuptCmcc/watchers"><img alt="star" src="https://img.shields.io/github/watchers/Freedomisgood/NjuptCmcc.svg?label=Watch&style=social"/></a>
</p>


---

现在校园网套餐没有无限流量， 且限速额度也比较小了，因此导致了最近流量一直不够用。切到另外一张卡上，结果还一下子花了10块流量费QAQ。

还是太懒，因为不愿意输入账号密码，所以就算有CMCC也一直不连。这次决定要痛改前非(:smile:拿就继续用脚本吧，因此就写了这么一个脚本

本来是打算写个在手机上的app，然后就发现了AutoJS(打包也是通过AutoJS打的)；而Python的比较容易写，因此先写了Python版的，然后再转移到了JS上；Python相对而言还是比较吃性能的，如果考虑放到路由器上运行的话，可以借鉴：[Go版](https://github.com/gaoffan/autoLogin-NJUPT)、[shell版](https://github.com/X3ZvaWQ/njupt-net-login-bash/blob/master/njupt.sh)

## 说明：

> :star:只适用安卓， 不支持IOS
>
> 用户名(DDDDD)： 一般是学号@运营商，例如B17050322@cmcc。

由于我现在办的是移动卡， 因此代码中现在默认是CMCC， 有需要可以自行修改。(2020年11月10日)

## 原理：

其中代码中wlanuserip、wlanacip、wlanacname的获取有两种方式：①直接模拟JS去6.6.6.6得参数；②shell版本是利用未登录上网时会自动跳转，提取跳转登录页面携带的参数

## 使用：

视频链接： [使用视频教程](./src/howToUse.mp4)。如无法使用，尝试开下无障碍服务。如果还是无效，则反馈issue

<video id="video" controls="" preload="none" poster="https://github.com/Freedomisgood/NjuptCmcc/src/avator.jfif"> <source id="mp4" src="https://github.com/Freedomisgood/NjuptCmcc/src/howToUse.mp4" type="video/mp4"> </video>

Apk下载链接： [NjuptCmcc DownLoad](./src/NjuptCmcc.apk)

---

2020年11月11日： 现已新增通用版本[Github下载：NjuptNet DownLoad](./src/NjuptNet.apk)

蓝奏云下载链接：https://wws.lanzous.com/iTcMIiuo5na  密码:c6xc

注：后缀选项——电信为: @njxy; 移动为: @cmcc; 不填默认为NJUPT。