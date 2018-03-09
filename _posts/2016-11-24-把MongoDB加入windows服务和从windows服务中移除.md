---
title: 把MongoDB加入windows服务和从windows服务中移除
day: 2016-11-24
time: "00:00:00"
excerpt: 命令收集
---

#### 添加服务：
`mongod -dbpath {数据库存储地址（目录）} -directoryperdb（可选） -logpath {日志存储地址（文件）} -logappend（可选） -auth（可选） -serviceName {服务名} -install`
#### 移除服务：
`mongod -dbpath {数据库存储地址（目录）} -logpath {日志存储地址（文件）} -remove -serviceName {服务名}`