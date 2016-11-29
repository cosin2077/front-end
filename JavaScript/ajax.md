##ajax
全称 Asynchronous JavaScript And XML  
异步JavaScript和XML  
部分刷新网页  
  
**XMLHttpRequest对象**  
用于后台与服务器交换数据  

	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();//IE7+,...
	}else{
	request = new ActiveXObject("MIcrosoft.XMLHTTP");//IE5,IE6
	}

ajax HTTP请求(hyper text transport protocol)  
无状态协议，不保留持久的连接

	7个步骤
	1.建立TCP链接
	2.Web浏览器向Web服务器发送命令请求
	3.Web浏览器发送请求头信息
	4.Web服务器应答
	5.Web服务器发送应答头信息
	6.Web服务器向浏览器发送数据
	7.Web服务器关闭TCP连接

一个HTTP一般由四个部分组成
1.HTTP请求的方法，比如是GET还是POST  
2.正在请求的URL
3.求情头，包含一些客户端环境信息，身份验证等等
4.请求正文，提交查询字符串、表单信息等

GET与POST

GET:一般用于信息获取，使用url传递参数，发送信息数量有限制2000字符  幂等

POST:用于修改服务器上的资源，对发送信息无限制

HTTP请求  
一个HTTP相应一般由三部分组成  
1.一个数字和文字组成的状态码，用来显示请求成功还是失败
2.相应头，响应头也和请求头一样包含许多有用的信息，例如服务器类型，日期与实践，内容长度和类型等
3.相应体，也就是响应正文

状态码：
由三位数字构成
1XX 表示接收到Web请求，正在进一步处理
2XX 200 OK 成功
3XX 重定向 表示请求没有成功 
4XX 客户端错误，表示客户端提交请求有错误
5XX 服务器错误，不能处理对应请求 比如500

***
**发送请求：**

	open(method,url,async)
	send(string)
	
	request.open("GET","http://www.baidu.com",true);
	request.setRequestHeader({"Referer":"http://www.imooc.com/video/5648",
	"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36"});
	request.send("name=conan&sex=male");
		
**获取响应：**

	responseText:获取字符串形式的响应数据
	responseXML:获取XML形式的响应数据
	status和statusText:以数字和文本形式返回HTTP状态码
	getAllResponseHeader():获取所有的响应报头
	getResponseHeader():查询响应中某个字段的值
	
readyState属性

	0请求未初始化，open还没被调用
	1服务器连接已建立，open已调用
	2请求已处理，接到头信息
	3请求处理中，收到响应处理
	4请求已完成，响应已就绪，响应完成了

	var request = new XMLHttpRequest();
	request.open("GET","http://www.baidu.com",true)
	request.send();
	request.onreadstatechange = function(){
	if(request.readyState===4&&request.status===200){
	//do sth request.responseText
	}
	}

JSON: JavaScript Object Notation(轻量级文件交换格式)

解析JSON
eval()会直接执行JSON中的表达式，代码
而JSON.parse()不会

JSONLint格式化网站

服务器，客户端前后约定使用JSON格式，
客户端
var data = JSON.parse(request.responseText)
data.msg  
data.success  
***
**jQuery中使用ajax**
  
$.ajax([setting])  
 
type:类型,"GET"或"POST"默认为"GET"  
url:发送请求的地址  
data:是一个对象，发送到浏览器的数据  
dataType:预期返回的数一般为json  
success:是一个方法，返回成功后的函数，传入返回后的数据    
error:是一个方法，失败后调用此函数，传入XMLHttpRequest对象  

**跨域**
-----------------------------------------------------
|http://| www |. |abc.com|:|8080|/|scripts/jquery.js|  
|协议   |子域名|  | 主域名 | |端口号|请求资源地址      |
协议，子域名，主域名，款口号中任意一个不相同的时候，都不算同域  
不同域之间互相请求，就叫跨域（为了安全所做限制）  
解决跨域问题：  
1.代理
2.jsonp,只能GET请求

	<script>
	fcuntion jsonp(json){
	alert(sjon["name"]);
	}
	</script>
	<script src="xxx.json.js"></script>
3.XHR2(XMLHttpRequest Level2)
服务器端做点小小改造：  
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');




