
// 下边的代码弹出的是什么？
var foo = 1; 
function bar() { 
	foo = 10; 
	return; 
	function foo() {} 
} 
bar(); 
alert(foo);

// A：弹出的是1,因为函数申明会被提前,foo相当于局部变量

