
import {TYPECODES} from "./codes.js";

export function debugStringForTypeCode(typecode) {
  var result = 'unmapped';
  switch (typecode) {
    case TYPECODES.ARRAY:
      result = 'array';
      break;
    case TYPECODES.BOOLEAN:
      result = 'boolean';
      break;
    case TYPECODES.DATE:
      result = 'date';
      break;
    case TYPECODES.FUNCTION:
      result = 'function';
      break;
    case TYPECODES.NULL:
      result = 'null';
      break;
    case TYPECODES.NUMBER:
      result = 'number';
      break;
    case TYPECODES.OBJECT:
      result = 'object';
      break;
    case TYPECODES.REGEX:
      result = 'regex';
      break;
    case TYPECODES.STRING:
      result = 'string';
      break;
    case TYPECODES.UNDEFINED:
      result = 'undefined';
      break;
    case TYPECODES.UNMAPPED:
    default:
      /* istanbul ignore next */
      result = 'unmapped';
      /* istanbul ignore next */
      break;
  }

  return result;
}
