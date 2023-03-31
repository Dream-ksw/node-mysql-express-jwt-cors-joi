const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由

// 定义get接口
router.get('/get', (req,res) => {
  // 接收客户端通过查询字符串传递给服务器的数据
  const query = req.query
  // 将数据返回给客户端
  res.send({
    status: 0, //状态
    msg: 'GET 请求成功！',  //描述
    data: query  //响应数据
  })
})

// 定义post接口
router.post('/post', (req,res) => {
  // 通过req.body获取请求体中包含 urlencoded 格式的参数
  const body = req.body
  // 给客户端响应数据
  res.send({
    status: 0,
    msg: 'POST 请求成功!',
    data: body
  })
})

module.exports = router