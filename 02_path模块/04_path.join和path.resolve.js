const path = require('path')

console.log(path.join()); // .
console.log(path.join('./test', __dirname)); // 打印当前目录的绝对路径
console.log(path.resolve('./test', __dirname, './test')); 
// path.resolve()
// 1.不传递参数默认会打印当前目录的绝对路径 （自带to参数）
// 2.遇到/开头会以自身所在盘为根路径加以拼接
// 3.默认是以__dirname开始进行拼接的，即使__dirname不在第一个参数位置，path.resolve也会从__dirname出现的位置开始拼接