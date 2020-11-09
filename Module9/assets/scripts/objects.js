const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    movieList.innerHTML = '';
    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li');
        const {info,...otherProps} = movie;
        let {getFormattedTitle} = movie;
        //let text = getFormattedTitle.call(movie)+ ' - ';  Let you add new arguments as comma separated pieces
        let text = getFormattedTitle.apply(movie)+ ' - ';  // Let you add arguments as array
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() { //     lub  getFormattedTitle: function () {
            return this.info.title.toUpperCase();
        }
    }
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);