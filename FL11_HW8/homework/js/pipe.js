let pipe = (...args) => {
  let counter = args[0];

  function callback(numb, func) {
    return func(numb);
  }

  for (let i = 1; i < args.length; i++) {
    counter = callback(counter, args[i]);
  }

  return counter;
};

function addOne(x) {
  return x + 1;
}

pipe(1,addOne);
