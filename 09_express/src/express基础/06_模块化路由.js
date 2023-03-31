const express = require('express')
const app = express()

// 1.导入路由模块
const router = require('./06_router')
// 注册路由 并且为路由挂载统一路由前缀
app.use('/api' ,router)

app.listen(80, (req,res) => {
  console.log('express server running at http://127.0.0.1');
})