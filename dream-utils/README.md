## 安装
```
npm install dream-utils
```

## 导入
```js
const dream = require('dream-utils')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = dream.formatDate(new Date())
// 结果  2020-06-03 10:36:35
console.log(dtStr)
```

## 转义 HTML 中的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="h">我是h1<span>&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = dream.htmlEscape(htmlStr)
console.log(str)
// 转换的结果 
// &lt;h1 title=&quot;h&quot;&gt;我是h1&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符
```js
// 待还原的 HTML 字符串
// &lt;h1 title=&quot;h&quot;&gt;我是h1&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
const str2 = dream.htmlUnEscape(str)
console.log(str2)
// 输出的结果 <h1 title="h">我是h1<span>&nbsp;</span></h1>
```

## 开源协议
ISC