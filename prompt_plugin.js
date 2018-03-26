;(function(){


var sty = document.createElement('style');
sty.innerHTML = `
#bounce-window{
position:fixed;
left:200px;
top:200px;
width:200px;
height:80px;
margin:auto;
background-color:whitesmoke;
border-radius:3px;	
text-align:center;
transition:0.5s;
opacity:1;
}
#bounce-window p{
	margin:8px
}
#bounce-window button{
border-radius:4px;
margin-left:12px;
}
.out{
transform:scale(0,0);
opacity:0;
visibility:hidden;
}
`;
document.head.appendChild(sty);
var div = document.createElement('div')	;
div.id = 'bounce-window';
div.innerHTML = `
<p>这就是优美的弹窗哦！
</p>
<button onclick="myoo.sure()">确认	
</button>	
<button onclick="myoo.cancel()">取消	
</button>	
`;
document.body.appendChild(div);

function sure(){
	div.className='out';
}

function cancel(){
	div.className='';
}


var myoo = {
	sure,
	cancel,
	div
}
window.myoo=myoo;
}());