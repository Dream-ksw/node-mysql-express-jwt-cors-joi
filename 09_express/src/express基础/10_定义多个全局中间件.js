const express = require('express')
const app = express()

// 使用app.use连续定义多个中间件  
// 当客户端请求到达服务器之后 会按照中间件定义的先后顺序依次调用
app.use(function(req,res,next) {
  console.log('调用了第一个全局中间件');
  next()
})
app.use(function(req,res,next){
  console.log('调用了第二个全局中间件');
  next()
})

app.get('/user', (req,res) => {
  res.send('user page.')
})

app.listen(80, (req,res) => {
  console.log('express server running at http://127.0.0.1');
})