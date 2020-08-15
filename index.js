
import TYPECODES from "./src/codes.js";
import getTypeCode from "./src/get.js";

class Library {
  CODES: TYPECODES,
  get: getTypeCode,
};

export let lib = new Library();
