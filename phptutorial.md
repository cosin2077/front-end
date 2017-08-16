<?php 
$x=6;
$y=9;
$z=$x+$y;
echo $z+"string";
 ?>
echo与print表示打印
php变量作用域:
local
global
static
parameter
函数外部定义的变量拥有全局作用域
任何部分要访问它的时候，使用关键字global
函数内部申明的变量是局部变量，只能在函数内访问到
PHP将所有的全局变量储存在$GLOBALS['varaname']的数组中
static 作用域，局部变量不被删除

echo——可以输出一个或多个字符串，可以包含html标签，字符串里边可以写变量！！
print——只允许输出一个字符串，返回总值为1,也能包含html标签
输出数组:{$arr[0]}

PHP数据类型
字符串String
整型Integer没有小数的数字，十进制，十六进制(0x--)，八进制(0--)
浮点型Float
布尔型Boolean
数组Array
对象Object
空NULL

var_dump()//返回变量的数据类型和值
memory_get_usage()//获取当前PHP消耗的内存
echo true//输出1
echo false//输出0
双引号里的变量会被当变量，单引号里边的变量会被当字符串!
$string = <<<GOD
长
字
符串
GOD;
变量没有值,被赋值为NULL,被unset(),都会被认为是NULL

class申明类对象

PHP常量
define()函数设置常量//提高可维护性,一个入口,避免重复定义
define('conan','welcome my friends');
define('conan','welcome my friends',true);//大小写不敏感
defined("PI")//判断常量PI有没有被定义,被定义了返回true,没被定义返回false.
PHP并置运算符 .(javascript中的+python中的,)
.把两个字符串连接在一起
$txt1="hello ";
$txt2="my friends";
echo $txt1.$txt2;

strlen()函数返回字符串的长度
strpos()返回查找结果的位置，没找到返回false

PHP_EOL换行符，兼容大平台

// 如果 $_GET['user'] 不存在返回 'nobody'，否则返回 $_GET['user'] 的值
$username = $_GET['user'] ?? 'nobody';
// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
PHP中三种数组
1. 数值数组，带有数字ID键的数组
2. 关联数组，带有制定键 对数组，每个键关联一个值
3. 多维数组，包含多个数组的数组
$car=array('ad','afvf','yhnj')
$car[0]//'ad'
$car[1]//'afvf'
$car[2]//'yhnj'
<? php
$car=array('ad','afvf','yhnj')
$car[0]//'ad'
$car[1]//'afvf'
$car[2]//'yhnj'
count($car)//3获取数组的长度
for($x=0;$x<count($car);$x++){
	echo $car[$x]."<br/>";
}
?>
关联数组是指分配给数组制定的键的数组
$conan=array("age"=>"35","gender"=>"M","job"=>"web");
或者
$conan['age']='35';
$conan['gender']='M';
$conan['job']='web';
哟嚯，键值对，有点像Object了呀
echo仅能出书字符串
print_r将一个变量信息输出
索引数组和关联数组
关联数组指的是键是字符串的数组
$arr=array(
"key1"=>"value1",
"key2"=>"value2"
)
遍历关联数组

foreach($conan as $x=>$y){
	echo "key=".$x.",value=".$y."<br/>";
}
foreach($array as value){
	echo
}
PHP可变函数
通过变量的值来调用函数
判断函数是否存在
if(function_exists())
class_exists()
file_exists()
属性申明关键字
public//公有,默认,外部可以访问
protected//受保护,继承后的对象可以访问
private//私有,只有内部可以访问
使用static修饰的方法,成为静态方法,静态方法不需要实例化对象,可以直接通过类名字直接调用,操作符为双冒号::
function __construct(){
	//构造函数,每次对象创建的时候调用
	parent::__construct();//子类有构造函数的时候,要调用父类的构造函数要显式调用.
}
function __destruct(){
	//析构函数,每次函数销毁实例的时候调用.
}
静态属性的调用
不允许 ->方法!
只能用 类名::方法名(self::$speed,parent::$speed)
如果构造函数定义成了私有方法,则不允许直接实例化对象了,这时候一般通过静态方法进行实例化.
当调用不存在的属性时候，使用__call实现重载
当调用不存在的静态方法的时候,使用__call Static实现重载
trim()去除两端空格
rtrim()去除右边空格
ltrim()去除左边空格
sprintf()//格式化字符串
implode('',$str);//合并字符串
explode('',$str);//分隔字符串
addslashes($str);//输出经过转义后的字符串

PHP图片添加水印技术!!!!!!我看到了好大一个机会!凑!!!!!!!!!!!!!

$con=mysql_connect('localhost','root',"passwd");//连接mysql数据库
mysql_select_db('hoteldb');//选择数据库
$sql ="insert into test(url) values("www.conans.top")";
mysql_query($sql);//插入sql语句
echo mysql_error();//显示mysql错误
mysql_close($con);//关闭数据库
mysql_query("set names 'utf8'");//设定字符集









sort()//升序排列
rsort()//降序排列
asort()//根据数组的值升序排列
arsort()//根据数组的值降序排列
ksort()//根据数组的键升序排列
krsort()//根据数组的键降序排列

