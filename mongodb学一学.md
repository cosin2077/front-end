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

	collection.ensureIndex({x:1,y:1})

**过期索引**

	- 在一段时间后会过期的索引
	- 在索引过期后，响应的数据会被删除
	- 适合存放用户登录信息等

db.collection.ensureIndex({time:1},{expireAfterSeconds:864000})

### creatIndex 替代了 ensureIndex 3.2版之后 ###
	- 储存在过期字段的值必须是指定时间类型，不然不能被自动删除  
	- 如果指定ISODate数组,则按照最小时间删除  
	- 过期索引不能是复合索引
	- 删除时间不一定完全准确(后台程序每60s跑一次，删除也需要时间)  

**全文索引**
	
	对字符串和字符串数组创建全文可搜索的索引  
	case:
	{author:"",title:"",content"",keyword:""}
	
	创建全文索引  
	db.articles.createIndex({key:"text"})
	db.articles.createIndex({key1:"text",key2:"text"})
	db.articles.createIndex({"$**":"text"}) //对集合中所有字段,创建一个大的全文索引

**全文索引的查找**

	db.articles.find({$test:{$search:"coffee"}})
	db.articles.find({$test:{$search:"aa bb cc"}}) 默认或查询
	db.articles.find({$test:{$search:"\"aa\" \"bb\" \"cc"}}) 与查询
	db.articles.find({$test:{$search:"aa bb -cc"}}) 不包含cc的
	全文相似度  
	$meta操作符 :{score:{$meta:"textScore"}}  
	写在查询条件后边可以返回返回结果的相似度  
	与sort一起使用,有很好效果哟
	db.articles.find({$test:{$search:"aa bb -cc"}},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})

**限制**

	每次查询,只能指定一个$text查询  
	$text查询不能出现在$nor查询中  
	包含$text后，hint不起作用  

**地理位置索引**

	2d索引 平面地理位置索引
	位置表示方式  经纬度 [经度,纬度]
	取值范围：经度[-180,180] 维度[-90,90]
	db.location.createIndex({"w":"2d"})
	db.location.insert({w:[1,2]})
	db.location.insert({w:[100,85]})   
	db.location.insert({w:[75,85]})  
	db.location.insert({w:[60,65]})  
	db.location.insert({w:[20,15]})  
	查询方式  
	$near 查询,查询距离某个点最近的点    
	$geoWithin查询 查询某个形状内的点  
	db.location.find({w:{$near:[1,1]}}) //默认返回100个点
	db.location.find({w:{$near:[1,1],$maxDistance:10}})
	
	形状  
	- $box 矩形
	 {$box:[[x1,y1],[x2,y2]]}
	- $center 圆形
	- {$center:[[x1,y1],r]}
	- $polygon 多边形
	- {$polygon:[[x1,y1],[x2,y2],[x3,y3]]}
	
	db.location.find({w:{$geoWithin:{$box:[[0,0],[3,3]]}}})  
	db.location.find({w:{$geoWithin:{$center:[[0,0],3]}}})  
	db.location.find({w:{$geoWithin:{$polygon:[[0,0],[2,2],[3,3]]}}})  
	
	geoNear 查询  
	db.runCommand(
	{geoNear:<collection>,
	near:[x,y],
	minDistance:
	maxDistance:
	num:
	...
	})

	db.runCommand({
	geoNear:"location",near:[1,2],maxDistance:10,num:10
	})
		

**索引属性** 

	name属性
	db.collection.createIndex({x:1,y:1,z:1},{name:"normal_index"}) //指定name属性  
	db.collection.dropIndex("normal_index") //可以通过name属性删除索引  
	unique属性
	db.collection.createIndex({x:1,y:1,z:1},{unique:true}) //添加唯一索引后相同字段不允许值相同(x,y,z)同时相等  
	sparse属性  
	db.collection.createIndex({x:1,y:1,z:1},{sparse:true}) //避免为不存在的值插入索引
	db.collection.find({m:{$exists:false}}).hint("m_1") //强制使用稀疏索引  

**字段是否存在查找**

	db.collection.find({m:{$exists:true}}) //存在m字段的数据  

**索引构建情况分析**  

	评判索引构建情况  
	mongostate  
	profile  
	日志
	explain分析
	
	mongostat  
	qr 读队列
	qw 写队列 


	查看profile
	db.getProfilingStatus()
	db.setProfilingLevel(2)
	{ "was" : 0, "slowms" : 100 } //was为0就是关闭,不记录,1,记录超过100的值,为2时候,全部记录  
	被记录在  
	system.profile
	db.system.profile.find().sort({$natural:-1}).limit(10)//natural 自然排序
	
	db.collection.find({x:1}).explain() 详细解释本次查询的参数  

	mongodb安全  
	
	mongodb中创建永辉 
	
	createUser
	{user:"<name>",
	pwd:"<passwd>",
	customData:{},
	roles:[{role:"<role>",db:"<database>"}]
	}
	角色类型(read,readWrite,dbAdmin,dbOwner,userAdmin)  
	
	db.createUser({user:"conan",pwd:"201010",customData:"conan",roles:[role:"userAdmin",db:"*"]})
	
	DBAdminAbyDatabase