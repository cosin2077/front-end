//create viewing bar
!(function(){

var viewingbar = document.createElement('div');
viewingbar.className='viewing';
viewingbar.style.cssText = 
`
position:fixed;
top:0x;
left:0px;
background-color:steelblue;
height:3px;
width:0px;
z-index:99999;
`;
var getColor = localStorage.getItem('viewingbar_color');
var getHeight = localStorage.getItem('viewingbar_height');
if(getColor){
	viewingbar.style.backgroundColor = getColor;
}
if(getHeight){
	viewingbar.style.height = getHeight;
}
//插入到第一个body节点
document.body.insertBefore(viewingbar,document.body.firstElementChild);
//定义滚动事件加载进度条
var flag = false;

// 视口高度不用一直计算

// 视口高度
var clientHeight = document.documentElement.clientHeight;

function viewBar(){
	
	// 总高度(微博的scrollHeight加载之后又变动了)
	var scrollHeight = document.documentElement.scrollHeight;

	// 当前高度
	var scrollTop = document.documentElement.scrollTop;
	
	// 当前滑动比例
	var ratio = (scrollTop)/(scrollHeight-clientHeight);

	// 响应高度变化
	viewingbar.style.width=(ratio*100).toFixed(1)+"%";
}
window.addEventListener('scroll',viewBar);
var obj = {
	color:function(color){
		document.querySelectorAll('.viewing')[0].style.backgroundColor = color||'steelblue';
		//localStorage保存设置的颜色;
		if(color){
			var setColor = localStorage.setItem('viewingbar_color',color);
		}
	},
	height:function(height){
		document.querySelectorAll('.viewing')[0].style.height = height||'3px';
		if(height){
			var setColor = localStorage.setItem('viewingbar_height',height);
		}
	},
};
window.viewingbar = obj;

}());
/*
viewingbar.color();//设置颜色或重置颜色
viewingbar.height();//设置高度或重置高度
*/



