const path = require('path')
const fs = require('fs')

// path.join()方法用来将多个路径片段拼接成一个完整的路径字符串

// ../会抵消一层目录 ./不会
// const pathStr = path.join('/a', '/b/c', '../', '/e')
// console.log(pathStr);  // a/b/e

fs.readFile(path.join(__dirname, '../fs模块/files/01_file.txt'), 'utf8', function(err, dataStr) {
  if(err) {
    return console.log('文件读取失败', err);
  }
  console.log('文件读取成功');
})

