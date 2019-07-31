const mainHeading = document.querySelector('.input__heading');
const mainInput = document.querySelector('.input');
const tasks = document.querySelector('.list');
const editBtn = document.querySelector('.item__edit-btn');
const addBtn = document.querySelector('.input__add-btn');
const maxItems = 10;

mainInput.addEventListener('keyup', event => {
  let value = event.target.value;
  if (value.trim().length) {
    const keyCode = event.keyCode;
    switch (keyCode) {
      case 13: {
        createTask();
        break;
      }
      case 27: {
        event.target.value = '';
        isEmpty();
        break;
      }
    }
    isEmpty();
    isFull();
  }
});

addBtn.addEventListener('click', createTask);

function createTask() {
  let text = `<div class='checkbox-wrapper'>
  <input type='checkbox' class='item__checkbox' id='item__checkbox' />
  <label for='item__checkbox' class='item__label'></label>
  <p class='item__text'>${mainInput.value}</p>
  <button class='item__edit-btn'>
  <i class='material-icons edit'>create</i>
  </button>
  </div>
  <button class='item__delete-dtn'>
  <i class='material-icons delete'>delete</i>
  </button>`;
  const task = document.createElement('li');
  task.className = 'item';
  task.innerHTML = text;
  task.setAttribute('id', Date.now());
  tasks.appendChild(task);
  mainInput.value = '';
  isEmpty();
}

function isEmpty() {
  const value = mainInput.value;
  value.trim().length ? addBtn.removeAttribute('disabled', 'disabled') : addBtn.setAttribute('disabled', 'disabled');
}

tasks.addEventListener('click', function({ target }) {
  const task = target.closest('.item');
  if (target.classList.contains('delete')) {
    tasks.removeChild(task);
    isFull();
  } else if (target.classList.contains('item__label')) {
    checkedTask(target);
  } else if (target.classList.contains('edit')) {
    const editBtn = target.parentElement;
    const input = editBtn.closest('.item__checkbox');
    editTask(editBtn);
    console.log(input);
  }
});

function checkedTask(task) {
  const checkbox = task.closest('.checkbox-wrapper');
  const editBtn = checkbox.querySelector('.item__edit-btn');
  const label = task.closest('.item__label');
  const doneIcon = `<i class='material-icons done'> done </i>`;
  label.innerHTML = doneIcon;
  editBtn.setAttribute('disabled', 'disabled');
  const text = label.nextElementSibling;
  text.classList.add('checked');
}

function isFull() {
  isListFull = tasks.children.length === maxItems;
  const p = document.createElement('p');
  p.innerHTML = 'Maximum items per list are created';
  p.className = 'input__subtitle';
  if (isListFull) {
    mainHeading.after(p);
    mainInput.setAttribute('disabled', 'disabled');
    addBtn.setAttribute('disabled', 'disabled');
    p.hidden = false;
    return true;
  } else {
    const p = document.querySelector('.input__subtitle');
    p ? (p.hidden = true) : null;
    mainInput.removeAttribute('disabled', 'disabled');
    addBtn.removeAttribute('disabled', 'disabled');
    return false;
  }
}

function editTask(sibling) {
  const parent = document.createElement('div');
  parent.className = 'edit-wrapper';
  const editInput = document.createElement('input');
  editInput.className = 'edit-input';
  const saveBtn = `<button class='save-btn'><i class='material-icons save'>save</i></button>`;
  parent.appendChild(editInput);
  parent.innerHTML += saveBtn;
  value = editInput.value;
  if (!sibling.disabled) {
    sibling.after(parent);
  }
}
