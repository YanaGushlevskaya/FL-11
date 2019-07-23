const mainHeading = document.querySelector('.input__heading');
const editBtn = document.querySelector('.item__edit-btn');
const addBtn = document.querySelector('.input__add-btn');
const maxItems = 9;
let mainInput = document.querySelector('.input');
let toDoList = document.querySelector('.list');

//addElement
mainInput.addEventListener('keyup', function() {
  mainInput.value !== '' ? addBtn.removeAttribute('disabled', 'disabled') : addBtn.setAttribute('disabled', 'disabled');
});

//Add new action, list is full, max item = 10
function createElement() {
  let element = `<li class='item'>
      <div class='checkbox-wrapper'>
      <input type='checkbox' class='item__checkbox' id='item__checkbox' />
      <label for='item__checkbox' class='item__label'></label>
      <p class='item__text'>${mainInput.value}</p>
      <button class='item__edit-btn'>
      <i class='material-icons edit'>create</i>
      </button>
      </div>
      <button class='item__delete-dtn'>
      <i class='material-icons delete'>delete</i>
      </button>
      </li>`;
  let toDoItems = document.querySelectorAll('.item');
  if (mainInput.value && !addBtn.hasAttribute('disabled') && toDoItems.length <= maxItems) {
    toDoList.innerHTML += element;
  }
  if (toDoItems.length === maxItems) {
    addBtn.setAttribute('disabled', 'disabled');
    mainInput.setAttribute('disabled', 'disabled');
    let p = document.createElement('p');
    p.innerHTML = 'Maximum item per list are created';
    p.className = 'input__subtitle';
    mainHeading.parentNode.insertBefore(p, mainHeading.nextSibling);
  }
  mainInput.value = '';
  addBtn.setAttribute('disabled', 'disabled');
}

addBtn.addEventListener('click', createElement);

//done action && delete action
toDoList.addEventListener(
  'click',
  function(ev) {
    let event = ev.target;
    let checkbox = event.previousElementSibling;
    let text = event.nextElementSibling;
    if (event.tagName === 'LABEL') {
      const doneIcon = `<i class='material-icons done'> done </i>`;
      event.innerHTML = doneIcon;
      checkbox.checked = true;
      checkbox.disabled = true;
      text.nextElementSibling.disabled = true;
      text.classList.add('checked');
    } else if (event.classList.contains('delete')) {
      let button = event.parentElement;
      button.parentElement.remove();
    }
  },
  false
);
