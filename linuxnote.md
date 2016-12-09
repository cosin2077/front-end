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






























