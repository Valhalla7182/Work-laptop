let existingLogin = "the_best_user";
let existingPassword = "123456789";

let login = prompt("Введите логин:");
let password= prompt("Введите пароль:");

login.trim();
password.trim();

if (existingLogin === login && existingPassword === password) {
    alert(`Добро пожаловать, ${existingLogin}!`)
} else {
    alert(`Логин и/или пароль введены неверно!`);
}
