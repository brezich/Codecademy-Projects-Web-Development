const _ = {  
  // clamps number within the inclusive lower and upper bounds
  clamp(num, low, upp) {
    const lowBound = Math.max(num, low);
    const clampNum = Math.min(lowBound, upp);
    return clampNum;
  },

  // checks to see if the provided number falls within the range specified by the start and end values
  inRange(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    if (num >= start && num < end) {
      return true;
    } else {
      return false;
    }
  },

  // splits the string into an array of words
  words(str) {
    return str.split(' ');
  },

  // adds spaces evenly to both sides of the string to make it reach the desired length
  pad(str, len) {
    if (str.length >= len) {
      return str;
    }
    const totPadd = len - str.length;
    const begPadd = Math.floor(totPadd / 2);
    const endPadd = totPadd - begPadd;
    const paddStr = ' '.repeat(begPadd) + str + ' '.repeat(endPadd);
    return paddStr;
  },

  // checks to see if the provided object contains a value at the specified key
  has(obj, key) {
    if (obj[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  },

  // iterates through each key/value pair in the provided object and swaps the key and value
  invert(obj) {
    let invertedObj = {};
    for (let key in obj) {
      const originalValue = obj[key];
      invertedObj = { originalValue: key };
    }
    return invertedObj;
  },

  // returns the first key that has a value that returns a truthy value from the predicate function
  findKey(obj, predicate) {
    for (let key in obj) {
      if (predicate(obj[key])) {
        return key;
      }
    }
    return undefined;
  },

  // creates a slice of array with n elements dropped from the beginning
  drop(arr, num) {
    if (!num) {
      num = 1;
    }
    let newArr = arr.slice(num, arr.length);
    return newArr;
  },

  // creates a slice of array excluding elements dropped from the beginning
  // elements are dropped until predicate returns falsey
  dropWhile(arr, predicate) {
    const callback = (element, index) => {
      return !predicate(element, index, arr);
    }
    let dropNum = arr.findIndex(callback);
    let dropArr = this.drop(arr, dropNum);
    return dropArr;
  },

  // breaks up the supplied array into arrays of the specified size
  chunk(arr, size) {
    if (!size) {
      size = 1;
    }
    let arrChunks = [];
    for (let i = 0; i < arr.length; i += size) {
      let arrChunk = arr.slice(i, i + size);
      arrChunks.push(arrChunk);
    }
    return arrChunks;
  }
};

module.exports = _;