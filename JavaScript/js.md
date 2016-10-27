##Full stock delveloper  
ECMAScript 是一种语言标准，JavaScript是对ECMAScript标准的一种实现  
语句以`;`结束，语句块用`{…}`，`{…}`语句块一般具有缩进，通常是4个空格。  
`//`行注释  
`/*…*/`多行注释
***
####数据类型和变量
1. Number  
包括整数，浮点数，科学计数法，负数，`NaN`，`Infinity`
2. 字符串  
单引号或双引号括起来的任意文本
3. 布尔值  
只有`true`，或`false`两种  
判断`NaN`的方法只能是通过函数`isNaN()`  
`isNaN(NaN)//true`  
4. null和undefined  
null表示一个“空”值，undefined表示未定义。
5. 数组  
数组用[]表示，元素之间用，分隔  
6. 对象  
一组键-值对组成的无序集合  

		var person = {
			name:"conan",
			age:25,
			weight:"66kg",
			height:177
		}; 
7. 变量  
变量由大小写英文、$，_开头包含英文大小写、数字、_、$.不仅可以是数字，还可以是各种数据类型。JavaScript为动态语言(变量类型可以改变)
8. strict 模式
只有在函数内部使用`var`申明的变量为局部变量，其他申明变量的方式都为全局变量。  
在代码第一行加上`'use strict'`表示使用strict模式，未使用var申明变量就将报错。  
***
####字符串
转义字符`\`  
`'I'am \"ok\"!';`  
`\n` 换行  
`\s` 空格  
`+`可以直接连接字符串  

    var s="hello world!"  
    s.length;//13  
    s[0];//h  
    s[4];//o  
    s[100];//undefined
对字符串的索引值赋值没有意义，字符串是不可变的。
`toUpperCase()`方法  
把字符串全部变为大写  
`toLowerCase()`方法  
把字符串全部变为小写  
`indexOf()`方法  
制定字符串出现的位置，没有找到则返回-1  
`substring()`方法  
返回制定索引区间的子串  
substring(a,b);//a-b，不包括b
substring(n)：//从n到结束
***
####数组
1. `length`属性，获取数组的长度，直接赋值则会改变Array的大小  
数组可以通过索修改新值  
索引超过范围，同样引起数组大小变化，值为未定义  
2. `indexOf()`方法  
搜索一个元素指定的位置，没有找到返回-1  
3. `slice()`就是对应string的`substring()`方法  
`slice(1,3)`从1开始，到3，包括1不包括3  
`slice(1)`从1开始直到最后  
`slice()`不传递参数则从头到尾都获取一遍  
利用这点，我们很容易复制一个数组  
var arr=['A','B','C','D','E'];  
var coparr=arr.slice();  
aoparr===arr//  
4. `push()`和`pop()`方法  
`push()`想末尾添加若干元素，`pop()`则是将最后一个元素删掉删除空数组返回undefined  
5. `unshift()`头部添加若干元素，`shift()`删除第一个元素删除空数组返回undefined  
6. `sort()`方法  
对数组进行排序
7. `reverse()`方法，能够反转元素  
8. `splice()`方法，从指定索引开始，删除若干元素，然后再从该位置添加若干元素。  
`splice(2,3,'conan',25)`从索引2开始，删除3个元素，从索引2开始添加字符串'conan'和数字25  
9. `contact()`方法  
将当前的数组和另一个连接起来，并返回一个新的数组，其并没有修改当前的数组，而只是返回了一个新的数组。
10. `join()`方法  
将数组每个元素都用指定的字符串连接起来，然后返回连接后的字符串。  
`join('-')`，每个元素之间用`-`相连  
***
####对象
无序的集合，若干键值对组成  
访问属性，通过`.`操作符完成但要求属性名是一个有效的变量名，如果属性包含特殊字符，则需要用`''`括起来  
另一种访问方式`['属性名']`来访问属性  
访问不存在的属性，返回undefined  

	JavaScript为动态语言，你可以自由的给一个对象添加啊或删除属性  
	bio.name='conan';//增加属性  
	bio.name//'conan'  
	delete bio.age//删除属性  
	bio.age//undefined  
查看bio是否具有某项属性，但有可能是bio继承得到的属性  

	'age' in bio;//true  
	'sex' in bio;//false   
	'toString' in bio;//true
