var transform = require('stream').Transform

module.exports = police

function police(verify, _opts) {
  var stream = transform(_opts)

  stream._transform = validate

  return stream

  function validate(chunk, enc, next) {
    if(verify(chunk)) {
      this.push(chunk)
    }

    next()
  }
}
