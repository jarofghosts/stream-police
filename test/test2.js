
var assert = require('assert'),
    police = require('../index.js'),
    stream = require('stream'),
    r = stream.Readable(),
    w = stream.Writable(),
    bad;

w._write = function (data, enc, next) {
  assert.equal(data.toString(), 'good');
  clearTimeout(bad);
  next();
}
r._read = function () {
  r.push('good');
  r.push('bad');
  r.push('good');
  r.push(null);
}
bad = setTimeout(function () { assert.ok(false); }, 500);
r.pipe(police({ verify: [/good/] })).pipe(w);
