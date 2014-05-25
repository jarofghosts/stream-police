var test = require('tape')

var police = require('../')

test('filters out exclusions', function(t) {
  t.plan(2)

  var stream = police({exclude: [/bad/]})

  stream.on('data', function(data) {
    t.strictEqual(data, 'good')
  })

  stream.write('good')
  stream.write('bad')
  stream.write('bad')
  stream.write('good')
})

test('only allows verifys through', function(t) {
  t.plan(2)

  var stream = police({verify: [/good/]})

  stream.on('data', function(data) {
    t.strictEqual(data, 'good')
  })

  stream.write('good')
  stream.write('bad')
  stream.write('bad')
  stream.write('good')
})
