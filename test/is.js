
import {typetools as tt} from "../index.js";

describe('is tests...', function() {
  it('object', function() {
    var obj = {};

    expect(tt.is(obj, tt.CODES.OBJECT)).toBe(true);
  });

  it('number', function() {
    var obj = 3.14;

    expect(tt.is(obj, tt.CODES.NUMBER)).toBe(true);
  });

  it('boolean', function() {
    var boolTrue = true;
    var boolFalse = false;

    expect(tt.is(boolTrue, tt.CODES.BOOLEAN)).toBe(true);
    expect(tt.is(boolFalse, tt.CODES.BOOLEAN)).toBe(true);
  });

  it('undefined', function() {
    var obj;

    expect(tt.is(obj, tt.CODES.UNDEFINED)).toBe(true);
  });

  it('null', function() {
    var obj = null;

    expect(tt.is(obj, tt.CODES.NULL)).toBe(true);
  });

  it('string', function() {
    var obj = 'a short string';

    expect(tt.is(obj, tt.CODES.STRING)).toBe(true);
  });

  it('function', function() {
    var obj = function() {};

    expect(tt.is(obj, tt.CODES.FUNCTION)).toBe(true);
  });


  it('date', function() {
    var obj = new Date('12/11/1971');

    expect(tt.is(obj, tt.CODES.DATE)).toBe(true);
  });

  it('array', function() {
    var obj = [1,2,4];

    expect(tt.is(obj, tt.CODES.ARRAY)).toBe(true);
  });

  it('regex', function() {
    var obj = /\d+/;

    expect(tt.is(obj, tt.CODES.REGEX)).toBe(true);
  });
});
