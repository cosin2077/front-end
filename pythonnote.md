#This is my notes about python
***
###Python fundamental  

	print("abc")//print 必须要有(),  
	print("abc")//"abc"表示字符串abc  
	print(abc)//abc means variable  
	print(10)//10 means number  
	exit()//quit python environment
	print('a','b','c')//输出为字符串a b c，遇到逗号，会输出空格
	print('a'+'b'+'c')//输出为字符串abc  
	
####execute the py file：  
	python abc.py
####输入  
	name=input('输入提示')
	输入conan
	name='conan'
####Python基础
#开头的语句是注释，python只有单行注释，没有多行注释
当语句以冒号:结束时，缩进的语句为代码块  
坚持使用4个空格的缩进  
大小写敏感  
####数据类型
1. 整数
2. 浮点数
3. 字符串用单或双引号保卫起来的部分，转义字符\用于转义引号中内容  
为了简化，python还允许r''表示''内部的字符串默认不用进行转义
####布尔值
True和False(注意大小写)  
布尔值可以进行 and or not 运算  
and 表示 与  
or 表示 或  
not 表示 非  
####空值  
空值用None表示  
#####变量  
变量名必须是大小写英文，数字，下划线(_)的组合，而且不能用数字开头
变量被赋值：  
a = 'ABC'//计算机先是在内存中创建一个为 'ABC'的字符串，然后在内存中创建一个名为 a 的变量，并把它指向 'ABC'
####常量  
常量通常全部大写变量名称表示  
PI = 3.1415926535  
在python中有两种除法/(计算结果为浮点数)和//(地板除，计算结果为整数)
10/3 为3.33333333333  
10//3 为3   
% 取余  
10%3 为1  
####字符串和编码  
纯英文----ascii码
Unicode----所有语言  
utf-8----可变长编码Unicode  
ord()//获取字符的Unicode整数表示  
chr()//把编码转换为对应的字符  
ord("中")//20013
chr(25991)//文
知道字符的整数编码后，可以用十六进制这么写  
'\u4e2d\u6587'//'中文' 
网络传输或者保存磁盘，需要将str变为bytes  
加前缀b  
x = b'ABC'  
以Unicode表示的str可以通过encode()方法编码为制定的bytes  
'ABC'.encode('ascii')//b'ABC'
'中文'.encode('utf-8')//b'\xe4\xb8\xad\xe6\x96\x87'
'中文'.encode('ascii')//将报错
如果我们从网络上读取到了字节流，读取到的就是bytes,要将bytes变为str，就要用到decode()方法,在bytes中，无法显示为ascii的字节，用\x##表示    
b'ABC'.decode('ascii')//'ABC'
b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')//'中文'  
计算str包含多少个字符用len()函数  
len('ABC')//3  
len('中文')//2  
如果换成bytes，len()计算的就是字节数  
len(b'\xe4\xb8\xad\xe6\x96\x87')//6
len('中文'.encode('utf-8'))//6  
当源码包含中文时候，为了让他按utf-8编码读取，在文件开头写上  
# -*- coding:utf-8-*-  
####格式化  
用%实现  
'Hello,%s' %'world'//'Hello,world'
'Hello,%s%s,you have %d.'%('dear ','conan',10000000000)//'He-
llo,conan,you have 10000000000.'  
在字符串内部，%s表示用字符串代替，%d表示用整数代替，有几个%?占位符，后边就跟几个变量或值，顺序要对应好，如果只有一个%?，括号可以省略   
常见占位符  
%d 整数  
%f 浮点数  
%s 字符串  
%x 十六进制整数  
%如果表示普通字符，用%转义，即%%  
####list和tuple  
#####list
list(相当于array？)
mylist = ['a','b','c','d']
len(mylist)//获得mylist的长度(元素个数)  
mylist[0]//'a'  
mylist[1]//'b'  
mylist[2]//'c'  
mylist[3]//'d'  
mylist[4]//超出边界，报错  
mylist[-1]//'d'  
mylist[-2]//'c'
mylist[-5]//超出边界，报错  
append往末尾添加元素  
mylist.append('e')//mylist=['a','b','c','d','e']  
删除指定位置的元素用pop(i)，i为索引位置  
要将某个元素替换为别的元素，直接给对应位置赋值就行  
list元素的数据类型可以不同，甚至也可以包含另一个list  
#####tuple元组
tuple一旦初始化了之后，就不能修改  
mylist = ('a','b','c','d')  
现在这个tuple就不能变了，没有append()，insert()这样的方法，其他获取元素的方法和list 是一样的，也可以使用mylist[0],mylist[-1],但不能赋值为另外的元素。
定义只有一个元素的tuple元素时候，必须加一个逗号，来消除歧义  
>>>t = (1,)
>>>t
(1,)
####条件判断
sex=input("亲，请输入性别")
if sex == "男":
	print("您的性别为",sex)
	print("有意思")
