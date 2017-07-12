# 错误处理  

	try {
		var a,b,c=null;
		a = c.length;
		c=100;
	} catch(e){
		alert("出错了： "+e)
	}finally{
		console.log('finally')
	}

try块包括可能发生错误的代码块  
错误发生后,被catch块捕捉,e表示捕捉到的错误  
无论有没有错误,finally块一定会被执行  

如果没有错误
则执行  

	try{
	//...
	}
	finally{
	//...
	}

catch和finally不必都出现  

	try{}
	catch(e){}
	finally{}
	
	try{}
	catch(e){}
	
	try{}
	finally{}

