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

类的属性和方法  
public  外部能直接访问到  
protect  
private  
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
