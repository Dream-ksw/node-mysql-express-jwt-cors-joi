// 格式化时间
function padZero(n) {
  return n > 9? n : '0' + n
}
function formatDate() {
  const dt = new Date()

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const HH = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${HH}:${mm}:${ss}`
}

module.exports = {
  formatDate
}