const DENOMINATOR = 2;

let a1 = +prompt('Please, enter the X coordinate for A point');
let a2 = +prompt('Please, enter the Y coordinate for A point');
let b1 = +prompt('Please, enter the X coordinate for B point');
let b2 = +prompt('Please, enter the Y coordinate for B point');
let c1 = +prompt('Please, enter the X coordinate for C point');
let c2 = +prompt('Please, enter the Y coordinate for C point');

if ((a1 + b1) / DENOMINATOR === c1 && (a2 + b2) / DENOMINATOR === c2) {
  console.log(true);
} else {
  console.log(false);
}
