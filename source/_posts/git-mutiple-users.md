---
layout: study
title: 同一台电脑多个Git账号的配置
date: 2017-10-13 20:12:29
tags:
- Study
- Git
---

  在试用Git之前，都是试用的SVN来做代码管理。但Git的强大我就不在赘述，相信大家都深有体会。
  之前总有这样一个问题困扰着我：自己的邮箱申请了GitHub的账号，公司的邮箱申请了个GitOSChina的账号，自己的另外一个邮箱申请了另外一个GitOsChina的账号，就是说现在又2个平台，3个账号了。但是每次都需要重新输入用户名和密码才能完成。困扰了我一段时间，在我忍无可忍之后终于找到了解决方法，如下：

  <!-- more -->

  #### 1. 生成github.com对应的私钥公钥
  执行命令 ``ssh-keygen -t rsa -C email`` 创建github对应的sshkey，命名为id_rsa_github，密码 123456 (可以不填)
  `ssh-keygen -t rsa -C 2535615874@qq.com`
  ![如图](/img/rsa_oschina_rt.png)

  #### 2. 同样的方式生产git.oschina.net的私钥公钥（邮箱地址可以相同可以不同，本文相同）
执行命令`ssh-keygen -t rsa -C email`创建github对应的sshkey，命名为id_rsa_oschina，密码 123456(可以不填)
`ssh-keygen -t rsa -C 2535615874@qq.com`
![如图](/img/rsa_oschina_rt.png)

嗯，懒得写了，直接给参考地址吧。。。

[参考地址](http://www.cnblogs.com/popfisher/p/5731232.html)