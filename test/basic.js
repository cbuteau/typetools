import {typetools as tt} from "../index.js";

//import { path } from "path";
//let path = require('path');


describe('Basic test', function() {

  it ('undefined', function() {
    let test;
    expect(tt.get(test)).toBe(tt.CODES.UNDEFINED);
  });

});