`hasOwnProperty()`判断一个属性是否是自身拥有的，而不是继承的  

	bio.hasOwnProperty('age');//true  
	bio.hasOwnProperty('sex');//false   
	bio.hasOwnProperty('toString');//false
####条件判断
javascript把`null`，`undefined`，`0`，`NaN`，`''`视为`false`,其他一概为`true`  
####循环
`for`循环

	var x = 1;
	var i;
	for(;i<i+1;i++)
	{
	x=x*1;
	}
i的阶乘  
`for`循环遍历数组  
	for(i=0;i<arr.length;i++)
	{x=arr[i];
	}  
`for...in`循环，把一个对象(数组)的所有属性遍历  

	arr=[1,3,5,7,9]
	for (y in a){
	alert(y);//0,1,2,3,4
	alert(arr[y]);//1,3,5,7,9
	}  
***
####`map`和`set`
`map`是一组键值对的结构，具有很快的查找速度  

	var m = new Map()//定义空map
	m.set('name','conan');//设定name属性为conan
	m.has('age');//false
	m.get('name')//conan
	m.delete('sex');//删除sex属性  
`set`  
`set`和`map`类似，也是一组key的 集合，但不储存 value  
####literable
`for...of`循环，统一了set，map，和array  
  
  
####函数
函数内部的语句在执行时，一旦遇见`return`，函数执行完毕，并返回结果，如果没有`return`语句，函数执行完毕后也会返回结果，只是结果为`undefined`。  

	function abs(x){
	if(x>0){
	return x;}
	else{
	return -x;}
	}
	等价于
	var abs=function(x){
	if(x>0){
	return x;}
	else{
	return -x;}
	};  
 `arguments`关键字，指向当前函数调用者传入的所有参数  
#####变量作用域  
函数内部，不用var申明的变量，都为全局变量  
#####变量提升  
自动提升变量的申明，但不会自动提升变量的赋值，所以变量最好还是写在开始  
#####全局作用域
JavaScript默认有一个全局对象`window`，不在任何函数内定义的变量实际上被绑定到了window的一个属性，
全局作用域都没有找到的变量会报ReferenceError错误。  
#####局部作用域
用let代替var在函数内部申明，则该变量作用域在函数内部。  
const 来申明常量，常量用大写表示如：  
`const PI=3.14；`  
#####方法 
在一个对象中绑定函数，称为对象的方法，在一个方法内部，`this`为一个特殊变量，它始终指向当前对象。*慎用*   
####高阶函数
接收另一个函数作用参数的函数，称为高阶函数  
map/reduce  

	arr.map(pow)，传入的参数为函数对象本身  
	arr.map(String)将arr数组的所有数字转为字符串  
	arr.reduce(function(x,y){return x+y;});对数组进行求和  
	arr.reduce(function(x,y){return x*y;});对数组进行求积  
filter  
在一个Array中，删掉偶数，只保留奇数，可以这么写：

	var arr = [1, 2, 4, 5, 6, 9, 10, 15];
	var r = arr.filter(function (x) {
	    return x % 2 !== 0;
	});
	r; // [1, 5, 9, 15]  
把一个Array中的空字符串删掉，可以这么写：  
	
		var arr = ['A', '', 'B', null, undefined, 'C', '  '];
		var r = arr.filter(function (s) {
		    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
		});
		r; // ['A', 'B', 'C']
sort  

		var arr = ['Google', 'apple', 'Microsoft'];
		arr.sort(function (s1, s2) {
		    x1 = s1.toUpperCase();
		    x2 = s2.toUpperCase();
		    if (x1 < x2) {
		        return -1;
		    }
		    if (x1 > x2) {
		        return 1;
		    }
		    return 0;
		}); // ['apple', 'Google', 'Microsoft']  

sort()方法会对当前Array进行修改，它返回的结果仍是当前的Array  
#####闭包
在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。  
*换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。*
####标准对象
在JavaScript世界中，一切都是对象，我们用`typeof`操作符获取对象的类型，它总是返回一个字符串：

	typeof 123;//'number'  
	typeof NaN;//'number'  
	typeof 'str';//'string'  
	typeof true;//'boolean'  
	typeof undefined;//'undefined'  
	typeof Math.abs;//'function'  
	typeof null;//'object'  
	typeof [];//'object'  
	typeof {};//'object'  
