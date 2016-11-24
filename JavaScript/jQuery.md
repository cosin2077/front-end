#锋利的jQuery
$("#ed")获取的永远是对象，不能直接用if判断该句(永远成立)，应该用：  
if($("#id").length>0)判断长度或者  
if($("#id")[0])转换为DON对象  
$("#dev + div")等价于 $("#dev").next("div")  
$(".cll~p")等价于 $(".cll").nextAll("p")
##过滤选择器
**1.基本选择器**  
以冒号(:)开头  
$("div:first")第一个div元素  
$("div:last")最后一个div元素  
$("div:not(#d)")id不是d的div元素  
$("div:even")索引为偶数的div 元素  
$("div:odd")索引为奇数的div 元素  
$("div:eq(2)")索引为2的div元素  
$("div:gt(2)")索引大于2的div元素  
$("div:lt(3)")索引小鱼3的元素  
$(":header")所有标题元素  
$("：animated")正在执行动画的元素  
**2.内容过滤选择器**   
$("div:contains(text)")选取含有文本text的div元素  
$("div:empty")不包含子元素的div元素  
$("div:has(p)")含有p元素的div元素  
$("div:parent")拥有子元素div元素  
**3.可见性过滤**  
$("div:hidden")选取不可见的div元素  
$("div:visible")选取可见的div元素  
**4.属性过滤选择器**  
$("div[href]")选择拥有href属性的div  
$("div[href=abc.com]")选择href属性为"abc.com"的div  
$("div[src!=asd.jpg]")选择src属性不为"asd.jpg"的div  
$("div[href^=abc]")选择href以abc开头的div  
$("div[href$=xyz]")选择href以xyz结尾的div  
$("div[src*=jpg]")选择src含有jpg的div  
**5.子元素过滤选择器**  
$("div:nth-child(index/odd/even)")div下子元素 偶数/基数/index从1算起    
$("div:first-child")div第一个子元素  
$("div:last-child")div最后一个子元素  
$("div:only-child")div中只有一个子元素的那个元素  
**6.表单对象属性过滤器**  
$("input:enabled")选取所有input下可用元素   
$("#input:disabled")选取id为input的元素下所有不可用元素      
$("input:checked")选取所有被选中的input元素    
$("input:selected")选取所有被选中的选项元素
**表单选择器**  
$(":input")选取input，textarea，select，button元素
$(":text")选取单行文本框  
$(":password")选取密码框  
$(":radio")选取单选框  
$(":checkbox")选取复选框  
$(":submit")选取所有提交按钮  
$(":image")选取图片按钮  
$(":reset")选取重置按钮  
$(":button")选取按钮  
$(":file")选取上传域     
$(":hidden")选取所有不可见元素    
**应用jQuery改写实例**  
$("#div").click(function(){
//do something here
})
$("#div tbody tr:even").css("backgroundColor","#888")  
##jQuery的DOM操作  
DOM一般分为三类，DOM Core，HTML-DOM,CSS-DOM
1.DOM Core   
var tag=document.getElementsByTagName("tag");获取对象  
tag.getAttribute("src");获取元素的src属性  
2.HTML-DOM  
element.src;获取某元素的src属性  
3.CSS-DOM  
element.style.color="red";
###jQUery中
1.查找元素节点
$(".div>ul>li:nth-child(2n+1)").text();获取或设置元素文本节点    
2.查找属性节点  
$("div>img").attr("src");获取div子元素img中的src  
或者可以用$("div>img")[i].src转换成DOM对象来获取src  
####创建节点  
var myli=$("<li little="do you know">你好</li>");
$("ul").append(myli);
$("p").append("<b>Hello</b>");   
$("<b>Hello</b>").appendTo("p");   
$("p").prepend("<b>Hello</b>");  
$("<b>Hello</b>").prependTo("p");   
$("p").after("<b>Hello</b>");   
$("<b>Hello</b>").insertAfer("p");  
$("p").before("<b>Hello</b>"); 
$("<b>Hello</b>").insertBefore("p");
####删除节点
$("ul li:eq(1)").remove();删除第二个<li>节点   
$("*").empty();清楚节点  
####复制节点  
$("ul li").click(function(){
	$(this).clone(true).appendTo("ul");})  
