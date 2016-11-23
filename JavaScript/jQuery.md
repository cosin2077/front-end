#锋利的jQuery
$("#ed")获取的永远是对象，不能直接用if判断该句(永远成立)，应该用：  
if($("#id").length>0)判断长度或者  
if($("#id")[0])转换为DON对象  
$("#dev + div")等价于 $("#dev").next("div")  
$(".cll~p")等价于 $(".cll").nextAll("p")
##过滤选择器
以冒号(:)开头  
$("div:first")第一个div元素  
$("div:last")最后一个div元素  
$("div:not(#d)")id不是d的div元素  
$("div:even")索引为偶数的div 元素  
$("div:odd")索引为奇数的div 元素  
$("div:eq(2)")索引为2的div元素  
$("div:gt(2)")索引大于2的div元素  
$("div:lt(3)")索引小鱼3的元素  


 