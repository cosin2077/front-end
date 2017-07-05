##JavaScript DOOOOOOM 文档对象模型##
<html>元素节点，我们称之为文档元素  
文档原始是文档的最外层元素，其他所有元素都包含在文档元素当中,每个文档只有一个文档元素  

	Document
		Element html
			Element head
				Element title
				Element meta	
				Element link
				...
			Element body
				Element p
				Element h2
				...
所有12个节点类型都继承自Node类型,共享基本属性和方法  
**每个节点都有nodeType属性**  表面节点的类型  

1. nodeName和nodeValue,前者为元素的标签名,后者为值  
2. 节点关系. **每个节点都有一个childNodes属性**(类数组),保存所有子节点
*** 
	//兼容ie8即更早版本将NodeList转换为数组
	function convertToArray(nodes){
		var arr = [];
		try{
			arr = Array.prototype.slice.call(nodes,0)
		}catch(ex){
			for(var a in nodes){
				arr[a]=nodes[a];
			}
		}
		return arr;
	}

3. **每个节点有都一个parentNode属性**  