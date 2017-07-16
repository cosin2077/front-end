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

###数组的解构赋值
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

	解构不成功的那个值为undefined

	// 报错
	let [foo] = 1;
	let [foo] = false;
	let [foo] = NaN;
	let [foo] = undefined;
	let [foo] = null;
	let [foo] = {};
	
	上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。

	let [x, y, z] = new Set(['a', 'b', 'c']);
	x // "a"
	事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

	默认值
	解构赋值允许指定默认值。
	
	let [foo = true] = [];
	foo // true
	
	let [x, y = 'b'] = ['a']; // x='a', y='b'
	let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
	注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
###对象的解构赋值

	let { foo, bar } = { foo: "aaa", bar: "bbb" };
	foo // "aaa"
	bar // "bbb"

	let obj = {};
	let arr = [];
	
	({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
	
	obj // {prop:123}
	arr // [true]

	默认值生效的条件是，对象的属性值严格等于undefined。
	
	var {x = 3} = {x: undefined};
	x // 3
	
	var {x = 3} = {x: null};
	x // null

	let { log, sin, cos } = Math;
	上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。

	由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
	
	let arr = [1, 2, 3];
	let {0 : first, [arr.length - 1] : last} = arr;
	first // 1
	last // 3

	const [a, b, c, d, e] = 'hello';
	a // "h"
	b // "e"
	c // "l"
	d // "l"
	e // "o"
	类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
	
	let {length : len} = 'hello';
	len // 5

	解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
	
	let {toString: s} = 123;
	s === Number.prototype.toString // true
	
	let {toString: s} = true;
	s === Boolean.prototype.toString // true
	上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
	
	解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
	
	let { prop: x } = undefined; // TypeError
	let { prop: y } = null; // TypeError
	
	函数的参数也可以使用解构赋值。
	
	function add([x, y]){
	  return x + y;
	}
	
	add([1, 2]); // 3

	[[1, 2], [3, 4]].map(([a, b]) => a + b);
	// [ 3, 7 ]

	function move({x = 0, y = 0} = {}) {
	  return [x, y];
	}
	
	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]

	上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
	
	注意，下面的写法会得到不一样的结果。
	
	function move({x, y} = { x: 0, y: 0 }) {
	  return [x, y];
	}
	
	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, undefined]
	move({}); // [undefined, undefined]
	move(); // [0, 0]
	上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

## 用途

(1)交换变量的值

let x = 1;
let y = 2;

[x, y] = [y, x];
上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

（2）从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();

（3）函数参数的定义

解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

（4）提取JSON数据

解构赋值对提取JSON对象中的数据，尤其有用。

let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

（5）函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

（6）遍历Map结构

任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}

（7）输入模块的指定方法

加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

const { SourceMapConsumer, SourceNode } = require("source-map");




































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































