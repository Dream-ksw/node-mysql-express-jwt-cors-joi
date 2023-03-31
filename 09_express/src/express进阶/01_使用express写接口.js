const express = require('express')
const app = express()

// 使用express.urlencoded中间件解析表单数据格式
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// 定义jsonp接口
app.get('/api/jsonp', (req,res) => {
  console.log(req.query);
  // 1.得到函数的名称
  const funName = req.query.callback
  // 2.定义要发送到客户端的数据
  const data = {name: 'coder', age: 10}
  // 3.拼接出一个函数调用
  const scriptStr = `${funName}(${JSON.stringify(data)})`
  // 4.把拼接的字符串响应给客户端
  res.send(scriptStr)
})

// 在挂载路由之前 使用cors中间件解决跨域问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./01_apiRouter')
app.use('/api', router)

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})