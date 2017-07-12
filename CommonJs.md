# CommonJS模块规范  

每个js文件都是一个模块,模块与模块之间相互独立,一个模块想要对外暴露变量用  
module.exports = variable;
一个模块想要引用其他模块暴露的变量,可以用  
var ref = require('module_name');

导出变量  

	用module.exports
	module.exports = {
	func1:func1,
	func2:func2
	}
	
	用exports  
	exports.func1 = func1;
	exports.func2 = func2;
	
**nodejs来了你挡都挡不住**  

fs模块  

读取文件  

	var fs = require('fs');
	fs.readFile('xxx.txt','utf-8',function(err,data){
		if(err){
		//...hangdle err
		}else{
		//do sth...
		}
	})

读取二进制文件的时候,回调函数data参数将返回一个Buffer对象,在nodejs中,Buffer对象就是数组(和普通数组不同)  
 
	Buffer对象可以和String对象转换  
	//Buffer->String  
	var text = data.toString('utf-8');
	//String->Buffer
	var buf = new Buffer(text,'utf-8');

同步读文件  
var data = fs.readFileSync('.../txt','utf-8');  
**同步就是简单,但是呵呵**  

写文件  

	var fs = require('fs');
	
	var data="new line in doc";
	fs.writeFile('xxx.txt',data,function	(err,data){
		if(err){
		//...handle err
		}else{
		//...handle with data
		}
	})

同步写文件(try块捕获异常)  
fs.writeFileSync('...txt',data);

获取文件或目录的信息  

fs.stat()

	fs.stat('...',function(err,stat){
		if(err){
		//hangdle err
		}
		else{
			console.log("isFile: "+stat.isFile());
			console.log("isFile: "+stat.isDirectory());
		if(stat.isFile()){
			console.log("isFile: "+stat.size);
			console.log("isFile: "+stat.birthtime);
			console.log("isFile: "+stat.mtime);
		}
		}
	})






















