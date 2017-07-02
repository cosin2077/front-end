#PHP小试牛刀之一己之见

##1.从类开始

	class Car{
		public $name="宾利";
		public function getName(){
			return $this->name;
		}
		public function setName($v){
			$this->name=$v;
		}
	}
	
	$car = new Car();//实例化一个$car对象
	$car->getName();//获取name属性
	$car->setName("Ferrari");//设置name属性

类的属性和方法的访问控制  

	public  外部能直接访问到  
	protected  自身以及子类与父类  
	private  只能自身访问  
static  表示静态方法,不需要实例化对象就能直接访问到, 操作符为::.

	class Car{
		public static function getName(){
			return "车子";
		}
	}
	Car::getName();//即为"车子";

类中__construct()定义构造函数，每次对象实例化的时候，都会使用这个函数  

	class Car{
		function __construct(){
			echo "被调用了";
		}
	}
	子类如果定义了__construct值不会调用父类的__construct,
	如果需要调用父类的__construct方法,需要显示调用  
	parent::__construct()
析构函数(被销毁的时候调用)

	class Car{
		function __destruct(){
			echo "被销毁了";
		}
	}
	unset(new Car());//销毁创建的对象实例,调用析构函数

**static关键字**  
静态属性和静态方法何以在不实例化的情况下调用,  
直接使用

	类名::方法名
就可以了  
静态属性不允许直接使用 ->操作符调用  
只能用双冒号了嘛  
静态方法也可以通过变量来静态调用  
静态方法中不允许使用$this，可以使用self, parent, static  

访问控制

	public  公有
	protected  受保护，自身及父子类
	private  只有自身能访问

类的属性必须定义为公有、受保护、私有、其中之一，var定义则为公有  
属性定义不加关键字则为公有  
如果构造函数定义成为了私有方法，则不允许直接实例化对象了，这个时候一般采用静态方法进行实例化

	class Car{
		//定义私有构造函数方法则不能直接实例化
		private function __construct(){
			echo "实例被创建了";
		}
		private static $_obj=null;
		private static function createInstance(){
			if(empty(self::$_obj)){
				self::$_obj = new Car();
			}
			return self::$_obj;
		}
	}

类属性和方法的重载(通过魔术方法，动态的创建、读取，判断和销毁)  

	__set
	__get
	__isset
	__unset
	
	class Car{
		function __set($k,$v){
			$this->$k=$v;
		}
		function __get($k){
			return $this->$kv;
		}
		function __isset($k){
			if(isset($k)){return true}
			return false;
		}
		function __unset($k){
			unset($this->$k)
		}
	}

	== 用于判断同一个对象的实例
	=== 全等判断是不是同一个对象的引用  

	clone 可以复制对象，会调用类的 __clone方法  

	serialize 方法可以将对象序列化为字符串，便于传输或储存  
	unserialize 方法将字符串反序列化为对象

PHP字符串

1. '我就是字符串'  
2. "我也是字符串"  
3. <<<whattheheck  
我特么还是字符串  
whattheheck;
***
	双引号中可以包含对象,单引号中的都被认为是字符串 
	trim($str);//去掉空格   
	ltrim($str);//去左侧空格  
	rtrim($str);//去右侧空格  
	strlen($str);//获取字符串长度  
	mb_strlen($str,"UTF-8");//获取其他编码的字符串长度  
	substr($str,start,nums);//  
	mb_substr($str,start,nums,encoding);  
	strpos($str,string[,startpos]);
	str_replace(find,new,$str);
	sprintf("%06.3f",$num);//将$num转换为至少6为数,小数点后保留3为数
	implode('',$arr);//将数组以制定字符组合成字符串  
	explode('',$str);//将字符串以制定字符串风格成数组
	addslashes($str);//对字符串进行转义处理  

##正则表达式

preg_match(reg,$str)匹配到了返回
php里边，分隔符可以是 /、#、~  
\表示转义   
$reg = '/super/ig';//i表示不区分大小写,g表示全局匹配  
元字符  
	
	\w 字母、数字、或下划线
	\s 空白符
	\d 数字
	\ 转义  
	^ 以...开始  
	$ 以...结束
	. 换行符外任意字符  
	[] 组内任意  
	| 可选分支  
	()  子组  
	?  0或1  
	* 0或多
	+ 1或多
	{} 表示范围  