对于typeof来说，null，array，{}的类型都是object
#####包装对象
使用包装对象之后（用new），它们的类型将变为object！
	`Number()``Boolean()``String()`将把任何类型的数据转换为  
	`number`，`boolean`，`string`类型  
	1. 不要使用 new Number(),new Boolean(),new String()创建包装对象；  
	2. 用parseInt()或parseFloat()来转换任意类型到number；  
	3. 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；   
	4. 通常不必把任意类型转换为boolean再判断，因为可以直接写if(myVar){...}；  
	5. typeof操作符可以判断出number，boolean，string，function和undefined；  
	6. 判断Array要使用Array.isArray(arr)；  
	7. 判断null使用myVar === null；  
	8. 判断某个全局变量时候存在用typeof window.myVar === 'undefined'；  
	9. 判断函数内部某个变量是否存在用typeof myVar === 'undefined'  
	10. number对象调用toString()方法时候，多加一个点或加括号    
	123..toString();//'123'  
	(123).toString();//'123'    
####Date
获取当前时间  

	var now=new Date();  
	now;//Thu Oct 13 2016 18:19:56 GMT+0800(CST)  
	now.getFullYear();//获取年份  
	now.getMonth();//获取月份从0开始  
	now.getDate();//获取一个月中的号数  
	now.getDay();//获取一周周几  
	now.getHours();//获取小时  
	now.getMinutes();//获取分钟  
	now.getSeconds();//获取秒数  
	now.getMilliseconds();//获取毫秒  
	now.getTime();获取距1970年1月1日12:00的毫秒数  
####RegExp
	`\d`匹配任何一个数字  
	`\w`匹配任何一个字母或数字   
	`.`匹配任意字符   
	`*`表示任意个字符，包括0个   
	`+`表示包含一个或一个以上的字符  
	`?`表示0个或1个字符  
	`{n}`包含n个字符  
	`{n,m}`包含n个到m个字符  
	`\s`空格  
	`[0-9a-zA-Z\_]`匹配一个数字，字母或下划线  
	`[a-zA-Z\_\$][0-9a-zA-Z\_\$]`匹配由字母下划线，$开头，后接任意一个由数字，字母或下划线，$组成的字符串，也就是JavaScript允许的变量名；  
	`a|b`可以匹配a或b    
	`^`表示行的开头  
	`$`表示行的结尾  
#####正则表达式
	var reg1=/ABC\-001/;  
	var reg2=new RegExp('ABC\\-001');  
	两种方式等价  
	test()方法用于检测给定的字符串是否符合条件，符合条件为true  
#####切分字符串可以用正则表达式  
	'a,b c   d'.split(/[\,\s]+/);//['a','b','c','d']  
#####分组
提取子串的强大功能  
`()`表示要提取的分组  

		var reg=/^(\d{3})-(\d{3,8})$/;
		reg.exec('012-54125');//['012-54125','012','54125']  
exec()方法匹配成功后返回一个子串，匹配失败后返回null  
贪婪匹配后边加?变为非贪婪模式  
全局搜索  

	var reg=/test/g;//全局搜索  
	var reg=/test/i;//忽略大小写  
	var reg=/test/m;//多行匹配    
	验证email的正则表达式  
	var re = /^[0-9a-zA-Z][0-9a-zA-Z\_\.]*\@[0-9a-zA-Z]*\.(com|org)$/;  
####JSON
在JSON中，一共就只有这么几种数据类型  
	1. number  
	2. boolean  
	3. string  
	4. null  
	5. array  
	6. object  
