# stream-police

[![Build Status](http://img.shields.io/travis/jarofghosts/stream-police.svg?style=flat-square)](https://travis-ci.org/jarofghosts/stream-police)
[![npm install](http://img.shields.io/npm/dm/stream-police.svg?style=flat-square)](https://www.npmjs.org/package/stream-police)
[![npm version](https://img.shields.io/npm/v/stream-police.svg?style=flat-square)](https://www.npmjs.org/package/stream-police)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/stream-police.svg?style=flat-square)](https://github.com/jarofghosts/stream-police/blob/master/LICENSE)

Filter your streams.

## usage

`streamPolice(validateFunction[, streamOptions]) -> DuplexStream`

* For every chunk of data written to `DuplexStream`, it will be passed to
  `validateFunction` which is expected to return a boolean value indicating
  whether the value should be emitted or not.
* `streamOptions` is an optional argument that will be passed to instantiate
  `DuplexStream`

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

function hasCat (obj) {
  return obj.hasOwnProperty('cat')
}

stream.write({dog: 'woof'}) // stream emits nothing
stream.write({cat: 'meow'}) // stream emits {cat: 'meow'}
```

## license

MIT
