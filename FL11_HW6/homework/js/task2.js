let a = +prompt('Please, enter the first triangle side length');
let b = +prompt('Please, enter the second triangle side length');
let c = +prompt('Please, enter the third triangle side length');

if (a + b <= c || a + c <= b || c + b <= a) {
  console.log('Triangle doesn’t exist');
} else if (a === b === c) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
