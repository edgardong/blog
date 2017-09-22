---
title: 利用Hexo和GitHub来搭建自己的博客系统
date: 2017-09-20 16:22:41
tags:
- 随笔
categories:
- hexo-blog
---

* Node安装
* Git安装
* 开始了...

<!-- more -->


#### Node安装
 * 到NodeJs的[官网](http://nodejs.cn/download/)下载最新的Nodejs安装包，然后一直“下一步”即可安装；
 * 使用``Win+R``组合键调出运行，然后输入``CMD``，然后输入``node -v`` 出现版本号(如下图)，说明安装成功；
   ![Node 版本](/img/nodev.png)

#### Git安装
 * 到[Git官网](https://git-for-windows.github.io/)下载GitBush，然后“下一步”安装；

#### Hexo安装
 * 查看[Hexo官网](https://hexo.io/zh-cn/docs/)下Hexo的安装步骤：
 * 运行``Win+R``组合键调用运行，然后输入`CMD`，输入命令``npm install hexo-cli -g``，使用NPM来安装hexo脚手架；
 * 同样，安装完成后输入``hexo -v``校验是否安装成功(如下图)
   ![Hexo 版本](/img/hexoV.png)

#### 开始搭建
 * 运行``Win+R``组合键调用运行，然后输入`CMD`，输入命令CD到指定目录；然后执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。

  ```` bash
     hexo init <folder>
     cd <folder>
     npm install
  ````

  然后运行``hexo g`` 然后找到public文件夹，把里面的所有文件上传到GitHub上，
  最后，找到GitHub的仓库里面的Setting开启Pages，然后在浏览器里面输入https://(yougitname).github.io.即可。
