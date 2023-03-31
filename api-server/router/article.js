const express = require('express')
const router = express.Router()

// 导入解析multipart/form-data格式数据的模块 multer
const multer = require('multer')
const path = require('path')
// 创建multer实例
const upload = multer({ dest: path.join(__dirname, '../upload') })

// 导入文章路由处理函数模块
const article_handler = require('../router_handler/article')
// 发布新文章
router.post('/add', upload.single('cover_img'), article_handler.addArticle)

module.exports = router