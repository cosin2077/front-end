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

function Welcome(props){
	return <h1>Hello,{props.name}</h1>
}

Components//组件
Comp1 = React.createClass({
	render:function(){
		return <div>{this.props.name}</div>
	}
})

ReactDOM.render(<Comp1 name="conan"/ >,mountnode)

React.createClass({
	//创建一个组件,是一个对象,至少包含render键值对
	render:function(){
		return //返回JSX
	}
})

ReactDOM.render(<Components />,mountnode)
第一个是渲染的组件,
第二个是挂载点

引入
var NewComponent = require('./NewComponent')
暴露
module.exports = NewComponent;

给组件属性以传递prop

获取传递的属性通过
this.props.prop-name

组件里定义事件

this.props.children
getDefaultProps设置默认props对象




