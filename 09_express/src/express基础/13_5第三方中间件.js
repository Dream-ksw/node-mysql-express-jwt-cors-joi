const express = require('express')
const app = express()

// 非官方内置的 而是由第三方开发的中间件
const parser = require('body-parser')
app.use(parser.urlencoded({extended: false}))

app.post('/user', (req, res) => {
  // 如果不配置解析表单的中间件的话 默认时undefined
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})