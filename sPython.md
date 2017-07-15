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

__call__()方法，就可以直接对实例进行调用

callable()函数，我们就可以判断一个对象是否是“可调用”对象

定制类

阅读: 187622
看到类似__slots__这种形如__xxx__的变量或者函数名就要注意，这些在Python中是有特殊用途的。

__slots__我们已经知道怎么用了，__len__()方法我们也知道是为了能让class作用于len()函数。

除此之外，Python的class中还有许多这样有特殊用途的函数，可以帮助我们定制类。

__str__

我们先定义一个Student类，打印一个实例：

>>> class Student(object):
...     def __init__(self, name):
...         self.name = name
...
>>> print(Student('Michael'))
<__main__.Student object at 0x109afb190>
打印出一堆<__main__.Student object at 0x109afb190>，不好看。

怎么才能打印得好看呢？只需要定义好__str__()方法，返回一个好看的字符串就可以了：

>>> class Student(object):
...     def __init__(self, name):
...         self.name = name
...     def __str__(self):
...         return 'Student object (name: %s)' % self.name
...
>>> print(Student('Michael'))
Student object (name: Michael)
这样打印出来的实例，不但好看，而且容易看出实例内部重要的数据。

但是细心的朋友会发现直接敲变量不用print，打印出来的实例还是不好看：

>>> s = Student('Michael')
>>> s
<__main__.Student object at 0x109afb310>
这是因为直接显示变量调用的不是__str__()，而是__repr__()，两者的区别是__str__()返回用户看到的字符串，而__repr__()返回程序开发者看到的字符串，也就是说，__repr__()是为调试服务的。

解决办法是再定义一个__repr__()。但是通常__str__()和__repr__()代码都是一样的，所以，有个偷懒的写法：

class Student(object):
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return 'Student object (name=%s)' % self.name
    __repr__ = __str__
__iter__

如果一个类想被用于for ... in循环，类似list或tuple那样，就必须实现一个__iter__()方法，该方法返回一个迭代对象，然后，Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。

我们以斐波那契数列为例，写一个Fib类，可以作用于for循环：

class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1 # 初始化两个计数器a，b

    def __iter__(self):
        return self # 实例本身就是迭代对象，故返回自己

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b # 计算下一个值
        if self.a > 100000: # 退出循环的条件
            raise StopIteration()
        return self.a # 返回下一个值
现在，试试把Fib实例作用于for循环：

>>> for n in Fib():
...     print(n)
...
1
1
2
3
5
...
46368
75025
__getitem__

Fib实例虽然能作用于for循环，看起来和list有点像，但是，把它当成list来使用还是不行，比如，取第5个元素：

>>> Fib()[5]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'Fib' object does not support indexing
要表现得像list那样按照下标取出元素，需要实现__getitem__()方法：

class Fib(object):
    def __getitem__(self, n):
        a, b = 1, 1
        for x in range(n):
            a, b = b, a + b
        return a
现在，就可以按下标访问数列的任意一项了：

>>> f = Fib()
>>> f[0]
1
>>> f[1]
1
>>> f[2]
2
>>> f[3]
3
>>> f[10]
89
>>> f[100]
573147844013817084101
但是list有个神奇的切片方法：

>>> list(range(100))[5:10]
[5, 6, 7, 8, 9]
对于Fib却报错。原因是__getitem__()传入的参数可能是一个int，也可能是一个切片对象slice，所以要做判断：

class Fib(object):
    def __getitem__(self, n):
        if isinstance(n, int): # n是索引
            a, b = 1, 1
            for x in range(n):
                a, b = b, a + b
            return a
        if isinstance(n, slice): # n是切片
            start = n.start
            stop = n.stop
            if start is None:
                start = 0
            a, b = 1, 1
            L = []
            for x in range(stop):
                if x >= start:
                    L.append(a)
                a, b = b, a + b
            return L
现在试试Fib的切片：

>>> f = Fib()
>>> f[0:5]
[1, 1, 2, 3, 5]
>>> f[:10]
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
但是没有对step参数作处理：

>>> f[:10:2]
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
也没有对负数作处理，所以，要正确实现一个__getitem__()还是有很多工作要做的。

此外，如果把对象看成dict，__getitem__()的参数也可能是一个可以作key的object，例如str。

与之对应的是__setitem__()方法，把对象视作list或dict来对集合赋值。最后，还有一个__delitem__()方法，用于删除某个元素。

总之，通过上面的方法，我们自己定义的类表现得和Python自带的list、tuple、dict没什么区别，这完全归功于动态语言的“鸭子类型”，不需要强制继承某个接口。

__getattr__

