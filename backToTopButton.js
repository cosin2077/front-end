//backToTopButton


var backToTop = document.createElement('div');
backToTop.className="back-to-top";

backToTop.style.cssText = 
`
position:fixed;
visibility:hidden;
z-index:99999;
right:30px;
bottom:30px;
height:60px;
width:60px;
border: solid;
border-radius:50%;
background-color:whitesmoke;
`;
document.body.appendChild(backToTop);
var scrollHeight = document.documentElement.scrollHeight;
var scrollTop,clientHeight,itv;
backToTop.innerHTML=
`
<p style="border:10px solid transparent ;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;transform:translateY(-20%);height:0px;width:0px;border-bottom:solid 18px black;"> </p>

`;

function showBack(){
	scrollTop = document.documentElement.scrollTop;
	clientHeight = document.documentElement.clientHeight;
	if(scrollTop<=1){
		clearInterval(itv);
	}
	if(scrollTop>clientHeight){
		backToTop.style.visibility='visible';
		
	}else{
		backToTop.style.visibility='hidden';

	}
}
window.addEventListener('scroll',showBack,true);
backToTop.addEventListener('click',function(){

	window.scroll(0,0)
})