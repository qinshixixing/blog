---
title: css动画属性总结
introduction: css属性总结
---

css中有一个[animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)属性用来专门设定对应选择器所代表的元素所要展现的动画：

```css
div {
    animation: 3s ease-in 1s 2 reverse both paused slidein;
}
```

这个属性的值由8个部分组成，每一个部分又可以拆开来写，可以写成八个属性，分别为：

[animation-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name) —— 动画名称，由@keyframes定义，可以有多个值。

[animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration) —— 动画持续时间

[animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function) —— 动画在每一动画周期（关键帧）中执行的节奏

[animation-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay) —— 动画延迟开始执行的时间

[animation-iteration-count](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count) —— 动画在结束前运行的次数

[animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction) —— 动画是否反向播放

[animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) —— 指定在动画执行之前和之后如何给动画的目标应用样式

[animation-play-state](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state) —— 定义一个动画是否运行或者暂停

所以可以写成：

```css
div {
    animation-name: slidein;
    animation-duration: 3s;
    animation-timing-function: ease-in;
    animation-delay: 1s;
    animation-iteration-count: 2;
    animation-direction: reverse;
    animation-fill-mode: both;
    animation-play-state: paused;
}
```

相应的值可以在相关链接页面中查阅。

只有animation-name中指定的动画名称代表的具体动画可以正常执行动画才会生效，具体的动画则由[@keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)定义，比如：

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

div {
    animation-name: slidein;
}
```

一些其他有用的动画使用说明：

[使用CSS动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

[timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
