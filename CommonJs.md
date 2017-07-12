# CommonJS模块规范  

每个js文件都是一个模块,模块与模块之间相互独立,一个模块想要对外暴露变量用  
module.exports = variable;
一个模块想要引用其他模块暴露的变量,可以用  
var ref = require('module_name');