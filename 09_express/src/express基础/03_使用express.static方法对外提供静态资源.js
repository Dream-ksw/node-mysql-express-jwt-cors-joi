const express = require('express')
const app = express()

// 使用express.static()方法对外提供静态资源
// 注意 
// 1.存放静态文件的目录名不会出现在URL中
// 2.托管多个静态资源 托管多个静态资源时会有先后顺序 如果同文件名会先加载之前的
// app.use 第一个参数可以挂载路径前缀 挂载之后访问时需要添加文件名 也可以省略
app.use(express.static('./clock'))
app.use('/files',express.static('./files'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})