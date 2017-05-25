##将p中的属性复制到o中
	function extend(o,p){
	     for(prop in p){
	          o[prop]=p[prop];
	     }
	     return o;
	}

##生成一个新对象，拥有两者的属性,将o的属性复制到空对象中，再将p的属性复制到空对象中

	function union(o,p){
	     return extend(extend({},o),p);
	}

##Object.keys()返回对象中只有可枚举属性组成的数组,原理类似于

	function keys(o){
	     if(o!=='object') throw TypeError();
	     var res = [];
	     for(var prop in o){
	          if(o.hasOwnProperty(prop)){
	               res.push(prop);
	          }
	     }
	     return res;
	}

Object.getOwnPropertyNames(Object);//获取Object对象自由的所有属性名称
##生成一个对象继承属性自p

	function inherit(p){
	     if(p=='null') throw TypeError();
	     if(Object.create) return Object.create(p);
	     var t = typeof p;
	     if(t!=='object'&&t!=='function') throw TypeError();
	     function f() {};
	     f.prototype = p;
	     return new f();
	}
##对象的存取器属性(getter 和setter)

	var o = {
	     a:"default value",
	     set loc_a(nval){
	          this.a = nval
	     },
	     get loc_a(){
	          return this.a;
	     }
	}
//##2 ---------

	var o = {
	     _a:"default",
	     a:{
	          get:function(){
	              return  this._a;
	          },
	          set:function(nval){
	               return this._a = nval;
	          }
	     }
	}
//对比下普通对象的方法和存取器属性

	var o = {
		a:function(){
		     return Math.floor(Math.random()*9)+1;
		}
	}
o.a(); //返回[1,10]之间的数

var o1 = {
     get a(){
           return Math.floor(Math.random()*9)+1;

     }
}
o1.a;// 返回[1,10]之间的数

##数据属性的四个特性
值(value)  
可写(writable)  
可枚举(enumerable)  
可配置(configutable)  

##存取器属性的四个特性
读(get)  
写(set)   
可枚举(enumerable)  
可配置(configurable)  

##ES5定义了个属性描述符来设置或查询属性特性

Object.getOwnPropertyDescriptor(obj,prop);//获取某个对象特定属性的属性描述符,注意prop要是字符串

返回一个对象(属性描述符对象)
{value:"xxx",configurable:"xxx",writable:"xxx",enumerable:"xxx"}

##Object.defineProperty(obj,prop,properDescriptor)

##同时修改多个属性
	Object.defineProperties(obj,{
	     val1:{value:"xxx",writable:"xxx",enumerable:"xxx",configurable:"xxx"},
	     val2: {value:"xxx",writable:"xxx",enumerable:"xxx",configurable:"xxx"},
	
	     val3: {value:"xxx",writable:"xxx",enumerable:"xxx",configurable:"xxx"},
	
	})

##扩展extend()方法
	Object.defineProperty(Object.prototype,"extend",{
	     writable:true,
	     enumerable:false,
	     configurable:true,
	     value:function(o){
	          var names  =Object.getOwnPropertyNames(o);
	     for(var i=0;i<names.length;i++){
	          if(names[i] in this) continue;
	          var desc = Object.getOwnPropertyDescriptor(o,names[i]);
	          Object.defineProperty(this,names[i],desc);
	          }
	     }
	})

##扩展Object.getOwnPropertyNames()为Object.getAllPropertyNames();//获取原型上可遍历的属性

	Object.prototype.getAllPropertyNames = function(o){
	  // var props = Object.getOwnPropertyNames(o);
	  var props = Object.keys(o);
	  var allProps=[];
	  while(Object.getPrototypeOf(o)!==null){
	o= Object.getPrototypeOf(o);
	// allProps=props.concat(Object.getOwnPropertyNames(o))
	allProps=allProps.concat(Object.keys(o));
	}
	  return props.concat(allProps);
	}
##构造函数创建的对象实例的__proto__属性指向构造函数的prototype属性
	function G(){
	}
	var a = new G();
	a.__proto__===G.prototype;//true

##Object.create(obj)创建的对象的原型指向obj
	var a ={};
	var c = Object.create(a);
	c.__proto__===a;//true;

##获得对象的类型

	function classOf(o){
	     if(o===null) return 'Null';
	     if(o===undefined) return 'Undefined';
	     return Object.prototype.toString.call(o).slice(8,-1);
	}

