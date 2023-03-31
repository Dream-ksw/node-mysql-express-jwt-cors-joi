// 1.导入mysql模块
const mysql = require('mysql')

// 2.建立 与 mysql 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的ip地址
  user: 'root',  // 登陆数据库的账号
  password: 'admin123', // 登陆数据库的密码
  database: 'my_db_01'  //指定要操作哪个数据库
})

// 1.查询users表中所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//   // 查询数据失败
//   if(err) return console.log(err.message);
//   // 查询数据成功 这里的results是一个数组
//   console.log(results);
// })



// 2.向users表中插入一条数据 username 是 coder password 是 12345

// 定义一个对象
// const user = { username: 'coder', password: '123456' }
// // 定义sql语句
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// // 执行sql语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   // 执行sql语句失败了
//   if(err) return console.log(err.message);
//   // 成功了
//   if(results.affectedRows === 1) {
//     console.log('插入数据库成功了');
//   }
// })

// 通过便捷的方式插入数据
// 1.定义数据
// const user = { username: 'coder-w', password: '135790' }
// // 2.定义sql
// const sqlStr = 'insert into users set ?'
// // 执行sql语句
// db.query(sqlStr, user, (err, results) => {
//   if(err) return console.log(err.message);
//   if(results.affectedRows === 1) {
//     console.log('插入数据成功了');
//   }
// })


// 3.如何更新用户的信息

// const user = {id: 6, username: 'aa', password: '000'}
// // 定义sql语句
// const sqlStr = 'update users set username=?, password=? where id=?'
// // 执行sql语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if(err) return console.log(err.message)
//   if(results.affectedRows === 1) {
//     console.log('更新数据库成功');
//   }
// })

// // 更新数据简单写法
// // 定义数据
// const user = {id: 6, username: 'aaaaa', password: '01233'}
// // 定义sql语句
// const sqlStr = 'update users set ? where id=?'
// // 执行sql语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if(err) return console.log(err.message)
//   if(results.affectedRows === 1) {
//     console.log('更新数据成功');
//   }
// })

// 4.删除数据
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 7, (err, results) => {
//   if(err) return console.log(err.message);
//   if(results.affectedRows === 1) {
//     console.log('删除数据成功');
//   }
// })

// 标记删除
// 并不是真正的删除 而是把当前id对应的那组数据中的status的状态修改为1
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if(err) return console.log(err.message)
  if(results.affectedRows === 1) {
    console.log('标记删除成功');
  }
})