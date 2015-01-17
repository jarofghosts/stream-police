stream-police
=============

[![Build Status](http://img.shields.io/travis/jarofghosts/stream-police/master.svg?style=flat)](https://travis-ci.org/jarofghosts/stream-police)
[![npm install](http://img.shields.io/npm/dm/stream-police.svg?style=flat)](https://www.npmjs.org/package/stream-police)

filter your streams.

## usage

`streamPolice(validateFunction[, streamOptions]) -> TransformStream`

* For every chunk of data written to `TransformStream`, it will be passed to
  `validateFunction` which is expected to return a boolean value indicating
  whether the value should be emitted or not.
* `streamOptions` is an optional argument that will be passed to instantiate
  `TransformStream`

## example

```js
var police = require('stream-police')

var stream = police(isNaN)

stream.write('5') // stream emits nothing
stream.write('!') // stream emits '!'
```

or:

```js
var police = require('stream-police')

var stream = police(hasCat, {objectMode: true})

function hasCat(obj) {
  return obj.hasOwnProperty('cat')
}

stream.write({dog: 'woof'}) // stream emits nothing
stream.write({cat: 'meow'}) // stream emits {cat: 'meow'}
```

## license

MIT
