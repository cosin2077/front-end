# Anaconda <del>初</del>体验

话题还是从python2和python3开始谈起的...

记得开始学python的时候,就听到一句话,很多python第三方库的团队已经放弃python2相关的库的维护了...于是果断了学了python3,然后去网上找demo,想做一些练习的时候却发现,好多例子都是基于python2的！于是果断的又把python2,python2和3之间的差异又看了一遍,  
>raw_input 重命名为input了
>**print变为了函数**,特别是这点啊，坑死了,调用的时候必须加括号啊 
>**还有就是类库的变化啊,如果想将python2和python3之间的代码互改一下,还是比较费劲的啊**

**而anaconda能帮我们很好的处理这一问题！**

**什么是Anaconda：**
> Anaconda的官方解释是：
> 最受欢迎的数据科学生态系统
> <del>手动捂脸</del>
> 这不说了更不说一样吗
> 我们再看看维基百科的解释：
>"Anaconda is a freemium open source distribution of the Python and R programming languages for large-scale data processing, predictive analytics, and scientific computing, that aims to simplify package management and deployment."
>哦，就是说anaconda是致力于简化python和R语言的包管理,环境部署问题的开源程序！
>现在再回头看看为啥说是"数据科学生态系统"就明白了,就是因为python和R在这个领域很牛逼啊

知道了是什么之后,我们就可以开始下载,安装,使用了 
这是官方下载   
[window 64位系统,python3.6](https://repo.continuum.io/archive/Anaconda3-4.4.0-Windows-x86_64.exe)
[window 32位系统,python3.6](https://repo.continuum.io/archive/Anaconda3-4.4.0-Windows-x86.exe)
[window 64位系统,python2.7](https://repo.continuum.io/archive/Anaconda2-4.4.0-Windows-x86_64.exe)
[window 32位系统,python2.7](https://repo.continuum.io/archive/Anaconda2-4.4.0-Windows-x86.exe)

这是国内镜像  
[window 64位系统,python3.6](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Windows-x86_64.exe)
[window 32位系统,python3.6](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Windows-x86.exe)
[window 64位系统,python2.7](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda2-latest-Windows-x86_64.exe)
[window 32位系统,python2.7](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda2-latest-Windows-x86.exe)  

64位还是32位根据自己电脑的情况来定  
至于是下python3.6还是python2.7其实关系不是很大,因为后期都可以改的,但建议下载自己经常使用的那个版本  

下载安装好了之后,  
在命令行输入conda --version,
如果能正常显示版本,就表明安装成功了，  
如果conda不是命令,看下有没有将anaconda的安装路径加入环境变量  

装好了之后,就可以开始使用了  
**conda的环境管理**  
如果我们一开始安装的是python3.6,这默认环境就是python3.6  
这时候，假如我们需要创建一个python2的环境,就可以这样做  

conda create --name python2 python=2.7
安装好了之后,使用active激活环境  
activate python2  
这个时候环境就切换到python2来了  
如果想返回默认的环境  
deactivate python2  
就可以回到默认的环境了  
conda remove --name python2  --all
删除一个环境  
**conda的包管理**  

功能类似pip

	conda pip install scipy
	#会在当前的环境安装scipy包
	conda list #会显示当前已经安装的所有的包,还能能看到包是通过什么方式安装的,安装的python2还是python3的


**常见操作**  

	#查看当前环境下安装的包
	conda list  
	#查看某个指定环境下已安装的包
	conda list -n python2
	#安装package  
	conda install -n python2 numpy  
	#更新package  
	conda udate -n python2 numpy  
	#删除package  
	conda remove -n python2 numpy  

	conda也可以更新自己！
	
	conda update  conda  
	conda update anaconda   
	conda update python
	#假设当前环境是python 2.7,或更新到2.7.x的最高版本













