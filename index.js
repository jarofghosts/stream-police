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
        if (str.match(options.exclude[i]) return;
      }
    }
    if (verify) {
      var i = 0;
      for (; i < verifyLength; ++i) {
        if (!str.match(verify[i])) return;
      }
    }
    this.queue(buf);
  }
}

