#PHP小试牛刀之一己之见

##1.从类开始

	class Car{
		public $name="宾利";
		public function getName(){
			return $this->name;
		}
		public function setName($v){
			$this->name=$v;
		}
	}
	
	$car = new Car();//实例化一个$car对象
	$car->getName();//获取name属性
	$car->setName("Ferrari");//设置name属性

类的属性和方法的访问控制  

	public  外部能直接访问到  
	protected  自身以及子类与父类  
	private  只能自身访问  
static  表示静态方法,不需要实例化对象就能直接访问到, 操作符为::.

	class Car{
		public static function getName(){
			return "车子";
		}
	}
	Car::getName();//即为"车子";

类中__construct()定义构造函数，每次对象实例化的时候，都会使用这个函数  

	class Car{
		function __construct(){
			echo "被调用了";
		}
	}
	子类如果定义了__construct值不会调用父类的__construct,
	如果需要调用父类的__construct方法,需要显示调用  
	parent::__construct()
析构函数(被销毁的时候调用)

	class Car{
		function __destruct(){
			echo "被销毁了";
		}
	}
	unset(new Car());//销毁创建的对象实例,调用析构函数

**static关键字**  
静态属性和静态方法何以在不实例化的情况下调用,  
直接使用

	类名::方法名
就可以了  
静态属性不允许直接使用 ->操作符调用  
只能用双冒号了嘛  
静态方法也可以通过变量来静态调用  
静态方法中不允许使用$this，可以使用self, parent, static  

访问控制

	public  公有
	protected  受保护，自身及父子类
	private  只有自身能访问

类的属性必须定义为公有、受保护、私有、其中之一，var定义则为公有  
属性定义不加关键字则为公有  
如果构造函数定义成为了私有方法，则不允许直接实例化对象了，这个时候一般采用静态方法进行实例化

	class Car{
		//定义私有构造函数方法则不能直接实例化
		private function __construct(){
			echo "实例被创建了";
		}
		private static $_obj=null;
		private static function createInstance(){
			if(empty(self::$_obj)){
				self::$_obj = new Car();
			}
			return self::$_obj;
		}
	}

类属性和方法的重载(通过魔术方法，动态的创建、读取，判断和销毁)  

	__set
	__get
	__isset
	__unset
	
	class Car{
		function __set($k,$v){
			$this->$k=$v;
		}
		function __get($k){
			return $this->$kv;
		}
		function __isset($k){
			if(isset($k)){return true}
			return false;
		}
		function __unset($k){
			unset($this->$k)
		}
	}

	== 用于判断同一个对象的实例
	=== 全等判断是不是同一个对象的引用  

	clone 可以复制对象，会调用类的 __clone方法  

	serialize 方法可以将对象序列化为字符串，便于传输或储存  
	unserialize 方法将字符串反序列化为对象
