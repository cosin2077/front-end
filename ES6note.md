# ES6 笔记

Babel转码 

.babelrc 配置文件  

	{
	  "presets":[
	    "latest",
	    "stage-2"
	  ],
	  "plugins":[]
	}

安装babel-cli之后  

将src.js 便一直Wiebandle.js
babel src.js -o bandle.js

将src目录转到lib目录
bale src -d lib -s

***
let 申明的变量只在let所在代码块有效  

for循环,设置变量那部分是负作用域,循环体类是一个单独子作用域  

let 申明不会发生变量提升  

	只要一进入当前作用域,所要使用 变量就已经存在,但是不可以获取,只有等到变量的那一行代码出现,才可以获取和使用该变量 

块级作用域内的函数什么类似 let 对作用域外没有影响  

let,const,class命令申明的全局变量不属于顶层对象的属性  

解构赋值  

	let [foo, [[bar], baz]] = [1, [[2], 3]];
	foo // 1
	bar // 2
	baz // 3
	
	let [ , , third] = ["foo", "bar", "baz"];
	third // "baz"
	
	let [x, , y] = [1, 2, 3];
	x // 1
	y // 3
	
	let [head, ...tail] = [1, 2, 3, 4];
	head // 1
	tail // [2, 3, 4]
	
	let [x, y, ...z] = ['a'];
	x // "a"
	y // undefined
	z // []

