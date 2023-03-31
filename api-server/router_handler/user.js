const db = require('../db/index')
// 导入bcryptjs加密模块
const bcrypt = require('bcryptjs')
// 导入jwt模块
const jwt = require('jsonwebtoken')
// 导入config模块
const config = require('../config')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body

  // 非空校验 这里使用joi
  // if(!Object.keys(userinfo).length || !userinfo.username || !userinfo.password) {
  //   return res.cc('用户名或密码不能为空')
  // }

  // 查询用户名在数据库中是否存在
  const sqlStr = 'select * from ev_users where username=?'
  // 执行sql语句
  db.query(sqlStr, [userinfo.username], (err, results) => {
    // 发生了错误
    // if(err) return res.send({status: 1, message: err.message})
    if(err) return res.cc(err)

    // 有重复的用户名
    // if(results.length > 0) return res.send({status: 1, message: '用户名已被占用，请更换其他用户名！'})
    if(results.length > 0) return res.cc('用户名已被占用，请更换其他用户名！')

    // 给用户密码加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    // 如果没有错误并且给用户密码加密之后需要给数据库插入一条新数据
    // 定义sql语句
    const sqlStr = 'insert into ev_users set ?'
    // 调用db执行sql语句
    db.query(sqlStr, 
      {username: userinfo.username, password: userinfo.password}, 
      (err, results)=> {
        // 执行sql语句失败
        // if(err) return res.send({status: 1, message: err.message})
        if(err) return res.cc(err)

        // sql语句执行成功 但是影响行数不为1
        // if(results.affectedRows !== 1) return res.send({status: 1, message: '注册用户失败，请稍后再试！'})
        if(results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试！')
        
        // 注册成功
        // res.send({status: 0, message: '注册成功！'})
        res.cc('注册成功!', 0 )
      }
    )
  })
}

// 用户登陆的处理函数
exports.login = (req, res) => {
  const userinfo = req.body
  // 定义查询用户名的sql语句
  const sqlStr = 'select * from ev_users where username=?'
  // 执行sql语句
  db.query(sqlStr, userinfo.username, (err, results) => {
    // 执行sql语句失败
    if(err) return res.cc(err)
    // 没有查找到用户名
    if(results.length !== 1) return res.cc('登录失败!')
    // 使用bcrypt验证密码是否正确
    const compareResult = bcrypt.compare(userinfo.password, results[0].password)
    // 如果返回结果是false 说明密码不正确
    if(!compareResult) return res.cc('登录失败!')

    // 生成token字符串要把用户头像和用户登录密码去掉
    const user = { ...results[0], password: '', user_pic: '' }
    // 使用jwt 对用户的信息进行加密 生成token
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn})
    // 将token响应给客户端
    res.send({
      status: 0,
      message: '登录成功!',
      token: 'Bearer ' + tokenStr
    })
  })
}