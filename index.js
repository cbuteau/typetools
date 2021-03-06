
import {TYPECODES} from "./src/codes.js";
import {getTypeCode} from "./src/get.js";
import {isTypeCode} from "./src/is.js";
import {debugStringForTypeCode} from "./src/str.js";
import {compare} from "./src/compare.js";
import {deepAssign} from "./src/deepAssign.js";

class Library {
  constuctor() {}
  get CODES() {
   return TYPECODES;
  }
}

Object.assign(Library.prototype, {
  get: getTypeCode,
  str: debugStringForTypeCode,
  is: isTypeCode,
  compare: compare,
  deepAssign: deepAssign
});

const typetools = new Library();
export { typetools };
