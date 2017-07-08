# JS基本  

数据类型分为：原始类型和对象类型  

原始类型包括：**数字，** **字符串，** **布尔值，** **null，** **undefined**
对象类型: **对象，** **数组，** **函数** **(null)** **日期，正则，错误类**  

>isNaN 用于判断是否是NaN(数字类型的值哦)
>str.charAt() 某个位置的字符
>str.substring(n,m) 截取[n,m) 字符串
>str.slice(n,m) [n,m) 字符串 
>str.slice(-n) 截取最后n个字符串
>str.indexOf(n) n字符在str字符中的位置(索引)
>str.search(/reg/) 满足reg的字符的位置(索引)
>str.replace(/reg/,nstr) 替换字符串
>str.match(/reg/) 返回满足reg的字符串数组
>str.split(/reg/) 以reg分割字符串为数组
 
**null和undefined都不包含任何的属性和方法**

访问字符串,数字,布尔值的属性的时候,(js会将其调用new String(),new Boolean(),new Number() 将其转换成对象,然后这个对象继承了所有的方法,所以能处理属性,一旦引用结束,这个新创建的对象就是被销毁,整个过程看起来就是这个原理)    
也就是你试图给其属性赋值的时候，会忽略这个操作(因为对象诶立即销毁了)
== 原始对象与包装对象视为相等
=== 不相等(不同的类型)
但是原始类型的null和undefined却没有这些属性  

原始值不可更改，对象可以更改  
也就是说，你看到的更改后的原始值，那就是另外一个原始值了  

对象也叫引用类型,对象值都是引用,每一个对象在内存中都占有一个位置  

	所以
	[]!=[];//true
	{}!={};//true
	
	var a = [];
	var b = [];
	var c = a;
	a===b;//false
	a===c;//true


