else:
	print("您的性别不是男性")  
根据python的缩进规则 缩进为代码块，如果 if语句判断是True,就把缩进的两行都给执行了，如果判断为 False，则执行else下的内容  
注意不要少写冒号:
s = input("亲输入您的年龄")
age = int(s)//因为input()返回的数据类型是str,str不能直接和整数比较，必须先把 str转换成整数,int()方法将其转换为整数  
if age >= 25:
	print("大叔了")
elif age >=18:
	print("年轻有为")
elif age >=16:
	print("最好时光")
else:
	print("太嫩啦")  
if判断还能简写  
if x:
	print("meaningful")
只要x是 非零数值，非空字符串，非空list，非False，就判断为True，否则为False  
####循环  
python的循环有两种，一种 for…in 循环，以此将llist或tuple中的元素迭代出来   

	names = ['Michael', 'Bob', 'Tracy']
	for name in names:
	    print(name)
	Michael
	Bob
	Tracy
所以fox x in … 就是把每个元素带入变量x,然后执行缩进块的语句  
计算1-10整数之和，可以利用一个sum变量做累加  

	sum = 0
	for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
	    sum = sum + x
	print(sum)  
range()函数可以生成一个整数序列，再通过list()函数可以转化为list。
list(range(5))//[0,1,2,3,4]
range(101)就可以生成0-100的整数序列  

	sum = 0
	for x in range(101):
	    sum = sum + x
	print(sum)//

第二种while循环 只要满足条件，就不断循环   
计算100以内所有基数的和  

	sum = 0 
	a = 99
	while a > 0
		sum+=a
		a-=2
	print(a)  
break 提前退出循环  
continue跳出本轮循环  
Ctrl+c退出程序  
####dict 和set  
python中内置字典(JavaScript中的对象!)  
d = {'a':1,'b':2,'c':3,'d':4}
d['a']//1
d['c']//3  
通过key赋值  
d['a'] = 32//'a':32
一个key对应一个value  
如果key不存在，dict就会报错  
一是通过in方法判断key是否存在  
	
	'q' in d  
	False 
	'a' in d 
	True  
二是通过dict提供的get方法，如果key不存在，可以返回None，或者自己制定的value  
d.get('dcoasd')//返回None
d.get('dcoasd',-1)//返回 -1  
要删除一个key，用pop(key)方法，对应的value也会被删除  
d.pop('a')//d = {'b':2,'c':3,'d':4}
dict的key值必须是不可变对象，比如字符串，整数，而list不能作为list
因为dict根据key来计算value的储存位置，这种算法，也叫hash算法，如果key值为可变对象， 则报错，unhashable   
set  
set只有key值，没有value  
要创建一个set，需要提供一个list作为输入集合  
>>>s = set([1,2,3])  
>s
{1,2,3}  
注意，传入的参数是一个list,而现实的{1,2,3}只是告诉你这个set内部有1,2,3这3个元素，重复元素在set中自动被过滤  
add(key)添加元素到set中  
s.add(0)
>>>s
{1,2,3,0}
remove(key)可以删除元素  
s.remove(2)
>>>s
{1,3,0}
set可以看做数学意义上的无序和无重复元素的集合， 因此，两个set可以做数学的交集，并集等操作  

	s1 = set([1,2,3,4])  
	s2 = set([5,4,0,2,1])  
	s1&s2//{1,2}
	s1|s2//{0,1,2,3,4,5}  
	
	>>> a = 'abc'
	>>> a.replace('a', 'A')
	'Abc'
	>>> a
	'abc'  
