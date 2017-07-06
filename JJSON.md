# JSON-<sub>JavaScript Object Notation,基于JavaScript的轻量级的数据交换格式</sub>

JSON与JS对象的对比  
1. 键名必须加双引号,而JS对象可以不加、加单引号、双引号
2. 属性值,可以是数字(只能十进制),字符串，布尔值和null、数组，对象,不能是函数,NaN,Infinity,-Infinity,undefined
3. 最后一个属性后边不能有逗号
4. 签到0不能用,小数点后必须有数字

JSON.stringify()将一个js值序列化为JSON格式字符串  

- 会将正则,数学对象转换成空对象的字符串形式
- JSON.stringify(/abc/);//"{}"
- JSON.stringify(Math);//"{}"  
- 会将日期和包装对象转换成字符串
- JSON.stringify(new String(12));//""12""
- 如果对象的成员是undefined或函数,这个键值对会被忽略
- 如果对象或数组成员中出现NaN和Infinity,会被转换成null
- JSON.stringify({a:function(){},b:null,c:-Infinity});//"{"b":null,"c":null}"

另外两个参数之过滤器  
参数为数组时候,最后结果只有数组类键值组成的元素
var a ={
x:1,
y:2,
c:3,
d:undefined
}
JSON.stringify(a,["x","c"]);//{"x":1};
//参数亦可为函数  
var a ={
x:1,
y:2,
c:3,
d:undefined
}
//修改可返回undefined和NaN
JSON.stringify(a,function(k,v){
console.log("key is:"+k+","+"value is:"+v);
if(typeof v==="undefined"){
return "undefined";
}
if(typeof v==="NaN"){
return "NaN
}
return v
})