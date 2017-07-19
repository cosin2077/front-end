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

