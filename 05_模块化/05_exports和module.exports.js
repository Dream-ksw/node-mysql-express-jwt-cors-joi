// 由于module.exports 单词写起来比较复杂，为了简化向外共享成员的代码 node提供了exports对象
// 默认情况下 module.exports 和 exports指向同一个对象 最终共享的结果 还是以module.exports指向对象为准

// console.log(exports === module.exports);


// 使用exports导出和module.exports导出效果一样
// exports.age = 10
// module.exports.age = 10

// 注意：

// 1.如果一个模块中同时出现exports 和 module.exports时并且以对象赋值的方法进行操作 那么此时exports和module.exports就不再指向同一个对象了 此时以module
// exports = {
//   name: 'coder'
// }
// module.exports.age = 10
// console.log(module);

// exports.name = 'coder'
// module.exports = {
//   age: 10
// }
// console.log(module);  // age: 10

// 2.如果同时出现  但是都是以 .的方式进行添加属性和方法 那么添加的属性和方法同时存在
// exports.name = 'coder'
// module.exports.age = 10
// console.log(module);

// exports = {
//   name: 'coder',
//   age: 10
// }
// module.exports = exports
// module.exports.gender = '男'

// 得到的永远是moduel.exports指向的那个对象