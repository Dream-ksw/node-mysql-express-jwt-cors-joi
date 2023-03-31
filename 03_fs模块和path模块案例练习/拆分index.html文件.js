const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

function resolveCss(str) {
  // 在一个指定字符串中执行一个搜索匹配 返回一个数组或者null
  const r1 = regStyle.exec(str)
  // 将样式文件中的<style></style>标签替换
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')
  // 写入新的文件中
  fs.writeFile(path.join(__dirname, './files/index.css'), newCss, function(err) {
    if(err) return console.log('写入css文件失败')
    console.log('写入css文件成功')
  })
}

function resolveJs(rawStr) {
  const r1 = regScript.exec(rawStr)
  const newJs = r1[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './files/index.js'), newJs, function(err) {
    if(err) return console.log('写入JS脚本失败')
    console.log('写入JS脚本成功')
  })
}

function resolveHTML(rawStr) {
  const newHTML = rawStr
                  .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
                  .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './files/index.html'), newHTML, function(err) {
    if(err) return console.log('写入html文件失败');
    console.log('写入 html 文件成功');
  })
}

fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
  if(err) {
    return console.log('文件读取失败', err)
  }
  resolveCss(dataStr)
  resolveJs(dataStr)
  resolveHTML(dataStr)
})