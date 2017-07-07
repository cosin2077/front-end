## BOM浏览器对象模型

### window对象 
网页中定义的任何一个对象,变量,函数,都是以window作为其global对象的.

全局作用域中定义的变量和函数，都自动被归于window对象名下  
全局变量不能通过delete操作符删除,而window对象上定义的属性可以  

如果页面包含框架,每个框架都有自己的window属性,并保存在frames集合中,frames集合通过数值索引或框架的name属性来访问，最高层框架没有那么属性,除非是通过window.open打开的    

top对象始终指向最外层框架,也就是浏览器窗口  

window.screenX,window.screenLeft;表示浏览器距离**屏幕**左边的距离  
window.screenY,window.screenTop;表示浏览器距离**屏幕**右边的距离  

window.moveTo  
window.moveBy 这俩属性基本都被禁用了,因为太影响用户体验了  

window.innerHeight  浏览器内部可见视口的高/宽(包括了滚动条的宽度13px)
window.innerWidth

window.outerHeight  整个浏览器的高/宽
window.outerWidth

document.documentElement.clientHeight  视口高/宽
document.documentElement.clientWidth  

window.resizeTo  同样被禁用,也太影响用户体验了 
window.resizeby

window.alert()
window.confirm()
window.prompt()

###location 对象 
window.location=document.location=location  
有这些属性  
>hash
>host
>hostname
>href
>pathname
>port
>protocol
>search

**位置操作**

location.assign("http://baidu.com")  
window.location="http://baidu.com"
location.href="http://baidu.com"
每次修改location的属性,页面都会以新URL重新加载  
location.replace()方法不会回到前一个页面  

location.reload() 重新加载(有可能从缓存加载)  
location.reload(true) 从服务器重新加载

















