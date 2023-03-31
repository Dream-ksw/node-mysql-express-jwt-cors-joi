// 中间件的注意事项
// 1.一定要在路由之前注册中间件
// 2.客户端发过来的请求，可以连续调用多个中间件进行处理
// 3.执行完中间件的业务代码之后，不要忘记调用next函数  将流转关系交给下一个中间件或路由
// 4.为了防止代码逻辑混乱，调用next函数后不要再写额外的代码
// 5.连续调用多个中间件时，多个中间件之间共享req和res