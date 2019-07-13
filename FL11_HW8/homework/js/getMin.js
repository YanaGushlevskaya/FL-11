// let getMin = (...args) => Math.min(...args); (variant with Math.min);

let getMin = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] < args[0]) {
      args[0] = args[i];
    }
  }
  return args[0];
};

getMin(3, 0, -3);
