// 在express 路由指的是客户端的请求与服务端的处理函数之间的映射关系
// express中的路由分3部分组成 分别是请求的类型 请求的url地址 处理函数
// 格式  app.METHOD(PATH, HANDLER) app.get('/', function(req, res) {})

// 路由的匹配过程
// 1.按照定义的先后顺序进行匹配
// 2.请求的类型和请求的URL同时匹配成功，才会调用对应的处理函数