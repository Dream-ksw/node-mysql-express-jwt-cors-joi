// 导入定义验证规则的模块
const joi = require('joi')

// 定义添加文章分类的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()  //alphanum含有字母和数字的

// 导出添加文章分类的 验证规则对象
exports.add_cate_schema = {
  body: {
    name,
    alias
  }
}

// 定义删除文章分类id的验证规则
const id = joi.number().integer().min(1).required()
// 导出删除文章分类的 验证规则对象
exports.delete_cate_schema = {
  params: {
    id
  }
}

// 导入根据id获取文章分类的验证规则对象
exports.get_cate_schema = {
  params: {
    id
  }
}

// 导出根据id更新文章分类的验证规则对象
exports.update_cate_schema = {
  body: {
    id,
    name,
    alias
  }
}