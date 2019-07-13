let reverseNumber = num => {
  let str = '' + num;
  let reverseNum = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseNum += str[i];
  }

  if (num < 0) {
    reverseNum = str[0] + reverseNum;
  }

  return parseInt(reverseNum);
};

reverseNumber(123);
