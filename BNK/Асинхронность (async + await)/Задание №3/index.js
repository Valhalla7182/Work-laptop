const ALBUMS_URL = `https://jsonplaceholder.typicode.com/albums`;

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

const createAlbumElement = (albumTitle) => {
    const albumElement = document.createElement('li');
    const albumElementAnchor = document.createElement('a');
    albumElementAnchor.href = "#";
    albumElementAnchor.textContent = albumTitle;
    albumElement.append(albumElementAnchor);
    return albumElement;
}

const renderAlbums = async () => {
    toggleLoader();
    try {
        const response = await fetch(ALBUMS_URL);
        const albums = await response.json();

        console.log(albums);
        if(!response.ok) {
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        albums.forEach(album => {
            const albumHTML = createAlbumElement(album.title);
            dataContainer.append(albumHTML);
        });
    }catch(error) {
        console.log(error)
    }finally {
        toggleLoader();
        console.log('finally');
    }
}

renderAlbums();
