// req请求对象中有 url method 
// res响应对象中有 end 方法 给客户端响应一些内容
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method
  const str = `You request url is ${url}, and request method is ${method}`
  res.end(str)
})

server.listen('80', () => {
  console.log('server running at http://127.0.0.1');
})