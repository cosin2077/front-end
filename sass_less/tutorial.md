##less css基础教程  
CSS预处理器，提供复用机制、减少冗余代码、提高代码可维护性的工具。  
**1.变量**  
@variableName:value;定义变量并复制，之后可以调用    
还能够将变量名定义为变量，变量有可以参与计算  
abc.less文件

	@textColor: white;  
	@bgColor: #333;  
	@border: 2px solid red;  
	@content: "This is the sample content from less";  
	  
	// variable example  
	  
	#content p {  
	    color: @textColor;  
	    background-color: @bgColor;  
	    border: @border;  
	}  
abc.css文件  

	#content p {  
	  color: #ffffff;  
	  background-color: #333333;  
	  border: 2px solid #ff0000;  
	}  
	#content p:after {  
	  content: "This is the sample content from less";  
	}  
**2.混合模式**  
将一个css样式混合到另外一个css样式当中去  
abc.less  

	.myStyle {  
	  color: #333;  
	  border: 1px solid gray;  
	}  
	  
	#myDiv {  
	  .myStyle  
	}  
abc.css

	.myStyle {  
	  color: #333;  
	  border: 1px solid gray;  
	}  
	  
	#myDiv {  
	  color: #333;  
	  border: 1px solid gray;  
	}  
**3.嵌套**   
abc.less 

	#myDiv {  
	  background-color: black;  
	  a {  
	    color: red;  
	  }  
	    
	  p {  
	    color: white;  
	  }  
	}  

abc.css 

	#myDiv {  
	  background-color: black;  
	}  
	  
	#myDiv a {  
	  color: red;  
	}  
	  
	#myDiv p {  
	  color: white;  
	}  
*****
abc.less

	/*========= 定义一个类 ===========*/
	.roundedCorners(@radius:5px) {
		-moz-border-radius: @radius;
		-webkit-border-radius: @radius;
		border-radius: @radius;
	}
	/*＝＝＝＝＝＝＝＝＝＝ 定义的类应用到另个一个类中 ＝＝＝＝＝＝＝＝＝＝＝*/
	＃header {
		.roundedCorners;
	}
	#footer {
		.roundedCorners(10px);
	}
abc.css 

	#header {
			-moz-border-radius:5px;
			-webkit-border-radius:5px;
			border-radius:5px;
		}
		#footer {
			-moz-border-radius:10px;
			-webkit-border-radius:10px;
			border-radius:10px;
		}
less  

	a {
			color: red;
			text-decoration: none;
			&:hover {
				color: blue;
				text-decoration: underline;
			}
		}
css  

	a {
			color: red;
			text-decoration: none;
		}
		a:hover {
			color: blue;
			text-decoration: underline;
		}
其中&表示这个元素或这个元素的伪类，没有则表示后代元素，下面例子  
less:

	#header {
				&.fl{
					float: left;
				}
				.mln {
					margin-left: 0;
				}
			}
css:

	#header.fl{float: left;}
	#header .mln {margin-left: 0;}//注意空格
**4.Color Functions**  

	lighten(@color, 10%);     // return a color which is 10% *lighter* than @color
	darken(@color, 10%);      // return a color which is 10% *darker* than @color
	
	saturate(@color, 10%);    // return a color 10% *more* saturated than @color
	desaturate(@color, 10%);  // return a color 10% *less* saturated than @color
	
	fadein(@color, 10%);      // return a color 10% *less* transparent than @color
	fadeout(@color, 10%);     // return a color 10% *more* transparent than @color
	
	spin(@color, 10);         // return a color with a 10 degree larger in hue than @color
	spin(@color, -10);        // return a color with a 10 degree smaller hue than @color		
**5.命名空间**  
有这样一个库  

	#bundle {
		  .button () {
		    display: block;
		    border: 1px solid black;
		    background-color: grey;
		    &:hover { background-color: white }
		  }
		  .tab { ... }
		  .citation { ... }
		}
如果实际操作中header中a样式和.button一样，那么久可以这样操作  

	#header a {
	color:orange;
	#bundle>.button;
	}
**6.变量范围**  
就近原则，本身没见就从父级元素找  
**7.注释**  
可以像js中一样//，也可以用/**/方式  

**特别强调一点，客户端使用Less,一定要注意，“Less样式文件一定要放在less脚本文件之前”。**
***
##sass教程  
sass有两种后缀名文件，一种后缀名为sass，不使用大括号和分号，另一种就是我们这里使用的scss文件。sass严格缩进来代替大括号  
**导入**  
所有的sass导入文件都可以忽略后缀名.scss。一般来说基础的文件命名方法以_开头，如_mixin.scss。这种文件在导入的时候可以不写下划线，可写成@import "mixin"  
**变量**  
以$开头，后边紧跟变量名
$variableName:value;//一样一样的  
默认变量后边加!default  
$variableName:value!default;  
特殊变量(变量作为属性)以#{$variable}形式使用  
多值变量  
list  
nth($var,$index)来取值  
map  
map-get($map,$key)来取值  
**嵌套**  

	/sass style
	//-------------------------------
	#top_nav{
	  line-height: 40px;
	  text-transform: capitalize;
	  background-color:#333;
	  li{
	    float:left;
	  }
	  a{
	    display: block;
	    padding: 0 10px;
	    color: #fff;
	
	    &:hover{
	      color:#ddd;
	    }
	  }
	}
	
	//css style
	//-------------------------------
	#top_nav{
	  line-height: 40px;
	  text-transform: capitalize;
	  background-color:#333;
	}  
	#top_nav li{
	  float:left;
	}
	#top_nav a{
	  display: block;
	  padding: 0 10px;
	  color: #fff;
	}
	#top_nav a:hover{
	  color:#ddd;
	}
&也表示父元素选择器  
**跳出嵌套**  

	@at-root (without: ...)和@at-root (with: ...)
	默认@at-root只会跳出选择器嵌套，而不能跳出@media或
	@support，如果要跳出这两种，则需使用@at-root (wit
	hout: 	media)，@at-root (without: support)。这
	个语法的关键词有四个：all（表示所有），rule（表示常
	规css），media（表示	media），support（表示support，
	因为@support目前还无法广泛使用，所以在此不表）。我们
	默认的@at-root其实就是@at-root (without:rule)。
**混合**  
sass中使用@mixin来申明混合，可以传递参数，参数名以$符号分开，多个参数以逗号分开。申明@mixin通过@include来调用  
