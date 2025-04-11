import { createMoviesTable } from './createElements.js';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let movieName = prompt('Один из последних просмотренных фильмов?', '');
    let movieRating = prompt('На сколько оцените его?', '');

    while (movieName === null || movieName.length === 0 || movieName.length > 50 || movieRating === null || movieRating.length === 0) {
        alert('Пожалуйста, введите корректные данные!');
        movieName = prompt('Один из последних просмотренных фильмов?', '');
        movieRating = prompt('На сколько оцените его?', '');
    }

    personalMovieDB.movies[movieName] = movieRating;
}

console.log(personalMovieDB);

const moviesTable = createMoviesTable(personalMovieDB.movies);
document.getElementById('movies-table').appendChild(moviesTable);