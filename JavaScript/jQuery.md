#锋利的jQuery
$("#ed")获取的永远是对象，不能直接用if判断该句(永远成立)，应该用：  
if($("#id").length>0)判断长度或者  
if($("#id")[0])转换为DON对象  
$("#dev + div")等价于 $("#dev").next("div")  
$(".cll~p")等价于 $(".cll").nextAll("p")
