## JavaScript DOOOOOOM 文档对象模型 ##
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

3. **每个节点有都一个parentNode属性** nextSibling,previousSibling 访问下一个、前一个同胞节点第一个节点的previousSibling为null,最后一个节点的nextSibling为null,firstChild,lastChild为第一个、最后一个子节点  
4. 所有**节点都有的最后一个属性ownerDocument**指向文档的文档节点

**操作节点**
appendChild用于向childNodes列表末尾添加一个节点  
insertBefore用于将新节点插入到参考节点之前

replaceChild(new,old)新节点替换旧节点  
removeChild()将删除某个节点  

**所有节点都有的方法**
cloneNode(true)//true表示深复制,复制包括子树  
  
document.documentElement  -->html  
等价于document.firstChild或document.childNodes[0]  
**有文档申明则例外！**  

	document.doctype //文档申明  
	document.title  
	document.URL 
	document.referrer  
	document.domain  

	document.anchors//带有那么属性的a元素  
	document.forms 包含所有的form  
	document.images 包含所有的img
	document.links 包含所有带href特性的a元素  
	
元素类型  
所有HTML元素都是HTMLElement类型  
存在以下标准特性  
id  
title  
lang  
dir  
className  

**操作特性**

ele.getAttribute()  
ele.setAttribute()  
ele.removeAttribute()  