####函数  
函数的调用  
abs(-15)//15  abs求绝对值  
max(1,2,-5,1.5)//2 返回较大的一个值  
数据类型的转换  
int('46'),将字符串转换为number  
str("24"),将数据类型转换为字符串  
bool(),转换为布尔值  
####定义函数  
	def my_abs(x):
		if x>=0:
			return x
		else:
			return -x
函数内部执行语句时候，一旦遇到return，函数就执行完毕，并返回结果。
将文件保存为abs.py  
那么久可以通过 from abs import my_abs 来导入my_abs()函数，即  
fro 文件名 import 函数名  
#####空函数  
	def nont():
		pass
定义一个函数，什么也不做(用作占位符，就是没想好函数怎么写的时候)
  
	def my_abs(x):
	    if not isinstance(x, (int, float)):
	        raise TypeError('bad operand type')
	    if x >= 0:
	        return x
	    else:
	        return -x
	return x1,x2//return 也可以返回多个值，其实是一个tuple!  
#####函数的参数  
######位置参数与默认参数  
power(x,y,z=18,a="Beijing")  
默认参数可以不提供，当提供的时候，参数按顺序赋值，或直接用等于=号赋值  
默认参数必须指向不变对象！  
######可变参数
组装一个list或tuple调用进去!!! 

	def calc(*numbers):
	    sum = 0
	    for n in numbers:
	        sum = sum + n * n
	    return sum
参数多一个*！
calc((1,2,5,7,9))简写为calc(1,2,5,7,9)!  

	>>> nums = [1, 2, 3]
	>>> calc(*nums)
	14
在list或tuple前面加一个*，把其元素变为参数传递进去  
######关键字参数  
	>>> extra = {'city': 'Beijing', 'job': 'Engineer'}
	>>> person('Jack', 24, **extra)
	name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}  
没有可变参数的情况下，用*作为分隔符  

	def person(name, age, *, city='Beijing', job):
	    print(name, age, city, job)
#####参数组合  
参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。  
	def f1(a, b, c=0, *args, **kw):
	    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)
	
	def f2(a, b, c=0, *, d, **kw):
	    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
	>>> f1(1, 2)
	a = 1 b = 2 c = 0 args = () kw = {}
	>>> f1(1, 2, c=3)
	a = 1 b = 2 c = 3 args = () kw = {}
	>>> f1(1, 2, 3, 'a', 'b')
	a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
	>>> f1(1, 2, 3, 'a', 'b', x=99)
	a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
	>>> f2(1, 2, d=99, ext=None)
	a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}  

*args是可变参数，args接收的是一个tuple  
*kw是关键字参数，kw接收的是一个dict  
####递归函数  
阶乘  

	def fact(n):
	    if n==1:
	        return 1
	    return n * fact(n - 1)
尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。  

	def hanoi(n,x,y,z):
	    if n==1:
	        print(x,'-->',z)
	    else:
	        hanoi(n-1,x,z,y)#将前n-1个盘子从x移动到y上
	        hanoi(1,x,y,z)#将最底下的最后一个盘子从x移动到z上
	        hanoi(n-1,y,x,z)#将y上的n-1个盘子移动到z上
	n=int(input('请输入汉诺塔的层数：'))
	hanoi(n,'x','y','z')
####高级特性  
#####切片  
	创建一个0-99的数列  
	L = list(range(100))
	通过切片取出一段 
	前十个
	L[0:10]等价于L[:10]
	后十个
	L[-10:]
	前11-20个  
	L[10:20]
	前10个，每两个取一个  
	L[:10:2]
	所有数字，每五个取一个
	L[::5]
	复制一个list
	L[:]
tuple也是一种list，只是tuple不可变，操作结果仍然为tuple
字符串也是一种list，每个元素就是一个字符，因此，字符串也能进行切片操作，结果仍然是字符串  

	(1,2,3,5,7,8)[1:3]//(2,3)
	"asdasf"[-3:]//"asf"
####迭代
在python中，迭代是通过for…in 进行的  
dict，字符串都能进行迭代  
	
	d = {'a':1,'b':2,'c':3,'d':4,'e':5}
	for key in d:
		print(key)
	for ch in "asdaf"
		print(ch)