正常情况下，当我们调用类的方法或属性时，如果不存在，就会报错。比如定义Student类：

class Student(object):

    def __init__(self):
        self.name = 'Michael'
调用name属性，没问题，但是，调用不存在的score属性，就有问题了：

>>> s = Student()
>>> print(s.name)
Michael
>>> print(s.score)
Traceback (most recent call last):
  ...
AttributeError: 'Student' object has no attribute 'score'
错误信息很清楚地告诉我们，没有找到score这个attribute。

要避免这个错误，除了可以加上一个score属性外，Python还有另一个机制，那就是写一个__getattr__()方法，动态返回一个属性。修改如下：

class Student(object):

    def __init__(self):
        self.name = 'Michael'

    def __getattr__(self, attr):
        if attr=='score':
            return 99
当调用不存在的属性时，比如score，Python解释器会试图调用__getattr__(self, 'score')来尝试获得属性，这样，我们就有机会返回score的值：

>>> s = Student()
>>> s.name
'Michael'
>>> s.score
99
返回函数也是完全可以的：

class Student(object):

    def __getattr__(self, attr):
        if attr=='age':
            return lambda: 25
只是调用方式要变为：

>>> s.age()
25
注意，只有在没有找到属性的情况下，才调用__getattr__，已有的属性，比如name，不会在__getattr__中查找。

此外，注意到任意调用如s.abc都会返回None，这是因为我们定义的__getattr__默认返回就是None。要让class只响应特定的几个属性，我们就要按照约定，抛出AttributeError的错误：

class Student(object):

    def __getattr__(self, attr):
        if attr=='age':
            return lambda: 25
        raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
这实际上可以把一个类的所有属性和方法调用全部动态化处理了，不需要任何特殊手段。

这种完全动态调用的特性有什么实际作用呢？作用就是，可以针对完全动态的情况作调用。

举个例子：

现在很多网站都搞REST API，比如新浪微博、豆瓣啥的，调用API的URL类似：

http://api.server/user/friends
http://api.server/user/timeline/list
如果要写SDK，给每个URL对应的API都写一个方法，那得累死，而且，API一旦改动，SDK也要改。

利用完全动态的__getattr__，我们可以写出一个链式调用：

class Chain(object):

    def __init__(self, path=''):
        self._path = path

    def __getattr__(self, path):
        return Chain('%s/%s' % (self._path, path))

    def __str__(self):
        return self._path

    __repr__ = __str__
试试：

>>> Chain().status.user.timeline.list
'/status/user/timeline/list'
这样，无论API怎么变，SDK都可以根据URL实现完全动态的调用，而且，不随API的增加而改变！

还有些REST API会把参数放到URL中，比如GitHub的API：

GET /users/:user/repos
调用时，需要把:user替换为实际用户名。如果我们能写出这样的链式调用：

Chain().users('michael').repos
就可以非常方便地调用API了。有兴趣的童鞋可以试试写出来。

__call__

一个对象实例可以有自己的属性和方法，当我们调用实例方法时，我们用instance.method()来调用。能不能直接在实例本身上调用呢？在Python中，答案是肯定的。

任何类，只需要定义一个__call__()方法，就可以直接对实例进行调用。请看示例：

class Student(object):
    def __init__(self, name):
        self.name = name

    def __call__(self):
        print('My name is %s.' % self.name)
调用方式如下：

>>> s = Student('Michael')
>>> s() # self参数不要传入
My name is Michael.
__call__()还可以定义参数。对实例进行直接调用就好比对一个函数进行调用一样，所以你完全可以把对象看成函数，把函数看成对象，因为这两者之间本来就没啥根本的区别。

如果你把对象看成函数，那么函数本身其实也可以在运行期动态创建出来，因为类的实例都是运行期创建出来的，这么一来，我们就模糊了对象和函数的界限。

那么，怎么判断一个变量是对象还是函数呢？其实，更多的时候，我们需要判断一个对象是否能被调用，能被调用的对象就是一个Callable对象，比如函数和我们上面定义的带有__call__()的类实例：

	>>> callable(Student())
	True
	>>> callable(max)
	True
	>>> callable([1, 2, 3])
	False
	>>> callable(None)
	False
	>>> callable('str')
	False		

