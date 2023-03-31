const express = require('express')
const app = express()
const bodyParse = require('./14_custom-middle-ware')

// 使用自定义解析表单的中间件模块
app.use(bodyParse)

app.post('/user', (req,res) => {
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})