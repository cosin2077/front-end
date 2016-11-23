#锋利的jQuery
$("#ed")获取的永远是对象，不能直接用if判断该句(永远成立)，应该用：  
if($("#id").length>0)判断长度或者  
if($("#id")[0])转换为DON对象  
$("#dev + div")等价于 $("#dev").next("div")  
$(".cll~p")等价于 $(".cll").nextAll("p")
##过滤选择器
**1.基本选择器**  
以冒号(:)开头  
$("div:first")第一个div元素  
$("div:last")最后一个div元素  
$("div:not(#d)")id不是d的div元素  
$("div:even")索引为偶数的div 元素  
$("div:odd")索引为奇数的div 元素  
$("div:eq(2)")索引为2的div元素  
$("div:gt(2)")索引大于2的div元素  
$("div:lt(3)")索引小鱼3的元素  
$(":header")所有标题元素  
$("：animated")正在执行动画的元素  
**2.内容过滤选择器**   
$("div:contains(text)")选取含有文本text的div元素  
$("div:empty")不包含子元素的div元素  
$("div:has(p)")含有p元素的div元素  
$("div:parent")拥有子元素div元素  
**3.可见性过滤**  
$("div:hidden")选取不可见的div元素  
$("div:visible")选取可见的div元素  
**4.属性过滤选择器**  
$("div[href]")选择拥有href属性的div  
$("div[href=abc.com]")选择href属性为"abc.com"的div  
$("div[src!=asd.jpg]")选择src属性不为"asd.jpg"的div  
$("div[href^=abc]")选择href以abc开头的div  
$("div[href$=xyz]")选择href以xyz结尾的div  
$("div[src*=jpg]")选择src含有jpg的div  
**5.子元素过滤选择器**  
$("div:nth-child(index/odd/even)")div下子元素 偶数/基数/index从1算起    
$("div:first-child")div第一个子元素  
$("div:last-child")div最后一个子元素  
$("div:only-child")div中只有一个子元素的那个元素  
**6.表单对象属性过滤器**  
$("input:enabled")选取所有input下可用元素   
$("#input:disabled")选取id为input的元素下所有不可用元素      
$("input:checked")选取所有被选中的input元素    
$("input:selected")选取所有被选中的选项元素
**表单选择器**  
$(":input")选取input，textarea，select，button元素
$(":text")选取单行文本框  
$(":password")选取密码框  
$(":radio")选取单选框  
$(":checkbox")选取复选框  
$(":submit")选取所有提交按钮  
$(":image")选取图片按钮  
$(":reset")选取重置按钮  
$(":button")选取按钮  
$(":file")选取上传域     
$(":hidden")选取所有不可见元素    













      
