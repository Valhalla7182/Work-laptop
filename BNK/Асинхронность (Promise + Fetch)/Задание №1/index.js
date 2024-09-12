const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const createUserElement = (text) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = text;
    userElement.append(userElementAnchor);

    return userElement;
}

const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if(isHidden) {
        loader.removeAttribute('hidden');
    }else {
        loader.setAttribute('hidden', '');
    }
}

const getAllUsers = () => {
    toggleLoader();
    const result = fetch(USERS_URL, {
        method: 'GET',
    });
    
    console.log(result);
    
    result
        .then((response) => {
            if(!response.ok) {
                throw new Error('Ошибка');
            }
            return response.json();
        })
        .then((users) => {
            console.log(users);
            users.forEach(user => {
                const userHTML = createUserElement(user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            toggleLoader();
        })    
}

getAllUsers();
