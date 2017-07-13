# 龟叔的小Python  

python严格按照空格缩进

数据类型有  
整数  
浮点数  
字符串 \转义, ''' 多行字符串,r原始字符串(不转移)   
布尔值  True or False  
空 None  
常量  /结果为浮点数,搞好整除结果也是浮点数  
//为地板除,结果为整数  
    
ASCII ---一个字节  
Unicode----多个字节,通常两个字节(byte),也就是16个比特(bit),16位  
UTF-8----变字节(节省空间)  

计算机工作用Unicode字符  
显示的文本为UTF-8字符  

ord()获取字符的整数表示  
chr()将编码转换成字符  

python字符类型为str,但是传输要变成bytes类型  

'ABC'.encode('utf-8');
b'ABC';

'中文'.encode('utf-8')  
b'\xe4\xb8\xad\xe6\x96\x87'

我们从网络或磁盘上读取到的字节流,就是bytes,bytes变为str  
b'ABC'.decode('utf-8');  

	#!/usr/bin/env python3
	# -*- coding: utf-8 -*- 
	#python 文件头  
 
字符串格式化  
'asfsd%s,saffs%d'%('asd',333)

%s---字符串  
%d---整数  
%f---浮点数  

list和tuple  

a=[1,3,5,7,9]  
len(a);//5
a[0];//1
a[-1];//9
a.append('11');
a;//
[1,3,5,7,9,11]
a.insert(1,2);
[1,2,3,5,7,9,11]
a.pop()
[1,2,3,5,7,9]
a.pop(1)
[1,3,5,7,9]
a[0]=0
[0,3,5,7,9]

list元素内容也可以是另一个list(二维数组)  

tuple  
b=(2,4,6,8,10);//元素内容不可变,一旦初始化就不能修改了  
b[0];//2  
t=(1,);//只有一个元素的tuple  

name = input();//用户输入的值赋值给name(str)  

int()转换为int类型  
  
**循环**  

	for i in rangs:
		pass
ranges 可以是list,tuple,range(100)...  

range(100);//生成序列[0,100)

**dict字典**  

d={"name":"conan","age":65,"gender":"m"};  

d['name'];//'conan'  

'age' in d;//True  

d.get('john');//返回None  
d.get("Kevin",-1);//自定义找不到值时候的返回数字-1  
d.pop('gender');//删除对应的键值对  

**set**元素不能重复,只有值  
s = set([1,3,5,7,9])  
s
{1,3,5,7,9}

s.add(11);

s.remove(3);//不是索引,是值  

abs();//返回一个绝对值  
str();//转换为字符串  
max();//返回最大的那个值 
int();//转换为整数  
hex();//转换为十六进制  

	def func():
	  pass

函数可以返回元组  

### 默认参数

	def power(x,n=2):
	  s = 1
	  while(n>0):
	    n = n-1
	    s = s*x  
	  return s
	定义时,指定默认值,函数调用时候,要指定则用=描述  
    默认参数必须指向不变对象

### 可变参数  
函数内部接受到的是一个tuple
	def func(*nums):
	    for i in nums:
			print(i)
func(1)
func(2,3,4,20)
func(*[5,56,8]);//传入list的每个数  

### 关键字参数  

	def func(**kw):
	  print(kw)

关键字参数再函数调用时,自动组装成一个dict  
	func(name="conna",age=25)

























































































































































































































































































































































































































































































































































































































































































































