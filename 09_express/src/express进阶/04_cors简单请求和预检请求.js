// 简单请求 
// get post head 请求
// http请求头在9个范围之内

// 预检请求
// 除get post head 请求之外的请求方式
// 请求头中包含自定义头部字段
// 向服务器发送了 application/json 格式数据

// 区别：
// 简单请求： 客户端服务器之间只会发生一次请求
// 预检请求： 客户端与服务器之间会发生两次请求 OPTION预检请求成功之后 才会发起真正的请求