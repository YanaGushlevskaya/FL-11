let getNumbers = str => {
  let num = [];

  for (let i = 0; i < str.length; i++) {
    let isNumber = parseInt(str[i]);
    if (isNumber) {
      num.push(isNumber);
    }
  }

  return num;
};

let findTypes = (...args) => {
  let result = {};

  for (let i = 0; i < args.length; i++) {
    let type = typeof args[i];
    if (result[type]) {
      result[type] += 1;
    } else {
      result[type] = 1;
    }
  }

  return result;
};

let executeforEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

let mapArray = (arr, func) => {
  let newArr = [];
  executeforEach(arr, i => {
    return newArr.push(func(i));
  });
  return newArr;
};

let filterArray = (arr, func) => {
  let newArr = [];
  executeforEach(arr, i => {
    if (func(i)) {
      return newArr.push(i);
    }
  });
  return newArr;
};

let showFormattedDate = obj => {
  const START = 4;
  const NEWDATE = obj.toDateString().substring(START);
  return `Date: ${NEWDATE}`;
};

let canConvertToDate = str => !isNaN(Date.parse(str));

let daysBetween = (obj1, obj2) => {
  const SEC = 1000;
  const MIN = 60;
  const HOUR = 60;
  const DAY = 24;

  const ONEDAY = SEC * MIN * HOUR * DAY;
  const DATE1 = obj1.getTime();
  const DATE2 = obj2.getTime();
  const DIFF = Math.round((DATE2 - DATE1) / ONEDAY);
  return DIFF;
};

let getAmountOfAdultPeople = data => {
  let dateNow = new Date();
  const DAYSINYEAR = 365;
  const ADULTAGE = 18;
  const ADULT = DAYSINYEAR * ADULTAGE;

  let counter = filterArray(data, i => {
    let formattedDate = new Date(i['birthday']);
    return daysBetween(formattedDate, dateNow) >= ADULT;
  });

  return counter.length;
};

let keys = obj => {
  let arr = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      arr.push(key);
    }
  }

  return arr;
};

let values = obj => {
  let arr = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
};
