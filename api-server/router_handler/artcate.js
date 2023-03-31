// 文章分类路由处理函数模块

// 导入操作数据库的模块
const db = require("../db")

// 获取文章分类 处理函数
exports.getArticleCates = (req, res) => {
  // 定义查询文章的 sql 语句
  const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
  // 执行sql
  db.query(sql, (err, results) => {
    if(err) return res.cc(err)
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results
    })
  })
}

// 添加文章分类 处理函数
exports.addArticleCates = (req, res) => {
  // 定义查询用户名称和别名的sql
  const sql = 'select * from ev_article_cate where name=? or alias=?'
  // 执行sql
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if(err) return res.cc(err)
    if(results.length === 2) res.cc('分类名称与别名被占用，请更换后重试！')
    if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')
    if(results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
    // 分类名称和别名没有被占用 进行添加
    const sql = 'insert into ev_article_cate set?'
    db.query(sql, req.body, (err, results) => {
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc('新增文章分类失败')
      res.cc('新增文章分类成功', 0)
    })
  })
}

// 删除文章分类 处理函数
exports.deleteCateById = (req, res) => {
  // 定义删除文章分类的sql
  const sql = 'update ev_article_cate set is_delete=1 where id=?'
  // 执行sql
  db.query(sql, req.params.id, (err, results) => {
    if(err) return res.cc(err)
    if(results.affectedRows !== 1) return res.cc('删除文章分类失败！')
    res.cc('删除文章分类成功！', 0)
  })
}

// 根据id获取文章分类
exports.getArtCateById = (req, res) => {
  // 定义获取文章分类的sql
  const sql = 'select * from ev_article_cate where id=?'
  db.query(sql, req.params.id, (err, results) => {
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('获取文章分类数据失败')
    res.send({
      status: 0,
      message: '获取文章分类数据成功！',
      data: results[0]
    })
  })
}

// 根据id更新文章分类
exports.updateCateById = (req, res) => {
  // 定义更查询分类名称和别名是否被占用了 除了当前id 其他的数据中是否包含这个分类名称和别名
  const sql = 'select * from ev_article_cate where id<>? and (name=? or alias=?)'
  db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
    if(err) return res.cc(err)
    if(results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试！') 
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')
    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')

    // 分类名称和别名没有被占用 进行更新
    const sql = 'update ev_article_cate set? where id=?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc('更新文章分类失败！')
      res.cc('更新文章分类成功！', 0)
    })
  })
}