以及以上的任意组合  
JSON规定字符集必须是UTF-8，JSON规定， 字符串必须用`""`，object的键值也必须用`""`。  
#####序列化  
将对象变为JSON  
JSON.stringify(*string*);//将string字符串变为JSON格式  
#####反序列化
将JSON变为字符串  
JSON.parse()可以将JSON变为对象
***
##*A Fault Confessed Is Half Redressed*##
***
####面向对象的编程  
通过原型（prototype）来实现面对对象的编程  
JavaScript中并没有类的概念，所有的对象都是实例，继承关系不过是把一个对象的原型指向另一个对象而已  
`Object.creat()`方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有  
#####创建对象  
JavaScript每个创建的对象都会设置一个原型，指向它的原型对象  
当我们`obj.xxx`访问一个对象的属性的时候，JavaScript引擎首先会在当前对象上查找该属性，如果没找到，就在其原型对象上找，如果还没找到，就一直上溯到`Object.prototype`队形，最后还没找到则返回`undefined`  
用于创建对象的构造函数一定得加new 并且函数的首字母要大写！  
#####原型继承  
-----占位
#####class继承
-----占位
####浏览器
#####浏览器对象
1. `window`对象  
具有`innerWidth`，`innerHeight`属性。表示浏览器窗口的内部宽度和高度。  
`outerWidth`，`innerHeight`属性，获取浏览器窗口 的整个宽高  
2. `navigator`对象  
表示浏览器的信息  

		navigator.appName：浏览器名称；  
		navigato.appVersion：浏览器版本；  
		navigator.language：浏览器设置的语言；  
		navigator.platform：操作系统类型；  
		navigator.userAgent：浏览器设定的`User-Agent`字符串。  
3. `screen`表示屏幕的信息  

		screen.width:屏幕宽度  
		screen.height:屏幕高度  
		screen.colorDepth:颜色位数   
4. `location`  
表示当前页面的url信息  

		location.href ：获取完整的URL  
		location.protocal：获取协议名如 “http”  
		location.host：获取域名如 “conanskyforce.tk”  
		location.port：获取端口如 “8080”  
		location.pathname：获取路径名称如 “/path/index.html”  
		location.search：
		location.hash：获取哈希值  
		location.reload()重新加载当前页面  
		location.assign("http://conanskyforce.tk")重新加载哪个页面  

5. `document`对象表示当前页面

		document.title是从<title>xxx</title>中读取的，但是可以动态改变  
		document.title="别走啊亲！"  
6. `cookie`  

		document.cookie 页面缓存
7. `history`历史记录
  
		history.back();后退
		history.forward();前进  
#####DOM操作
document.getElementById("id");根据id选择元素返回的是一个元素  
document.getElementsByClassName("class");根据class选择元素，返回的是一个数组		  
document.getElementsByTagName("tag");根据标签选择元素，返回的是一个数组  
拿到节点之后，我们可以对他进行更新  
innerHTML可以修改整个元素  
innerText，获取，设置元素的文本，不返回隐藏元素  
innerContent，获取，设置元素的文本，返回隐藏的元素  
getElementsByClassName("id").style.color="#fff";设置style中颜色属性font-size变为fontSize(驼峰命名法)  
#####插入DOM
appendChild();插入元素到最后
var mye=document.createElement("p");//创建新元素  
mye.id="xml";//创建id
mye.innerText="hello ,xml";//创建文本内容
document.getElementById("list").appendChild(mye);//将新创建的mye插入到选定的list元素中。  
例子：   
创建一个style元素，动态的插入到head中

	var sty=document.creatElement("style");  
	sty.setAttribute  
	sty.innerHTML="p{color:red}";  
	document.getElementByTagName("head")[0].appendChild(sty);
插入到指定位置之前  
parentElement.insertBefore(newElement,referenceElement)
####操作表单  
+ 文本框<input type="text">
+ 口令框<input type="password">
+ 单选框<input type="radio">
+ 复选框<input type="checkbox">
+ 下拉框<select><option>选项一<option>选项二<option>选项三</option>  
+ 隐藏文本<input type="hidden">
+ 日期框<input type="data"value="2016-10-19">
+ 颜色框<input type="color" value="#ff0000">
#####操作文件
####AJAX
首先创建XMLHttprequest对象，之后设置`onreadystatechange`的回调函数，在回调函数中，我们只需通过`readyState===4`来判断请求是否完成，如果已完成，再根据`status===200`判断是否是一个成功的响应。  
`XMLHttprequest`对象的`open()`方法有3个参数，第一个是制定`GET`还是`POST`,第二个是参数指定`URL`,地址,第三个是是否使用异步，默认是`true`，所以不用写。   
最后`send()`方法才真正发送请求
***
####jQuery   Write Less,Do More

引入jQuery文件  
&lt;script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js
"&gt;  &lt;/script&gt;//引入百度cdn资源库  
解除$对jQuery的占用  

    $;
    jQuery.noConflict();
    $;
    jQuery;
