const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userPassword = prompt('Введіть пароль:');

if (userPassword === null) {
    message = 'Операцію скасовано!';
} else if (userPassword === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонено, невірний пароль!';
}

alert(message);
