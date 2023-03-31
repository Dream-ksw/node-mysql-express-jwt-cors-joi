const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const str = `你请求的 URL 地址是 ${req.url}，你请求的方式是 ${req.method}`
  // text/html; 注意这里是分号 charset=utf-8
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(str)
})

server.listen('80', () => {
  console.log('server running at http://127.0.0.1');
})