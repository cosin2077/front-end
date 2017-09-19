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

**除了nil和false之外所有值都是真值**  
	
	{% assign tony = "conan" %}
	
	{% if tony %}
	condition is true
	{% endif %}

数据类型包括  

	String(字符串)
	{% assign str = "hello liquid"%}  
	Number(数字)
	{%assign num = 666 %}  
	Boolean  
	{% assign gender=false %}
	Nil(也就是不存在)
	{% if asdasf %}
	hello {{asdasf.name}}
	{% endif %}
	Array  
	<!-- if items=[1,2,3,4] -->
	{% for item in items %}
	{{item}}
	{% endif %}
	不能通过liquid初始化数组,但能用split过滤器将字符串分割为子字符串数组  

**空白符输出控制!**

	{{- 删除左侧 
	-}} 删除右侧
	{%- 删除左侧
	-%} 删除右侧

**注释**
{%comment%}
我是注释不会被输出 
{%endcomment%}  

**控制流**

	{%if title contains "666"%}
	666 are here.
	{%endif%}
	
	{%unless title contains "666"%}
	666 are not here.
	{%endunless%}
	
	{%if customer.name="conan"%}
	hello conan!
	{%elsif customer.name="kevin"%}
	hello kevin!
	{%endif%}
	case/when 相当于switch  
	{% assign model="9527"%}
	{% case model%}
		{% when "6623"%}
			6623
		{% when "9527"%}
			952
	{%endcase%}

**循环/迭代**

for  

	{% for a in (1..5)%}
		{% if a == 3%}
			{% break%}
		{% else%}
			{{a}}
		{%endif%}
	{%endfor%}
	输出1 2 3

	{%for item in items limit:4%}
		{%if item==2%}
			{%continue%}
		{%else%}
			{{item}}
		{%endif%}
	{%endfor%}
	 
- limit——限定循环执行的次数  
- offset——制定索引号  
- 定义执行范围

	{%for i in (3...7) limit 3 %}
	{{i}}
	{%endfor%}
	输出3,4,5  
- reversed 反转循环的执行顺序  

原始内容  
{%raw%}
//...原始内容,不被解析
{%endraw%}

assign 用于给变量赋值  
capture用于在开始和结束标签之间捕捉字符串并赋值给变量  
{%capture str%}what the heck that is ?{%endcapture%}
{{str}}  
 
过滤器  
abs  绝对值,字符串也适用  
append  拼接字符串  
capitalize  首字母大写  
ceil 向上取整  
compact  删除数组中的nil项目
date  格式化时间  
{{"now"|date:"%Y-%m-%d %H:%M"}}
default 设置默认值  
divided_by  被除以,整数得整数,浮点数得浮点数  
downncase  全部小写  
escape  转义  
escape_once  转义一次  
first  数组的第一项  
floor 向下取整  
join  拼接  
last  数组中最后一项  
lstrip  删除字符串左侧所有空白符  
map  取出对象某个属性所有值,组成一个数组  
minus  减去  
modulo  取余数  
newline_to_br  \n 替换为<br>标签  
plus 相加  
prepend  字符串前边拼接  
remove  删除前边所有出现的某个字符串  
remove_first  仅仅删除第一前边出现字符串  
replace  将参数中第一个全部替换为第二个  
replace_once 仅替换第一个参数为第二个参数  
reverse 数组所有项目全部反转顺序,不能直接应用值字符串上  
round  四舍五入  
rstrip  删除右侧所有空白符  
size  返回字符串或数组的元素个数  
slice  一个参数相当于index,两个参数时相当于slice  
sort 排序  
sort_natural 排序(不管大小写)
split  传入字符串分割为数组  
strip  删除左右侧空白符  
strip_html 删除所有html标签 
strip_newlines 从字符串中删除所有换行字符
times 将一个数乘以另一个数
truncate 将字符串截短为指定的字符个
truncatewords  将字符串截短为指定的单词个数
uniq 数组去重  
upcase 将字符串中的每个字符都转换为大写形式
url_decode 对于作为 URL 进行编码或通过 url_encode 编码的字符串进行解码  
url_encode  将字符串中非 URL 安全的字符转换为百分号编码（percent-encoded）的字符
