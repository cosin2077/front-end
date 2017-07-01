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

三种属性
public  外部能直接访问到  
protect  
private  