dict中，默认是迭代key的，如果要迭代value，可以用 for value in d.values()，如果要同时迭代key和value,可以用 for k,v in d.items()  
当我们使用for循环时候，只要作用域一个可迭代的对象，for循环就可以正常运行，我们通过该collections模块的Iterable类型判断一个对象是否是可迭代对象  

	>>> from collections import Iterable
	>>> isinstance('abc', Iterable) # str是否可迭代
	True
	>>> isinstance([1,2,3], Iterable) # list是否可迭代
	True
	>>> isinstance(123, Iterable) # 整数是否可迭代
	False
#####列表生成式
	>>> list(range(1,11))  生成：
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	>>> list(x*x for x in range(1,11))  生成：
	[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
for循环后面还可以加上if判断，这样我们就可以筛选出仅偶数的平方：
把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来，
	>>> [x * x for x in range(1, 11) if x % 2 == 0]
	[4, 16, 36, 64, 100]
还可以使用两层循环，可以生成全排列：
	
	>>> [m + n for m in 'ABC' for n in 'XYZ']
	['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
列出当前目录下所有的文件和目录名：

	import os
	[d for d in os.listdir('.')]# os.listdir可以列出文件和目录
#####生成器
在python中，一遍循环，一遍计算的机制，成为生成器，generator 
  
	>>>L = [x*x for x in range(10)]
	>>>L
	[0,1,4,9,16,25,36,49,64,81]
	>>>g = (x*x for x in range(10))//第一种定义方法啊 
	>>>g
	<generator object <genexpr> at 0x1022ef630>
调用它：

	>>> g = (x * x for x in range(10))
	>>> for n in g:
	...     print(n)
	... 
	0
	1
	4
	9
	16
	25
	36
	49
	64
	81
斐波那契数列：

	def fib(max):
	    n, a, b = 0, 0, 1
	    while n < max:
	        print(b)
	        a, b = b, a + b
	        n = n + 1
	    return 'done'

注意，赋值语句：

	a, b = b, a + b
相当于：

	t = (b, a + b) # t是一个tuple
	a = t[0]
	b = t[1]
要把fib函数变成generator，只需要把print(b)改为yield b就可以了：

	def fib(max):
	    n, a, b = 0, 0, 1
	    while n < max:
	        yield b
	        a, b = b, a + b
	        n = n + 1
	    return 'done'
如果一个函数定义中包含了yield关键字，那么这个函数就不再是一个普通的函数了，而是一个generator  
#####迭代器
可以直接作用于for循环的数据类型有以下几种，  
一是集合数据，list，tuple，dict，set，str等，  
而是generator，包括生成器和带yield的generator function  
这些可以作用于for循环的对象统称为 Iterable  
isinstance()判断一个对象是否是Iterable对象    
可以被next()函数调用并不断返回下一个值的对象称为迭代器：  Iterator。  
生成器都是Iterator对象，但list、dict、str虽然是Iterable，却不是Iterator。

把list、dict、str等Iterable变成Iterator可以使用iter()函数：

	>>> isinstance(iter([]), Iterator)
	True
	>>> isinstance(iter('abc'), Iterator)
	True
#####函数式编程  
######高阶函数  
变量可以指向函数本身，直接调用函数和调用变量相同  
函数名其实就是指向函数的变量  
把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。
######map和reduce 
map接受两个参数，一个是函数，一个是Iterable，map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterable返回  
把这个list所有数字转换为字符串  

	>>> list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
	['1', '2', '3', '4', '5', '6', '7', '8', '9']
reduce把结果继续和序列的下一个元素做累积计算，  

	reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
reduce 用作序列求和  

	>>> from functools import reduce
	>>> def add(x, y):
	...     return x + y
	...
	>>> reduce(add, [1, 3, 5, 7, 9])
	25
str也是一个序列  
将 str 转换为int的函数  

	>>>from functools import reduce
	>>>def fn(x,y):


		return x*10+y
	>>>def char2num(s):
		return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
	>>>reduce(fn,map(char2num,'13579')
	13579
整理一下就是str2int函数  

	from functools import reduce
	def str2int(s):
	    def fn(x, y):
	        return x * 10 + y
	    def char2num(s):
	        return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]
	    return reduce(fn, map(char2num, s))
#####filter
python内建的filter()函数用于过滤序列    
和map()类似，filter()也接收一个函数和一个序列。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。  

	def is_odd(n):
	    return n % 2 == 1
	
	list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15]))
