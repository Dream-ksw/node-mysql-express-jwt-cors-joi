const express = require('express')
const app = express()

// 创建局部生效的中间件
const mw1 = function(req, res, next) {
  console.log('调用了 mw1 局部生效的中间件');
  next()
}
const mw2 = function(req, res, next) {
  console.log('调用了 mw2 局部生效的中间件');
  next()
}

// 创建路由 可以使用多个中间件 两种写法  逗号分开或者数组
app.get('/', mw1, mw2, (req,res) => {
  res.send('访问了 / 路由, 会触发局部生效的中间件 mw1 mw2')
})
app.get('/user', [mw1, mw2], (req, res) => { 
  res.send('访问了 /user 路由, 会触发局部生效的中间件 mw1 mw2')
})
app.get('/user/list', (req, res) => { 
  res.send('访问了 /user 路由, 不会触发局部生效的中间件')
})




app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})