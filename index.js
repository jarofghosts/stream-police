var Duplex = require('readable-stream').Duplex
var noop = require('nop')

module.exports = police

function police (verify, _opts) {
  var opts = _opts || {}

  opts.write = validate
  opts.read = noop

  var stream = new Duplex(opts)

  return stream

  function validate (chunk, _, next) {
    if (verify(chunk)) {
      stream.push(chunk)
    }

    next()
  }
}
