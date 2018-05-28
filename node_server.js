/*基于node的静态文件服务器
使用 npm i mime

将node_server.js与文件放同一目录
node node_server.js

*/
var http = require('http'),
	fs = require('fs'),
	querystring = require('querystring'),
	mime = require('mime'),
	path = require('path'),
	url = require('url');
var port = 9527;

function handleRequest(req,res){
	var requestUrl = req.url;
	var pathname = url.parse(req.url).pathname;
	pathname = decodeURI(pathname);
	//获取文件资源的绝对路径.
	var filePath = path.resolve(__dirname+pathname);
	console.log(filePath);
	//用mime库检测类型.
	/*
	var ext = path.extname(pathname);
	ext = ext?ext.slice(1):'unknown';
	*/
	//不知道类型的同一通'text/plain'
	var contentType = mime.getType(pathname)||'text/plain';
	fs.stat(filePath,(err,stats)=>{
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end(`<h1 style="position:absolute;margin-top:0;margin-left:0;margin-right:0;margin-bottom:0;">Not Found.</h1>`)
		}else if(stats.isFile()){
			//如果是文件,直接读取返回
			readFile(filePath,contentType);
		}else if(stats.isDirectory()){
			//输出当前目录所有文件
			var html = "<head><meta charset = 'utf-8'/></head><body><ul>";
			//读取目录
			fs.readdir(filePath,(err,files)=>{
				if(err){
					console.log('读取路径失败！')
				}else{
					//判断有没有找到index.html
					var flag = false;
					for(var file of files){
						if(file == ('index'||'index.html')){
							//找到之后结束for循环，直接输出文件内容
							readFile(filePath+(filePath[filePath.length-1]=="/"?"":"/"+'index.html'),'text/html');
							flag = true;
							break;
						}
						html += `<li><a href='${file}'>${file}</a></li>`;
					}
					if(!flag){
						html+='</ul></body>';
						res.writeHead(200,{'Content-Type':'text/html'})
						res.end(html);
					}
				}
			})
		}
		function readFile(filePath,contentType){
			res.setHeader('Content-Disposition','inline');
			// res.setHeader()
			res.writeHead(200,{'content-Type':(contentType+';charset=utf-8')});
			//创建文件流
			var stream = fs.createReadStream(filePath);
			stream.on('error',()=>{
				// res.writeHead(500,{'content-Type':contentType});
				res.end(`<h1 style="position:absolute;margin-top:0;margin-left:0;margin-right:0;margin-bottom:0;">500 Internal Server Error.</h1>`)
			});
			//输出文件流
			stream.pipe(res);
		}
	})
	console.log(pathname);
}

http.createServer(handleRequest).listen(port,()=>{
	console.log(`Server running at: localhost:${port}`);
})
