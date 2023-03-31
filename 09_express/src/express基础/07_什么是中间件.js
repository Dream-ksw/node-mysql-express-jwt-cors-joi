// 中间件
// 中间件(Middleware)，特指业务流程的中间处理环节

// Express的中间件，本质上就是一个function处理函数，
app.get('/', function(req,res,next) {

})

// 注意：中间件函数的形参列表中，必须包含next参数。而路由处理函数中只存在包含req res
// next函数是实现多个中间件连续调用的关键 它表示把流转关系交给下一个中间件或路由