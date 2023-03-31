// 导入express模块
const express = require('express')
// 导入验证规则的包
const joi = require('joi')
// 导入配置文件
const config = require('./config')
// 导入解析token的模块
const expressJWT = require('express-jwt')

// 创建 express 服务器实例
const app = express()


// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())
// 配置解析表单数据的中间件  注意：这个中间件只能解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// 给res注册一个中间件 供后续路由使用
app.use((req,res,next) => {
  res.cc = function(err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})
// 注册一个解析token的中间件
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path: [/^\/api\//]}))


// 导入用户注册和登录路由模块并且挂载
const userRouter = require('./router/user')
app.use('/api' ,userRouter)
// 导入用户信息的路由模块并挂载
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter )
// 导入文章分类路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)
// 导入发布文章的路由模块
const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)


// 定义一个全局错误处理的中间件
app.use((err, req, res, next) => {
  // 这里的错误是因为没有通过校验
  if(err instanceof joi.ValidationError) return res.cc(err)
  // 这里的错误是因为 token解析失败
  if(err.name === 'UnauthorizedError') return res.cc(err)

  res.cc(err)
})

// 调用app.listen方法 指定端口号 并 启动服务
app.listen(3007, () => {
  console.log('Api server running at http://127.0.0.1:3007');
})