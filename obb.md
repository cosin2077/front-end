

# 面向对象的程序设计

创建一个自定义对象最简单的方式就是创建一个Object实例,然后为他添加属性和方法  

	var conan = new Object();
	conan.name="conan,skyforce";
	conan.age = "25";
	conan.gender="male";  

也可以通过对象字面量的方式写成这种   

	var conan = {
	name:"conan,skyforce",
	age:"25",
	gender:"male"
	}

**属性类型**  

  
数据属性和访问器属性(用于设定对象属性的特性)  

- Configurable
- Enumerable
- Writable
- Value

默认前三者都是true  
	
	var conan={};
	Object.defineProperty(conan,"name",{
	configurable:false;//name属性的值就不能配置了
	value:"conan,skyforce";
	})

访问器属性  
- Configurable
- Enumerable
- Get
- Set
	
	var conan={};
	Object.defineProperty(conan,"name",{
		get:function(){
			return "conan";
		},
		set:function(n){
			console.log("set conan "+n);
		}
	})

ES5最好同时设置getter和setter  
ES5之前都是通过非标准的方法来实现的  

	obj.__defineGetter__("attris",function(){
		get:function(){
		//...
		},
		set:function(){
		//...
		}
	})

定义多个属性  

	var book = {};
	Object.defineProperties(book,{
		_year:{
			value:2017
		},
		edition:{
			value:1
		},
		name:{
			value:"all about conan,skyforce"
		},
		tname:{
			set:function(newV){this.edition=newV},
			get:function(){return this.name;}
		}
	})

Object.getOwnPropertyDescriptor(obj,attr);//获取对象某个属性的属性描述符  

**工厂模式**

函数封装特定借口创建对象的细节  

	function createStudent(name,age,class){
		var person = new Object();
		persion.name=name;	
		persion.age=age;
		persion.class=class;
		return person
	}

var conan = createStudent(conan,25,"一年级一班");
var john = createStudent(john,32,"一年级一班");

但却无法解决对象的识别问题

**构造函数模式**

function Person(name,age,job){
this.name=name;
this.age=age;
this.job=job;
}
var conan= new Person("conan",25,"lawyer");
var john = new Person("john",32,"student");

conan.constructor===Person;//true
john.constructor==Person;//true
conan instanceof Persion 
这里可以看出conan和john都是Person的实例  

但问题是每个公有的方法都要重复的实现一遍  

**原型模式**  

我们每创建一个函数都有一个prototype属性,这个属性指向一个对象,这个对象的用途就是包含可以由特定类型的所有实例共享的属性和方法.  

***
**理解原型对象：**
无论什么时候,我们只要创建了一个新函数,就会根据一组特定的规则为该函数创建一个prototype属性,这个属性指向函数的原型对象,默认情况下,所有的原型对象都会自动获得一个constructor属性,这个属性指向构造函数  即
	
	function abc(){};//abc自动创建一个prototype属性,
	指向函数的原型对象,即abc.prototype是函数abc的原型
	对象,而这个原型对象又自动获得一个constructor属性指
	向构造函数,即abc.prototype.constructor===abc;

当调用原型对象创建一个新实例之后,该实例内部又有一个指针指向构造函数的原型对象[[Prototype]],ES5中没有标准方式访问这个对象,但是浏览器商们,自己搞了个__proto__指向构造函数的原型对象  

***

	Person.prototype.isPrototypeOf(conan);//true
	Object.getPrototypeOf(conan);//Person.prototype

当读取某个对象的属性的时候,会自动查找当前对象是否有这个属性,如果没有就会查找该属性的原型对象,如果还没查到就会继续往上找,直到找到最外层

	obj.hasOwnProperty("name");//判断Obj本身是否含有"name"属性
	
	in 操作符会返回在原型对象中的属性  
	
	Object.key(obj);//返回对象obj中所有可以枚举的属性,不返回原型对象上的属性  
	想获得所有实例属性,无论是否枚举的话  
	Object.getOwnPropertyNames();

	简便的原型写法  
	function Person(){}
	
	Person.prototype = {
	constructor:Person,
	name:"xxx",
	say:function(){
	console.log(this.name)
	}
	}
	Object.defineProperty(Person.prototypee,"constructor",{
	enumerable:false,
	value:Person
	});
	**重写原型会切断现有实例与之前原型之间的联系**

**原生对象的原型**

给所有字符串定义一个新方法
	
	String.prototype.say=function(){console.log("new ways")};//
	"whattheheck".say();//
	"new ways";//

**构造函数模式和原型对象,现今用途最广的一种模式了**


	function Student(name,age,class){
		this.name=name;
		this.age=age;
		this.className=className;
	}
	Student.prototype.who=function(){
		return this.name;
	}
	Student.prototype.class=function(){
		return this.className;
	}

	实例对象公有的属性委托到原型上,自有的属性再构造函数里边  

**动态原型,将委托属性放在构造函数内(保证只执行一次)**

	function Student(name,age,className){
		this.name=name;
		this.age=age;
		this.className=className;
		if(typeof this.sayName!= 'fucntion'){
			Student.prototype.sayName=function(){
				console.log(this.name);
			}
		}
	}

所有引用类型默认都继承了Object,而这个继承也是通过原型链实现的,所有默认原型都是Object的实例,因此默认原型都会包含一个内部指针,指向Object.prototype  

**继承**