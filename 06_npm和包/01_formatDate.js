function formatDate() {
  const dt = new Date()
  const y = dt.getFullYear()
  const m = padZero(dt.getMonth())
  const d = padZero(dt.getDate())

  const HH = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${HH}:${mm}:${ss}`
}

function padZero(n) {
  return n > 9? n : '0' + n
}

module.exports = {
  formatDate
}