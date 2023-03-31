// 使用module.exports向外共享成员
const age = 10
module.exports.username = 'zs'

module.exports.sayHello = () => {
  console.log('sayHello');
}

module.exports.age = 10

// 以module.exports指向的那个对象为准
module.exports = {
  name: 'coder'
}