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

> :star:只适用安卓， 不支持IOS。
> 
> [IOS捷径下载](https://www.icloud.com/shortcuts/00790109d85f458faf05cd5ec85d04a8) @[HANCKH](https://github.com/HANCKH)
>
> 用户名(DDDDD)： 一般是卡号@运营商，例如110201700096900@cmcc, NJUPT的为110201700096900即可

由于我现在办的是移动卡， 因此代码中现在默认是CMCC， 有需要可以自行修改。(2020年11月10日)

## 原理：

其中代码中wlanuserip、wlanacip、wlanacname的获取有两种方式：①直接模拟JS去6.6.6.6得参数；②shell版本是利用未登录上网时会自动跳转，提取跳转登录页面携带的参数

感谢：@[Len](https://github.com/Len-Jon)提出的校园网NJUPT不能登录的问题，以及解决方案。目前[issues#1](https://github.com/Freedomisgood/NjuptCmcc/issues/1): (NJUPT与CMCC访问6.6.6.6返回结果不一样)已解决：当NJUPT登录时通过6.6.6.6网址重定向url提取参数。

	- 在DEBUG过程中，NJUPT账号下线又会自动登录，不太方便操作。补充一个[用户自主服务系统](http://10.10.244.240:8080/Self/dashboard)链接， 进行注销下线

## 使用：

视频链接： [使用视频教程](./src/howToUse.mp4)。如无法使用，尝试开下无障碍服务。如果还是无效，则反馈issue

<video id="video" controls="" preload="none" poster="https://github.com/Freedomisgood/NjuptCmcc/src/avator.jfif"> <source id="mp4" src="https://github.com/Freedomisgood/NjuptCmcc/src/howToUse.mp4" type="video/mp4"> </video>

注：后缀选项——电信为: @njxy; 移动为: @cmcc; 不填默认为NJUPT。

---

## 下载

V2.0.1 蓝奏云下载链接：https://wws.lanzous.com/iSLo2ivy1hg  密码:7jzk

V2.0.2 蓝奏云下载链接【推荐】：https://wws.lanzous.com/iybhPiw1wjc  密码:e0td

- [Github下载：NjuptNet DownLoad](./src/NjuptNet-v2.0.1.apk)

## 更新

2020年11月11日： 现已新增通用版本[Github下载：NjuptNet DownLoad](./src/NjuptNet-v2.0.2.apk)

2020年11月29日：经反馈，发现NJUPT校园网无法登录，做了修改，上传V2.0.1版本

2020年11月29日：@[Len](https://github.com/Len-Jon)对网络选择新增了单选dialog的优化，上传V2.0.2版本



