# ES6 笔记

Babel转码 

.babelrc 配置文件  

	{
	  "presets":[
	    "latest",
	    "stage-2"
	  ],
	  "plugins":[]
	}

安装babel-cli之后  

将src.js 便一直Wiebandle.js
babel src.js -o bandle.js

将src目录转到lib目录
bale src -d lib -s

***
let 申明的变量只在let所在代码块有效  
