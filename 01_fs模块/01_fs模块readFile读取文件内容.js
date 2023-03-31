const fs = require('fs')
// fs.readFile(读取文件的存放路径，读取文件的时候采用的编码格式， 回调函数，可以拿到读取成功和失败的结果)
// fs.readFile(读取文件的存放路径， 读取文件的时候采用的编码格式， 回调函数，可以拿到读取成功和失败的结果)

// 判断读取成功或者失败
fs.readFile('../01_file.txt', 'utf8', (err, data) => {
  // 如果文件读取成功 err的值为null data的值为文件的内容
  // 如果文件读取失败 err的值为错误对象  data的值为undefined
  if(err) {
    return console.log('读取文件失败', err);
  }
  console.log('读取文件成功', data);
})