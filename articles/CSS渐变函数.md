---
title: CSS渐变函数
introduction: CSS渐变属性用法总结
---

#### 一、linear-gradient()——线性渐变
1、第一个参数（可选）：渐变的方向——&lt;angle&gt;值或者to+方向
&lt;angle&gt;：125deg、-360deg等
方向值：top、bottom、left、right。可以to top left这种形式
2、第二个参数：起点颜色值、位置（可不写，为0%）
3、第三个参数：若只有三个参数，此为终点颜色值、位置（可不写，为100%）
4、第n个参数（可选）：若存在，最后一个参数为终点颜色值、位置；中间的参数为特定位置的颜色值和相应位置（此时位置必须填写，为0%到100%之间的值）

#### 二、radial-gradient()——径向渐变
1、第一个参数（可选）：渐变区域的大小size+形状shape+（关键字at+起始点position）
size：为&lt;length&gt;或者&lt;percentage&gt;，或者为关键字——closest-side、closest-corner、farthest-side、farthest-corner（默认值）
shape：为关键字circle、ellipse（默认值）；如果为circle，size的&lt;length&gt;或者&lt;percentage&gt;只有一个数，如果为ellipse则为两个数
at+position：为&lt;lengthh&gt;或者&lt;percentage&gt;，或者为关键字——left、right、top、bottom、center（默认值）；如果shape值为circle或者size只有一个值，position也只有一个值，如果shape值为ellipse或者size有两个值，position需要两个值
2、第二个参数：起点颜色值、位置（可不写，为0%）
3、第三个参数：若只有三个参数，此为终点颜色值、位置（可不写，为100%）
4、第n个参数（可选）：若存在，最后一个参数为终点颜色值、位置；中间的参数为特定位置的颜色值和相应位置（此时位置必须填写，为0%到100%之间的值）
