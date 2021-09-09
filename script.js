
'use strict';
let number0fFilms;

function start() {
    number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Ваш последний просмотренный фильм?', ''),
              b = prompt('На сколько вы его оцените?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('nice');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Маловато, вы точно не киноман:р");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Солидный запас фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log('Киномана сдалеку видно, вы точно из таких');
    } else {
        console.log('error');
    }

}
    detectPersonalLevel();
//personalMovieDB.movies[a] = b;



// if (a == 10) {
//     alert('Вы пидор');
// } else {
//     alert('Нахуй иди:р');
// }

// (a == 10) ? alert('вЫ ПИдор') : alert('Нахуй идите');
    

// let f = "something";
// console.log(f.length);

// function shfs(text) {
//     console.log(text);
// }

// shfs("pisun");
function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}?`);
        
        personalMovieDB.genres[i - 1] = a;
       }
}
function privatDB(){
    if (personalMovieDB.privat != false){
        console.log(personalMovieDB);
    }
}
writeYourGenres();
privatDB();