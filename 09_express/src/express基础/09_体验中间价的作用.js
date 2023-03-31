const express = require('express')
const app = express()

app.use(function(req,res,next) {
  // 为req属性添加获取当前时间的方法
  req.time = new Date()
  next()
})

app.get('/', (req, res) => {
  res.send('home page.' + req.time)
})
app.get('/user', (req,res) => {
  res.send('user page.'  + req.time)
})

app.listen(80, (req, res) => {
  console.log('express server running at http://127.0.0.1');
})