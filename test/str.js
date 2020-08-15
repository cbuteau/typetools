import {typetools as tt} from "../index.js";

describe('Test debug strings...', function() {
  it('object', function() {
    var obj = {};

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('object');
  });

  it('number', function() {
    var obj = 3.14;

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('number');
  });

  it('boolean', function() {
    var boolTrue = true;
    var boolFalse = false;

    var codeTrue = tt.get(boolTrue);
    var codeFalse = tt.get(boolTrue);

    expect(tt.str(codeTrue)).toBe('boolean');
    expect(tt.str(codeFalse)).toBe('boolean');
  });


  it('undefined', function() {
    var obj;

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('undefined');
  });

  it('null', function() {
    var obj = null;

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('null');
  });

  it('string', function() {
    var obj = 'a short string';

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('string');
  });

  it('function', function() {
    var obj = function() {};

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('function');
  });


  it('date', function() {
    var obj = new Date('12/11/1971');

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('date');
  });

  it('array', function() {
    var obj = [1,2,4];

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('array');
  });

  it('regex', function() {
    var obj = /\d+/;

    var code = tt.get(obj);
    expect(tt.str(code)).toBe('regex');
  });

});
