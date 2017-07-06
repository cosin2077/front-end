# EJS 模板  

在学express的过程中碰到了ejs模板引擎,于是专门花了点时间,学习了下   
常用语法  

	<%...%> 里边运行js代码,不做输出 
	<%=...%> 输出变量,<,>,",&等字符会被转义
	即<%=<h1>666</h1>%> 会输出<h1>666</h1>  
	<%-...%> 输出原始内容,不做转义
	即<%-<h1>333</h1>%>  输出作为标题的333
	<%- include("") %>  包含其他模板,比如
	<%- include("views/header") %>  包含./views/header.ejs
	<%#....%>  用来注释,不执行,不输出 
	<%%  转义为%
    -%> 结尾用于换行移除
	<%_ _%> 空白字符移除

## 顺便就来Liquid了  

**对象**-{{page.body}}
**标记**-{%...%}
**过滤器**-{{page.title|append:".txt"}}

	逻辑操作符  
	==  
	!=
	>
	<
	>=
	<=
	or
	and
	比如:
	{% if page.title=="666" %}
	show the {{page.title}}
	{%endif%}

	contains-包含(只能用于搜索字符串)
	{% if page.title contains "Not Found" %}
	404 Not Found.
	{% endif %}


	