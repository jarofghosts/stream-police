var test = require('tape')

var police = require('../')

test('only emits that which returns true', function (t) {
  t.plan(1)

  var stream = police(isNaN)

  stream.on('data', function (data) {
    t.strictEqual(data.toString(), '!')
  })

  stream.write('5')
  stream.write('10000')
  stream.write('!')
})

test('works with objectMode', function (t) {
  t.plan(1)

  var stream = police(hasCat, {objectMode: true})

  stream.on('data', function (data) {
    t.deepEqual(data, {cat: 'meow'})
  })

  stream.write({dog: 'woof'})
  stream.write({kangaroo: '...'})
  stream.write({cat: 'meow'})

  function hasCat (o) {
    return o.hasOwnProperty('cat')
  }
})
