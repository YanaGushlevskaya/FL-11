function assign(target, ...source) {
  let sourceLength = source.length;

  for (let i = 0; i < sourceLength; i++) {
    for (let key in source[i]) {
      if (Object.prototype.hasOwnProperty.call(source[i], key)) {
        target[key] = source[i][key];
      }
    }
  }

  return target;
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };

const configs = assign({},defaults, options);

/* console.log(configs); */
