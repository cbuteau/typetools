
import {getTypeCode} from "./get.js";

export function isTypeCode(value, code) {
  return getTypeCode(value) === code;
}
