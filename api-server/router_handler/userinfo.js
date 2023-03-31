// 导入数据库模块
const db = require('../db/index') 
// 导入解析密码的模块
const bcrypt = require('bcryptjs')

// 获取用户信息的处理函数
exports.getUserInfo = (req,res) => {
  // 定义查询的sql语句
  const sqlStr = 'select id, username, nickname, email, user_pic from ev_users where id=?'
  // 调用db执行sql语句
  // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
  db.query(sqlStr, req.user.id, (err, results) => {
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('获取用户信息失败！')
    res.send({
      status: 0,
      message: '获取用户信息成功',
      data: results[0]
    })
  })
}

// 更新用户基本信息处理函数
exports.updateUserInfo = (req, res) => {
  // 定义更新用户信息的sql语句
  const sqlStr = 'update ev_users set ? where id=?'
  db.query(sqlStr, [req.body, req.body.id], (err, results) => {
    if(err) return res.cc(err)
    if(results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
    res.cc('修改用户基本信息成功！', 0)
  })
}

// 更新用户密码的处理函数
exports.updatePassword =(req, res) => {
  // 1.查询用户是否存在
  const sql = 'select * from ev_users where id=?'
  db.query(sql, req.user.id, (err, results) => {
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('用户不存在！')
    // 2.将用户传递过来的旧密码与表里存储的密码进行对比
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if(!compareResult) return res.cc('原密码错误！')
    // 3.修改用户密码
    const sql = 'update ev_users set password=? where id=?'
    db.query(sql, [req.body.newPwd, req.user.id], (err, results) => {
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc('更新密码失败')
      res.cc('更新密码成功', 0)
    })
  })
}

// 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {
  // 定义更新用户头像的sql
  const sql = 'update ev_users set user_pic=? where id=?'
  db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
    if(err) return res.cc(err)
    if(results.affectedRows !== 1) return res.cc('更新头像失败！')
    res.cc('更新头像成功！', 0)
  })
}