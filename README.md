stream-police
====

[![Build Status](https://travis-ci.org/jarofghosts/stream-police.png?branch=master)](https://travis-ci.org/jarofghosts/stream-police)

filter some streams and stuff.

## usage

Pass an array of regexs in either `exclude` to block that chunk or `verify` to only allow that. Err... example:

```js
var police = require('stream-police');

r.pipe(police({ exclude: [/bad/, /nogood/] })).pipe(process.stdout);
```

where `r` is an imaginary readable stream. No chunk including the phrases 'bad' or 'nogood' will ever reach stdout.

## license

MIT
