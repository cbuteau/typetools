
import {TYPECODES} from "./codes.js";
import {getTypeCode} from "./get.js";

const DEFAULT_EPSILON = 0.001;

function isFloat(value) {
  return value % 1 !== 0;
}

function compareFloats(floatOne, floatTwo, options) {
   return (Math.abs(floatOne - floatTwo) < options.epsilon);
}

function compareArray(arrayOne, arrayTwo) {
  var test = false;
  for (var i = 0; i < arrayOne.length; i++) {
    test = compare(arrayOne[i], arrayTwo[i]);
    if (!test) {
      break;
    }
  }
  return test;
}

function compareObject(objectOne, objectTwo, options) {
  var propKeys = Object.keys(objectOne);
  var propKeysTwo = Object.keys(objectTwo);
  if (propKeys.length !== propKeysTwo.length) {
    return false;
  }
  var test = false;
  for (var i = 0; i < propKeys.length; i++) {
    var propKey = propKeys[i];
    var prop = objectOne[propKey];
    var prop2 = objectTwo[propKey];
    test = compare(prop, prop2, options);
    if (!test) {
      break;
    }
  }

  return test;
}

function actualCompare(valueOne, valueTwo, typeCode, options) {
  var result = false;
  switch (typeCode) {
    case TYPECODES.UNDEFINED:
    case TYPECODES.NULL:
      result = true;
      break;
    case TYPECODES.BOOLEAN:
    case TYPECODES.STRING:
    case TYPECODES.FUNCTION:
      result = (valueOne === valueTwo);
      break;
    case TYPECODES.DATE:
      result = (valueOne.getTime() === valueTwo.getTime());
      break;
    case TYPECODES.REGEX:
      result = (valueOne.toString() === valueTwo.toString());
      break;
    case TYPECODES.NUMBER:
      if (isFloat(valueOne) && isFloat(valueTwo)) {
        result = compareFloats(valueOne, valueTwo, options);
      } else {
        result = (valueOne === valueTwo);
      }
      break;
    case TYPECODES.ARRAY:
      result = compareArray(valueOne, valueTwo, options);
      break;
    case TYPECODES.OBJECT:
      result = compareObject(valueOne, valueTwo, options);
      break;
  }
  return result;
}

export function compare(valueOne, valueTwo, options) {
  if (!options) {
    options = {
      epsilon: DEFAULT_EPSILON
    };
  }
  var codeOne = getTypeCode(valueOne);
  var codeTwo = getTypeCode(valueTwo);
  if (codeOne === codeTwo) {
    return actualCompare(valueOne, valueTwo, codeOne, options);
  } else {
    return false;
  }
}