组合选择器  
$("p.red,#demo,input[name="name"]");  
选择<p class="red">,id为demo,input属性 name="name"的几个元素  
过滤器  
$("ul li:first-child")选出ul li下的第一个子元素
$("ul li:last-child")选出ul li下的最后一个子元素
$("ul li:nth-child(n)")选出ul li下的第n子元素
####事件
`on`方法来绑定一个事件，需要传入事件名称和对应的处理函数。  
直接调用click()方法。  
jQuery能够绑定的事件  
>#####鼠标事件
click：鼠标单击时触发  
dbclick：鼠标双击时触发  
mouseenter：鼠标进入时触发
mouseleave：鼠标离开时触发  
mousemove：鼠标在DOM内部移动时触发  
hover：鼠标进入和退出时触发两个函数，相当于mouseenter和mouseleave  
>#####键盘事件
keydown：当键盘按下时触发  
keyup：键盘松开触发  
keypress：按一次键后触发  
>#####其他事件
focus：当DOM获得焦点时
blur：当DOM失去焦点时
change：当input，select，或textarea的内容改变时触发  
submit：但form键提交时触发  
ready：但页面被载入并且DOM树完成初始化后触发  
初始化简化：$(function(){
//init.....
});  
取消绑定事件：off("click",function)//不能接触匿名函数事件  
off("click")一次性移除所有click事件  
off()一次性移除已绑定的所有事件  
####字符串和数组之间的转换
>#####数组转换为字符串
>`Array.join()`方法，  
>我们来比较一下几种情况的结果，  
>1.   
>如果直接用join()  
arr2=["h","e","l","l","o"];  
var final=arr2.join();  
return final;//"h,e,l,l,o"  
>2.  
> 用join("")
arr2=["h","e","l","l","o"];  
var final=arr2.join("");  
return final;//"hello"   
3.  
>用join("\*")其中星号可以用其他代替  
arr2=["h","e","l","l","o"];  
var final=arr2.join("\*");  
return final;//"h\*e\*l\*l\*o"(markdown转义)
>#####字符串转换为数组  
`String.split()`方法  
同样比较几种情况下的结果  
1.  
直接用split()方法 
var mystring="hello";  
var myarr=mystring.split();  
return myarr;//["hello"]  
2.  
用split("")试试  
var mystring="hello";  
var myarr=mystring.split("");  
return myarr;//["h","e","l","l","o"]  
3. 
用split("\*")试试 
var mystring="hello";    
var myarr=mystring.split("\*");//表示在每个\*处进行分割，但是没找到*所以默认什么的都没有，返回了split()的情况。   
return myarr;//["hello"] 
####Node.js
#####模块
######`fs`模块  
异步读取文件  
	var fs = require('fs');
	
	fs.readFile('sample.txt', 'utf-8', function (err, data) {
	    if (err) {
	        console.log(err);
	    } else {
	        console.log(data);
	    }
	});
stat 获取文件大小，创建时间等信息  
var fs = require('fs');

	fs.stat('sample.txt', function (err, stat) {
	    if (err) {
	        console.log(err);
	    } else {
	        // 是否是文件:
	        console.log('isFile: ' + stat.isFile());
	        // 是否是目录:
	        console.log('isDirectory: ' + stat.isDirectory());
	        if (stat.isFile()) {
	            // 文件大小:
	            console.log('size: ' + stat.size);
	            // 创建时间, Date对象:
	            console.log('birth time: ' + stat.birthtime);
	            // 修改时间, Date对象:
	            console.log('modified time: ' + stat.mtime);
	        }
	    }
	});
`stream`模块  
在Node.js中，流也是一个对象，我们只需要相应流的事件就可以了，data事件表示流的数据已经可以读取了，end时间表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。  
`http`模块  
`request`模块封装了HTTP的请求  
`response`模块封装了HTTP的响应  
`reyto`模块  
#####web开发  
######koa学习
######Babel
Babel是一个JavaScript编写的转码器，可以将更高版本的JavaScript代码转换成低版本的JavaScript代码，并且保持逻辑不变。  
编写start.js让Babel自动转码
####原型和构造函数  
组合使用构造函数和原型模式  
  
	function Person(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
		this.friends = ["conan","kevin","stephen","steve"];
	}
	Person.prototype = {
		constructor : Person,
		sayName : function(){
			alert(this.name);
	}
	}
