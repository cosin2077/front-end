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
	
	extra = {'city': 'Beijing', 'job': 'Engineer'}
	func(**extra)

关键字命名参数  
	
	func(name,age,*,city,job):
	  print(name,age,city,job)

**参数组合**  

	def f(a, b, c=0, *, d, **kw):
	    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
	f(1, 2, d=99, ext=None)
	a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}

*args是可变参数,args接受的是一个tuple  
**kw是关键字参数,kw接受的是一个dict

	func(1, 2, 3)等价于func(*(1,2,3))
	func(a=1,b=2)等价于func(**('a'=1,'b'=2))
	命名关键字参数在没有可变参数情况下需要*作为分隔符  

### 切片  

	L[0:3];//[0,3)  
	L[:3];//第一个是0可以省略  
	L[m,n];//[m,n)  
	L[-2:-1];//不包含最后一个
	L[-2:];//包含最后一个
	L[:];//复制一个list  

tuple,str,都可以进行切片 

**迭代**  

	for循环作用与可迭代对象,list,tuple,str,dict,set  
	
	from collections import Iterable  
	isinstance('abc',Iterable);//str是否可迭代  
	
	for i,v in enumerate([1,2,3]):
	  print(i,v)
	0 1
	1 2
	2 3

**生成列表**  
	list(range(1,11))  
	[1,2,3,4,5,6,7,8,9,10]  
	
	[x * x for x in range(1, 11)]  
	[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
	
	[x * x for x in range(1, 11) if x % 2 == 0]
	[4, 16, 36, 64, 100]
	
	[m + n for m in 'ABC' for n in 'XYZ']
	['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
	
	>>> d = {'x': 'A', 'y': 'B', 'z': 'C' }
	>>> for k, v in d.items():
	...     print(k, '=', v)
	...
	y = B
	x = A
	z = C

**generator**

g = (x*x for x in range(10))  

next(g);//获得generator的下一个返回值  

generator也是一个可迭代的对象,可以通过for循环迭代  

	for i in g:
		print(i)

如果一个函数定义中包含yield,着这个函数就是一个generator  
调用一次next();//执行函数,遇到yield返回,下次接着上次yield处继续进行  

	try:
	  x = next(g)
	  print('g:', x)
	except StopIteration as e:
	  print('Generator return value:', e.value)
	  break
获取generator的return的值  

**迭代器**

可以直接作用于for循环的数据类型  
list,tuple,dict,set,str,generator,  
这些对象统称为可迭代对象:Iterable  
isinstance()判断一个对象是否是Iterable对象  

from collections import Iterable

isinstance([],Iterable)
isinstance({},Iterable)
isinstance("",Iterable)
isinstance((x for x in range(10)),Iterable)
isinstance((),Iterable)

可以被next()不断调用并返回下一个值的对象称为迭代器:Iterator  

生成器都是Iterator对象，但list、dict、str虽然是Iterable，却不是Iterator

把list、dict、str等Iterable变成Iterator可以使用iter()函数：

>>> isinstance(iter([]), Iterator)
True
>>> isinstance(iter('abc'), Iterator)
True

**map和reduce**

	>>> def f(x):
	...     return x * x
	...
	>>> r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
	>>> list(r)
	[1, 4, 9, 16, 25, 36, 49, 64, 81]

	>>> list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
	['1', '2', '3', '4', '5', '6', '7', '8', '9']

filter()用于过滤序列  

'xxasffxx'[::-1];//反转序列  

sorted()对list排序  

>>> sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)
['Zoo', 'Credit', 'bob', 'about']

匿名函数  
	lambda x: x*x  
	def f(x):
	  return x*x

函数对象有个__name__属性,能够拿到函数的名字  

在代码运行期间,动态增加功能的方式,我们称之为装饰器  

decorator就是一个返回函数的高阶函数  

	def log(func):
	  def wrap(*args,**kw):
	    print("call the func %s"%func.__name__)
		return func(*args,**kw)
	  return wrap

	#相当于执行now = log(now)
	@log
	def now():
	    print('2015-3-25')

	#调用函数  
	now()
	call the func  now():
	2015-3-25


	import functools
	
	def log(func):
	    @functools.wraps(func)
		#使得wrapper.__name__=func.__name__
	    def wrapper(*args, **kw):
	        print('call %s():' % func.__name__)
	        return func(*args, **kw)
	    return wrapper
		
		import functools  

	def log(*args):
		def decorator(func):
			@functools.wrap(func)
			def wrapper(*args,**kw):
				print("begin call");
				return func(*args,**kw)
			return wrapper
		return decorator

	functools.partial 帮助我们创建一个偏函数  
	import functools
	
	int2 = functools.partial(int,base=2)
	
	等价于
	def int2(x,base=2):
		return int(x,base)

就是把一个函数的某些参数给固定住(设置默认值),返回一个新函数  

**模块**
文件夹下存在一个文件__init__.py  
这个文件夹被当成一个包,里边所有的文件都是这个包的模块,这样就避免了命名冲突的问题  

**sys模块**  
sys模块有一个argv变量,用list存储了所有命令行参数  
第一个参数是该py文件的名称  
	
	#本脚本自己调用
	if __name__=="__main__":
		func()

我们希望仅仅在模块中使用的变量通过前缀_来实现  

from PIL import Image
im = Image.open('7.jpg')
print(im.format,im.size,im.mode)
im.thumbnail((2000,1000))
im.save('thumb.jpg','JPEG')

**面向对象OOP**

#定义类class+类名+从哪儿继承的,默认object类,类顶端
class Student(object):

	def __init__(self,name,score):
		self.name = name
		self.score = score

	def print_score(self):
		print("%s: %s"%(self.name,self.score))

bart = Student('Bart Simpson', 59)
lisa = Student('Lisa Simpson', 87)
bart.print_score()
lisa.print_score()

类和实例,类是抽象的模板,实例就是根据类而创建出来的一个个对象  
可以给实例绑定属性  
__init__方法绑定创建实例的属性self指的是创建的实例本身,函数里就可以给实例绑定属性,创建实例的时候,必须传入定义时候传入的参数  
  
封装类的方法  

在python中,实例的变量名如果以__开头,就变成了一个私有变量,只有内部可以访问,外部不能访问

	class Student(object):
		def __init__(self,name,score):
			self.__name=name
			self.__score=score
		def get_score(self):
			return self.__score

**继承、多态**

	class Student(object):
		def __init__(self,name,score):
			self.__name=name
			self.__score=score
		def get_name(self,name):
			return self.__name

	class xiaoming(Student):
		pass

	xiaoming('xiaoming',87).get_name()

继承,子类继承父类所有的方法
多态,只需要知道父类型,无需确切的子类型,就能放心的调用父类型的方法
	
	type()返回对应的Class类型  
	types模块中定义了常量  
	type(fn)==types.FunctionType
	type(abs)==types>BuiltinFunctionType  
	type(lambda x:x**2)==types.LambdaType
	type((x for x in range(10)))==types.GeneratorType  
	isinstance(a,b);//a是b的实例返回True  


	>>> isinstance([1, 2, 3], (list, tuple))
	True
	>>> isinstance((1, 2, 3), (list, tuple))
	True
	
dir()获得一个对象所有的属性和方法  

getattr(obj,'x')获取某个类的某个属性
setattr(obj,'a',666)设置某个类的某个属性
hasattr(obj,'z')查询某个类是否有某个属性

类属性直接定义在class中  
	
	class Student(object):
		__slots__=("name","age")
		#只允许实例改变name和age属性  

Python内置的@property装饰器就是负责把一个方法变成属性调用的：

	class Student(object):
	
	    @property
	    def score(self):
	        return self._score
	
	    @score.setter
	    def score(self, value):
	        if not isinstance(value, int):
	            raise ValueError('score must be an integer!')
	        if value < 0 or value > 100:
	            raise ValueError('score must between 0 ~ 100!')
	        self._score = value

**通过多重继承，一个子类就可以同时获得多个父类的所有功能**

	class Dog(Mammal, RunnableMixIn, CarnivorousMixIn):
	    pass

	比如，编写一个多进程模式的TCP服务，定义如下：
	
	class MyTCPServer(TCPServer, ForkingMixIn):
	    pass
	编写一个多线程模式的UDP服务，定义如下：
	
	class MyUDPServer(UDPServer, ThreadingMixIn):
	    pass

多重继承优先级先到先得  

定制类  

__slots__ ----限定之类属性修改范围  
__len__()----定制class的len()反应  
__str__()----定制print类时候的返回  
__repr__()----定制直接输出实例时候的返回  

	class Student(object):
	    def __init__(self, name):
	        self.name = name
	    def __str__(self):
	        return 'Student object (name=%s)' % self.name
	    __repr__ = __str__

要表现得像list那样按照下标取出元素，需要实现__getitem__()方法：  

__iter__()----使得类能够用于for...in循环  
__next__()----配合__iter__实现迭代器功能  

__getattr__()方法，动态返回一个属性  














































































































































































































































































































































































































































































































































































































