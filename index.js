var through = require('through')

module.exports = police

function police(_options) {
  var options = _options || {}
    , tr = through(write)
    , exclude = false
    , verify = false
    , exclude_length
    , verify_length


  if (options.exclude) {
    exclude = true
    exclude_length = options.exclude.length
  }
  if (options.verify) {
    verify = true
    verify_length = options.verify.length
  }

  return tr

  function write(buf) {
    var str = buf.toString(),
        i

    if (exclude) {
      for (i = 0; i < exclude_length; ++i) {
        if (options.exclude[i].test(str)) return
      }
    }

    if (verify) {
      for (i = 0; i < verify_length; ++i) {
        if (options.verify[i].test(str)) return tr.queue(buf)
      }
      return
    }

    tr.queue(buf)
  }
}