把一个序列中的空字符串删掉，可以这么写：
	
	def not_empty(s):
	    return s and s.strip()
	
	list(filter(not_empty, ['A', '', 'B', None, 'C', '  ']))
	# 结果: ['A', 'B', 'C']
#####sorted
Python内置的sorted()函数就可以对list进行排序：

	>>> sorted([36, 5, -12, 9, -21])
	[-21, -12, 5, 9, 36]
此外，sorted()函数也是一个高阶函数，它还可以接收一个key函数来实现自定义的排序，例如按绝对值大小排序：

	>>> sorted([36, 5, -12, 9, -21], key=abs)
	[5, 9, -12, -21, 36]
我们再看一个字符串排序的例子：

	>>> sorted(['bob', 'about', 'Zoo', 'Credit'])
	['Credit', 'Zoo', 'about', 'bob']
默认情况下，对字符串排序，是按照ASCII的大小比较的，由于'Z' < 'a'，结果，大写字母Z会排在小写字母a的前面。

现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能用一个key函数把字符串映射为忽略大小写排序即可。忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写（或者都变成小写），再比较。

这样，我们给sorted传入key函数，即可实现忽略大小写的排序：

	>>> sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower)
	['about', 'bob', 'Credit', 'Zoo']
要进行反向排序，不必改动key函数，可以传入第三个参数reverse=True：
	
	>>> sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)
	['Zoo', 'Credit', 'bob', 'about']
####返回函数
	def lazy_sum(*args):
	    def sum():
	        ax = 0
	        for n in args:
	            ax = ax + n
	        return ax
	    return sum
当我们调用lazy_sum()时，返回的并不是求和结果，而是求和函数：

	>>> f = lazy_sum(1, 3, 5, 7, 9)
	>>> f
	<function lazy_sum.<locals>.sum at 0x101c6ed90>
调用函数f时，才真正计算求和的结果：

	>>> f()
	25
在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。

请再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：

	>>> f1 = lazy_sum(1, 3, 5, 7, 9)
	>>> f2 = lazy_sum(1, 3, 5, 7, 9)
	>>> f1==f2
	False
f1()和f2()的调用结果互不影响。
#####闭包  
返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
#####匿名函数  
	>>> list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
	[1, 4, 9, 16, 25, 36, 49, 64, 81]
	通过对比可以看出，匿名函数lambda x: x * x实际上就是：
	def f(x):
	    return x * x
关键字lambda表示匿名函数，冒号前面的x表示函数参数。  
匿名函数有个限制，就是只能有一个表达式，不用写return，返回值就是该表达式的结果。

用匿名函数有个好处，因为函数没有名字，不必担心函数名冲突。此外，匿名函数也是一个函数对象，也可以把匿名函数赋值给一个变量，再利用变量来调用该函数：

	>>> f = lambda x: x * x
	>>> f
	<function <lambda> at 0x101c6ef28>
	>>> f(5)
	25
#####装饰器
函数对象有一个__name__属性，可以拿到函数的名字：  

	>>> def now():
	...     print('2015-3-25')
	...
	>>> f = now
	>>> f()
	2015-3-25
	>>> now.__name__
	'now'
	>>> f.__name__
	'now'
现在，假设我们要增强now()函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改now()函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器”（Decorator）。  
****
****
****
python rulib2  
下载网页方法  

	第一种：直接  
	import urllib2
	#直接请求  
	response = urllib2.urlopen("http://www.baidu.com")
	#获取状态码，如果是200表示获取成功  
	print response.getcode()
	#读取内容
	cont = response.read()
***
	第二种：添加data,http header  
	import urllib2
	#创建Request对象
	request = urllib2.Request(url)
	#添加数据  
	request.add_data('a','1')
	#添加http的header
	request.add_header('User-Agent','Mozilla/5.0')
	#发送请求获取结果  
	response = urllib2.urlopen(request)
*** 
第三种：添加特殊情景的处理器 
HTTPCookieProcessor ProxyHandler HTTPSHandler HTTPRedictHandler  



