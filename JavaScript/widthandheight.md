1.window和document的区别

window表示浏览器打开的窗口，window可以省略

2.document表示出去菜单栏，边栏之后的部分，是window的一部分
document.body==window.document.boy
浏览器的html文档成为document对象

window.location和document.location
window.location===document.location

**********
window宽高
window.innerWidth(视窗内宽度，不包括侧边滚动条)
window.innerHeight(视窗内高度，不包括浏览器的菜单栏，地址栏等)

window.outerWidth(浏览器总宽度)
window.outerHeight(浏览器总高度)

window.screen.Width(电脑桌面宽)
window.screen.Height(电脑桌面高)
window.screen.availHeight
window.screen.avialWidth
window.screenTop(浏览器距屏幕顶部)
window.screenLeft(浏览器距屏幕左边)

兼容性问题，不同浏览器都行
window.innerWidth和window.outerHeight
var w=document.documentElement.clientWidth||document.body.clientWidth；
var h=document.documentElement.clientHeight||document.body.clientHeight；

screen都兼容

**********
document宽高
1.与client相关宽高
2.与offset相关宽高
3.与scroll相关宽高

1.client相关
document.body.clientWidth//元素可视部分宽度padding+content，有滚动条则减去滚动条宽高
document.body.clientHeight//元素可视部分高度padding+content，有滚动条则减去滚动条宽高
①无padding
clientWidth=style.width
②有padding无滚动
clientWidth=style.width+style.padding*2
③有padding有滚动
clientWidth=style.width+style.padding*2-滚动轴宽度(17px？)

document.body.clientLeft//读取元素border宽度
document.body.clientTop//读取元素border高度

2.offset相关(偏移)

document.body.offsetWidth//元素可视部分宽度border+padding+content
document.body.offsetHeight//元素可视部分高度border+padding+content
document.body.offsetLeft//没有定位offsetParent为body，有定位为定位元素offsetParent的margin-left+border-left+padding-left
document.body.offsetTop//没有定位offsetParent为body，有定位为定位元素offsetParent的margin-top+border-top+padding-top.

3.scroll相关

document.body.scrollWidth//
document.body.scrollHeight//
①无滚动轴时：
scrolWidth==clientWidth=style.width+style.padding*2
②有滚动轴时：
scrollWidth==实际内容的宽度+padding*2
scrollHeight==实际内容的高度+padding*2

document.body.scrollLeft//滚动偏移左距离
document.body.scrollTop//滚动偏移上距离

document和document.documentElement(父)document.body(子)

document相关宽高兼容性问题

*****
Event对象中五种坐标
1.clientX和clientY//相对于浏览器(可视区左上角0,0)的坐标
2.screenX和screenY//相对于设备屏幕左上角(0,0)的坐标
3.offsetX和offsetY//相对于事件源左上角(0,0)的坐标
4.pageX和pageY//相对于整个网页左上角(0,0)的坐标(针对滚动，包括滚动长度)
5.X和Y//相对于用CSS动态定位的最内层包容元素，google中与clientX相等，ie中不设置position，业余clintXY相等

****
##滚动到底部！
for(var i=0;i<1000;i++){document.body.scrollTop=document.body.scrollTop+200;}//谷歌浏览器.


**滚动到顶部**  

	scrollTop=0
	scrollHeight
	clientHeight

**滚动到底部**  

	scrollTop+clientHeight>=scrollHeight

滚动轴宽度

	offsetWidth-clientWidth


#jQuery中的宽高

.width()//元素实际内容宽度，不包括内边距及之外  
.height()//元素实际内容宽度，不包括内边距及之外  

.innerWidth()//元素内容+内padding    
.innerHeight()//  

.outerWidth()//元素内容加上内padding+border  
.outerHeight()//  

****
.width()//可读写属性
.width()//返回结果没有单位，
.css("width")//返回结果有单位


.innerWidth()//元素与内边距padding
.innerHeight()//

.outerHeight()//元素，内边距与border，若传入true则包括margin
.outerWidth()//

.scrollLeft()//相对于水平滚动轴左边的距离，若非常左，或者元素不能滚动，则为零
.scrollTop()//相对于水平滚动轴上边的距离，若非常左，或者元素不能滚动，则为零

.offset()//相对于body左上角的left，top值

.position()//相对于设置了position的父元素左上角的left，top值，没设置就跟offset()一样



