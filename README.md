# typetools

## Concept

A port of typecodes to ES6
I did a lot of work and testing of typecodes and no one used it.
Maybe if I port the work to es6 someone will.


# Badges

### Coveralls

[![Coverage Status](https://coveralls.io/repos/github/cbuteau/typetools/badge.svg)](https://coveralls.io/github/cbuteau/typetools)

### Circle CI Build

[![CircleCI](https://circleci.com/gh/cbuteau/typetools.svg?style=svg)](https://circleci.com/gh/cbuteau/typetools)

### npm Version

[![npm version](http://img.shields.io/npm/v/typetools.svg?style=flat)](https://npmjs.org/package/typetools "View this project on npm")


### npm big badge

[![NPM](https://nodei.co/npm/typetools.png)](https://nodei.co/npm/typetools/)


## Design

The design will use multiple modules imported to make management of the code easier.

## API

### is

```javascript

import {typetools as tt} from "../index.js";

var str = 'A fox and a hound played all day';
if (tt.is(str, tt.CODE.STRING)) {
  var foxIndex = str.indexOf('fox');
  var houndIndex = str.indexOf('hound');
}

```

### get


### str

### compare

### deepAssign

A clone that at the lowest level uses Object.assign().


## Status

### 8/15/2020

SO far can't get tests to run.
everything seems to think I want to transpile when I do not.
This was kind of close.
https://medium.com/@valkyrie_be/js-testing-in-2018-write-in-es6-test-in-es6-df7321ea8398

Tried things and plugin from this page.
https://github.com/karma-runner/karma/issues/3335
https://github.com/open-wc/open-wc/tree/master/packages/karma-esm

Still getting 404 on import instruction in test file.

#### 11:04

Need to figure out coverage setup.
https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23
And we need to figure out packaging and minifying...
https://www.reddit.com/r/javascript/comments/54atmc/how_to_minify_es6/

Maybe this...
https://github.com/babel/minify

##### 07:19 PM

Sick of it...tests pass on my dev ssytem.
Can't get them to run on circleci.
Looking at github actions...next...
