## 正则表达式reference  

字面量表达式直接写正则表达式  

	var reg = /^\d{3}[\-\s]\d{8}$/; 
### 非字符的字符匹配

	\0  NUL字符
	\t  制表符
	\n  换行符
	\v  锤子制表符
	\f  换页符
	\r  回车符
	\xbb  十六进制拉丁字符
	\uxxxx  Unicode字符 
	\cX	控制字符？

含有特殊含义的标点   

	^ $ . * + ? = ! : | \ / ( ) [ ] { } 

不需要加反斜杠的字符加了反斜杠仍然是原字符  

	\d  匹配一个数字[0-9]
	\D  匹配一个非数字[^0-9]
	\w  匹配一个字母或数字等价于[0-9a-zA-Z]
	\W  匹配一个非字母或数字等价于[^0-9a-zA-Z]
	.  匹配任意字符(换行符除外)
	*  匹配任意个前边的字符，包括0{0,}
	+  匹配至少一个前边的字符{1,}
	?  前边的字符有0个或1个{0,1}
	{n}  前边字符重复n次
	{m,n}  前边字符重复[m,n]次
	{m}   前边字符重复n次,或更多次
	[]  匹配其中一个
	\s  空白符
	|  或
	^  以...开头,用在[]内表示非
	$  以...结尾
	()分组 之后可用\1,2访问子组
	(?:)仅组合

	*和?允许什么都不匹配,所以/a*/.test("bbb")结果为true

	/a+b/.test('aaab');	
	/a+?b/.test('aaab');两者结果一样！！
	实际上,匹配模式总会寻找字符串中第一个可能匹配的位置
***
选择项的匹配总是从左到右,有点类似短路运算!

**/a|ab/.exec("ab");//匹配的结果是 'a'！**

正则中 圆括号可以充当数学运算中的优先运算符!也可以定义子模式，亦可以通过\后加数字引用前边的子表达式!([Sc]cript)就可以用\2来表示! 从左往右算起的  
/([Jj]ava([Sc]cript)?)\sis\s(fun\w*)/
Java is fun!
javascript is fun?
....

创建不带数字编码的引用  \2指代的就是(fun\w*)了  
/([Jj]ava(?:[Sc]cript)?)\sis\s(fun\w*)/

\b  匹配边界(就是旁边不能接字母或数字！)  
\B  匹配非边界  
/\B[Ss]cript/ 与DSAFAscript,*&21Script匹配，却不予script，scripting匹配

修饰符img
/java$/im 能匹配"Java\n is fun"  

String类型的4种正则方法 
 
	1. search. "Javascript".search(/script$/i);返回匹配到字符串的位置,即 4  
	2. replace. "J&a*v-a-Sc-ript".replace(/[\-\*\&]/g,'');//"JavaScript" 
	   text.replace(/^"[^"]"$/g,'“$1”') ;//替换文中英文引号为中文引号
	3. match. "asd 115-61da".match(/\d{2,3}\B/g);//返回结果["11","61"];
	   非全局匹配也是返回 一个数组
	   解析URL
	   var url ="https://www.baidu.com/saf";
	   var reg = /(\w+)\:\/\/([\.\w]+)\/(\S*)/;
	   var res = url.match(reg);
	   res[0];https://www.baidu.com/saf
	   res[1];https
	   res[2];www.baidu.com
       res[3];saf
	4. split. "1,2, 5 ,3, 2,  5".split(/\s*,\s*/);["1", "2", "5", "3", "2", "5"]  
	   