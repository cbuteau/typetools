import {typetools} from "../index.js";

//import { path } from "path";
//let path = require('path');


describe('Basic test', function() {

  it ('undefined', function() {
    let test;
    expect(typetools.get(test)).toBe(typetools.CODES.UNDEFINED);
  });

});
