//Task1
const maxElement = arr => Math.max(...arr);

const array = [1, 2, 3, 5, 456, 24, 7, 567, 32, 85, 322];
console.log(maxElement(array));

//Task2
const copyArray = arr => [...arr];

const array2 = [1, 2, 3];
const copiedArray = copyArray(array2);
console.log(array2, copiedArray);
console.log(array2 === copiedArray);

//Task3
const addUniqueId = obj => {
  const copiedObject = { ...obj };
  const idValue = Symbol(Date.now());
  copiedObject.id = idValue;
  return copiedObject;
};

console.log(addUniqueId({ name: 123 }));

//Task4
const regroupObject = obj => {
  const {
    name: firstName,
    details: { university, age, id }
  } = obj;
  return { university, user: { age, firstName, id } };
};

const oldObj = { name: 'Someone', details: { id: 1, age: 11, university: 'UNI' } };
console.log(regroupObject(oldObj));

//Task5
const findUniqueElements = arr => {
  let uniqueElements = new Set();
  arr.map(item => uniqueElements.add(item));
  return [...uniqueElements];
};

const array3 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1];
console.log(findUniqueElements(array3));

//Task6
const hideNumber = number => {
  const visibleFigures = number.substr(number.length - 4);
  const hiddenNumber = visibleFigures.padStart(10, '*');
  return hiddenNumber;
};

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

//Task7
const required = () => {
  throw new Error('Missing property');
};
const add = (a, b = required()) => a + b;

/* console.log(add(1, 3));
console.log(add(1)); */

//Task8
const receiveReposNames = address => {
  fetch(address)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(dataBase => {
      const reposNames = dataBase.map(item => item['name']);
      const sortedNames = reposNames.sort(function(a, b) {
        return a.firstname < b.firstname ? -1 : 1;
      });
      console.log(sortedNames);
    })
    .catch(error => console.error(error));
};

receiveReposNames('https://api.github.com/users/YanaGushlevskaya/repos');

//Task9
async function receiveReposNamesAwait(address){
  const response = await fetch(address);
  const dataBase = await response.json();
  if (response.ok) {
    const reposNames = dataBase.map(item => item['name']);
    const sortedNames = reposNames.sort(function(a, b) {
      return a.firstname < b.firstname ? -1 : 1;
    });
    console.log(sortedNames);
  } else {
    throw new Error('Network response was not ok');
  }
}

receiveReposNamesAwait('https://api.github.com/users/YanaGushlevskaya/repos');
