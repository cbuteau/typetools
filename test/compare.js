import {typetools as tt} from "../index.js";

/* es-lint jasmine */

describe('Compare tests', function() {

  it ('Bool equal', function() {
    expect(tt.compare(true, false)).toBe(false);

    expect(tt.compare(true, true)).toBe(true);
    expect(tt.compare(false, false)).toBe(true);
  });

  it ('Number', function() {
    expect(tt.compare(2, 1)).toBe(false);
    expect(tt.compare(2, 2)).toBe(true);
    expect(tt.compare(2.001, 2.002, {
      epsilon: 0.001
    })).toBe(true);

  });

  it ('MOdify float compare', function() {
    expect(tt.compare(2.000001, 2.000002, {
      epsilon: 0.000001
    })).toBe(true);


  });



  it ('Undefined', function() {
    var testUndefined;
    var testNull = null;
    expect(tt.compare(testUndefined, testNull)).toBe(false);

    var testUndefOne;
    var testUndefTwo;

    expect(tt.compare(testUndefOne, testUndefTwo)).toBe(true);

  });

  it ('Null', function() {
    var testNull = null;
    var testNumber = 3;
    expect(tt.compare(testNull, testNumber)).toBe(false);

    var testNullOne = null;
    var testNullTwo = null;
    expect(tt.compare(testNullOne, testNullTwo)).toBe(true);

  });

  it ('Object', function() {
    var testObj = {
      one: true,
      two: 3.14,
      three: 'A dog'
    };
    var testNumber = 3;
    expect(tt.compare(testObj, testNumber)).toBe(false);

    var testObjOne = {
      one: true,
      two: 3.14,
      three: 'A dog'
    };

    var testObjTwo = {
      one: true,
      two: 3.14,
      three: 'A dog'
    };
    expect(tt.compare(testObjOne, testObjTwo)).toBe(true);
  });


  it ('Object depth', function() {
    var regexNum =  /\d+/;
    var regexNumTwo =  /\d+/;


    var testObjOne = {
      one: true,
      two: 3.14,
      three: 'A dog',
      array: [0,1,2,3],
      anotherObj: {
        params: {
          one: 'a',
          two: 'b',
          berfday: new Date('12/11/1971'),
        },
        numreg: regexNum
      }
    };
    var testObjTwo = {
      one: true,
      two: 3.14,
      three: 'A dog',
      array: [0,1,2,3],
      anotherObj: {
        params: {
          one: 'a',
          two: 'b',
          berfday: new Date('12/11/1971'),
        },
        numreg: regexNumTwo
      }
    };
    expect(tt.compare(testObjOne, testObjTwo)).toBe(true);
  });


  it ('Object depth - failure', function() {
    var regexNum =  /\d+/;
    var regexNumTwo =  /\d+/;


    var testObjOne = {
      one: true,
      two: 3.14,
      three: 'A dog',
      array: [0,1,2,3],
      anotherObj: {
        params: {
          one: 'a',
          two: 'b',
          berfday: new Date('12/11/1971'),
        }
      }
    };
    var testObjTwo = {
      one: true,
      two: 3.14,
      three: 'A dog',
      array: [0,1,2,3],
      anotherObj: {
        params: {
          one: 'a',
          two: 'b',
          berfday: new Date('12/11/1971'),
        },
        numreg: /b+/
      }
    };
    expect(tt.compare(testObjOne, testObjTwo)).toBe(false);
  });


  it ('Array of objects', function() {
    //track.start('arrayOfObjs');
    var arrayOne = [
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      }
    ];

    var arrayTwo = [
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      }
    ];

    expect(tt.compare(arrayOne, arrayTwo)).toBe(true);
    // var meas = track.endnmeas('arrayOfObjs');
    // if (track.BrowserFlags.isChrome) {
    //   expect(meas.duration).toBeLessThan(1.80);
    // } else if (track.BrowserFlags.isFirefox) {
    //   expect(meas.duration).toBeLessThan(3.01);
    // }
  });

  it ('Array of objects - failure', function() {
    var arrayOne = [
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      }
    ];

    var arrayTwo = [
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      },
      {
        one: true,
        two: 3.14,
        three: 'A dog',
        array: [0,1,2,3],
        anotherObj: {
          params: {
            one: 'a',
            two: 'b',
            berfday: new Date('12/11/1971'),
          },
          numreg: /b+/
        }
      }
    ];

    expect(tt.compare(arrayOne, arrayTwo)).toBe(false);

  });


});
