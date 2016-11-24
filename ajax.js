$(function(){
    $("#btn0").click(function(){
        var mykey="ebdc29051da4f5a393fe0544a05ba7a9";
        var myip=returnCitySN["cip"];
        // var myip="116.224.126.191";
        var html="";
        $.getJSON("http://v.juhe.cn/weather/ip?callback=?",{
                "ip":myip,
                "dtype":"json",
                "key":mykey
            },function(data){
                var html="<p>当前城市   </p>"+"<p>"+data.result.today.city+"</p>"+"<br/>"
                    +"<p>今日温度   </p>"+"<p>"+data.result.today.temperature+"</p>"+"<br/>"
                    +"<p>今日风向   </p>"+"<p>"+data.result.today.wind+"</p>"+"<br/>"
                    +"<p>紫外强度   </p>"+"<p>"+data.result.today.uv_index+"</p>"+"<br/>"
                    +"<p>今日日期   </p>"+"<p>"+data.result.today.week+"</p>"+"<br/>";
                $("#content").html(html);
            }
        );
    });
})