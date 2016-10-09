###Full stock delveloper
***

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
`	var person = {
		name:"conan",
		age:25,
		weight:"66kg",
		height:177
	};`  
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
查看bio是否具有某项属性  
	'age' in bio;//true  
	'sex' in bio;//false   

