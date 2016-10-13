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
