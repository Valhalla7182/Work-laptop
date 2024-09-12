const form = document.createElement("form");
form.className = "create-user-form";

const labelName = document.createElement("label");
labelName.innerHTML = `Имя
                <input type="text" name="userName" placeholder="Введите ваше имя">`;

const labelPassword = document.createElement("label");
labelPassword.innerHTML = `Пароль
                <input type="password" name="password" placeholder="Придумайте Пароль">`;

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Подтвердить";

form.append(labelName, labelPassword, button);
document.body.append(form);