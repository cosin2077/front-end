//汉诺塔
function han(n,a,b,c){
	if(n==1){
		console.log(`move ${a} to ${c}`);
	}
	else{
		han(n-1,a,c,b)
		console.log(`move ${a} to ${c}`)
		han(n-1,b,a,c)
	}
}
han(3,'a','b','c')

//最大公约数

var n=0;
function bg(a,b){
	console.log(n++)
	if(b==0) return a;
	c = a%b;
	return bg(b,c)
}


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

//curry化
Function.method('curry',function(){
	var slice = Array.prototype.slice,
		that = this,
		args = slice.apply(arguments);
	return function(){
		return that.apply(args.concat(slice.apply(arguments)))
	}
})

parseInt.curry=function(){

}

class Child extends Farther{
	constructor(x,y,z){
		super(x,y);//调用父类的constructor(x,y)
		this.z = z;
	}
	//...
}

// 斐波那契数列
function fibo(n){
	if(n==1) return 1;
	if(n==2) return 1;
	else{
		return fibo(n-1)+fibo(n-2);
	}
}
fibo(9)
//分蛋糕
function partedCake(n){
	if(n==1){
		return 2;
	}else{
		return partedCake(n-1)+n;
	}
}
partedCake(8)

// 转换为二进制
var res = []
function bin(n){

	if(parseInt(n/2)!=0){
		bin(parseInt(n/2));
		res.push(n%2);
	}
	else{
		res.push(n);
	}
	return res;
}
bin(123)

for(var a=1;a<5;a++){
	(function(q){
		return partedCake(q)
	}(a));
}

//一元三次方程
function chick(){
	for(var a=0;a<34;a++){
		for(var b=0;b<51;b++){
			for(var c=0;c<101;c++){
				if((a+b+c===100)&&(3*a+2*b+0.5*c===100)){
					console.log("a:"+a+" b:"+b+" c:"+c)
				}
			}
		}
	}
}
chick()


//选择排序
function sorted(...x){
	var res = [];
	for(var a=0;a<x.length;a++){
		for(var b=a+1;b<x.length;b++){
			if(x[a]<x[b]){
				tmp=x[a];
				x[a]=x[b];
				x[b]=tmp;
			}
		}
	}
	return x;
}
sorted(5,6,8,4,0,1)

// ruanyifeng es6

$('body').click(function(e){
	if(e.pageX<=320){
		$("#sidebar").toggle(2000)
	}
})

for(var a=0;a<5;a++){
	console.log(a)
}


var count = 0;
function hano(n,a,b,c){
	count++;
	if(n==1) console.log("move "+ a+" to "+c)
	else{
		hano(n-1,a,c,b)
		console.log("move "+a+" to "+c)
		hano(n-1,b,a,c)
	}
}
count;
hano(24,'a','b','c')

// 逆波兰表达式

function notation(exp){
	arr = exp.split("")
	switch(exp){
		case "+":return notation()+notation();	
		case "-":return notation()-notation();	
		case "*":return notation()*notation();	
		case "/":return notation()/notation();	
		default:return str()
	}
}

// 计算每个数字出现的次数
function a(...x){
	var res = [];
	// for(var j in x){
	// 	res.push(0);
	// }
	res.push(0);
	for(let i of x){
		res[i]=res[i]||0
		res[i]++
	}
	return res;
	
}

a(1,2,3,5,4,1,2,3,2,2,1,5,6,8,7,0,0,0,0,0,1,1,1,1,2,5,5,888,9,6)

// 计算多少以内的素数
// 筛子法,计算剔除合数就是素数
function susu(x){
	var res = [],sum,fin=[];
	console.time("label")
	for(var a=2;a<Math.sqrt(x);a++){
		sum=a;
		if(res[sum]==0){
			while(sum<x){
				sum+=a;
				if(sum<x) res[sum]=1;
			}
		}
	}
	for(var j=2;j<x;j++){
		if(res[j]!=1) fin.push(j)
	}
	return fin;
}
susu(101000)
console.timeEnd("label")

// 日历问题(包含闰平年)
var days;
var week=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
var todayDate = new Date();
var year = todayDate.getFullYear();
var month = todayDate.getMonth()+1;
var date = todayDate.getDate()





function calcData(days){
	if(days<0) return;
	//获取星期几
	function getWeek(){
		return days%7;
	}
	return week[getWeek()];
	//获取第几年

	function getYear(){

	}

	//获取第几个月
	function getMonth(leap_year){

	}

}
calcData(200)

// Coinbase 价格预警
var arr = [];
var stv = setInterval(function(){
	num = $('.PriceChart__CenteredBigAmount-GFMLl')[0].children[0].children[1].innerText.replace(',',"")-0;
	rate = $('.PriceChart__CenteredBigAmount-GFMLl')[2].children[0].children[1].innerText-0+'%';
	arr.push(num);
	document.title = num+" "+rate+" "+((rate>0)?"↑":"↓");
	if(num<2700){
		window.alert("hurry")
	}
	console.log(num);
}, 1000);

// 微博取关script
var len = document.querySelectorAll('.opt');
var a=0;
setInterval(function(){
	len[a].getElementsByTagName('li')[2].children[0].click();
	document.querySelectorAll('.W_layer_btn')[0].children[0].click();
	a++;

},500)

