border-radius:左上,右上,右下,左下//处的倒角
边框阴影
box-shadow：x轴偏移量 y轴偏移量 [阴影模糊半径][阴影扩展半径][阴影颜色][投影方式];
box-shadow:0 0 10px 10px #ddd inset//内阴影
border-image:边框图片
background-image:linear-gradient(to top left ,#fff,#999)
text-overflow:clip|ellipsis//文字溢出怎么处理ellipsis表示用省略号表示
三者搭配使用
text-overflow:ellipsis; 
overflow:hidden; 
white-space:nowrap; 
style里边引入
@font-face{
	font-family:字体名称;
	src:url(字体地址);
}
text-shadow:x轴偏移 y轴偏移 模糊偏移 颜色;

background-origin:border-box|padding box|content-box//背景图片从哪儿开始铺

background-clip:border-box|padding box|content-box//背景图片从哪儿开始裁

background-size:auto|长度|百分比|cover|contain

使用伪元素制作导航列表项分割线
.nav li{
	background:linear-gradient(to bottom,#b95349,#b95349) no-repeat right / 1px 20px;}
}
强大选择器
a[attr[^|&|*]='someattr']

:root也就是选择了html
:not//
:empty//
:first-child//
:last-child//
:nth-child()
class1.cls2>div:first-of-type//下边的第一个div元素,可能第一个元素并不是div
:nth-of-type()

only-child//只有一个子元素
only-of-type//唯一一个相同类型元素

很吊的selection
::selection{
	background:orange;
	color:white;
}
div:[before|after]{
	content:"";
}
}
在div前/后边插入一个空元素,这个空元素任你定制!!!!

@keyframes changecolor{
  0%{
    background: red;
  }
  20%{
    background:blue;
  }
  40%{
    background:orange;
  }
  60%{
    background:green;
  }
  80%{
    background:yellow;
  }
  100%{
    background: red;
  }
}
div {
  width: 300px;
  height: 200px;
  background: red;
  color:#fff;
  margin: 20px auto;
}
div:hover {
  animation: changecolor 0.5s ease-out .2s infinite;
}
keyframes后跟动画名称定义动画关键帧
调用时候
animattion:动画名+参数

padding与content,background-image,background-color三者之间z-index逐渐减小.
传统IE与W3C的盒子模型
W3C：
外盒
content+padding+border+margin
内盒
content+padding+border
IE:
外盒
content+margin
内盒
content
意思是IE的盒子包含了
content+padding+border

CSS3新增box-sizing属性
box-sizing:content-box|border-box|inherit//顾名思义，盒子尺寸的算法
第一个是W3C模型，第二个是IE的，元素大小包含padding+border，第三个是继承父元素的盒模型
看图
![]("img/box-sizing.jpg")

CSS3 新布局flexbox!

@media screen{
	//媒体查询
}

@media screen and (max-width:480px){
	.ads{
		display:none;
	}
}//屏幕小于480px,ads就会被隐藏
@media screen and (min-width:600px) and (max-width:900px){
	//当屏幕大小为600~900之间时候
}

响应式!!!

1. 流体网格
每个网格使用百分比来控制大小
2. 弹性图片，根据流体网格进行缩放，而不固定大小
img{
	max-width:100%；
}
3. 媒体查询
@media screen and (min-width:400px;) and (max-width:680px;){
	//do sth here
}
4. 屏幕分辨率
5. 主要断点
设置的min-width与max-width
大漠老师的布局技巧啊：
1.尽量少用无关紧要的div
2.不要使用内联元素
3.尽量少用JS或flash
4.丢弃没用的绝对定位和浮动样式
5.抛弃冗余结构与不使用100%
6.充值样式reset.css
meta标签
<meta name="viewport" content="width=device-width,initial-scale=1.0"> 

1.1024px显屏
@media screen and (max-width : 1024px) {                    
/* 样式写在这里 */          
}     
2.800px显屏
@media screen and (max-width : 800px) {              
/* 样式写在这里 */          
}     
3.640px显屏
@media screen and (max-width : 640px) {              
/* 样式写在这*/            
}     
4.iPad横板显屏
@media screen and (max-device-width: 1024px) and (orientation: landscape) {              
/* 样式写在这 */            
}     
5.iPad竖板显屏
@media screen and (max-device-width: 768px) and (orientation: portrait) {         
/* 样式写在这 */            
}     
6.iPhone 和 Smartphones
@media screen and (min-device-width: 320px) and (min-device-width: 480px) {              
/* 样式写在这 */            
}     

after与before伪元素用于清除浮动:
.clearfix:before,
.clearfix:after{
	content:'';
	display:table;
}
.clearfix:after{
	clear:both;
	overflow:hidden;
}