\s  任意空白字符  
[^\s] 任意非空白字符  

	preg_match($reg,$str,$matches);
	$matches[0];//匹配到的字符串    
	$matches[1];//匹配到的第一个子组  

	preg_match_all();//匹配所有的结果  

	<?php
	$str = '主要有以下几个文件：index.php, style.css, common.js';
	//将目标字符串$str中的文件名替换后增加em标签
	$reg = array("/\w+\.\w+/");
	$repl = array('<em>$0</em>');
	$str = preg_replace($reg,$repl,$str);
	echo $str;
	
##COOKIE  

任何从浏览器返回的cookie, PHP都会将它自动的存储在$_COOKIE的全局变量之中, 因此我们可以通过$_COOKIE['key']的形式来去读某个cookie的值

设置cookie  

	setcookie("cookie_name","cookie_value",time()
	+3600,"/","geekhub.info");设置cookie,1小时后失效,
	整个网站都有效, geekhub.info 域名有效.

还有一个设置cookie的函数setrawcookie(value不会自动urlencode,需要手动urlencode)

	setrawcookie('cookie_name',urlencode($value),...)

	删除cookie 
	setcookie('test',"",time()-1);
	
	header("Set-Cookie:test=135534;expires=".gmdate('D, d M Y H:i:s \G\M\T',time()-1)"")

cookie 储存于客户端，用于实现与服务端的通信，让服务端识别客户端  
特点

	但是相对不是太安全
	单个cookie最大只能4k
	每次请求都要进行网络传输，占用宽带
	
	session 是将用户的会话数据存储在服务端  
	session_start();开启session    
	$_SESSION进行session的读写   

	session_start();
	$_SESSION['name'] = 'jobs';
	$_SESSION['name'];//'jobs;

	删除与销毁session  
	unset删除session 
	unset($_SESSION['name']);//删除name
	session_destory();//session里边数据全部删除 ,但是session_id仍存在  

一般情况用户的登录 信息既可以存在cookie中也可以存在session中  
但cookie只支持字符串加密,而session支持对象,数组等类型  

##PHP文件系统  

