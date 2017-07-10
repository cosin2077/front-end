# OBB

**面向对象的程序设计**  

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

