all about react.js

JSX//JavaScript extension
花括号内可以插入任意JavaScript表达式
function tick(){
	const element = (
	<div>
	<h1>hello,world!</h1>
	<h2>It is {new Date().toLocalTimeString()}</h2>
	</div>
	)
	ReactDOM.render(
		element,
		document.getElementById("container")
		);
}
setInterval(tick,1000)

Components//组件

function Welcome(props){
	return <h1>Hello,{props.name}</h1>
}


















