let isBigger = (a, b) => {
  return a > b;
};

let isSmaller = (a, b) => {
  return !isBigger(a,b);
};

isSmaller(5, -1);
