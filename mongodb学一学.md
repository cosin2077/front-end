##mongodb

show dbs 显示有多少数据库  
use conan 需要时自动创建一个数据库  
db.dropDatabase()  删除当前use的数据库  
show tables  显示多少张表
等价于
show collections

db.imooc_collection.insert({x:1}) //插入表中以json格式的数据
db.imooc_collection.find()  //默认返回所有  
db.imooc_collection.find({x:1}) //返回含有{x:1}的字段
for(i=3;i<100;i++) db.imooc_collection.insert({x:1}) //js语法插入  
db.imooc_collection.find().count() //计数
.skip() //跳过
.limit()  //限制返回的数目  
.sort()  //排序

db.imooc_collection.find().skip(3).limit(5).sort({x:1})

数据更新  
db.imooc_collection.find({x:2}) //查找x为2的字段  
db.imooc_collection.find({x:2})