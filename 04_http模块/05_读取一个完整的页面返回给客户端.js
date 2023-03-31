const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req,res) => {
  const url = req.url
  // const fpath = path.join(__dirname, url)
  // 1.用户访问 / 时 默认访问 /clock/index.html
  // 2.用户访问 /index.html 时 自动拼接 /clock
  let fpath = ''

  if(url === '/') {
    fpath = path.join(__dirname, './clock/index.html')
  } else {
    fpath = path.join(__dirname, './clock', url)
  }


  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if(err) {
      return res.end('404 not found!')
    }
    res.end(dataStr)
  })
})

server.listen('80', () => {
  console.log('running server at http://127.0.0.1');
})