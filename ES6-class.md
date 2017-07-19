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

