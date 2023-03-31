const express = require('express')
const app = express()

// // 定义一个中间件函数
// const mw = function(req,res,next) {
//   console.log('这里是最简单的中间件函数');
//   // 调用next函数 将流转关系交给下一个中间件或者路由
//   next()
// }
// // 全局中间件
// // 客户端发起的任何请求 到达服务器之后 都会触发的中间件 叫做全局生效的中间件
// // 通过调用app.use(中间件函数) 即可定义一个全局生效的中间件
// // 将mw注册为全局生效的中间件
// app.use(mw)

// 定义全局中间件的简化形式
app.use(function(req,res,next) {
  console.log('这是最简单的中间件函数');
  next()
})

// 中间件的作用
// 多个中间件之间，共享同一份req和res 基于这样的特性 我们可以在上游的中间件中 统一为req或者res对象添加自定义的属性或者方法，供下游中间件或路由使用

app.get('/', (req, res) => {
  console.log('调用了 / 路由');
  res.send('home page.')
})
app.get('/user', (req,res) => {
  console.log('调用了 /user 路由');
  res.send('user page.')
})

app.listen(80, (req, res) => {
  console.log('express server running at http://127.0.0.1');
})