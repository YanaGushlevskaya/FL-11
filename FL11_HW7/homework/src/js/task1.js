const USER_LOGIN = 'user@gmail.com';
const USER_PASSWORD = 'UserPass';
const ADMIN_LOGIN = 'admin@gmail.com';
const ADMIN_PASSWORD = 'AdminPass';
const MIN_LOGIN_LENGTH = 6;
const MIN_PASSW_LENGTH = 5;

let login = prompt('Please enter your login');

login !== '' && login !== null && login.length < MIN_LOGIN_LENGTH
  ? (login = 'too short')
  : login;

switch (login) {
  case '':
  case null:
    alert('Canceled');
    break;
  case 'too short':
    alert("I don't know any emails having name length less than 6 symbols");
    break;
  case USER_LOGIN:
  case ADMIN_LOGIN: {
    let password = prompt('Please enter your password');

    (login === USER_LOGIN && password === USER_PASSWORD) ||
    (login === ADMIN_LOGIN && password === ADMIN_PASSWORD)
      ? (password = true)
      : password;

    switch (password) {
      case '':
      case null:
        alert('Canceled');
        break;
      case true: {
        let newPasswordConfirm = confirm(
          'Do you want to change your password?'
        );

        if (newPasswordConfirm === false) {
          alert('You have failed the change.');
        } else {
          let oldPassword = prompt('Please enter the old password');

          (login === USER_LOGIN && oldPassword === USER_PASSWORD) ||
          (login === ADMIN_LOGIN && oldPassword === ADMIN_PASSWORD)
            ? (oldPassword = true)
            : oldPassword;

          switch (oldPassword) {
            case '':
            case null:
              alert('Canceled');
              break;
            case true: {
              let newPassword = prompt('Please enter a new password');
              if (newPassword.length < MIN_PASSW_LENGTH) {
                alert('It’s too short password. Sorry.');
              } else {
                let checkNewPasswod = prompt(
                  'Please enter the new password one more time'
                );
                checkNewPasswod === newPassword
                  ? alert('You have successfully changed your password.')
                  : alert('You wrote the wrong password.');
                break;
              }
              break;
            }
            default:
              alert('Wrong password');
              break;
          }
        }
        break;
      }
      default:
        alert('Wrong password');
        break;
    }
    break;
  }
  default:
    alert('I don’t know you');
    break;
}
