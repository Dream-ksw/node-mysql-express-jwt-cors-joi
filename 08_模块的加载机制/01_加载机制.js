// 三种模块共同特点
// 模块第一次加载后会被缓存。多次调用require不会导致模块的代码多次执行
// 不论是内置模块 自定义模块 第三方模块 都是优先从缓存中加载 从而提高模块的加载效率


// 内置模块
// 内置模块是nodejs官方提供的模块  加载优先级最高

// 自定义模块
// 1.使用自定义模块时 必须指定以./ 或者 ../开头的路径标志符 如果没有指定则node会把他当作内置模块或者第三方模块执行
// 2.在使用require导入自定义模块时 如果省略了扩展名  会按照以下顺序  确切的文件名 -- .js -- .json -- .node -- 加载失败

// 第三方模块
// 首先会从当前模块所在的位置查找node_modules如果没有 就上一层目录 直到磁盘根目录 如果最终没有查找到 报错

// 目录作为模块
// 先查找当前目录下是否有package.json文件 如果有查看是否有main属性 如果有执行指定的文件
// 没有 执行index.js文件