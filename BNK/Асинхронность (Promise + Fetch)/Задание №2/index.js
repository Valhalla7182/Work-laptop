const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const usersIds = [5, 6, 2, 1];
const dataContainer = document.querySelector('#data-container')
const createUserElement = (text) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = text;
    userElement.append(userElementAnchor);

    return userElement;
}


const getUsersById = (ids) => {
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResult = responses.map((response) => response.json());
            return Promise.all(dataResult);
        })
        .then((users) => {
            console.log(users);
            users.forEach(user => {
                const userHTML = createUserElement(user.name);
                dataContainer.append(userHTML);
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

getUsersById(usersIds);