文件读取
>$content = file_get_contents('../xx.txt');//将读取文件保存到一个字符串中  
>$content = file_get_contents('../xx.txt',null,null,100,500)控制读取文件的开始点以及长度

	$fp = fopen('../xx.txt','rb);
	while(feof($fp)){
		echo fget($fp);
	}
	fclose($fp);

	判断文件是否存在  
	file_exists();//也可以判断目录  
	is_file();//判断是否是文件  
	is_writable();//判断是否可写
	is_readable();//判断是否可读

	获取系统文件的属性  
	fileowner()  
	filectime()  
	filemtime()  
	fileatime()  

##日期和时间  

	time();//获取unix时间戳
	date();//获取当前的日期  
	date('Y-m-d',time())
	strtotime('2017-9-9');//获取某个日期的时间戳  
	gmdate 返回格林威治标准时间(GMT),而我们是处在东八区,GMT+8
	date_default_timezone_set("Asia/Shanghai");//默认时区设在上海
	echo date('Y-m-d H:i:s',time());
	2017-07-01 17:28:00
	echo gmdate('Y-m-d H:i:s',time());
	2017-07-01 09:28:00

##PHP 图像处理库--GD

	$img = imagecreatetruecolor(100,100);//创建一个100*100的真彩色空白画布  
	$color = imagecolorallocate($img,0xFF,0x00,0x00);//通过RGB设定画笔的颜色  
	imageline($img,0,0,100,100,$red);//绘制线条  
	header('Content-Type: image/png');  
	imagepng($img);//输出图片   
	imagepng($img,'img.png');输出并保存图片  
	imagedestory($img);//删除图片,释放内存.  
	
	GD库常用于图形的各种操作,常有绘制线条,背景填充,画矩形,绘制文字等.  
	imagestring($img,14,25,25,"Hello Me",$red);
	$filename="img.png";
	imagepng($img,dirname(__FILE__)."/".$filename,86);
	imagejpeg($img,"img.jpeg");
	imagegif($img,"img.gif");

###PHP生成图像验证码  

	$img = imagecreatetruecolor(100,40);
	$black = imagecreateallocate($img,0x00,0x00,0x00);
	$green = imagecreateallocate($img,0x00,0xFF,0x00);
	$white = imagecreateallocate($img,0xFF,0xFF,0xFF);
	imagefill($img,0,0,$white);
	//随机生成验证码 
	$code = "";
	for($i=0,$i<4,$i++){
		$code.=rand(0,9);
	}
	imagestring($img,25,12,12,$code,$black);
	//加入噪点  
	for($i=0;$i<1000,$i++){
		imagesetpixel($img,rand(0,100),rand(0,1000),$black);
		imagesetpixel($img,rand(0,100),rand(0,1000),$grenn);
	}
	//输出验证码
	header("Content-Type: image/png");
	imagepng($img);
	imagedestory($img);

###给图片添加水印  

	$url = "http://www.iyi8.com/uploadfile/2014/0521/20140521105216901.jpg";
	$content = file_get_content($url);
	$filename = "tmp.png";
	file_put_content($filename,$content);
	$url="http://wiki.ubuntu.org.cn/images/3/3b/Qref_Edubuntu_Logo.png";
	file_put_content('logo.png',file_get_content($url));
	//开始添加水印
	$im = imagecreatefromjpeg($filename);
	$logo = imagecreatefrompng('logo.png');
	$size = getimagesize('logo.png');
	imagecopy($im,$logo,15,15,0,0,$size[0],$size[1]);
	header("Content-Type: image/png");
	imagejpeg($im);

	try{
		if(xxx){
		//....
		throw new Exception("出错了");
		}
	}
	catch(Exception $e){
		echo $e->getMessage();
	}
	
	异常处理之将错误记录在日志内
	try{
		//...
	}catch(Exception $e){
		$msg = "Error:".$e->getMessage()."\n";
		$msg.=$e->getTraceAsString()."\n";
		$msg.='所在行号：'.$e->getLine()."\n";
		$msg.='所在文件：'.$e->getFile()."\n";
		//将异常信息记录到错误日志中
		file_put_contents('error.log',$msg);
	}

##PHP与数据库  

	function_exists("mysql_connect");//检测是否有mysql_connect函数(即是否支持数据库)  

数据库不同的扩展  

	mysql扩展  
	$link = mysql_connect("localhost","root","passwd");
	
	mysqli扩展  
	$link = mysqli_connect("localhost","root","passwd");
	
	PDO扩展  
	$dsn = "mysql:dbname =testdb;host=127.0.0.";
	$user = "dbuser";
	$password = "passwd";
	$dbh = new PDO($dsn,$user,$password);

###与mysql数据库的连接  
	$host = "127.0.0.1";
	$user = "conan";
	$pass = "201010";
	mysql_connect($host,$user,$pass);//通过host,name,password连接数据库  
	mysql_select_db("testdb");//选择数据库  
	mysql_query("set names 'utf8'");//设置字符编码  

	$res = mysql_query("SELECT * FROM user LIMIT 2");//进行数据库查询,返回一个资源句柄  
	$row = mysql_fetch_array($res);
	$name="李雷";
	$age="22";
	$class"三年一班";
	$sql = "INSERT INTO user(name,age,class) values('$name','$age','$class')"
	mysql_query($sql);
		
	mysql查询
	$sql="SELECT * FROM user LIMIT 5";
	$res = mysql_query($sql);
	$array = mysql_fetch_array($row);

	mysql_fetch_row(...)<=>mysql_fetch_array(...,MYSQL_NUM);
	mysql_fetch_assoc(...)<=>mysql_fetch_array(...,MYQSL_ASSOC);

	PHP查询分页数据  
	
	$page = 2;
	$pagesize=8;
	$m = ($page-1)*$pagesize;
	$sql = "SELECT * FROM user LIMIT $m,$pagesize";
	$result = mysql_query($sql);
	$data = array();
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		$data[] = $row;
	}
	
	数据库的更新与删除  
	$sql = "update user set name="666",where id=2 limit 1";
	$sql = "delete from user where id=2 limit 1";
	mysql_affected_row();获取更新过的数据行数,没有变化则为0;

	








