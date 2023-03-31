// 1.什么是cors
// cors 跨域资源共享  由一系列的http响应头组成，这些http响应头决定浏览器是否阻止前端js代码跨域获取资源
// 浏览器的同源策略默认会阻止浏览器 跨域 访问资源  但是如果接口服务器配置了cors相关的http响应头 就可以解除浏览器端的跨域访问限制

// 2.cors注意事项
// 1.主要在服务端进行配置 客户端无须做任何的额外配置
// 2.cors在浏览器中有兼容性 只有支持XMLHttpRequest Level2的浏览器 才可以访问开启了cors的服务端接口 IE10+ Chrome4+ FireFox3.5+


// 3.cors响应头
// Access-Control-Allow-Origin
// 通过 res.setHeader(响应头字段，域名或者是*号) 第二个参数如果是域名表示只允许当前域名访问*代表所有
// res.setHeader('Access-Control-Allow-Origin', 'http://itast.cn')
// res.setHeader('Access-Control-Allow-Origin', '*')

// Access-Control-Allow-Headers
// 允许客户端访问 正常的9个 之外的请求头  额外向服务器发送 Content-Type X-Custom-Header
// 注意：多个请求头之间 用英文逗号分隔
// res.setHeader('Access-Control-Allow-Header', 'Content-Type, X-Custom-Header')

// Access-Control-Allow-Mehtods
// 默认情况下cors只支持客户端发起的GET POST HEAD请求
// 如果需要发送 delete put等方式的请求可以进行设置
// 允许这几种请求POST, GET, DELETE, HEAD
// res.setHeader('Access-Control-Allow-Mehtods', 'POST, GET, DELETE, HEAD')
// 允许所有的http请求
// res.setHeader('Access-Control-Allow-Mehtods', '*')