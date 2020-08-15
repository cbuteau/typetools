
import {TYPECODES} from "./codes.js";
import {getTypeCode} from "./get.js";
import {isTypeCode} from "./is.js";

function isNotThere(value) {
  var code = getTypeCode(value);
  return code === TYPECODES.UNDEFINED || code === TYPECODES.NULL;
}

function isAllValueTypes(obj) {
  var propKeys = Object.keys(obj);
  for (var i = 0; i < propKeys.length; i++) {
    var prop = obj[propKeys[i]];
    var propCode = getTypeCode(prop);
    if (propCode === TYPECODES.ARRAY || propCode === TYPECODES.OBJECT) {
      return false;
    }
  }
  return true;
}

function isValueType(obj) {
  var code = getTypeCode(obj);
  if (code === TYPECODES.ARRAY || code === TYPECODES.OBJECT) {
    return false;
  } else {
    return true;
  }
}

function addUnique(array, item) {
  if (array.indexOf(item) === -1) {
    array.push(item);
  }
}

function buildCombinedPropList(objOne, objTwo) {
  var keysOne = Object.keys(objOne);
  var keysTwo = Object.keys(objTwo);
  var result = [];
  for (var i = 0; i <keysOne.length; i++ ) {
    addUnique(result, keysOne[i]);
  }
  for (var j = 0; j < keysTwo.length; j++ ) {
    addUnique(result, keysTwo[j]);
  }

  return result;
}

function mergeArrays(arrayOne, arrayTwo) {
  var combined = [];
  var current;
  for (var i = 0; i < arrayOne.length; i++) {
    current = arrayOne[i];
    if (combined.indexOf(current) === -1) {
      combined.push(current);
    }
  }
  for (var j = 0; j < arrayTwo.length; j++) {
    var current = arrayTwo[j];
    if (combined.indexOf(current) === -1) {
      combined.push(current);
    }
  }

  return combined;
}


export function deepAssign(objOne, objTwo) {
  if (isNotThere(objOne)) {
    return objTwo;
  }
  if (isNotThere(objTwo)) {
    return objOne;
  }

  var isValueOne = isValueType(objOne);
  var isValueTwo = isValueType(objTwo);

  if (isValueOne && isValueTwo) {
    // return prop it will copy.
    return objTwo;
  }



  var isOneValues = isAllValueTypes(objOne);
  var isTwoValues = isAllValueTypes(objTwo);
  if (isOneValues && isTwoValues) {
    if (isTypeCode(objOne, TYPECODES.ARRAY) && isTypeCode(objTwo, TYPECODES.ARRAY)) {
      return mergeArrays(objOne, objTwo);
    }
    return Object.assign(objOne, objTwo);
  } else {
    // recurse
    var resultObj = {};
    var combined = buildCombinedPropList(objOne, objTwo);
    for (var i = 0; i < combined.length; i++) {
      var current = combined[i];
      resultObj[current] = deepAssign(objOne[current], objTwo[current]);
    }
    return resultObj;
  }
}
