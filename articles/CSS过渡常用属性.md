---
title: CSS过渡常用属性
introduction: CSS过渡属性用法总结
---

#### 一、transition-property
指定要设置过渡效果的css属性
值：none，all，&lt;single-transition-position&gt;
默认值：all
不管通过什么方式，只要指定的属性的值发生变化，就不会瞬变，而会逐渐过渡
可设置多个属性，用逗号隔开

#### 二、transition-duration
设置过渡效果所需的时间
值：&lt;time&gt;
默认值：0
不能为负数，可以设置多个值，用逗号隔开，分别对应transition-property中的属性值

#### 三、transition-timing-function
指定过渡期间操作进展情况（指定过渡速度，过渡随时间变化的情况）
值：&lt;function&gt;，ease，linear，ease-in，ease-out，ease-in-out
默认值：ease
##### 1、预定义的关键字函数
1、ease
过渡速度刚开始时变快，随后逐渐变慢，结束时速度小于开始时速度
2、linear
过渡速度不变，保持恒速
3、ease-in
过渡速度越来越快（渐显效果）
4、ease-out
过渡速度越来越慢（渐隐效果）
5、ease-in-out
过渡速度前半时间变快，后半时间变慢，中点的速度最快，结束时的速度最慢等于开始时的速度
##### 2、cubic-bezier(P0,P1,P2,P3)——三次贝塞尔曲线函数
参数P0、P1、P2、P3：表示控制三次贝塞尔曲线的四个值，只允许0\~1的值，四个值不同，形成的曲线也不同，预定义关键字函数全部可以用三次贝塞尔曲线函数实现
##### 3、step(&lt;integer&gt;,keyword)——间隔函数
为非平滑过渡，每隔一定的时间变化一次过渡状态。
1、参数：&lt;integer&gt;
指定step()函数间隔的数量,必须为大于0的正整数
2、参数：为关键字参数，可选。为start或者end
表示过渡状态改变发生在时间段的开始还是结束
可以设置多个函数，用逗号隔开，分别对应transition-property中的属性值

#### 四、transition-delay
指定过渡开始的延迟时间
值：&lt;time&gt;
默认值：0
值可以为正整数、负整数和0，非零时必须要单位s或者ms
##### 1、值为正整数
相应css属性发生变化时，过渡动作不会立即触发，过了设定时间后才触发
##### 2、值为负整数
相应的css属性发生变化时，过渡动作会从其绝对值表示的时间点开始显示，之前的动作被截断
可以设置多个值，用逗号隔开，分别对应transition-property中的属性值

#### 五、transition
前面四个属性的综合属性，设置过渡的全部要素
值：&lt;property&gt;&lt;duration&gt;&lt;function&gt;&lt;delay&gt;（前面四个子属性值的综合）
值里面一般按照如上顺序书写四个子属性的值，并用空格分隔（不是逗号）。
transition-duration和transition-delay的值类型一样，一般第一个会解析为transition-duration，第二个解析为transition-delay
可以设置多个属性过渡，用逗号隔开；每个属性过渡的子属性用空格隔开
