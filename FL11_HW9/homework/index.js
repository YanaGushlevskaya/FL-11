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
  executeforEach(arr, i => newArr.push(func(i)));
  return newArr;
};

let filterArray = (arr, func) => {
  let newArr = [];
  executeforEach(arr, i => func(i) ? newArr.push(i): null);
  return newArr;
};

let showFormattedDate = obj => {
  const start = 4;
  const newDate = obj.toDateString().substring(start);
  return `Date: ${newDate}`;
};

let canConvertToDate = str => !isNaN(Date.parse(str));

let daysBetween = (obj1, obj2) => {
  const sec = 1000;
  const min = 60;
  const hour = 60;
  const day = 24;

  const oneDay = sec * min * hour * day;
  const date1 = obj1.getTime();
  const date2 = obj2.getTime();
  const diff = Math.round((date2 - date1) / oneDay);
  return diff;
};

let getAmountOfAdultPeople = data => {
  let dateNow = new Date();
  const daysInYear = 365;
  const adultAge = 18;
  const adult = daysInYear * adultAge;

  let counter = filterArray(data, i => {
    let formattedDate = new Date(i['birthday']);
    return daysBetween(formattedDate, dateNow) >= adult;
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
