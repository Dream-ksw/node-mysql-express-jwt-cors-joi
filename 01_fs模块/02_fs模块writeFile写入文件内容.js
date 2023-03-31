const fs = require('fs')

// 第一个参数是写入文件的路径
// 第二个参数是要写入的内容
// 第三个参数是写入文件的编码格式 一般是utf8可以省略不写
// 第四个参数是错误的回调函数
// fs.writeFile('./files/02_file.txt', 'abc', function(err) {
//   // 如果写入文件成功 err的值是null  否则err的值是错误对象
//   if(err) {
//     return console.log('文件写入失败', err);
//   }
//   console.log('文件写入成功');
// })

fs.writeFile('./files/01_file.txt', 'aaa', function(err) {
  if(err) {
    return console.log('文件写入失败', err);
  }
  console.log('文件写入成功');
})