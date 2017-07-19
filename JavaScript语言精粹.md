JavaScript语言精粹
枚举对象仅有的属性

	arr=[];
	obj1={
		1:465,
		2:'asd',
		8:[],
		5:{},
		7:null,
		9:undefined
	}
	for(var a in obj1){
		if(obj1.hasOwnProperty(a)){
			arr.push(pbj1[a]);
		}
	}
arr;//[465, "asd", Object, null, Array[0], undefined],for in 循环,顺序是乱的
当一个函数被调用时候,都接受两个附加参数,this和arguments.
this取决于调用模式,JavaScript中一共有四种调用模式
方法调用,函数调用,构造器调用,apply调用
1. 方法调用,当一个函数被保存为一个对象的属性时,我们称它为方法,这时候调用时,this被绑定到该对象
2. 函数调用,当一个函数并非一个对象的属性,它被当做一个函数来调用,解决办法是中间层用that=this
3. 结合new前缀调用的函数被称为构造器函数,给构造函数的原型添加属性,其实例化对象也将继承这个属性
4. apply模式,第一个参数是this绑定在哪儿,第二个是参数数组

arguments参数,arguments是一个类数组,保存实际传入的参数,不具有数组的方法

	function argu(){
		return arguments
	}
	argu(1,5,8,9,'ag');//[1, 5, 8, 9, "ag", callee: ƒ, Symbol(Symbol.iterator): ƒ]

函数总是会返回一个值,没有指定返回值则返回undefined

如果函数前边加上new前缀来调用,并且返回的不是一个对象,则返回this(新对象)

给类型增加方法
给Function.prototype增加方法使得该方法对所有函数可用:

	//给所有函数的原型对象添加一个方法(所有函数都将继承这个方法
	//就像String函数,String.method('upper',function(){return this.toUpperCase();}))
	//所有字符串都将有一个方法upper,返回大写后的字符串
	//之所以Function.prototype对象上绑定函数return this,是为了
	//返回这个函数实例,让这个函数能够链式调用
	
	Function.prototype.method=function(name,func){
		//实例的原型对象上添加相应属性
		this.prototype[name]=func;
		return this;
	}
	//链式调用
	String.method('upper',function(){
		return this.toUpperCase();
	}).method('lower',function(){
		return this.toLowerCase();
	})
	//上述等价于
	String.prototype.upper=function(){
		//返回实例的方法
		return this.toUpperCase()
	}
	
	String.prototype.lower=function(){
		//返回实例的方法
		return this.toLowerCase()
	}
//给Number添加一个integer方法,这个方法返回
Math[this<0?'ceil':'floor'](this)

	Number.method('integer',function(){
		return Math[this<0?'ceil':'floor'](this);
	});
	2.3.integer();//2,this指代Number的实例

有条件的增加一个方法

Function.prototype.method = function(name,func){
	if(!this.prototype[name]){
	this.prototype[name] = func;
	}
};

//创建一个quo构造函数
//它构造出带有get_status方法和status私有属性的一个对象

var quo = function(status){
	return {
	get_status:function(){
	return status;
	}
	};
};
//构造一个quo实例
var myquo = quo('conan');返回的是包含get_status方法的新对象
myquo.get_status();//'conan',get_status方法仍然享有访问quo对象status属性的特权
可以访问它被创建时所处的上下文环境,这被称为闭包(closure).

//定义个函数,设置DOM节点为黄色,然后逐渐将它变为白色

var fade = function(node){
	var level = 1;
	var step = function(){
	var hex = level.toString(16);
	node.style.backgroundColor = '#FFFF'+hex+hex;
	if(level<15){
	level+=1;
	setTimeout(step,100);
	}
	};
	setTimeout(step,100);
}
fade(document.body);

级联,也就是返回this,也就能够进行链式调用,相当的方便呀

第五章 继承

5.1伪类
.
.
.

7.regexp
处理正则表达式的方法一般有
regexp.exec
regexp.test
string.match
string.replace
string.search
string.split
(?:);//表示这个分组可以有
reg = (?:[\-\+])
reg.test('dwafsdadas-')

P98
Function








