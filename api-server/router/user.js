// 用户注册和登录的路由模块

// 导入express模块
const express = require('express')
// 创建路由对象
const router = express()

// 添加路由
// 导入用户处理函数模块
const userHandler = require('../router_handler/user')

// 1.导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 2.导入需要验证的规则对象
const { reg_login_schema } = require('../schema/user')

// 注册新用户
router.post('/reguser', expressJoi(reg_login_schema),userHandler.regUser)

// 登陆
router.post('/login', expressJoi(reg_login_schema), userHandler.login)

module.exports = router