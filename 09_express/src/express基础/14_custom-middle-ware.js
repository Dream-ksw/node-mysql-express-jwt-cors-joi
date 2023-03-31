// 导入querystring模块
const qs = require('querystring')

// 1.创建自定义解析表单的中间件
const bodyParse = (req,res,next) => {
  // 2.监听req的data事件 因为请求体数据有可能会很多客户端会把数据切割分批发送到服务器 获取请求数据
  let str = ''
  req.on('data', (chunk) => {
    str += chunk
  })

  // 3.监听req的end事件
  req.on('end', () => {
    // 这里获取到完整的str 请求体数据  将str使用querystring模块进行解析
    const body = qs.parse(str)
    // 因为路由和中间件共享一个req和res 所以将解析好的body数据挂载到 rq上
    req.body = body
    // 将流转关系交给下一个中间件或者路由
    next()
  })
}

module.exports = bodyParse