var through = require('through')

module.exports = police

function police(options) {
  var exclude = false,
      verify = false,
      excludeLength,
      verifyLength,
      tr = through(write)

  options = options || {}

  if (options.exclude) {
    exclude = true
    excludeLength = options.exclude.length
  }
  if (options.verify) {
    verify = true
    verifyLength = options.verify.length
  }

  return tr

  function write(buf) {
    var str = buf.toString(),
        i

    if (exclude) {
      for (i = 0; i < excludeLength; ++i) {
        if (options.exclude[i].test(str)) return
      }
    }
    if (verify) {
      for (i = 0; i < verifyLength; ++i) {
        if (options.verify[i].test(str)) return this.queue(buf)
      }
      return
    }
    this.queue(buf)
  }
}

