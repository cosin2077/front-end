$(function(){
    $(".luck").click(function(){
        window.open("http://en.wikipedia.org/wiki/Special:Random");
    });
    $(".search").click(function(){
        var key="26a47410bdad313164c877e402202463";
        var url="http://op.juhe.cn/onebox/weather/query";
        var param={
            "cityname" : $("input").val(), //要查询的城市，如：温州、上海、北京
            "key" : key, //应用APPKEY(应用详细页查询)
            "dtype" :"json" //返回数据的格式,xml或json，默认json
        };
        var url2="http://v.juhe.cn/boxoffice/rank.php";
        var param2={
            "key":"77d7fa5b7177f3690ffa9245e0af6d1f",
            "area":"CN"
        };
        alert(url2+param2);
        $.getJSON(url2,param2,function(data){
            $("p").html(data.result[0].name);
        })
        // $.getJSON(url,param).done(function(data){
        //   alert(data.error_code);
        // })
    })
    $("input").focus(function(){
        $(this).attr("placeholder","");
    });
    $("input").blur(function(){
        $(this).attr("placeholder","search what you want here");
    });
})