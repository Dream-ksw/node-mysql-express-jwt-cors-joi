// 包入口文件
const date = require('./src/formatDate')
const escape = require('./src/htmlEscape')


module.exports = {
  ...date,
  ...escape
}