
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

Library.prototype.get = getTypeCode;
Library.prototype.str = debugStringForTypeCode;
Library.prototype.is = isTypeCode;
Library.prototype.compare = compare;
Library.prototype.deepAssign = deepAssign;

const typetools = new Library();
export { typetools };
