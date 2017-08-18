
return "asd%s%d"%("oooo",4)#asd"oooo"4

字符串的split()跟JavaScript一样一样的,将字符串分割为list


":".join(list)#这根JavaScript倒是不一样，反过来了


2.7中
f.file('file.txt','[a|w|r|a+]')
file()方法等价于open()方法

try:
    f=open('123.txt')
    f.read()
    print(f)
except:
    f.open("write.text")
    f.read()
    f.close()
    print(f)

from random inport randint
random.randint(1,10)#1到10之间的随机数
random.choice([...])#随机从list中选一个

p=[1,2,4,3,5]

2 in p//True
p.index(5)//4
2 not in p //True
not 2 in p//True

x,y,z
x=x+y  --1
y=x+y+1  --2
z=2y+2x+1  --3
