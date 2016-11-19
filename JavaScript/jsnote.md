##This is my JavaScript notes all writed by conanskyforce


###But first markdown syntax
***

_this is italic_

**this is bold**
***
+ ul list1
+ ul list2
+ ul list3


1. ol list1
2. ol list2
3. ol list3
4. ol list4

***
		 #header {
	            background-color: gray;
	            color:yellowgreen;
	            text-align: center;
	            font-family: Impact;
	            padding: 10px;
	            font-size: 4em;
	            border: solid 2px darkblue;
	        }
`above is tab code`
***
> this is quote from someone where there is a will there is a way
***
##[conanskyforce](http://www.conanskyforce.tk)

![alt this a pic](http://conanskyforce.tk/wp-content/uploads/2016/08/05-730x340.jpg)
***
####finished my markdown then let's begin javascript!
****
####SXT JavaScript tutorial  
JavaScript数据类型：
1. 字符串(string)
2. 数字(number)
3. 布尔(Boolean)
4. 数组(Array)
5. 对象(Object)
6. 空(null)
7. 未定义(undefined)
8. 可以通过赋值为null清空变量

字符串与数字相加，会首先转换为字符串
字符串与数字相减，会首先转换为数字！

	example:
	var var1="a"+12;
	var1//"a12"
	var var2="12"-4;
	var2//8
	所以对于一个变量
	可以
	通过+""(空字符串)，使得变量结果为字符串  
	通过-0，使得结果为数字  
#####JavaScript对象
如果读取了一个不存在的键，会返回undefined，而不是报错  
点操作符和方括号不仅可以用来获取，还可以用来赋值  
查看一个对象的所有属性可以使用Object.keys(obj)  
delete删除某个属性，再读取就返回undefined，如果删除不存在属性，返回true  
for…in 循环遍历对象所有属性  
with 操作多个属性  
#####JavaScript函数  
	函数申明3中方法  	
	1. function myfunc(){//function 命令
	//函数内容
	}
	2. var myfunc=function(){//函数表达式
	 //函数内容
	 }
	3. var myfunc=new Function()//Function 构造函数
	//函数内容
函数的几个属性  
name属性，紧跟在function关键字后边的那个函数名  
length属性，表示预期传入参数的个数，形参  
toString()方法返回函数的源码。
#####JavaScript数组  
	Array对象是内置对象，也是构造函数  
	Array.isArray(arr)//判断一个数组是否为数组  
	Array实例的方法  
	1. valueOf()返回数组本身
	arr.valueOf()
	2. toString()返回数组字符串形式
	arr.toString()
	3. push()末尾添加元素,返回的是添加后的数组的长度
	arr.push("tail")
	4. pop()末尾删除元素
	arr.pop()
	5. concat()合并数组
	arr.concat(['tail'])
	6. reverse()颠倒顺序
	arr.reverse()
	7. slice()切片，包含1不包含2
	arr.slice(1,2)
	8. splice()删增，从位置1开始，删除两个，增加三个
	arr.splice(1,2,"plus1","plus2","plus3")
	9. map()映射
	10. reduce()递归
#####JavaScrip字符串对象  
	1. length属性， 返回字符串的长度
	str.length
	2. charAt()返回字符串给定位置的字符，从0开始编号 
	str.charAt("f") 
	3. concat()方法 
	str.contcat("fast")
	4. substring()，字符串的slice
	str.substring(1,5)
	5. substr()，第一个参数是开始位置，第二个参数是字符串长度
	str.substr(1,4)
	6. slice()，类似substring，不过第一个参数大时候，不会自动调换参数  
	str.slice(4,1)//""
	7. indexOf()，字符串在另一个字符串中的位置  
	str.indexOf("o");
	8. lastIndexOf(),从后开始匹配,返回的也是正数的位置
	str.lastIndexOf("o")
	9. trim(),取出字符串两端的空格
	10. toLowerCase()，将字符串转换为小写
	11. toUpperCase()，将字符串转换为大写
#####Date对象属性及方法

	var date=new Date()
	date.getDay()
	date.getFullYear()
	date.getMonth()
	date.getDate()
	date.getMinutes()
	date.getHours()
	date.getSeconds()
	date.getMiliSeconds()
#####Math对象的属性和方法
	Math对象是内置对象，不是构造函数，不能生成实例。
	Math.PI
	Math.E
	Math.round()
	Math.abs()
	Math.max()
	Math.floor()向下取整
	Math.ceil()向上取整
	Math.pow()
	Math.sqrt()平方根
	Math.log()
	Math.random()
	Math.sin()
#####DOM节点  
	nodeName返回节点的名称  
	nodeType返回节点的常数  
	元素节点------1  
	属性节点------2  
	文本节点------3
	document-----9
    文档碎片------11
######node属性  
	childNodes()返回一个子节点的集合  
	previousSibiling()向前兄弟节点  
	nextSibiling()向后兄弟节点
	firstNode()第一个子节点  
	lastChild()最后一个子节点
	以上都包裹Text节点和Comment节点(空格，文本，评论)
######node方法
	1. appendChild()接受一个节点作为参数，插入当前节点  
	basic.appendChild(new)
	2. hasChildNodes()是否具有某个子节点
	3. removeChild()移除子节点
	4. replaceChild(new,old)替换子节点 
#####document对象  
	方法:
	document.open()
	document.write()
	document.close()
	document.getElementById()
	document.getElementsByClassName()
	document.getElementsByName()
	document.getElementsByTagName()
	createElement()	
#####event监听函数  
	1. HTML点击事件
	2. DOM 0级事件
	3. DOm 2级事件
	例子:
	1. <div id="div1" onclick="func()"\></div\>
	2. document.getElementById("div").onclick=func()
	3. document.getElementById("div").addEventListener("click",func(),false)
	
	
		
	
	
	
	
	
	
	
	
