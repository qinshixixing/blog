---
title: 手动编译ruby时遇到的坑
introduction: 由于搭建jekyll需要用到ruby，自己以前却没有用过，所以自己装了一遍，当中碰到一些坑，在此记录一下……
---

由于最近搭建jekyll博客想先在本地调试，而jekyll又基于ruby和gem。遂根据官网文档里运行gem install jekyll，装到一半提示我说ruby版本过低，至少要2.1版本的。mac中自带的ruby是2.0的，不能满足要求，于是准备自己装一个。

还是有很多方法装ruby的，比如mac上有homebrew和rvm。但是我不想用这些，也没有装这些，决定自己手动编译。

在[官网](http://www.ruby-lang.org/zh_cn/documentation/installation/)下好源码后在源码目录下按照以下步骤编译：

```shell script
$ ./configure
$ make
$ sudo make install
```

可以顺利安装，但是进行gem install jekyll的又出现报错，提示没有openssl支持，需要重新编译。可是mac上明明已经安装了openssl。后来查了以下资料，发现是需要openssl相关的库来编译，于是需要自己下openssl再编译（这些在homebrew这些工具里应该会自动完成的，自己手动编译ruby时才会出现）。

于是又去openssl[官网](https://www.openssl.org/source/)下好openssl最新版的源码编译。由于macOS是64位系统，所以编译成64位的，在源码目录下运行如下命令：

```shell script
$ ./configure darwin64-x86_64-cc
```

编译好后在/usr/local目录下会有一个名字为ssl的目录，这个正是我们需要在编译ruby时设置的ssl路径，于是重新编译ruby：

```shell script
$ ./configure  --with-openssl-dir=/usr/local/ssl
$ make
$ sudo make install
```

编译成功后，运行：

```shell script
$ gem install jekyll
```

jekyll会成功安装，可以愉快地搭建博客了。

注：mac或linux下务必注意$PATH变量的值里面，/usr/local/bin一定要在/usr/bin前面。自己安装的软件会在/usr/local/bin目录下，而/usr/bin是系统自己调用的二进制文件。这样在终端输入ruby指令的时候，就不是系统自带那个老版本的ruby了，而是调用自己刚才装的新版ruby。如图：

```shell script
$ ruby -v
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]
$ /usr/bin/ruby -v
ruby 2.0.0p648 (2015-12-16 revision 53162) [universal.x86_64-darwin16]
$ /usr/local/bin/ruby -v
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Server.app/Contents/ServerRoot/usr/bin:/Applications/Server.app/Contents/ServerRoot/usr/sbin:/Users/qinshixixing/.rvm/bin
```

