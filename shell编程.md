##shell编程

$0 表示执行的shell脚本名  
$1,2,3,4....分别表示传入的第1,2,3,4个参数  
$*表示传入的所有参数  
$#表示传入的参数个数  
$?表示上一个命令是否成功,成功的话返回0即$?==0  
$PWD表示当前路径  
echo -e '\033[32m---------------\033[0m'中间-显示颜色  

逻辑运算符解析  
-f 判断文件是否存在rg： if [ -f filename]  
-d 判断目录是否存在  
-eq 等于  
-ne 不等于  
-lt 小于  
-gt 大于  
-le 小于等于  
-ge 大于等于  
-a  且  
-o  或  
-z  空字符串  

判断目录是否存在  
	
	#!/bin/bash
	#dir.sh
	DIR=/home/conan/flarum
	if [ ! -d $DIR ]; then
		mkdir -p $DIR
		echo -e "\033[32mcreate dir $DIR.\033[0m"
	else
		rm -rf $DIR
		echo -e "\033[32mdelete dir $DIR\033[0m"
	fi

	sh -n dir.sh 测试shell脚本是否有问题

echo "ok" >file #ok覆盖到file中  
echo "ok" >>file #ok追加到file中  


/stats/participation

/users/conanskyforce/repos

https://api.github.com/users/conanskyforce/repos

https://api.github.com/repos/conanskyforce/123/commits

https://api.github.com/repos/conanskyforce/conanskyforce.github.io/stats/commit_activity

##mysql备份脚本  

	#!/bin/bash
	#auto backup mysql db
	#by conan 2017.5.25
	
	BAK_DIR=/data/backup/`date +%Y%m%d`
	mysqldb=
	mysqluser=
	mysqlpasswd=
	mysqldcmd=
	if [ $UID -ne 0];then
	  echo "Need root privilege."
	  exit
	fi
	
	if [ -d $BAK_DIR ];then
	  mkdir -p $BAK_DIR
	  echo -e '\033[32mThe $BAK_DIR created successfully!\033[0m'
	else
	  echo "This $BAK_DIR is exists."
	fi
	
	$mysqldcmd -u$mysqluser -p$mysqlpasswd $mysqldb>$BAK_DIR/$mysqldb.sql
	
	if [$? -eq 0];then
	  echo -e '\033[32mThe mysql backup $mysqldb successfully!\033[0m'
	else
	  echo -e '\033[32mThe mysql backup $mysqldb failed!\033[0m'
	fi

crontab -e 设置定时执行任务，保存后的文件保存在 /var/spool/cron目录下，也可以vi /etc/crontab 添加要定时执行的任务  

	0  0  *  *  *  /bin/bash /root/conan/auto_bakup_mysql.sh >>/tmp/mysql_bak.log

##一键安装LAMP脚本
读取键盘输入变量，并将其赋值给变量  

	read -p "input a val:"  val
	echo $val

***

	if [ -z '$1' ];then
		echo -e "\033[36m请选择你要安装的选项\033[0m"
		echo -e "\033[32m1.编译安装Apache服务器\033[0m"
		echo -e "\033[36m2.编译安装Mysql服务器\033[0m"
		echo -e "\033[36m3.编译安装PHP服务器\033[0m"
		echo -e "\033[36m4.配置index.php并启动LAMP环境\033[0m"
		echo -e "\033[31mUsage:{ /bin/bash $0 1|2|3|4|help}\033[0m"
		exit
	fi
	#auto install apacha
	if [$1 -eq 1];then
		wget -c $httpd_url/$httpd_file &&tar -zxvf $httpd_file &&cd $httpd_file &&./configure --prefix=$httpd_prefix
		if [$? -eq 0];then
			make &&make install &&make clean
			echo -e '\033[32mThe $httpd_dir server installed successfully!\033[0m'
		else
			echo -e '\033[32mThe $httpd_dir server installed failed!\033[0m'
			exit
		fi
	fi
	
	#auto install mysql
	#easy way to install mysql
	#yum install -y mysql
	if [["$1" -eq "2"]];then
		yum install -y mysql
		if [$? -eq 0];then
			echo -e '\033[32mThe mysql server installed successfully!\033[0m'
		else
			echo -e '\033[32mThe mysql server installed failed!\033[0m'
			exit
		fi
	fi
	
	#auto install php
	if [["$1" -eq "3"]];then
		yum install -y php php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt
		if [$? -eq 0];then
			echo -e '\033[32mThe php server installed successfully!\033[0m'
		else
			echo -e '\033[32mThe php server installed failed!\033[0m'
			exit
		fi
	fi

##for 循环  

	expr arg1 +-*/ arg2

	j=0
	for ((i=1;i<=100;i++))
	
	do
		j=`expr $i + $j`
	done
	echo $j
	
	sh +x xx.sh 观看脚本执行过程

##查找相关log文件并打包

	#!/bin/bash
	
	for i in `find /var -name "*.log"`
	do
		tar -zcvf $i.tar.gz %i
	done

##while 循环

	#!/bin/bash
	i=1;
	while [[ $i -lt 10 ]];do
		echo $i;
		((i++));
	done;
	
	#读取命令行的变量保存到num中，用$num访问
	read -p "pls input a number:" num


##while逐行读取文件内容

	while read line
	do
		echo $line
	done </etc/hosts

	awk '{print $s2}'#打印第二列

##utile循环
相比while，是直到条件满足才推出  


##case 选择语句

	case $1 in
		apache )
		echo "install apache"
		yum install -y httpd
		;;
		mysql )
		echo "install mysql"
		yum install -y mysql
		;;
		php )
		echo "install php"
		yum install -y php
		;;
		* )
		echo "Usage $0 apache|mysql|php"
		;;
	esac

##slect 选择

	PS3="select one"
	select i in "mysql" "php" "apache"
	do
	case $i in
		apache )
		echo "install apache"
		yum install -y httpd
		;;
		mysql )
		echo "install mysql"
		yum install -y mysql
		;;
		php )
		echo "install php"
		yum install -y php
		;;
		* )
		echo "Usage $0 apache|mysql|php"
		;;
	esac

## 数组

	定义一个数组
	A=(a b c)
	
	引用数组,括号解析变量,下标引用
	${A[0]}
	
	显示所有参数  
	
	${A[@]}
	
	显示数组参数个数
	
	${#A[@]}
	
	替换某个元素
	${A[@]/a/d}
	
	删除某个元素
	unset A[2]

## 函数
	
	function funcName()
	{
	
	#....
	
	}
	#执行函数
	funcName

## sed及grep

	sed -i 's/aaa.bbb/ccc.ef/g' some.txt
	s表示搜索,g表示全局  
	
	sed -i 's/^/& /g' some.txt
	所有行首添加空格  
	sed -i 's/$/& /g' some.txt
	每行末尾添加空格  
	sed -i '/somewords/a #new line/' some.txt
	在somewords后一行添加#new line
	
	sed -i '/somewords/i #new line/' some.txt
	在somewords前一行添加#new line
	
	sed -n '/asfasf/p' some.txt
	#打印asfasf这一行

	#打印第2列,默认以空格为分割
    cat some.txt|awk '{print $2}'

	#F指定以:为分割,打印第一列
	cat some.txt|awk -F: '{print $1}'

	find . -maxdepth 1 -type f -name nginx

## 服务监控检查脚本  

	#查询nginx进程,排除grep进程,统计进程数量
	ps -ef grep nginx | grep -v "grep" | wc -l 

































