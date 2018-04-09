//twitter follow script

var resOri = Array.prototype.slice.call($('div.GridTimeline div.js-actionable-user span.user-actions-follow-button button:contains(关注)'),0).filter(function(x){
	return window.getComputedStyle(x)['display']!='none';
})
//过滤垃圾账户(简介没有10个字符)
var res = resOri.filter(function(x){
	return x.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.innerText.length>10
})


var  follow = res.filter(function(x){
	console.log(x.firstElementChild.innerText)
	return x.firstElementChild.innerText=='关注';

})
var x=0;

var itv = setInterval(function(){
	try{
		follow[x].click();
		x++;
		console.log('follow: '+x);
	}catch(ex){
		clearInterval(itv);
	}
},(Math.random()*3+1)*1000);

//万能清除定时器
for(var a=0;a<100000;a++){
	clearInterval(a)
}
//btcerise
var res = '';
$('a[href*=mag]').each(function(i,x){
	console.log(x);
	res+=x.href+'\n';
})
res;

