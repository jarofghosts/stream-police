var through = require('through');

module.exports = police;

function police(options) {
  options = options || {};
  var tr = through(write);

  function write(buf) {
    this.queue(buf);
  }
}
