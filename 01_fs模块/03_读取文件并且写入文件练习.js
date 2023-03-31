const fs = require('fs')

fs.readFile('./素材/成绩.txt', 'utf8', function(err, dataStr) {
  if(err) {
    return console.log('文件读取失败', err);
  }
  // 文件读取成功
  const oldArr = dataStr.split(' ')
  const newArr = []
  oldArr.forEach(item => {
    newArr.push(item.replace('=','：'))
  })
  const newStr = newArr.join('\r\n')
  fs.writeFile('o./素材/成绩ok.txt', newStr, function(err) {
    if(err) {
      return console.log('文件写入失败', err.message);
    }
    console.log('文件写入成功');
  })
})