对象序列化
JSON.stringify(obj);对象转换为满足JSON格式的字符串
JSON.parse(str);将字符串解析为对象

扩展union方法
//extend方法

	function extend(o,p){
	     for(prop in p){
	          o[prop]=p[prop];
	     }
	     return o;
	}
//union方法

	function union(o,p){
	     return extend(extend({},o),p);
	}
//任意数量数组合并

	someArray.reduce(union)

数组的方法
forEach()
map()
filter()
reduce()
every(),some()
indexOf()

//查找一个数组中含有该元素的所有索引

	function findAll(a,x){
		var len = a.length,
		pos = 0,
		res = [];
		while(pos<len){
			pos = a.indexOf(x,pos);
			if(pos==-1) break;
			res.push(pos);
			pos+=1;
		}
		return res;
	}
	findAll([1,2,3,55,2,1,2,3,4,1],1)
//[0, 5, 9]

Array.isArray(arr);//判断arr是不是数组

closure闭包
函数在它所在那个作用域内被定义，则能够访问它所在那个作用域的变量

函数申明，会被提前
function myFunc(){}
函数表达式，赋值不会被提前
var myFunc = function(){}

函数调用的几种方式
- 作为函数
- 作为方法
- 作为构造函数
- call和apply被间接调用

方法调用和函数调用重大的区别就是上下文
方法调用this指向调用方法的对象
函数调用非严格模式下指向全局对象，严格模式下指向undefined

构造函数创建的新对象继承自构造函数的prototype属性(Object.prototype)，构造函数内的this可以用来引用这个新创建的对象。
var o = new Object;

arguments是一个实参对象，你可以这样理解(恰好有数字索引的属性，与length属性)
var o = {0:"11",1:"xas",2:"fa",3:"frg",length:"4"}

计算阶乘，并将结果缓存在函数的属性中

	function factorial(n){
		if(isFinite(n)&&n>0&&n==Math.floor(n)){
		if (!(n in factorial)){
		     factorial[n]=n*factorial(n-1);
			}
			return factorial[n];
		}
		else{
			return NaN;
		}
	}
	factorial(10)

##闭包
函数的执行是在函数定义时决定的，而不是函数调用时决定的
P200页

bind方法—将函数绑定至某个对象

ES3模拟

	function bind(f,o){
		if(f.bind) return f.bind(o)
		else{
			return function(){
			return f.apply(o,arguments);
			}
		}
	}

函数科里化（currying）
//创建一个函数返回两个数的和
var sum = function(x,y){
     return x+y;
}
//this的值绑定为null,第一个参数为1，这个新的函数期望只传入一个实参
var succ = sum.bind(null,1);
succ(2)//3

ES3版本的Function.bind()方法

	if(!Function.prototype.bind){
		Function.prototype.bind = function(o){
			var self=this,boundArgs = arguments;
			console.log('this1 '+'=>sum函数');
			console.log('args1 '+Array.prototype.reduce.call(boundArgs,(function(x,y){return x+y})));
			var args1 = Array.prototype.slice.call(arguments,1)
			return function(){
				var args = [],i;
				for(i=1;i<boundArgs.length;i++) args.push(boundArgs[i]);//...
				for(i=0;i<arguments.length;i++) args.push(arguments[i]);//var args2=Array.prototype.slice.call(arguments);args=args1.concat(args2);
				console.log('this2 '+'全局window对象,严格模式下为undefined');
				console.log('args2 '+args);
				return self.apply(o,args);
			};
		};
	}

	function sum(){
		var sum = 0;
		for(var a in arguments){
		     sum+=arguments[a]
		};
		return sum;
	}
	sum.bind(null,1,4)(1,3);//=> 9

函数式编程
function compose(f,g){
     return function(){
          return f.call(this,g.apply(this,arguments));
     }
}
传入函数f，g返回f(g(...))
p209

bind实现

	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }
	
	    var aArgs  = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                ? this
	                : oThis,
	                aArgs.concat(Array.prototype.slice.call(arguments)));
	        };
	
	    if (this.prototype) {
	      // Function.prototype doesn't have a prototype property
	      fNOP.prototype = this.prototype; 
	    }
	    fBound.prototype = new fNOP();
	
	    return fBound;
	  };
	}

