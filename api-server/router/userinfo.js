// 用户信息的路由模块

// 导入express模块
const express = require('express')
// 创建router实例
const router = express.Router()


// 导入路由处理模块中的用户信息模块
const userinfo_handler = require('../router_handler/userinfo')
// 导入执行校验规则的中间件
const expressJoi = require('@escook/express-joi')
// 导入更新用户信息需要的验证规则
const { 
  update_userinfo_schema, 
  update_password_schema,
  update_avatar_schema
} = require('../schema/user')


// 获取用户基本信息的路由
router.get('/userinfo', userinfo_handler.getUserInfo)
// 更新用户基本信息的路由
router.post('/userinfo', expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)
// 更新用户密码的路由
router.post('/updatepwd', expressJoi(update_password_schema),userinfo_handler.updatePassword)
// 更新用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema),userinfo_handler.updateAvatar)


module.exports = router