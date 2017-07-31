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

React能够通过两种方式进行信息的动态传递
props和state

getInitialState:function(){
	return {obj:someprops}
}
this.setState({obj:anotherprops})

生命周期

挂载生命周期
mounting lifecycle

1.componentWillMount
2.render
3.componentDidMount
一个组件挂载的时候，自动依次执行这三个过程

挂载事件只有在组件第一次render的过程才会执行

当你需要添加一些希望只在组件挂载开始执行的事件的时候，就可以好好利用这三个事件了

componentDidMount适合处理render过程中接受的ajax,设置setTimeout,setinterval,以及与其他框架交互事件

更新生命周期(第二次render的时候)
updating lifecycle

1.componentWillReceiveProps(nextProps)
2.shouldComponentUpdate(nextPorps,nextState)返回true或false,返回false时，就什么都不做
3.componentWillUpdate()
4.render()
5.componentDidUpdate()

卸载生命周期
unmounting lifecycle

1.componentWillUnmount 






















































































































































































































































































































































































































































































































































































































