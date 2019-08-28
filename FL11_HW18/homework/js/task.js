document.addEventListener('DOMContentLoaded', init);

function init() {
  const getUsers = url => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(usersBase => {
        usersBase.forEach(element => {
          const userName = element['username'];
          const userId = element['id'];
          const userTemplate = `<li class="user-item" id="${userId}">
          <span class="user-name">${userName}</span>
          <span>
            <i class="fas fa-pen edit-icon"></i>
            <i class="fas fa-save save-icon"></i>
            <i class="fas fa-trash delete-icon"></i>
          </span>
          </li>`;
          const usersList = document.querySelector('.user-list');
          usersList.innerHTML += userTemplate;
        });
      });
  };

  getUsers('https://jsonplaceholder.typicode.com/users');

  const modifyUsers = event => {
    const icon = event.target;
    const userItem = icon.closest('.user-item');
    const userText = userItem.querySelector('.user-name');
    const userId = userItem.id;
    if (icon.classList.contains('edit-icon')) {
      userText.setAttribute('contenteditable', 'true');
      userText.style = 'border-color: blue';
    } else if (icon.classList.contains('save-icon')) {
      userText.removeAttribute('contenteditable', 'true');
      userText.style = 'border-color: transparent';
      const userData = {
        username: userText.innerHTML
      };
      updateUsersOnTheServer('put', 'https://jsonplaceholder.typicode.com/users', userId, userData);
    } else if (icon.classList.contains('delete-icon')) {
      deleteUsersOnTheServer('https://jsonplaceholder.typicode.com/users', userId);
      userItem.remove();
    }
  };

  const updateUsersOnTheServer = (method, url, id, userData) => {
    fetch(url + '/' + id, {
      method: method.toUpperCase(),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(result => result.json())
      .then(result => console.log(result));
  };

  const deleteUsersOnTheServer = (url, id) => {
    fetch(url + '/' + id, {
      method: 'DELETE'
    }).then(() => console.log(`User with id ${id} was removed`));
  };

  const usersList = document.querySelector('.user-list');
  usersList.addEventListener('click', modifyUsers);
}
