<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>freecodecamp</title>
</head>
<body>
<div><pre>
    1.$(document).ready(function(){});//document文件加载完成。
    2.1可以缩写为:    。
    3.<i>selector.methods</i>选择器选择元素,然后执行添加效果。
    4.$("input"),元素选择器选择元素.$("#id"),选择id.$(".class"),选择类。
    5.$("button").addClass("");添加class属性。
    6.$("button").removeClass("");//移除class属性。
    7.$("p").css("color","red");//修改css属性为红色。
    8.$("button").prop("disabled",true);//这样来让按钮不可选，prop为元素属性。
    9.$("#target1").html("<b>These are words bold.</b>");//html方法修改整个html元素,text()方法只修改文本
    10.myObj.hasOwnProperty(propname);//检查某个对象时候自身具有某个属性propname，有则返回true，反之false
    11.Math.random()产生一个0到1之间的随机数，包括0，不包括1
    12.Math.floor()获得最近的整数，Math.floor(Math.random()*10)+1，获得1到10之间随机整数。
    13.对象字面量申明对象/构造函数申明对象，调用函数时候，后边加括号，不加括号表示访问函数指针。
        var bike={
    "wheels":4,
    "engines":8,
    "seats":6
    };
    var bike=function(){
    this.wheels=4;
    this.engines=8;
    this.seats=5;};
    14.使用构造函数时候，用new对其进行调用
    var mybike=new bike();//mybike变为bike的实例
    15.map方法，可以迭代数组。Array.map(function(){return val*val})//数组每项变为原来的平方
    16.reduce累加器，以此与后边那项作用。
    singleVal = array.reduce(function(pre,aft){return pre*aft;});//数组所有值相乘。
    17.filter方法
    var newArray = oldArray.filter(function(val){return val<6;});//过滤之前数组中大于等于6的数值，只留下小鱼6的值。
    18.sort方法
    array.sort(function(a,b){  return b-a;});数组从大到小排序
    19.
    20.
    21.
    22.
    23.
    24.
    25.
    26.
    27.
    28.
    29.
    30.
</pre>
</div>
</body>
</html>