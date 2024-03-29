#Structure Query Language

net start mysql57//启动mysql57服务
net stop mysql57//停止mysql57服务
my.ini 在programData文件夹server 中

mysql登录参数
mysql -u root -p
-D 打开指定数据库
-h 服务器名称
-p 密码
-P 端口号
-u 用户名
-v 输出版本信息
mysql退出:
quit
exit
\q
mysql提示符定义
mysql -u root -p prompt \h
mysql>prompt 自定义
\D 完整日期
\d 当前数据库
\h 服务器名称
\u 当前用户

MySQL操作
关键字，函数名大写，
数据库名称，表名称，字段名称全部小写
SQL语句必须分号结束
select version();当前mysql版本
select now();当前mysql时间
select user();当前登录到mysql的用户
创建数据库：
CREATE { DATABASE | SCHEMA } [ IF NOT EXISTS] db_name 
[DEFAULT] CHARACTER SET [=] charset_name
CREATE DATABASE t1;//创建t1数据库
CREATE DATABASE IF NOT EXISTS t1;//不会报错，只会警告
CREATE DATABASE IF NOT EXISTS t2 CHARACTER SET =gbk;//创建t2数据库，编码为gbk
SHOW {DATABASES|SCHEMAS}//
SHOW CREATE DATABASE t2;//utf-8,查看t2创建时候的编码
SHOW CREATE DATABASE t1;//gbk
修改数据库：
ALTER {DATABASE|SCHEMA} [db_name] [DEFAULT] CHARACTER SET [=]
charset_name
ALTER DATABASE t2 CHARACTER SET = UTF8
删除数据库：
DROP {DATABASE|SCHEMA} [IF EXISTS] db_name;
DROP DATABASE t1;//删除t1数据库
SHOW WARNINGS://现实错误
************
1.数据类型：
整数型：
1 tinyint
2 smallint
3 mediumint
4 int
8 bigint
浮点数：
1.float(m,d)//m数字总位数，d为小数点后边的位数
2.double(m,d)//

2.日期和时间
1 YEAR 
3 TIME 
3 DATA 
8 DATATIME 
4 TIMESTAMP 

3.字符型
CHAR(M)
varchar(m)
tinttext
tinttext
longtext
enum()
set()
***********************
USE conan;//选择conan数据库
SELECT DATABASE();//现实当前使用的数据库
database修改名称的时候得先导出再修改

CREATE TABLE table_name(
	id inalt(3) NOT NULL,//不谢默认允许可以为NULL
	name varchar(8),
	password varchar(20));
//创建一条表，一共有3列，列名称，列列类型

CREATE TABLE tb1(
	username varchar(20),
	age TINYINT UNSIGNED,//UNSIGNED表示没有负数
	salary FLOAT(8,2) UNSIGNED
	);


SHOW TABLES;//显示表
SHOW COLUMNS FROM tb1;//看tb1有哪些列
SELECT * FROM tb1;//看添加的数据
修改表的名字
alter table table_name rename to table_name2;
或者：
rename table table_name to table_name2

alter table table_name2 add email varchar(255) not null;//追加一天信息上去
alter table table_name2 change id newdid int(3);
alter table table_name2 drop email;//删除字段
drop table table_name2;//删除表

show tables from somedatabase//显示某个数据库中的表

describe table_name2;//显示表结构
SHOW COLUMNS FROM table_name2;//现实table_name2表中的列

#INSERT
向表中写入记录
INSERT [INTO] table_name [(col_name,...)] VALUES(val,...)

INSERT table_name2 VALUES('jhon',25,5413.12);//不指定列则都得赋值
INSERT table_name2(username,salary) VALUES("kyte",2354.2);//指定列可以依次赋值

SELECT expr,... FROM table_name
SELECT * from tb1;//

AUTO_INCREMENT
自助编号，且必须与主键组合使用，默认为1，每次增量为1

MYSQL主键约束 PRIMARY KEY

CREATE TABLE tb2(
	id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,//自助编号，且必须与主键组合使用
	username varchar(25) NOT NULL 
	);

UNIQUE KEY//唯一约束
CREATE TABLE tb3(
	id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(25) NOT NULL UNIQUE KEY,
	age TINYINT 
	);

CREATE TABLE tb4(
	id SAMLLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(20) NOT NULL UNIQUE KEY,
	AGE ENUM('1','2''3') DEFAULT '3'//不写，默认就是3
	);
约束：
NOT NULL//非空约束
PRIMARY KEY//主键语速
UNIQUE KEY//唯一语速
DEFAULT//默认约束
FOREIGN KEY//外键约束

外键约束
FOREIGN KEY (id) REFERENCE mistar (url) ON DELETE CASCADE
ON SET NULL
ON RESTRICT
ON NO ACTION
DEFAULT NOT NULL只有列级约束
表级约束只能在列定义之后运行(PRIMARY KEY,UNIQUE KEY,FOREIGN KEY)



MYsql数据表默认存储引擎
default-storage-engine=INNODB

