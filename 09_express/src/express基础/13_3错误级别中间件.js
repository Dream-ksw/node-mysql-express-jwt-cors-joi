// 错误级别中间件的处理函数中 必须有四个参数 err req res next
// 作用 专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
// 注意：错误级别中间件必须放在所有路由之后

const express = require('express')
const app = express()

app.get('/', (req,res) => {
  // 人为的抛出一个错误
  throw new Error('服务器内部发生了错误')
})

// 定义错误级别的中间件 防止项目的异常奔溃
app.use(function(err,req,res,next) {
  // 向客户端响应错误内容
  res.send('Error! ' + err.message)
})

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})