PHP超级全局变量
$GLOBALS//包含了全部变量的全局组合数组，变量的的名字就是数组的键
$_SERVER//包含头信息(header)，路径(path),等信息的数组
<?php 
echo $_SERVER['PHP_SELF'].'<br/>';//当前执行脚本的文件名
echo $_SERVER['SERVER_NAME'].'<br/>';//服务器名字
echo $_SERVER['HTTP_HOST'].'<br/>';//主机名
echo $_SERVER['HTTP_REFERER'].'<br/>';//引导到当前页的地址
echo $_SERVER['HTTP_USER_AGENT'].'<br/>';//用户头信息
echo $_SERVER['SCRIPT_NAME'].'<br/>';//脚本名称
echo $_SERVER['GATEWAY_INTERFACE'].'<br/>';//CGI范本
echo $_SERVER['SERVER_ADDR'].'<br/>';//服务器所在IP地址
echo $_SERVER['SERVER_SOFTWARE'].'<br/>';//服务器标识
echo $_SERVER['SERVER_PROTOCOL'].'<br/>';//通信协议与版本
echo $_SERVER['SCRIPT_NAME'].'<br/>';//当前脚本
echo $_SERVER['REQUEST_METHOD'].'<br/>';//请求的方法
echo $_SERVER['REQUEST_TIME'].'<br/>';//请求开始的时间戳
echo $_SERVER['QUERY_STRING'].'<br/>';//查询字符串
echo $_SERVER['HTTP_ACCEPT'].'<br/>';//请求头中Accept项
echo $_SERVER['HTTP_ACCEPT_CHARSET'].'<br/>';//Accept-Charset项
echo $_SERVER['HTTTPS'].'<br/>';//HTTPS
echo $_SERVER['REMOTE_ADDR'].'<br/>';//用户IP地址
echo $_SERVER['REMOTE_HOST'].'<br/>';//用户主机名
echo $_SERVER['REMOTE_PORT'].'<br/>';//用户端口
echo $_SERVER['SCRIPT_FILENAME'].'<br/>';//当前执行脚本的绝对路径
echo $_SERVER['SERVER_ADMIN'].'<br/>';//服务器中admin
echo $_SERVER['SERVER_PORT'].'<br/>';//服务器端口号
echo $_SERVER['SERVER_SIGNATURE'].'<br/>';//
echo $_SERVER['SCRIPT_URI'].'<br/>';//
 ?>
$_REQUEST//用于手机HTML表单提交的数据
$_POST//收集表单数据method="post"
$_GET//收集表单数据method="get"
$_FILES//
$_ENV//
$_COOKIE//
$_SESSION//

PHP循环
while
do...while
for
foreach//根据数组中每个元素来循环代码块
$x=array('a','b','c','d','e');
foreach( $x as $v){
	echo $v;//abcde
}

PHP真正威力来了啊
PHP函数
我艹，更JavaScript一样一样的啊

PHP魔术变量

__line__//当前行号
__FILE__文件完整路径和文件名
__DIR__//等价于dirname(__FILE__)文件所在目录
__FUNCTION__//返回该函数被定义时的名字
__CLASS__//返回被定义时类的名字
__TRAIT__//trait的名字
__METHOD__//类的方法名
__NAMESPACE__//当前命名空间的名称

PHP命名空间为解决PHP内部的名字冲突与创建别名
定义命名空间
<?php 
declare(encoding='utf-8');
namespace myproject\Sub\mylevel;//子命名空间
namespace myproject2;
namespace myproject3;
?>

PHP面向对象
new 操作符来实例化该类的对象

PHP构造函数
哦，原来是定义的类的基本方法
function __construct(){
	//...
}
析构函数
function __destruct(){
	//对象结束其生命周期时，自动执行析构函数
}
继承
class child extends parent{
	//
}
访问控制
public//公有
protected//受保护
private//私有

接口
常量
抽象类

PHP表单处理
$_GET['username']//获取username
$_POST['passsword']//获取password

preg_match('/regexp/',$var)
preg_match进行正则表达式匹配

PHP data()函数
echo data(Y-m-d);//2016-12-19

PHP包含文件include和require

PHP文件处理
fopen()函数用于在PHP中打开文件
$file = fopen('123.txt','a+') or exit('unable to open this file');
fclose($file)//关闭文件
feof($file)//是否达到文件末尾
fget()//逐行读取文件
fgetc()//逐字符读取文件

PHP文件上传

PHP Cookie
用户识别
setcookie('name',"conan",time()+72000);
$_COOKIE用于取回cookie的值
isset()用来确认是否
删除Cookie直接设置
setcookie('user',time()-3600)//设置cookie过期一小时

PHP Session会话
$_SESSION['view']=1//储存与取回Session变量
销毁session数据
unset($_SESSION['view'])
session_destory()

PHP发送邮件
mail($to,$subject,$message,$from,$headers)

PHP错误处理
创建自定义错误处理器
function myError($errno,$errstr){
	echo "<b>Error:</b> [$errno]$errstr";
	echo "脚本结束"；
	die();
}
设置错误处理程序
set_error_handler('myError');
触发错误
trigger_error('Error happened')
通过E-Mail发送错误消息
function myError($errno,$errstr){
	echo "<b>Error:</b> [$errno]$errstr";
	echo "已经通知网站管理员！";
	error_log("<b>Error:</b> [$errno]$errstr",1,"conanskyforce@163.com","from:conans@163.com");
}
set_error_handler('myError',E_USER_WARNING);
trigger_error('failed!',E_USER_WARNING);

PHP JSON
json_encode()//对变量进行JSON编码
json_decode()//对JSON解码转成PHP
json_last_error()//返回最后发生的错误

MVC构架
MVC
|
|--libs
|  |
|  |--Controller
|  |     |--testController.class.php
|  |--Model
|  |	 |--testModel.class.php
|  |--ORG
|  |
|  |---View
|        |--testView.class.php
| 
|--config.php
|
|--index.php





















