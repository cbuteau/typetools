

let path = require('path');

import typetools from "../index.js";

describe('Basic test', function() {

  it ('undefined', function() {
    var test;
    expect(typetools.get(test)).toBe(typetools.CODES.UNDEFINED);
  });

});