****
****
******** 
####模块  
一个py文件，就称之为一个模块   
，分模块为单个文件可以大大提高可维护性，其次，当一个模块编写完毕，就可以被其他地方引用,我们在编写程序的时候，也经常引用其他模块包括内置模块和第三方模块  
#####使用模块  
需要注意的是，在Python中，变量名类似__xxx__的，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量，特殊变量是可以直接访问的，不是private变量，所以，不能用\__name\__、\__score__这样的变量名。  

有些时候，你会看到以一个下划线开头的实例变量名，比如_name，这样的实例变量外部是可以访问的，但是，按照约定俗成的规定，当你看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问”。  

双下划线开头的实例变量是不是一定不能从外部访问呢？其实也不是。不能直接访问\_\_name是因为Python解释器对外把 \_\_name变量改成了\_Student\_\_name，所以，仍然可以通过\_\_Studen\_\_name来访问\__name变量：  
#####获取对象信息  
但是type()函数返回的是什么类型呢？它返回对应的Class类型。如果我们要在if语句中判断，就需要比较两个变量的type类型是否相同：

	>>> type(123)==type(456)
	True
	>>> type(123)==int
	True
	>>> type('abc')==type('123')
	True
	>>> type('abc')==str
	True
	>>> type('abc')==type(123)
	False
判断基本数据类型可以直接写int，str等，但如果要判断一个对象是否是函数怎么办？可以使用types模块中定义的常量：

	>>> import types
	>>> def fn():
	...     pass
	...
	>>> type(fn)==types.FunctionType
	True
	>>> type(abs)==types.BuiltinFunctionType
	True
	>>> type(lambda x: x)==types.LambdaType
	True
	>>> type((x for x in range(10)))==types.GeneratorType
	True
#####实例属性和类属性
由于Python是动态语言，根据类创建的实例可以任意绑定属性。

给实例绑定属性的方法是通过实例变量，或者通过self变量：

	class Student(object):
	    def __init__(self, name):
	        self.name = name
	
	s = Student('Bob')
	s.score = 90
但是，如果Student类本身需要绑定一个属性呢？可以直接在class中定义属性，这种属性是类属性，归Student类所有：
	
	class Student(object):
	    name = 'Student'
当我们定义了一个类属性后，这个属性虽然归类所有，但类的所有实例都可以访问到。
#####面向对象高级编程  
------挖坑------
********
#####错误、调试和测试  
让我们用一个例子来看看try的机制：

	try:
	    print('try...')
	    r = 10 / 0
	    print('result:', r)
	except ZeroDivisionError as e:
	    print('except:', e)
	finally:
	    print('finally...')
	print('END')
当我们认为某些代码可能会出错时，就可以用try来运行这段代码，如果执行出错，则后续代码不会继续执行，而是直接跳转至错误处理代码，即except语句块，执行完except后，如果有finally语句块，则执行finally语句块，至此，执行完毕。

上面的代码在计算10 / 0时会产生一个除法运算错误：

	try...
	except: division by zero
	finally...
	END
没有错误发生，所以except语句块不会被执行，但是finally如果有，则一定会被执行（可以没有finally语句）。
记录错误

如果不捕获错误，自然可以让Python解释器来打印出错误堆栈，但程序也被结束了。既然我们能捕获错误，就可以把错误堆栈打印出来，然后分析错误原因，同时，让程序继续执行下去。

Python内置的logging模块可以非常容易地记录错误信息：
	
	# err_logging.py
	
	import logging
	
	def foo(s):
	    return 10 / int(s)
	
	def bar(s):
	    return foo(s) * 2
	
	def main():
	    try:
	        bar('0')
	    except Exception as e:
	        logging.exception(e)
	
	main()
	print('END')




#####
#####文件读写  
读写文件是最常见的IO操作。Python内置了读写文件的函数，用法和C是兼容的。

读写文件前，我们先必须了解一下，在磁盘上读写文件的功能都是由操作系统提供的，现代操作系统不允许普通的程序直接操作磁盘，所以，读写文件就是请求操作系统打开一个文件对象（通常称为文件描述符），然后，通过操作系统提供的接口从这个文件对象中读取数据（读文件），或者把数据写入这个文件对象（写文件）。

读文件

要以读文件的模式打开一个文件对象，使用Python内置的open()函数，传入文件名和标示符：

	>>> f = open('E:/pytest/test.txt', 'r')