有外键的表，为子表，子表所参照的表为父表
引擎为INNODB
相同数字类型，字符可以位数不同
添加约束：
ALTER TABLE tb1 ADD PPRIMARY KEY (id)//添加主键约束
ALTER TABLE tb1 ADD UNIQUE (name)//添加唯一约束
ALTER TABLE tb1 ADD FOREIGN KEY (pid) REFERENCES tb0(id)//当前表中的pid对应到tb0表中的id字段
ALTER TABLE tb1 ALTER [SET DEFAULT xxx|DROP DEFAULT]//添加删除默认约束

删除约束：
ALTER TABLE tb1 DROP PRIMARY KEY//删除主键约束
ALTER TABLE tb1 DROP INDEX username//删除唯一约束
ALTER TABLE tb1 DROP FOREIGN KEY users_ibfk_2(CONSTRAINT 'users_ibfk_2');//通过SHOW CREATE TABLE tb1;查看
修改数据表：

alter table tb1 modify id SAMLLINT UNSIGNED not null first;
ALTER TABLE tb1 CHANGE ID NEWID SMALLINT UNSIGNED NOT NULL first;

记录的增删改查：
插入：
INSERT table_name[()] VALUES(.,.,...)

CREATE TABLE userinfo(
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(20) NOT NULL,
	password VARCHAR(32) NOT NULL,
	age TINYINT UNSIGNED NOT NULL DEFAULT 10,
	sex BOOLEAN
		);
INSERT userinfo VALUES(NULL,"CONAN",'201010',25,1);
INSERT userinfo VALUES(DEFAULT,"STEVE","123456",32,1);
INSERT userinfo VALUES(NULL,"bill",'111111',29,1);
INSERT userinfo(username,password,age) VALUES('Kate','222222','29') 
ALTER TABLE userinfo change age age TINYINT UNSIGNED DEFAULT 10;
INSERT userinfo(username,password) VALUES('stewart','333333');
INSERT userinfo VALUES(NULL,'hathway',md5('444444'),DEFAULT,NULL),(NULL,'rose','29',DEFAULT,NULL);
INSERT userinfo SET username="lightwins",password="555555";

更改字段值：
UPDATE userinfo SET age=age-5;
UPDATE userinfo SET age=age+id,sex = 0;
UPDATE userinfo SET age=age-100 WHERE id%2=0;
删除记录：
DELETE FROM userinfo WHERE id=9;

SELECT查找操作：查询表达式
SELECT id,username from userinfo;
SELECT id as uid,username as uname from userinfo;//uid,uname为别名

WHERE 表达式
对记录进行过滤，如果没有指定WHERE 子句，则显示所有记录。
在WHERE表达式中，可以使用MySQL支持的函数或运算符。

GROUP BY：对结果分组

[GROUP BY{col_name|position} [ASC|DESC],...]
SELECT AGE,SEX FROM userinfo GROUP BY AGE;
SELECT AGE,SEX FROM userinfo GROUP BY HAVING AGE>10;
SELECT * FROM userinfo ORDER BY AGE;
SELECT * FROM userinfo ORDER BY AGE DESC;
SELECT * FROM userinfo ORDER BY SEX DESC,ID DESC;
SELECT * FROM userinfo ORDER BY SEX DESC,ID DESC LIMIT 2,2;
SELECT * FROM userinfo ORDER BY SEX DESC,ID DESC LIMIT 5;
INSERT mytable(id,name) select * from users where id<100;
CREATE TABLE userinfoc(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20)
    );
INSERT userinfoc(username) SELECT username from userinfo WHERE SEX=0;

SET NAMES gbk;设置GBK编码
子查询
子查询必须嵌套在圆括号之类

SELECT AVG(goods_price) FROM tbd_goods;//选取结果做平均
SELECT ROUND(AVG(goods_price),2) FROM tbd_goods;//取舍平均值，保留2位小数
SELECT good_id,goods_name,goods_price FROM tbd_goods WHERE goods_price>=(SELECT ROUND(AVG(goods_price),2) FROM tbd_goods);
SELECT goods_price FROM tbd_goods WHERE goods_cate="超极本";
SELECT good_id,goods_price,goods_name FROM tbd_goods WHERE goods_price> ANY (SELECT goods_price FROM tbd_goods WHERE goods_cate="超极本";)//返回结果不唯一时，加ANY,SOME 或ALL
=ANY ==>IN 
!=ALL ==>NOT IN
EXISTS 存在返回true 不存在返回false
多表更新
UPDATE tbd_goods INNER JOIN tbd_goods_cates ON goods_cate=cate_name SET goods_cate = cate_id;
一步到位，多表更新
CREATE SELECT//创建表，并插入查询的数据
CREATE TABLE IF NOT EXISTS tbd_goods_brands(
	brand_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	brand_name VARCHAR(40) NOT NULL)
	SELECT brand_name FROM tbd_goods GROUP BY goods_name;

CREATE TABLE joinuup(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    location varchar(20),
    name varchar(40))
    select location,name from users group by location having count(location)>10;

UPDATE tbd_goods AS g INNER JOIN tbd_goods_brands AS b ON g.brand_name=b.brand_name
SET g.brand_name=b.brand_id;