$("P").replaceWith("<strong>你瞅啥</strong>");  
$("<strong>你瞅啥</strong>").replaceAll("p");  
####包裹节点  
$("*").wrap("<b></b>");每个元素单独包裹  
$("*").wrapAll("<b></b>");一起包裹  
$("*").wrapInner("<b></b>");内层包裹  
###属性操作  
attr()获取或设置属性，removeAttr()删除属性  
$("*").attr({"title":"www.xxx.com","hidden":"hidden"})设置多个  
$("*").attr("title","block")设置单个  
$("*").attr("title")获取  
$("P").removeAttr("name")删除属性  
###样式操作  
$("*").attr("class","abc");改变单个class  
$("*").addClass("abcd");追加样式  
####移除样式  
$("*").removeClass("abcd sd")移除abcd,sd类  
$("*").removeClass()删除所有class  
####切换样式  
$("p").toggleClass("another");
####判断是否含有某个样式  
$("p").hasClass("abca");判断是否含有样式abcd  
等价于$("P").is("abcd");  
###获取，设置html，文本和值   
$("p").html()获取  
$("p").html(<b\>你知不知道真相</b\>)设置  
$("P").text()获取文本  
$("p").text("Hello")设置文本    
$("#address").focus(function(){
var text_value=$(this).val();//获取地址文本框的值  
if(text_value=="请输入邮箱地址"){
	$(this).val("");
}
});
$("#address").blur(function(){
	var txt_value = $(this).val();
	if(txt_value==""){
	$(this).val("请输入邮箱地址");
}
})
获得焦点时候，没有placeholder，失去焦点时，有placeholder  
####遍历节点  
**1.childern()方法**
获取匹配元素的子元素集合，仅子元素，而不包含后代元素  
**2.next()方法**    
匹配后边紧邻的同辈元素  
**3.prev()方法**  
匹配前边紧邻同辈元素  
**4.sibilings()方法**  
匹配前后所有同辈元素  
**5.closest()**  
匹配最近元素  
####CSS-DOM操作  
$("p").css("color");获取
$("p").css("color","red");设置单个
$("p").css({"color":"red","fontSize":"14px");设置多个  
$("p").css("opacity","0.4");设置透明度  
**1.offset()方法**  获取元素在当前视窗相对便宜，返回top和left  
var ofs=$("p").offset();获取offset
ofs.left;获取左偏移  
ofs.top; 获取右偏移
**2.position()方法**获取相对最近一个position为relative或absolute的父节点的相对偏移  
var posit=$("p").position();获取position
posit.left;获取左偏移  
posit.top; 获取右偏移 
**3.scrollTop()和scrollLeft()**获取滚动条距顶端，距左侧的距离  
var $p=$("p");
$p.scrollTop();滚动条距离顶端距离
$p.scrollLeft();滚动条距离右端距离，设定参数则为设置滚动距离     
***
##jQuery中的事件和动画  
**1.加载DOM**  
JavaScript中用的是window.onload()方法   
jQuery中用的是$(document).read()方法   

	$(document).ready(function(){
	//do something here  
	})
	$().ready(function(){
	//do something here  
	})
	$(function(){//最简单的做法
	//do something here  
	})  
	
	$(window).load(function(){  
	//do something here  
	})  
	等价于window.onload()=function(){  
	// 编写代码   
	}  
**事件绑定bind()**  

	$(function(){
		$("div p li").bind("click",function(){
		$(this).next("li").show();
	
		})
	})
判断是否怎么样，用is()方法来完成  
**阻止冒泡与默认事件**
event.stopPropagation();阻止冒泡  
event.preventDefault();阻止默认行为  
return false 为两者综合  
**事件对象的属性**  
event.type//事件类型  



























