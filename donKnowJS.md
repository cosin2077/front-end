//循环 和闭包

//1.原始,打印的是5个6
for(var a=1;a<6;a++){
	setTimeout(function(){
		console.log(a)
	},a*1000)
}

//2.改进1
for(var a=1;a<6;a++){
	(function(){
		var j = a;
		setTimeout(function(){
			console.log(j);
		}, j*1000);
	})()
}

// 3.改进2
for(var a=1;a<6;a++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		},i*1000)
	})(a)
}

// 3.改进3

for(var a=1;a<6;a++){
	let j = a;
	setTimeout(function(){
		console.log(j)
	}, j*1000);
}

// 4.改进4
for(let a=1;a<6;a++){
	setTimeout(function(){
		console.log(a)
	}, a*1000);
}

// 词法作用域关心函数和作用域如何以及在何处申明的，
// 而动态作用于是基于调用栈的
// 但是this机制某种程度上看来很想动态作用域

// this在运行时进行绑定的,它的上下文取决于函数调用时的各种条件

// 1. this 默认绑定，window,'use strict' 模式下为undefined

// 2. this 隐式绑定，函数是某个对象的方法,this 指向这个对象，
// 隐式丢失，函数赋值给变量的时候，引用的是函数本身,函数作为参
// 数传递的时候，也有这个问题！

// 3. this 显示绑定, call和apply，还有bind.  forEach的第二个参数
// 能够绑定上下文

// 4. this 构造函数,指向new 构造函数生成的实例


console.log(1);
function sleep(delay){
	var oDate = Date.now()
	for(var a=0;Date.now()<oDate+delay*1000;){}
}
sleep(10)
console.log(2)

Function.prototype.bind = function(oThis){
	console.log("oThis "+oThis);
	var aArgs = Array.prototype.slice.call(arguments,1),
		fToBind = this,
		fNOP = function(){},
		fBound = function(){
			console.log("this instanceof fNOP:"+this instanceof fNOP&& oThis?this:oThis);
			return fToBind.apply(
				(
					this instanceof fNOP && oThis?this:oThis
				),
				aArgs.concat(Array.prototype.slice.call(arguments))
				);
		};
		fNOP.prototype = this.prototype;
		console.log("this "+this);
		fBound.prototype = new fNOP();
		return fBound;

};
function ca(){
	console.log(this.a+" "+this.b)
	console.log(arguments)
}
var obj={
	a:1,
	b:2
}
var bca = ca.bind();
bca();

Object.create()与polyfill

if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	};
}

// 两种实现委托的方式
//类风格
function Foo(who){
	this.me = who;
}
Foo.prototype.identify = function(){
	return "I am "+this.me;
}
function Bar(who){
	Foo.call(this,who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function(){
	alert("Hello, "this.identify()+ '.');
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

// ********************************
//对象关联
Foo = {
	init:function(who){
		this.me = who;
	},
	identify:function(){
		return "I am "+this.me;
	}
};
Bar = Object.create(Foo);
Bar.speak = function(){
	alert("Hello, "+this.identify()+".");
};
var b1 = Object.create(Bar);

var b2 = Object.create(Bar);

// typeof 是一个安全的操作符(不会报错),即使用在未申明的变量上，也是返回
// undefined而不是报错,有点像检查某个对象的属性，即使没有也返回undefined

// 模块

var MyModules = (function Manager() {
	var modules = {};
	function define(name, deps, impl) {
		for (var i=0; i<deps.length; i++) {
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply( impl, deps );
	}
	function get(name) {
		return modules[name];
	}
	//作用域闭包 ｜ 55
	return {
		define: define,
		get: get
	};
})();
MyModules.define( "bar", [], function() {
	function hello(who) {
		return "Let me introduce: " + who;
	}
	return {
		hello: hello
	};
} );
MyModules.define( "foo", ["bar"], function(bar) {
	var hungry = "hippo";
	function awesome() {
		console.log( bar.hello( hungry ).toUpperCase() );
	}
	return {
		awesome: awesome
	};
} );

// 类数组转换为数组
Array.prototype.slice.call(arguments)

ES6 的 Array.from(...)

NaN是JavaScript种唯一一个不等于自身的值
ES6的Number.isNaN()
polyfill
if(!Number.isNaN){
	Number.isNaN=function(e){
		return typeof e==='number'&&window.isNaN(e)
	}
}
// 判断是不是﹣0
function isNegZero(e){
	return n===0&&1/e===-Infinity;
}

ES6 的Object.is(a,b) 判断a,b 是否相等

if(!Object.is){
	Object.is = function(a,b){
		if(a===0&&b===0){
			return 1/a===1/b;
		}
		else if(a!==a){
			return b!==b;
		}
		else{
			return a===b;
		}
	};
}

简单值通过值复制方式传递,包括，null,undefined,字符串，数字
布尔值，与symbol
复合值通过引用来传递，包括对(包括数组与封装对象)和函数

所有typeof返回值为'object'的对象都包含一个内部属性,可以
看做一个内部的分类,可以通过
Object.prototype.toString(...)来查看

// linux 关机
shutdown -h now

halt (shutdown -h)

poweroff

init 0(关机) 
init 1(重启)

安全的JSON值
undefined,function,symbol,包含循环引用的对象
这些都是不安全的JSON值
JSON.stringify()在遇到undefined,function,symbol时,自动将其忽略,
在数组中则会返回null(以保证数组元素位置不变)

对象的toJSON方法应该返回“一个能被字符串化的安全的JSON值”

unix时间戳
new Data().getTime()
+new Date()
Date.now()

同一段代码有两个可能输出意味着存在不确定性，这种在函数（事件）顺序级别上，而不是多线程情况下的语句顺序级别，在JavaScript中，这种函数顺序的不确定性就是通常所说的竞态条件。


