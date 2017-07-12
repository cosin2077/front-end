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
4. **所有节点都有的最后一个属性ownerDocument**指向文档的文档节点

**操作节点**
appendChild用于向childNodes列表末尾添加一个节点  
insertBefore用于将新节点插入到参考节点之前

replaceChild(new,old)新节点替换旧节点  
removeChild()将删除某个节点  

**所有节点都有的方法**
cloneNode(true)//true表示深复制,复制包括子树  
  
document.documentElement  -->html  
等价于document.firstChild或document.childNodes[0]  
document.children;//后代元素节点
ele.classList;//元素含有的类组成的数组,最后一个元素为class的值  
ele.className;//类名  
ele.style.cssText;//css文本值  
window.getComputedStyle(ele,null);//获得当前元素的最后属性
ele.attributes;//返回含有的属性类数组  
ele.classList具有方法(new CSSClassList(ele))  
add();//添加一个类  
remove();//删除一个类  
toggle();//有则删除,无则添加

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

ele.getAttribute()能取得自定义属性    
ele.setAttribute()  
ele.removeAttribute()  

元素节点的attributes属性包含属性集合  

document.createDocumentFragment();文档碎片类型

1 元素节点 document.documentElement.nodeType
2 属性节点 //document.body.firstChild.attributes[1].nodeType
3 文本节点 
8 注释节点 
9 文档节点 document.nodeType
10 文档类型节点 document.doctype.nodeType
11 文档碎片节点