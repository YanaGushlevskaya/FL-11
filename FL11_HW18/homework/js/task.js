document.addEventListener('DOMContentLoaded', init);

function init() {
  
  const url = 'https://jsonplaceholder.typicode.com';
  const usersList = document.querySelector('.user-list');
  const postsList = document.querySelector('.post-list');
  const listWrapper = document.querySelector('.list-wrapper');
  const postsWrapper = document.querySelector('.postsList-wrapper');

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
          <a class="user-name" href="#user${userId}Posts" title="Get user posts and comments">${userName}</a>
          <span>
            <i class="fas fa-pen edit-icon" title="Edit user name"></i>
            <i class="fas fa-save save-icon" title="Save edited user name"></i>
            <i class="fas fa-trash delete-icon" title="Delete user"></i>
          </span>
          </li>`;
          const usersList = document.querySelector('.user-list');
          usersList.innerHTML += userTemplate;
        });
      });
  };
  
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
      updateUsersOnTheServer('put', `${url}/users`, userId, userData);
    } else if (icon.classList.contains('delete-icon')) {
      deleteUsersOnTheServer(`${url}/users`, userId);
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
    .then(result => console.log(`Username was updated to ${result.username}`));
  };
  
  const deleteUsersOnTheServer = (url, id) => {
    fetch(url + '/' + id, {
      method: 'DELETE'
    }).then(() => console.log(`User with id ${id} was removed`));
  };

  const showUserPosts = event => {
    const target = event.target;
    if(target.classList.contains('user-name') && !target.hasAttribute('contenteditable')) {
      const user = target.closest('.user-item');
      listWrapper.hidden = true;
      postsWrapper.hidden = false;
      postsList.setAttribute('id', `#user${user.id}Posts`);
      console.log(postsList);
      getUserPosts(user.id, url);
    }
  }

  const getUserPosts = (id, url) => {
      fetch(`${url}/posts?userId=${id}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok');
        })
        .then(userPosts=> {
          userPosts.forEach(post => {
            const postTitle = post['title'];
            const postBody = post['body'];
            const postId = post['id'];
            const postTemplate = `<li class="post-item" id="${postId}">
            <h3 class="post-title">${postTitle}</h3>
            <p class="post-content">${postBody}</p>

            </li>`;
            postsList.innerHTML += postTemplate;
            const commentWrapper = document.createElement('div');
            const comments=(getUserComments(postId,commentWrapper));
            console.log(comments);
          });
        });
  }

  const getUserComments = (postId, wrapper) => {
    fetch(`${url}/comments?postId=${postId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok');
        })
        .then(postComments=> {
          postComments.forEach(comment => {
            const commentBody = comment['body'];
            const commentTemplate = `<p class="post-comment>${commentBody}<p>`;
            wrapper.innerHTML += commentTemplate;
            console.log(wrapper);
          });
          return wrapper;
        });
  }
 /*  window.onpopstate = function(event) {
    alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    }; */

  getUsers(`${url}/users`);
  usersList.addEventListener('click', function(event) {
    modifyUsers(event);
    showUserPosts(event);
  });
}
