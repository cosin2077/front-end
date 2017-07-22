# CSS Series


关于属性选择器
[attr]  含有某个属性的元素
[attr=attr]  含有某个属性为attr的元素
[attr~=someattr]  属性中带有某个attr,attr必须是单个类  
[attr|=someattr]  含有以attr开头的类
[attr*=someattr]  属性中含有attr(广义的)

**插一句pm2开集群**  
不知道为啥,同时装了foreverjs和pm2,pm2默认是开启fork模式的,但是我这每次开始都是cluster模式,而且无法指定核心数,不知道是不是冲突的关系  

CSS3中定位机制,普通流,浮动和绝对定位  
行内框不能设置宽高,锤子防线内边距,边框和外边距  
,但可以设置**行高**  
**inline-block**
既可以像行内元素一样一次水平排列,又能设置宽高,以及锤子方向上的外边距和内边距  

**position:relative**
**相对于原来应该在的位置**,元素仍然占有原来的空间  

**position:absolute**
绝对定位,脱离文档流,相对于距离自己最近的已定位的祖先元素确定的,如果没确定,则可能是画布或html元素  
**position:fixed**  
固定定位,绝对定位的一种,固定在视图上  

浮动框不在普通文档流(被普通文档流无视了)  

	.clearfix:after{
		content:".";
		height:0;
		visibility:hidden;
		display:block;
		clear:both;
	}

background-size:  
1. 直接设置宽高,设置一个,另一个为auto
2. 以父元素设置百分比宽高,设置一个,另一个为auto
3. cover,背景覆盖所有,实际上是width:100%,得保证背景覆盖所有视口.
4. contain,实际上是max-width:100%,max-height:100%,总之得保证背景全部在视口中.

**div:nth-child(3);//作为某个元素的第三个div元素**  

