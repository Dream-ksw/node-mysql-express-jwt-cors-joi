const path = require('path')

// path.basename() 方法可以从一个文件路径中获取文件名

const fpath = '/a/b/c/01_file.txt'

// const fullName = path.basename(fpath)
// console.log(fullName); // 01_file.txt

const nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt);