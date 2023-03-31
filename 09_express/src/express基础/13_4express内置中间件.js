const express = require('express')
const app = express()

// 创建express内置的中间件
// express.static('目录/路径')
// express.json 解析json格式的请求体数据（4.16.0+）
app.use(express.json())
// express.urlencoded 解析 URL-encoded 格式的请求体数据（4.16.0+）
app.use(express.urlencoded({extended: false}))


// 创建路由
app.post('/user', (req, res) => {
  // 通过req.body获取post请求数据
  // 在默认情况下 如果不配置解析表单数据的中间件 则req.body默认是undefined
  console.log(req.body);
  res.send('ok')
})

app.post('/book', (req,res) => {
  // 通过express.urlencoded这个中间件 来解析表单中的urlencoded格式的数据
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express server running at http:///127.0.0.1');
})