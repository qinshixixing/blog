---
title: flex布局概要
introduction: flex布局总结
---

#### 在flex容器上设置的属性

###### 1. 把容器设置成felex容器

```css

.container {
    display: flex;
}
```

###### 2. 设置flex容器主轴方向（按行或按列排布）和是否多行（列）显示

```css

.container{
    flex-flow: row wrap;
}
```

[flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)属性可拆分为：

```css

.container {
    flex-direction: row;
    flex-wrap: wrap;
}
```

[flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)取值：row | row-reverse | column | column-reverse

[flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)取值：nowrap | wrap | wrap-reverse

###### 3. 设置flex容器内各flex项默认在主轴和横轴的对齐方式

主轴：

```css

.container {
    justify-content: space-around;
}
```

横轴：

```css

.container {
    align-items: flex-end;
}
```

[justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)取值：flex-start | flex-end | center | space-between | space-around

[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)取值：flex-start | flex-end | center | baseline | stretch

#### 在flex项上设置的属性

###### 1. flex项的动态尺寸

```css

.item {
    flex: 2 1 200px;
}
```

[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)属性可拆分为：

```css

.item {
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 200px;
}
```

[flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)为弹性盒子项的拉伸因子，取值为数字

[flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 为在弹性盒子项的默认宽度之和大于容器时收缩的大小，取值为数字

[flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)为弹性盒子项在主轴方向上的初始大小，取值为：content | <'width'>。


###### 2. flex项在横轴上的位置

```css

.item {
    align-self: flex-end;
}
```

[align-self](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)会覆盖包裹其的flex容器中为所有flex项设置的align-items属性，取值为：auto | flex-start | flex-end | center | baseline | stretch

###### 3. flex项排序

```css

.item {
    order: 1;
}
```

[order](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order)规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照order属性的值的增序进行布局。拥有相同order属性值的元素按照它们在源代码中出现的顺序进行布局。


##### 参考

[Flexbox](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)

[CSS 弹性盒子布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

