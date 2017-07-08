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

>值得一提
>undefined-->转换成数字为NaN
>null-->转换成数字为0
>[]-->转换成数字0
>[1]-->转换成数字1
>['a']-->转换成数字a

除了null和undefined之外的任何字都有toString方法，这个方法的执行结果通常与String()方法返回的结果一致  

	隐式类型转换
	x+"" ;//String(x)
	+x;//Number(x),或x-0
	!!x;//Boolean(x)

Number类型的值  
n.toFixed(0);//小数点0位
n.toExponential(2);//指数e前边保留3位
n.toPrecision(10);//总位数为10位

.toString(n);//转换为n进制字符串
Number()是十进制转换,而且不能出现尾随其他非数字字符  
parseInt()从第一位是数字的地方开始(跳过尽可能多前导空格)，解析到最后一个是数字的地方为止  
parseFloat()解析为浮点数  

parseInt(" 15.1ad");//15
parseFloat(" 15.1ad");//15.1

parseFloat(".1");//0.1
parseInt(".1");//NaN

parseInt()可以接受第二个参数,用于制定转换的基数  
parseInt("12",3);//5

所有的对象都有两个方法  
toString() 对于所有的对象,结果都很有意思哦
({}).toString();//[object Object]  
[].toString();//""
[{},1,2,3,,[{},23,[{}]]];//
"[object Object],1,2,3,,[object Object],23,[object,Object]"好像直接扁平化数组了
(function(){}).toString();//"function(){}"  
/\d+/g.toString();//"/\d+/g"
new Date().toString();//"Sat Jul 08 2017 15:50:44 GMT+0800 (中国标准时间)

valueOf()  
({}).valueOf();//Object {} //也就是这个对象本身  
[].valueOf();//[]  

对象到字符串的转换步骤  
1. 先看有没有toString()方法,如果有这个方法,则调用这个方法,如果返回一个原始值,则将这个值转换为字符串.
2. 如果没有这个方法,或这个方法不返回原始值,则调用valueOf()方法,这个方法也同上  
3. 如果toString和valueOf方法多无法获得原始值就会报错了  

<del>
	举个栗子  
	var a = {
			toString(){
			()=>{};
			},
			valueOf(){
			()=>{};
		}
	}
	a.toString();//
	a.valueOf();//
</del>

对象到数字的转换也是这样的,只不过首先会调用valueOf()方法,然后调用toSting方法



















