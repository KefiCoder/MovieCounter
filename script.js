
'use strict';
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Ваш последний просмотренный фильм?', ''),
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Ваш последний просмотренный фильм?', ''),
      d = prompt('На сколько вы его оцените?', '');
       
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

if (a == 10) {
    alert('Вы пидор');
    }

console.log(personalMovieDB);