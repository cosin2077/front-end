
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

// 下边代码的弹出顺序是什么?

var x=3;

var foo = {
	x:2,
	baz:{
		x:1,
		bar:function(){
			return this.x;
		}
	}
}
var go = foo.baz.bar;
alert(go())
alert(go.bind(foo)())
alert(foo.baz.bar())

// A:弹出3,2,1

