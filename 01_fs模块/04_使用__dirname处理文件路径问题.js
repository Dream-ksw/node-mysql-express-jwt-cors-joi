const fs = require('fs')

// 避免使用相对路径 /(根目录) ./(当前目录) ../(上一级目录)
// fs.readFile('./files/01_file.txt', 'utf8', function(err, dataStr) {
//   if(err) {
//     return console.log('文件读取失败', err);
//   }
//   console.log('文件读取成功');
// })

fs.readFile(__dirname + '/files/01_file.txt', 'utf8', function(err, dataStr) {
  if(err) {
    return console.log('文件读取失败', err);
  }
  console.log('文件读取成功', dataStr);
})