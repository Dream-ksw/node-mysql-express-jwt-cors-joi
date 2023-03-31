const TIME = require('./01_formatDate')
console.log(TIME.formatDate(new Date));

const dayjs = require('dayjs')
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));