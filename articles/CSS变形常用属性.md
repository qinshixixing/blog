---
title: CSS变形常用属性
introduction: CSS变形属性用法总结
---

#### 一、transform
设置变形效果
值：none，&lt;function&gt;
默认值：none
##### 1、2D transform-function
translate(tx,ty)——平移
参数：tx、ty，分别表示沿x和y轴平移距离，可为长度值或百分比值
translateX(tx)
等同于translate(tx,0)
translateY(ty)
等同于translate(0,ty)
scale(sx,sy)——缩放
参数：sx、sy，分别表示沿x和y轴放大倍数，只设置一个值则sx和sy相等
scaleX(sx)
等同于scale(sx,1)
scaleY(sy)
等同于scale(1,sy)
rotate(a)——旋转
参数：a表示旋转的角度值（&lt;angle&gt;），取正值为相对中心点顺时针旋转
skew(ax,ay)——倾斜
参数：ax、ay，分别表示x轴和y轴方向倾斜的角度
skewX()
等同于skew(ax,0)和skew(ax)
skewY()
等同于skew(0,ay)
matrix(a,b,c,d,e,f)——2D矩阵
参数：a、b、c、d、e、f为六个数字参数，分别为2D矩阵中的6个参数
##### 2、3D transform-function
translate3d(tx,ty,tz)——3D位移
参数：tx、ty、tz，分别表示沿x、y、z轴平移距离，tz不能是百分比值
translateZ(tz)
等同于translate3d(0,0,tz)
scale3d(sx,sy,sz)——3D缩放
参数：sx、sy、sz，分别表示沿x、y、z轴放大倍数
scaleZ(sz)
等同于scale3d(1,1,sz)
rotate3d(x,y,z,a)——3D旋转
参数：x、y、z，均为0\~1的数值，分别表示元素围绕x、y、z轴旋转的矢量值，即旋转轴（旋转平面的垂线）；a表示绕旋转轴旋转的角度值
rotateX(a)
等同于rotate3d(1,0,0,a)
rotateY(a)
等同于rotate3d(0,1,0,a)
rotateZ(a)
等同于rotate3d(0,0,1,a)
matrix3d(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
参数：a\~q为16个数字参数，分别为3D矩阵中的16个参数
##### 3、perspective(z)
参数：z表示3d变换查看者z轴的位置，只能取大于0的长度值，用在当前变形元素上。与perspective属性效果一样

#### 二、transform-origin
设定元素变形的中心点（参考点）（相对于元素x轴和y轴）
值：&lt;percentage&gt;，&lt;length&gt;，left，right，top，bottom，center
默认值：50% 50%
##### 1、2D变形中的属性值
可以是一个或者两个属性值
1、一个长度值或百分比值，则为x-offset，只设置相对x轴偏移量，y轴为center
2、一个关键字值，另一个关键字值自动设置为center
3、两个属性值时，一个表示相对x轴偏移量，一个表示相对y轴偏移量，可任意选择长度值或者百分比值或者关键字
##### 2、3D变形中的属性值
可以是一个、两个、三个属性值
1、为一个或者两个属性值时，与2d变形一样
2、三个属性值时，第三个属性为相对z轴偏移量，只能取长度值

#### 三、transform-style
指定嵌套元素如何在3D空间中呈现
值：flat，preserve-3d
默认值：flat
flat表示所有子元素在2D平面呈现（把所有子元素变形后的效果整体又看成一个平面，忽略子元素其他3D要素），preserve-3d表示所有子元素在3D空间中呈现
使用此属性必须先使用 transform 属性
取preserve-3d的时候，overflow不能设置为hidden

#### 四、perspective
设置3d变换查看者z轴的位置
值：none，&lt;length&gt;
默认值：none
&lt;length&gt;为大于等于0的数，若为0效果与none一样，没有3D空间效果
此属性作用于变形元素的父元素上，且3d变换时候使用

#### 五、perspective-origin
设定perspective属性的的源点（观察点）的角度，即x、y轴的位置
值：&lt;percentage&gt;，&lt;length&gt;，left，right，top，bottom，center
默认值：50% 50%
使用方法与transform-origin在2D变形中使用方法一样，不过时相对于父元素x、y轴坐标定位
与perspective属性搭配使用，可确定观察点在空间的x、y、z轴坐标
此属性作用于变形元素的父元素上，且3d变换时候使用

#### 六、backface-visibility
决定元素旋转时背面是否可见
值：visible，hidden
默认值：visible
取hidden时，如果旋转超过180度，则该元素不可见