枚举类  

	from enum import Enum
	
	Month = Enum('month',('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
	
	for name, member in Month.__members__.items():
	    print(name, '=>', member, ',', member.value)

type()函数既可以返回一个对象的类型，又可以创建出新的类型，比如，我们可以通过type()函数创建出Hello类，而无需通过class Hello(object)...的定义：

def fn(self,name="world"):
  print("Hello, %s"%name)
Hello = type('Hello',(object,),dict(hello=fn))  

type函数依次传入三个参数  

1.class的名称  
2.继承的父类集合  
3.class的方法名称和函数绑定  

### 错误处理  

	try:
		#....
	except Exception as e:
	    #handle error
	finally:
	    #always do
	
	logging模块记录错误信息  
	
	import logging  
	
	try:
		#....
	except Exception as e:
		#handle,也可以raise自定义的error类
		raise ValueError("value is error")
		logging.exception(e)
	finally:

断言  assert

断言失败，抛出AssertionError  

## IO编程

当Inupt/Output速度不匹配的时候  
等待IO执行结果----同步IO
不等待IO执行结果----异步IO  

读取文件  

f = open('xxx.txt','r') 
f.read()#一次性读取文件的全部内容  
f.close()#关闭文件  

	try:
	    f = open('xxx.txt','r')
	    
		f.read()
	
	except Exception as e:
	    print("error :",e)  
	finally:#避免出错没有执行close
	    f.close()

with语句自动帮我们调用close方法  

	with open('xxx.txt','r') as f:
	    f.read()

f.read(size)#读取指定size字节的内容  
f.readline()#每次读取一行  
f.readlines()#一次读取所有行,返回list  

**二进制文件**

f = open('xx.mp4','rb')#二进制格式打开  
f.read()

#指定编码,忽略编码错误  
f = open('/Users/michael/gbk.txt', 'r', encoding='gbk', errors='ignore')

**写文件**

	f = open('xxx.txt','w')
	f.write('xasxax')
	f.close()

	with open('xxxx.jpg','wb') as f:
		f.write('xxx')

**StringIO**

在内存中读写str  

from io import StringIO

f = StringIO()
f.write('asd')#向内存写入
f.write('agsfd')
f.getvalue()#获取刚刚写入的内容

读取StringIO  

	from io import StringIO
	f = StringIO('asd\nert\nuokj\nnbv');
	for a in f.readlines():
	    print(a)

**BytesIO**

操作二进制数据  

	from io import BytesIO
	f = BytesIO()
	f.write('呵呵'.encode('utf-8'))
	f.getValue();
	b'\xe5\x91\xb5\xe5\x91\xb5'

**操作文件和目录**

	import os
	#查看当前目录
	root = os.getcwd()
	#或者
	root = os.path.abspath('.')
	#表示某个目录的完整路径  
	filepath = os.path.join(root,'conan')  
	#创建一个目录
	os.mkdir('newdir')
	#删除一个目录
	os.remove('newdir')
	
	#os.path.join()进行路径拼接 
	#os.path.split('xxx/aa/bb/c/dd.txt')路径拆分
	#(''xxx/aa/bb/c/','dd.txt'),最后一部分是目录或文件名
	#os.path.splitext('aaa/bbb/ccc/dd.txt')获得扩展名
	#('aaa/bbb/ccc/dd','.txt')

	#文件重命名
	os.rename('oldname','newname')
	#文件删除 
	os.remove(file)

	shutil 模块能够复制移动删除文件

	#列出当前文件夹下所有的文件夹
	[x for x in os.listdir('.') if os.path.isdir(x)]
	
	#列出当前文件下所有以 .py 结尾的文件
	[x for x in os.listdir('.') if os,path.isfile(x) and os.path.splitext(x)[1]=='.py']

**序列化**
将变量从内存中编程可存储的传输过程pickling  
反序列化---反之亦然unpickling

**pickle模块**

	import pickle  
	d = dict(name='Bill',age=65,score=99)
	pickle.dumps(d)#将一个对象序列化成一个bytes,这个bytes就可以写入文件
	
	d = dict(name='Bill',age=65,score=99)
	f = open('xxx.txt','wb')
	pickle.dump(d,f)#将一个对象序列化后写入一个file-like Object  
	f.close()
	
	读取对象到内存  
	
	把内容读取到一个bytes  pickle.loads()方法反序列化出对象
	
	f = open('test.txt','rb')
	d = pickle.load(f)
	f.close()
	
**json模块**

	import json 
	d = dict(name='Bill',age=65,score=99)
	str1 = json.dumps(d)#返回的是一个满足json格式的字符串
	'{"age": 20, "score": 88, "name": "Bob"}'
	json.loads(str1)#loads方法把字符串反序列化为dict  
	#将任意class变为dict
	json.dumps(s,default=lambda obj:obj.__dict__)

**线程和进程**

一个任务就是一个进程(Process)
一个进程内部同时干的事情,就叫线程(Thread)

多任务的实现方式  
1. 多进程
2. 多线程
3. 多进程+多线程

multiprocessing模块提供了一个Process类来代表一个进程对象

	from multiprocessing import Process
	import os
	def child_func(name):
		print("Run child process %s (%s)"%(name,os.getpid()))
	
	print("Parent process %s"%os.getpid())
	p = Process(taret=child_func,args=('test',))
	print('Child process will start')
	p.start()
	p.join()
	print("Child process end.")

**Pool**
进程池创建子进程  

	from multiprocessing import Pool
	import os,time,random
	
	p = Pool(4)
	p.apply_async(func,args=(xxx,))
	p.close()
	p.join()

subprocess模块可以让我们非常方便地启动一个子进程，然后控制其输入和输出

**多线程**
threading  

import time,threading

def loop():

创建一个锁就是通过threading.Lock()来实现(保证数据只能被一个线程操作)

	balance = 0
	lock = threading.Lock()
	
	def run_thread(n):
	    for i in range(100000):
	        # 先要获取锁:
	        lock.acquire()
	        try:
	            # 放心地改吧:
	            change_it(n)
	        finally:
	            # 改完了一定要释放锁:
	            lock.release()

ThreadLocal变量处理线程之间数据传递的问题  

**分布式进程**

Python的multiprocessing模块不但支持多进程，其中managers子模块还支持把多进程分布到多台机器上。一个服务进程可以作为调度者，将任务分布到其他多个进程中，依靠网络通信

	# task_master.py
	
	import random, time, queue
	from multiprocessing.managers import BaseManager
	
	# 发送任务的队列:
	task_queue = queue.Queue()
	# 接收结果的队列:
	result_queue = queue.Queue()
	
	# 从BaseManager继承的QueueManager:
	class QueueManager(BaseManager):
	    pass
	
	# 把两个Queue都注册到网络上, callable参数关联了Queue对象:
	QueueManager.register('get_task_queue', callable=lambda: task_queue)
	QueueManager.register('get_result_queue', callable=lambda: result_queue)
	# 绑定端口5000, 设置验证码'abc':
	manager = QueueManager(address=('', 5000), authkey=b'abc')
	# 启动Queue:
	manager.start()
	# 获得通过网络访问的Queue对象:
	task = manager.get_task_queue()
	result = manager.get_result_queue()
	# 放几个任务进去:
	for i in range(10):
	    n = random.randint(0, 10000)
	    print('Put task %d...' % n)
	    task.put(n)
	# 从result队列读取结果:
	print('Try get results...')
	for i in range(10):
	    r = result.get(timeout=10)
	    print('Result: %s' % r)
	# 关闭:
	manager.shutdown()
	print('master exit.')

***
	# task_worker.py
	
	import time, sys, queue
	from multiprocessing.managers import BaseManager
	
	# 创建类似的QueueManager:
	class QueueManager(BaseManager):
	    pass
	
	# 由于这个QueueManager只从网络上获取Queue，所以注册时只提供名字:
	QueueManager.register('get_task_queue')
	QueueManager.register('get_result_queue')
	
	# 连接到服务器，也就是运行task_master.py的机器:
	server_addr = '127.0.0.1'
	print('Connect to server %s...' % server_addr)
	# 端口和验证码注意保持与task_master.py设置的完全一致:
	m = QueueManager(address=(server_addr, 5000), authkey=b'abc')
	# 从网络连接:
	m.connect()
	# 获取Queue的对象:
	task = m.get_task_queue()
	result = m.get_result_queue()
	# 从task队列取任务,并把结果写入result队列:
	for i in range(10):
	    try:
	        n = task.get(timeout=1)
	        print('run task %d * %d...' % (n, n))
	        r = '%d * %d = %d' % (n, n, n*n)
	        time.sleep(1)
	        result.put(r)
	    except Queue.Empty:
	        print('task queue is empty.')
	# 处理结束:
	print('worker exit.')

**python的正则**

	import re
	re.match(r'^\d{3}\-\d{3,8}','010-55542')
	#成功返回一个Match对象,否则返回None  
	
	#分割字符串
	re.split(r'\s+', 'a b   c')
	['a', 'b', 'c']
	
	#分组
	m = re.match(r'^(\d{3})-(\d{3,8})$', '010-12345')
	
	m.group(0)
	'010-12345'
	m.group(1)
	'010'
	m.group(2)
	'12345'

	import re
	# 编译:
	re_telephone = re.compile(r'^(\d{3})-(\d{3,8})$')
	# 使用：
	re_telephone.match('010-12345').groups()
	('010', '12345')
	re_telephone.match('010-8086').groups()
	('010', '8086')

## 模块们



































































































































































































































































































































































































































































































