JavaScript对象是由无序键值对组成的集合,
键——属性
值——属性的值
如果访问没有定义的属性,返回undefined
判断对象中是否有这个属性
'name' in xiaoming;//true
xiaoming.hasOwnProperty('name');//true

for...in循环可以把一个对象的所有属性一次循环出来
但对于数组和字符串就得注意之前记过的那点了啊,遍历的是index

JavaScript的对象的键由于只能是字符串,所以ES6最新引入一种新的数据类型,
Map和Set
Map是一组键值对结构,包含key与value
var map = new Map();
二维数组初始化map,或下边这样赋值
map.set('conan',15741);
map.set('allen',8952);
map.has('kevin');//false
map.get('conan');//15741
map.delete('allen');//删除allen键值对
一个key对应一个value

Set是一组key的集合,不储存value
var set = new Set();
set.add(5);
set.add(6);
set.add(1);

for...of循环可以遍历Iterable类型的集合,包括
数组,Map,Set

其实他们都可以用forEach()方法,接受一个函数,每次迭代,自动回调该函数.

n=[];
[1,25,6,4,80].forEach(function(e){
	n.push(e**2)
})
n//[1,625,36,16,6400]

var obj={dads:461,
aasd:56441,
asdf:974,
agbtfe:644}
//for in 能对对象,字符串,数组遍历
for (var q in obj){
	console.log(q)
	console.log(obj[q])
}
//for of能对Iterable类型对象遍历,包括数组
Map,Set,字符串和类数组
for (var q of obj){//不行的,不能对对象遍历
	console.log(q)
}
for (var q of "obj"){
	console.log(q)
}

函数内部有一个arguments类数组的参数指向当前调入的参数
...rest表示不限制参数多少,最后参数保存在rest数组中

函数内部var申明的变量会有变量提升效果,
通过function func(){}申明的函数也有变量提升的效果.

ES6引入let代替var可以申明一个块级作用域,for,if条件申明在这个块级作用域中

map/reduce方法(array)

var str="ilu";
arr=str.split("");
function mymap(e){
	return e+' ';
}
arr.map(mymap);//["i ", "l ", "u "]

map是全面映射
reduce是依次迭代

function normalize(arr){
	narr=[];
	for (var a of arr){
		narr.push(a[0].toUpperCase()+a.substring(1,a.length).toLowerCase());
	}
	return narr;
}
normalize(['adam', 'LISA', 'barT'])//格式化输入

filter方法巧妙的取出array的重复元素

arr.filter(function(element,index,self){
	return self.indexOf(element) === index;
})

//获取素数的一段代码
function get_primes(arr) {
	return arr.filter(function(ele){
		var count=0
		for (var i=2;i<ele;i++){
			if(ele%i==0){
				count++;
			}
		}
		if(ele==1){
			return false
		}
		else if (count==0||ele==2){
			return true;
		}else{
			return false;
			}
		})
}

arr.sort(function(a,b){
	return a-b;//从小到大排序
})

JSON字符集必须是UTF-8
JSON字符串必须用双引号
JSON.strgingify(obj);//将obj序列化为JSON对象
JSON.parse(jsonobj);//解析JSON对象

jQuery中
HTML中规定的一种属性再DOM中可以没有值,只有出现于不出现两种情况,
prop('checked');//true
|->is(':checked');//true
attr('checked');//checked

JS与CSS的交互
节点元素的getAttribute方法，setAttribute方法和removeAttribute方法，直接读取和删除网页元素的style属性。

元素对应的DOM节点对象的style属性可以直接操作，用来读写行内CSS样式
ele.style.backgroundColor='grey';

元素节点的style对象，有一个cssText属性，可以读写或删除整个样式。

CSS模块的侦测(判断浏览器是否支持某个模块)

判断某个style对象的某个属性是否为字符串，如果属性存在会返回一个字符串，即使属性没有设置也会返回空字符串，而没有这个属性的话，则会返回undefined

style对象三个方法读写行内CSS规则
setProperty
getPropertyValue
removeProperty

最终样式
window.getComputedStyle(ele)
返回ele元素的最终样式
window.getComputedStyle(test, ':before').color;//获取伪元素

CSS伪元素

StyleSheet对象代表网页一张样式表，包括link节点加载的和style节点内嵌的样式表























































































































































































































































































































































































































































































































































































