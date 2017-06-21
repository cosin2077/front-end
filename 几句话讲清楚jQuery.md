#几句话讲清楚jQuery 
***——<small>是不可能的</small>***  
**——才怪**

##1.操作DOM

> .text()获取/设置所选元素文本内容
> .html()获取/设置所选元素html
> .val()获取/设置表单字段的value
> .attr()获取属性  


##文档操作
>addClass()添加类名
>after()匹配元素之后添加
>append()匹配每个元素结尾添加
>attr()设置/返回属性和值
>before()匹配的每个元素之前添加
>clone()复制匹配元素副本
>detach()移除匹配元素(内)
>empty()清空匹配元素的子元素
>hasClass()是否有指定的类
>html()设置/返回元素HTML内容
>remove()移除所有匹配元素包括自己
>unwrap() 删除被选元素的父元素
>wrap()小包裹，每个元素都包裹
>wrapAll()大包裹,最外层包裹
>wrapinner()小内包裹


##CSS操作  
>css() 设置或返回元素样式属性    
css("color","red");//设置元素color为red  
css("fontSize");//获取元素font-size  
css({"backgroundColor":"steelblue","textShadow":"2px 2px 2px #ccc"});//设置background-color和text-shadow属性  

>height()设置/返回元素高度
>offset()返回相对文档位置
>position()返回相对于父元素的位置
>offset()返回相对于文档元素的位置


##属性操作
>addClass()添加类名
>removeClass()删除类名
>toggleClass()添加/删除类名
>attr()设置/返回属性和值
>html()设置/返回HTML
>val()设置/返回value值
>removeAttr()

##jQuery遍历
>parent() 直接父元素
>parents() 所有父辈元素
>parentsUntil()直到...的父元素
>children()所有直接子元素
>find() 子辈元素里边找
>siblings() 所有同胞元素
>next() 下一个同胞元素
>prev()上一个同胞元素
>nextAll() 后边所有同胞元素
>prevAll() 前边所有同胞元素  
**过滤**  
>first() 第一个元素
>last() 最后一个元素
>eq() 索引从0开始的元素
>filter() 过滤含有选择器的元素
>not() 过滤不含有选择器的元素

##jQuery事件
>$(document).ready(fucntion(){}) 文档就绪  
>click() 点击事件  
dbclick() 双击事件   
foccus() 聚焦事件  
bind('mouseover',fucntion(){...}) 绑定事件  
blur() 失去焦点事件  
change() change事件(发生在input，select textarea区域)  
delegate(childrenSelector,event,data,function)  
live() 绑定事件    
bind 相对于delegate和live不能绑定未来事件  
>error() 触发或绑定元素的error事件
>event.pageX 相对于文档的位置
>....一系列的event事件属性
>keydown() keydown事件
>keypress() keypress事件
>keyup() keyup事件
>load() load事件
>mouseover()...鼠标的一系列事件
>one() 添加一次事件处理器
>ready() DOM解构,img加载ready时
>resize() 缩放
>scroll() 滚动事件
>select() select 事件
>submit() submit 事件
>toggle() 两个事件处理函数互相切换
>trigger() 触发制定事件,会冒泡,会发生默认行为
>triggerHandler() 第一个元素触发指定事件

##Ajax

>ajax() 异步执行ajax请求
>get() GET方法请求
>post