##安装
1.Linux下硬盘命名方式
1)IDE硬盘->hd[a-d]
2)SATA硬盘->sd[a-d]
2.Linux下分区命名方式
1)had[1-n],hdb[1-n],hda1,hdb2等
2)sda[1-n],sda1,sda2等
3.目录结构
    |--etc
	|--dev	 |--..
	|--home--|--..
	|--usr	 |--..
/---|--bin
	|--var
	|--tmp
	|--..
4.Linux的桌面系统
1).GNOME系统--Nautilus系统
2).KDE系统--Konqueror系统
5.远程登录
1).SSH,
a.Secure Shell ,安全协议外壳
b.应用层和传输层上的协议
c.加密且压缩
2).Secure CRT
3).Xshell
6.文件系统
1).顶层目录/(slash)
2).home目录，root用户/root是home目录，普通用户是/home/username
3).bin目录，常用的可执行文件，如/bin,/usr/bin,/sbin
4).外部设备mountpoint,/media,/mnt
5)./etc,系统的配置文件
6)./tmp,临时文件
7)./boot,系统内核和开机必要文件
8)./dev,系统所有的设备文件
9)./usr,unix system resource,保存程序的相关文件
10)./lost+found,不正常关机丢失文件
11)./var,/srv
12)./proc
13)./lib,/usr/lib,/usr/locat/lib
7.文件操作
1).ls操作
a.ls
b.ls /
c.ls -a 
d.ls -l
e.ls -ld
f.ls -h
g.ll
2).文件和目录
a.cd pwd
b.cd..,cd ~,cd -
c.cp file destination
d.cp file1 file2 destination//将file1,file2,复制到destination
e.mv file dir//将file移动到dir
f.mv file1 file2//将file1,改名为file2
g.rm file/dir //删除文件/目录
h.rm -r file/dir //递归删除
i.rm -rf file/dir //递归，强制删除
j.touch abx.123//简历abx.123文件
k.mkdir dir2 //创建dir2文件夹
8.确定文件的格式
file filename
9.cat 查看
9.less分页查看,PgUp,PgDown翻页
###Linux用户群组
1.安全性模型由user,Group构成,每个文件都有owner,group,others对应的读写执行权限
2.每个用户都有唯一的User ID,储存在/etc/passwd中,储存用户名和home目录等信息,/etc/shadow.
3.每个User都有一个home目录
4.root用户拥有至高无上的权限
5.每个用户都属于一个Group,拥有唯一的标识符gid
6.group信息储存于/etc/group中,每个user之三存在于与自己同名的group中，user也可以加入其它的group中
7.同一个group中成员可以共享其它成员的文件
8.read,write,execute,-,权限
9.d[目录](r[read]w[write]x[execute])(r[read]--)(r[read]--)//owner--rwx,group--r--,others--r--
10.chmod[-R] 777/744/754 file //修改文件权限 -R表示递归，子文件，文件夹同时修改权限
11.useradd username//添加用户
12.usermod username//看产用户的一些信息
13.userdel -r username//删除用户(及家目录)
14.passwd//修改密码
15.root模式下 sudo passwd username//强行设置简单密码
16.用户信息的检查
17.finger -s username
18.id whoami who&w(w) users groups
19.groupadd group//简历用户组
20.groupmod group//修改用户组
21.groupdel group//删除用户组
22.默认权限的控制,内核级别,文件默认权限是666,目录默认级别是777,通过umask来组织一些儿权限从而产生最终 的权限,非管理员的umask为0002,管理员的权限为0022

//conan 2010,sky 2010
####解压操作
1.gzip
gzip -c list//将list内容输出到屏幕上
gzip -d list.gz//解压缩list.gz
gzip -t list.gz//检查文件是否损坏
gzip -v list//现实和源文件相比的压缩比
gzip -c list>list.gz//不删除源文件的情况下压缩list
2.bzip2
bzip2
bzip2 -c list//将list内容输出到屏幕上
bzip2 -d list.bz2//解压缩list.bz2
bzip2 -k list//保留源文件<===>bzip2 -c list>list.bz2

####打包操作
1.tar 文件打包
-c 建立打包
-t 查看打包的文件都有哪些文件名
-v 打包解包过程可视化
-f 紧跟文件名
-j bzip2方式打包解包
-z gzip方式打包解包
tar -cf 123.tar 123//将123目录打包成123.tar,f后边紧跟参数名
tar -cvf 13.tar 123//显示处理文件
tar -xvf 123.tar -c botof//将123.tar解压至botof
tar -jcvf 123.tar.bz2 123//可视化压缩文件123为123.tar.bz2
tar -jxvf 123.tar.bz2 -c 143//bzip2解压123.tar.bz2至143文件夹







###vi编辑器




























