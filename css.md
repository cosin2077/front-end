将两个类选择器链接在一起,表示仅选择同时包含这些类名的元素.
.a.b{};//只匹配同时包含a,b两类的元素
CSS选择器的所有种类:
1.类选择器
2.id选择器
3.属性选择器
a.简单属性选择器

[name]{}//具有那么属性的元素
a[name]{}//具有那么属性的a元素
a[name][title]{}//同时具有name,title属性的a元素

b.根据属性值选择

a[title="img"]
a[href=""]

c.根据部分属性选择

a[href~='xxx'];//根据属性中出现的一个空格分隔的词来完成选择
a[0title~='xxx'];
子串匹配属性选择器(查询的是属性的子串,是字符串)
[href^="http://"]
[href$=".jpg"]
[href*=".jpg"]

d.特定属性选择器

img[src|='http'];//等于http或以http开头的所有

父子元素关系

后代选择器--空格

(直接)子元素选择器-->

相邻兄弟选择器--+

伪类和伪元素

a可以应用于链接,也可以单单作为锚使用
静态伪类
a:link{}
a:visited{}
这与在body指定link,vlink是等价的
<body link="blue" vlink="purple">
动态伪类

:focus{}能够获得焦点的元素
:hover{}在之上悬停时
:active{}激活时,点击,enter

p:first-child{}
作为某元素第一个子元素的p元素
×并不是p元素的第一个子元素

伪类结合使用
a:hover:visited{}已访问过的a元素悬停时候的表现

伪元素
p:first-letter{}第一个字母
P:first-line{}第一行

在元素之前或之后插入内容
p:before{
content:"";
}
p:after{
content:"";
}

样式优先级，继承，构成了所谓的叠层样式表
重要申明(放在样式最后,分号前边)>内联>id>类>属性 (选择器)>通配符>继承
属性在后边的胜利
继承按文档树(DOM模型)来完成

推荐的样式链接顺序(LVHA)
:link{}
:visited{}
:hover{}
:active{}

text-indent对块级元素设置首行缩进
text-align对块级元素设置文本对齐

vertical-align对行内元素的对齐

字间隔与字母间隔
word-spacing
letteer-spacing

文本转换
text-transform:
uppercase
lowercase
capitalize

文本装饰
text-decoration
underline
overline
line-through

文本阴影
text-shadow

处理空白符
white-space
nowrap
pre
pre-wrap

文本方向
direction
ltr
rtl

只有width和margin才能被设为属性auto，其余不能

margin:0 auto;块级元素对齐
text-align:center;对齐的是内联元素

内边距，边框，内容宽高不能设置为负数,只有外边距能设置为负数

块级元素垂直格式化,制定高度后,出现滚动条,设置overflow属性等

display改变元素显示
none
inline inline元素左右内外边距能设置,上下内外边距不能设置
block 
inline-block 能设置宽高,同时保持内联元素在一行的特性

块级元素
行内替换元素
行内块级元素
才能设置宽高

p221 run-in元素

IE的盒子(width,height)包括内边距和边框

关于
background-image的种种
background-position:center|top|top right;
background-repeat:no-repeat|repeat-x|repeat-y;
background-attachment:scroll|fixed|inherit
