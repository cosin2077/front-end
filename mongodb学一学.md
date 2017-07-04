##mongodb

show dbs 显示有多少数据库  
use conan 需要时自动创建一个数据库  
db.dropDatabase()  删除当前use的数据库  
show tables  显示多少张表
等价于
show collections
**插入数据**
db.imooc_collection.insert({x:1}) //插入表中以json格式的数据
db.imooc_collection.find()  //默认返回所有  
db.imooc_collection.find({x:1}) //返回含有{x:1}的字段
for(i=3;i<100;i++) db.imooc_collection.insert({x:1}) //js语法插入  
db.imooc_collection.find().count() //计数
.skip() //跳过
.limit()  //限制返回的数目  
.sort()  //排序

db.imooc_collection.find().skip(3).limit(5).sort({x:1})
**数据查询**
db.imooc_collection.find({x:2}) //查找x为2的字段
**数据更新**  
  
db.imooc_collection.update({x:2},{x:666})

**部分更新**
db.imoor_collection.update({x:1},{$set:{y:1}}) //以{x:1}来查找字段,只更新y字段为{y:1};
**查询字段不存在,自动创建更新的那条**
db.imoor_collection.update({x:1110},{y:"666"},true)
**更新多条数据**
db.imoor_collection.update({x:1},{$set:{x:"sequences"}},false,true)

**数据删除**
db.imooc_colletion.remove({x:"sequences"})//删除所有有这个属性的字段
db.imooc_collection.drop() //删除这张表  

**获取索引**
db.imoor_collection.getIndexes()

**创建索引**
db.imoor_collection.ensureIndex({x:1}) //1为正向排序,-1为逆向排序  


**_id索引** 

1. _id索引是绝大多数集合默认建立的索引
2. 对于每个插入的数据，mongodb都会自动生成一条唯一的_id字段  

**单键索引**

比如 {x:1,y:2,z:3}以x为索引就能很快查询

**多键索引**

值具有多个记录,比如数组  
db.imoor_collection.insert({x:[1,23,5,null]})

**复合索引**(查询条件为复合的时候)

db.imoor_collection.ensureIndex({x:1,y:1})



















