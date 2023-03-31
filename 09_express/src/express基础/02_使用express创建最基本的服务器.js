// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 3.监听客户端的 GET POST 请求，并向客户端相应具体的内容
// 查询参数
app.get('/', (req,res) => {
  // 通过req.query可以获取到客户端传递过来的查询参数  默认是一个空对象
  // console.log(req.query);
  // res.send(req.query)

  // 调用express提供的send（）方法 向客户端响应一个Json对象
  res.send({ name: 'zs', age: 18, gender: '男' })
})

app.post('/user', (req,res) => {
  // 调用express提供的send（）方法 向客户端相应一个文本字符串
  res.send('请求成功')
})

// 动态参数
app.get('/user/:id/:name', (req,res)=> {
  // 通过req.params 获取 URL 中的动态参数
  console.log(req.params);
  res.send(req.params)
})

// 4.启动web服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})