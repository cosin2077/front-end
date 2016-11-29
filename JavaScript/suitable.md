##关于浏览器兼容的种种


ajax中

	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();//IE7+,...
	}else{
	request = new ActiveXObject("MIcrosoft.XMLHTTP");//IE5,IE6
	}
浏览器可视区域宽度与高度

	window.innerWidth和window.outerHeight
	var w=document.documentElement.clientWidth||document.body.clientWidth；
	var h=document.documentElement.clientHeight||document.body.clientHeight；