##连接
INNER JOIN----JOIN ----CROSS JOIN
ON----设定链接调节
WHERE ----进行结果过滤
内链接，仅显示符合链接条件的记录
OUTER JOIN
LEFT JOIN//左链接
RIGHT JOIN//右链接
多表连接：
SELECT good_id,goods_name,cate_name,brand_name,goods_price FROM tbd_goods AS g
INNER JOIN tbd_goods_cates AS c ON g.cate_id=c.cate_id
INNER JOIN tbd_goods_brands AS b ON g.brand_id = b.brand_id\G

无线分类数据表设计：
CREATE TABLE table_infinity(
id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
parent_id SMALLINT UNSIGNED NOT NULL DEFAULT 0
);
INSERT table_infinity(name,parent_id) VALUES('1电器',DEFAULT);
INSERT table_infinity(name,parent_id) VALUES('2电器',DEFAULT);
INSERT table_infinity(name,parent_id) VALUES('1中电器',1);
INSERT table_infinity(name,parent_id) VALUES('2中电器',1);
INSERT table_infinity(name,parent_id) VALUES('1小电器',2);
INSERT table_infinity(name,parent_id) VALUES('2小电器',3);
INSERT table_infinity(name,parent_id) VALUES('1小小电器',3);
INSERT table_infinity(name,parent_id) VALUES('2小小电器',4);
INSERT table_infinity(name,parent_id) VALUES('电吹风',4);
INSERT table_infinity(name,parent_id) VALUES('电风扇',5);
自身连接：
SELECT s.id,s.name,p.name FROM table_infinity AS s LEFT JOIN table_infinity AS p ON s.parent_id=p.parent_id;

多表删除：
DELETE t1 FROM tbd_goods AS t1 LEFT JOIN (SELECT goods_name,good_id FROM
	tbd_goods GROUP BY goods_name HAVING COUNT(goods_name)>=2) AS t2 ON t1.goods_name =t2.goods_name WHERE 
	t1.good_id>t2.good_id;
查询表达式
SELECT education as edu,location as loc from users;


字符函数
SELECT CONCAT(username,'-',password) AS full FROM userinfo;
SELECT CONCAT_WS('-','CONAN','SKY');//CONAN-SKY
SELECT FORMAT(15412.651,2)//数字格式化，保留2位
SELECT LOWER()//转换成小写
SELECT UPPER()//转换成大写
SELECT LEFT('CONAN',3);//CO
SELECT RIGHT('CONANSKYFORCE',3);//RCE
SELECT LENGTH()//取长度
SELECT LTRIM()//删除左边空格
SELECT RTRIM()//删除右边空格
SELECT TRIM()//删除两边空格
SELECT TRIM(LEADING 'A' FROM 'AAAFDVSFAAA')//FDVSFAAA
SELECT TRIM(TRAILING 'A' FROM 'AAAFDVSFFAAA')//AAAFDVSFF
SELECT TRIM('A' FROM 'AAAFDVSFFAAA')//FDVSFF
SELECT SUBSTRING('conans','1','3')//con
SELECT [NOT]LIKE//
SELECT REPALCE('XXADSDFXXAFA','XX','')//ADSDFAFA
%---任意个字符
_---任意一个字符
数值运算符函数
SELECT CEIL()//向上取整
SELECT DIV//整数除法
SELECT FLOOR()//向下取整
SELECT MOD//取余
SELECT POWER()//幂运算
SELECT ROUND()//四舍五入
TRUNCAT TRUNCATE(1312.65,0)//数字截取1312
比较运算符函数
[NOT] BETWEEN AND
[NOT] IN()
SELECT 12 IN(12,11,0,51)//是
IS [NOT] NULL
SELECT 0 is NULL//0
日期和时间函数
NOW()//现在的日期时间
CURDATE()//现在日期
CURTIME()//现在时间
DATA_ADD()//设置
DATEDIFF()//比较时间
DATA_FORMAT()//转换日期格式
信息函数
SELECT CONNECTION_ID()//链接ID
SELECT DATABASE()//当前数据库
SELECT LAST_INSERT_ID()//最后插入信息
SELECT USER()//当前用户
SELECT VERSION()//版本信息
聚合函数
SELECT AVG()//平均值
SELECT COUNT()//计数
SELECT MAX()//最大值
SELECT MIN()//最小是
SELECT SUM()//求和
加密函数
SELECT MD5()//信息摘要算法
SELECT PASSWORD()//密码算法
自定义函数：
CREATE FUNCTION f1() RETURNS VARCHAR(30)
RETURN DATA_FORMAT(NOW(),'%Y年%m月%d日%H点：%i分：%s秒');
SELECT f1();

导出数据库mysqldump -u root -p 要导出的数据库>output.sql
导入数据库切换到数据库目录下 source output.sql

P44/92
mysql储存过程

DELIMITAR //修改定界符
CREATE PROCEDURE mypro(IN p_id int,out usersname varchar(20))
begin
delete from users where id=p_id;
select name from users where sex="2" into username;
END
//
DELIMITER;

call mypro(22,@name);
select @name;

MySQL支持的存储引擎

MyISAM
InnoDB
Memory
CSV
Archive























