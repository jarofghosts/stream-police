stream-police
====

[![Build Status](https://travis-ci.org/jarofghosts/stream-police.png?branch=master)](https://travis-ci.org/jarofghosts/stream-police)

filter some streams and stuff.

## usage

Pass an array of regexps in either `exclude` to block that chunk or `verify` to only allow that. Err... examples:

```js
var police = require('stream-police');

r.pipe(police({ exclude: [/bad/, /nogood/] })).pipe(process.stdout);
```

where `r` is an imaginary readable stream. No chunk including the phrases 'bad' or 'nogood' will ever reach stdout.

or:

```js
var police = require('stream-police');

r.pipe(police({ verify: [/good/, /notbad/] })).pipe(process.stdout);
```

to make sure everything that goes through is 'good' or 'notbad'.

## license

MIT
