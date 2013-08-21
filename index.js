var through = require('through');

module.exports = police;

function police(options) {
  options = options || {};
  var exclude = false,
      verify = false;
  if (options.exclude) {
    exclude = true;
    var excludeLength = options.exclude.length;
  }
  if (options.verify) {
    verify = true;
    var verifyLength = options.verify.length;
  }
  var tr = through(write);

  function write(buf) {
    var str = buf.toString();
    if (exclude) {
      var i = 0;
      for (; i < excludeLength; ++i) {
        if (options.exclude[i].test(str)) return;
      }
    }
    if (verify) {
      var i = 0;
      for (; i < verifyLength; ++i) {
        if (options.verify[i].test(str)) {
          this.queue(buf);
          return;
        }
      }
      return;
    }
    this.queue(buf);
  }
  return tr;
}

