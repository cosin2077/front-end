
#less学习笔记

1.less文件头申明 @charset "utf-8"; 
2.less可以申明变量@开头
	
	@vari = 35px;
	body{
		width:@vari;
	}
3.less可以混合(mixin),即已定义的样式可以直接以样式名的方式被引入到新样式中

	.box1{
		//....
	}
	.box2{
		.box1;
		//...
	}
4.样式可以带参数,也可以设置默认参数

	.box1(@w:200px,@h:300px,@b:20px){
		width:@w;
		height:@h;
		border:red solid @b;
	}
	.box2{
		.box1();
	}
5.匹配模式-预先定义好样式，然后根据传入参数，决定用哪个样式，适用于样式需要大量复用的场景

	.triangle(top,@border-width:10px,@color:red){
		border-width:@border-width;
		border-color:transparent transparent @color transparent;
		border-style:dashed dashed solid dashed;
	}
	.div{
		.triangle(top);
	}
6.变量可以计算

	@width:300px;
	.box{
		width:@width+15;
	}

7.嵌套规则 &代表上一层选择器

	.list{
		width:400px;
		height:300px;
		margin:0 auto;
		li{
			height:80px;
			width:120px;
		}
		a{
			float:left;
			text-decoration:none;
			&:hover{
				color:red;
			}
		}
	}
8.arguments包含传进来的所有参数

	.box1(@w:100px;@d:solid,@color:red){
		border:@arguments;
	}
9.避免编译 ~''

	.box{
		width:~'calc(100%-15%)';
	}
10.!important 关键字

	.box{
		.box-base !important;
	}