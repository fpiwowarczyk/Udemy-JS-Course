const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = addMovieModal.querySelector('.btn--success'); // To be consistent
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
}

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionBtn.removeEventListener('click',closeMovieDeletionModal);

    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener('click',deleteMovie.bind(null,movieId));
};
const renderNewMovieElement = (id,title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class = "movie-element__image">
        <img src="${imageUrl}" alt ="${title}"> 
    </div>
    <div>
        <h2>${title}</h2>
        <p>${rating}/5 start</p>
    </div>
    `;
    newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
};
const cancelAddMovie = () => {
    closeMovieModal();
    clearMovieInput();
    toggleBackdrop();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Enter valid values (rating <1,5>)');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    clearMovieInput();
    toggleBackdrop();
    renderNewMovieElement(newMovie.id,newMovie.title,newMovie.image,newMovie.title);
    updateUI();
}
const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
};

startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovie);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);