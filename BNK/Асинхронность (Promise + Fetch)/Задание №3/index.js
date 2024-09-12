const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';

const createPhotoElement = (photoURL, photoTittle) => {
    const photoElement = document.createElement('li');
    const photoElementImage = document.createElement('img');
    const photoElementHeader = document.createElement('h3');

    photoElement.className = "photo-item";
    photoElementImage.className = 'photo-item__image';
    photoElementImage.src = photoURL;
    photoElementHeader.className = 'photo-item__tittle'
    photoElementHeader.textContent = photoTittle;

    photoElement.append(photoElementImage, photoElementHeader);
    return photoElement;
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


const getFastestLoadedPhoto = (photoIds) => {
    toggleLoader();
    
    const requests = photoIds.map((id) => fetch(`${PHOTO_URL}/${id}`));

    Promise.race(requests)
        .then((responses) => {
            const dataResult = responses.json();
            return dataResult;
        })
        .then((photos)=> {
            console.log(photos)
                const photoHTML = createPhotoElement(photos.url, photos.tittle);
                dataContainer.append(photoHTML);
        
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            toggleLoader()
        })
}

getFastestLoadedPhoto([60, 12, 55]);