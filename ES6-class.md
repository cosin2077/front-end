# ES6——Class

JavaScript的面向对象实在是跟一般对象不一样,ES6通过了class关键字,用来引入类这个概念,作为对象的模板

	//定义类
	class Student{
	  //构造方法
	  constructor(name,age){
	    //this指代实例对象
	    this.name=name;
	    this.age=age;
	  }
	  //...
	}
	
	typeof Student//'function'
	Student === Student.prototype.constructor //true
	//可以看到类的身份和构造函数好像

	//用法跟构造函数一样
	var kevin = new Student('kevin',29);
	kevin.age;//29

类的方法都定义在prototype对象上边

只要代码卸载类和模块之中,就默认为严格模式

**类必须用new调用,不然会报错,这点跟普通构造函数有差别**

constructor方法是类默认的方法,通过new生成实例,自动调用该方法,没有定义constructor方法,则会自动添加空的constructor方法

constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

	class Foo {
	  constructor() {
	    return Object.create(null);
	  }
	}
	
	new Foo() instanceof Foo
	// false

除了定义在this对象上的属性,否则都是定义在原型上的

>class表达式

	const MyClass = class Me {
	  getClassName() {
	    return Me.name;
	  }
	};
类的名字是MyClass,Me只是为了Class内部使用方便而制定的名称,可以省略

立即执行的 Class。

	let person = new class {
	  constructor(name) {
	    this.name = name;
	  }
	
	  sayName() {
	    console.log(this.name);
	  }
	}('张三');
	
	person.sayName(); // "张三"

ES6 没有类的变量提升

>this默认指向类的实例,函数传递,前边又米有.调用的时候要注意,最好bind绑定this

name属性指向类的名字

>class的静态方法

方法前加static关键字,表示该方法不会被实例继承,而是直接 通过类来调用,被称为静态方法

>类的静态属性和实例属性
类里边不能定义静态属性,只能定义静态方法

**类的实例属性**

类的实例属性可以用等式，写入类的定义之中。

	class MyClass {
	  myProp = 42;
	
	  constructor() {
	    console.log(this.myProp); // 42
	  }
	}

**super继承父类的constructor构造函数**

**Class的继承**

class Farther{}
class Child extends Farther{}

	class Child extends Farther{
		constructor(x,y,z){
			super(x,y);//调用父类的constructor(x,y)
			this.z = z;
		}
		toString(){
			return this.z+" "+super.toString();
		}
	}

子类必须在constructor方法中调用super方法,否则新建实例会报错

Object.getPrototypeOf(Child)===Farther;//true

**super**

	class A {}
	
	class B extends A {
	  constructor() {
	    super();
	  }
	}

子类super内部的this指向的是B

作为函数使用,super()只能用在子类构造函数之中,
作为对象,普通方法,指向父类原型对象,静态方法,指向父类,而不是父类的原型对象

ES6 规定，通过super调用父类的方法时，super会绑定子类的this

读取super.x等同于读取A.prototype.x

**prototype和__proto__**

1. 子类的__proto__属性表示构造函数的继承,指向父类
2. 子类的prototype属性的__proto__属性表示方法的继承,指向父类的prototype属性

- 作为一个对象,子类B的原型__proto__是父类A，
- 作为一个构造函数,子类 B 的原型prototype是父类的实例
























































































































































































































































































































































































































































































































































































































































































































































