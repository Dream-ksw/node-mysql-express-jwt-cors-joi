// 服务端渲染 推荐使用 session 认证机制 主要借助cookie 和浏览器自动携带和保存机制

// 1.http的无状态性  指的是客户端的每次http请求都是独立的  服务端不会主动保留每次http请求的状态

// 2.如何突破http的无状态性
// 登陆成功之后 服务器会返回一个Cookie

// 3.什么是Cookie
// Cookie是存储在用户浏览器中的一段不超过4kb的字符串 它由一个名称 一个值 和其它几个用于控制cookie有效期 安全性 使用范围的可选属性组成
// 不同域名下的cookie各自独立  每当客户端发起请求时 会自动把当前域名下所有未过期的cookie一同发送到服务器
// Cookie的几大特性
// 自动发送
// 域名独立
// 过期时限
// 4kb限制

// 4.Cookie 在身份认证中的作用
// 客户端第一次请求服务器的时候，服务器通过响应头的形式 向客户端发送一个身份认证的Cookie 客户端会自动将Cookie保存在浏览器中
// 随后 当客户端浏览器每次请求服务器的时候 浏览器会自动将身份认证相关的Cookie 通过请求头的形式发送给服务器 服务器即可验明客户端的身份

// 5.Cookie不具有安全性

// 6.提高身份认证的安全性




// 前后端分离 推荐使用 JWT 认证机制  目前最流行的跨域认证解决方案  主要使用token
// 1.使用场景
// 当前端需要跨域请求后端接口时 推荐使用JWT认证机制

// 2.介绍
// JWT 通常由三部分组成  Header(头部)  Payload(有效荷载)  Signature(签名)
// 三者之间使用英文 . 分隔

// payload部分才是真正的用户信息 它是用户信息经过加密之后生成的字符串
// Header 和 Signature 是安全性相关的部分 只是为了保证token的安全性

// 3.使用
// 客户端收到服务器返回的JWT之后 通常会存储在localStorage 或者 sessionStorage
// 请求时将jwt放在http请求头的  Authorization 字段中
// 格式 Authorization: Bearer <token>