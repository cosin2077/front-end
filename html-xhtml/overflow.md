####overflow知识点
	visible:默认
	hidden:超出部分隐藏
	scroll:滚动
	auto:自动
	inherit:继承
	
	overflow-x:
	overflow-y:
	当两者一样时，等价于overflow
	不同时，等价于overflow:auto
	默认滚动条均来自<html\>
	要去除默认滚动条
	html{overflow:hidden;}
	滚动高度
	st=document.body.scrollTop||document.documentElement.scrollTop
	滚动条会占用高度和宽度
	text-overflow:ellipsis;overflow:hidden;文字溢出省略  
