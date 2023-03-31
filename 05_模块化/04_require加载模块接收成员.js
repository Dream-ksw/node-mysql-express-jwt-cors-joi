// 每个自定义模块中都有一个module对象  存储了和当前模块有关的信息
// console.log(module);
// 默认情况下 module.exports 对象为空  外界使用require导入模块时就是该对象 

const m = require('./04_module.exports向外共享成员')
console.log(m);