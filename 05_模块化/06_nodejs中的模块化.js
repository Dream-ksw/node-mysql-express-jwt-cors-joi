// nodejs遵循了CommonJS模块化规范 CommonJS规定了模块的特性和各个模块之间如何互相依赖

// 规定
// 1.每个模块内部 module变量代表当前模块
// 2.module变量是一个对象 他的exports属性是对外的接口
// 3.加载某个模块 其实就是加载该模块的module.exports属性 require方法用于加载模块