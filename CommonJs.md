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

**stream模块**

流也是一个对象,data时间表示流的数据已经可以读取了,end时间表示这个流已经到了末尾,error时间表示出错了  

//打开一个文件流  

	var fs = require('fs');
	
	var rs = fs.createReadStream('xxx.txt','utf-/8');
	
	rs.on('data',function(chunk){
	console.log(chunk);
	})
	
	rs.on('end',function(){
	console.log('end');
	})
	
	rs.on('error',function(err){
	console.log('error'+err);
	})

写入文件流  

	var fs =require('fs');
	
	var ws1 = fs.createWriteStream('output.txt','utf-8');
	ws1.write('asdasdad\n');
	ws1.write(new Buffer('asdasd\n','utf-8'))
	ws1.write('end');
	ws1.end();
	
pipe()管道串接流  

	var fs = require('fs');
	
	var rs = fs.createReadStream('src.txt');
	var ws = fs.createWriteStream('output.txt');
	rs.pipe(ws);//相当于复制文件了
	
**http**  

request对象封装了HTTP的请求,
response对象封装了HTTP的响应  

最简单的一个服务器  

	var http= require('http');
	
	var server = http.createServer(function(request,response){
	console.log(request.method+": "+request.url);
	response.writeHead(200,{"Content-Type":"text/html"});
	response.end("<h1>Hello my friend.</1>")
	})
	
	server.listen(8080);
	console.log('server is running at 127.0.0.1:8080');

**url,path模块**  

var path = require('path');
//当前目录  
var workDir = path.resolve('.');
//组成完整的文件路径
var filePath = path.join(workDir,'pub','index.html')

一个完成的服务器  

	'use strict';
	
	var fs=require('fs'),
		url=require('url'),
		path=require('path'),
		http=require('http');
	
	var root = path.resolve(process.argv[2]||".");
	console.log("static root dir: "+root);
	
	var server = http.createServer(function(request,response){
		var pathname=url.parse(request.url).pathname;
		var filepath=path.join(root,pathname);
		fs.stat(filepath,function(err,stats){
			if(!err&&stats.isFile()){
				console.log('200 '+request.url);
				response.writeHead(200);
				fs.createReadStream(filepath).pipe(response);
			}else{
				console.log('404 '+request.url);
				response.writeHead(404);
				response.end('404 Not Found');
			}
		});
	});

**crypto模块(提供通用的加密和哈希算法)**  

	const crypto = require('crypto');
	
	const hash = crypto.createHash('md5');
	
	// 可任意多次调用update():
	hash.update('Hello, world!');
	hash.update('Hello, nodejs!');
	
	console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
	
	Hmac 算法  
	const crypto = require('crypto');
	
	const hmac = crypto.createHmac('sha256', 'secret-key');
	
	hmac.update('Hello, world!');
	hmac.update('Hello, nodejs!');
	
	console.log(hmac.digest('hex')); // 80f7e22570...
	
	AES  
	
	const crypto = require('crypto');
	
	function aesEncrypt(data, key) {
	    const cipher = crypto.createCipher('aes192', key);
	    var crypted = cipher.update(data, 'utf8', 'hex');
	    crypted += cipher.final('hex');
	    return crypted;
	}
	
	function aesDecrypt(encrypted, key) {
	    const decipher = crypto.createDecipher('aes192', key);
	    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
	    decrypted += decipher.final('utf8');
	    return decrypted;
	}

