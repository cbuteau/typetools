# typetools

This is a PURE ES6 library do NOT load into ES5 projects.
I will not be transpiling it at all.  If someone wants that branch and create your own project.
This is for the future and for my own knowledge.

## Concept

A port of typecodes to ES6
I did a lot of work and testing of typecodes and no one used it.
Maybe if I port the work to es6 someone will branch it and create a transpiled project.


# Badges

<!-- ### Coveralls

[![Coverage Status](https://coveralls.io/repos/github/cbuteau/typetools/badge.svg)](https://coveralls.io/github/cbuteau/typetools) -->

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

Determines the type through duck typing and returns a code.

```javascript
import {typetools as tt} from "../index.js";

var str = 'A fox and a hound played all day';
var code = tt.get(str);
if (code === tt.CODE.STRING) {
  var foxIndex = str.indexOf('fox');
  var houndIndex = str.indexOf('hound');
}
```

### str

Spits out a string to know what type was detected.
Mostly to be used in the console while debugging.

```javascript
import {typetools as tt} from "../index.js";

var str = 'A fox and a hound played all day';
var code = tt.get(str);

if (code === tt.CODE.STRING) {
  var foxIndex = str.indexOf('fox');
  var houndIndex = str.indexOf('hound');
} else {
  console.log(tt.str(code));
}
```


### compare

A recursive compare function that uses the type awareness to NOT compare and fail if the types to NOT match.  No string and integer matching for example.

All value compares will be the === format.

```javascript
function performWork(request) {
  var previousRequest = JSON.parse(sessionStorage.getItem('myApp.previousRequest'));

  if (tt.compare(request, previousRequest)) {
    return;
  } else {
    // WS call.
  }
}
```

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

#### 8/16/2020

##### 12:35 (noon)

Got build passing trying to figure out coverage.
Apparently istanbul has been replaced with nyc.
We might be able to do it...but have to do all the steps manually including sending the results directly to coveralls.io directly with this.
https://github.com/okkez/coveralls-lcov

Right now if I put coverage as reporter it runs but fails parsing of files.
If I put coverage-es6 it fails to even run saying I do not have it...maybe I need plugin...

Trued this which did run tests but did not actually cover code...
https://github.com/monounity/karma-coverage-istanbul-instrumenter

maybe we need a different reporter.

Nest trick for simplifying the browser name.
https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul/blob/master/karma.conf.js

where it looks like we will have to figure out coverage tools on our end then...add steps to actually upload to coveralls.io.
