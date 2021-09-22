
'use strict';




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel:  function (){
        if (personalMovieDB.count < 10) {
            console.log("Маловато, вы точно не киноман:р");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Солидный запас фильмов');
                } else if (personalMovieDB.count >= 30) {
                    console.log('Киномана сдалеку видно, вы точно из таких');
                    } else {
                        console.log('error');
        }
    
    },
    writeYourGenres: function (){
        for(let i = 1; i <= 3; i++){
            let a = prompt(`Ваш любимый жанр под номером ${i}?`);
                if(a == '' || a == null){
                    console.log('Братииииииш, тут ошибочка с твоими данными...');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = a;
                }
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр#${i + 1} - это ${element}`);
        });
    },
    privatDB: function (){
        if (personalMovieDB.privat != false){
            console.log(personalMovieDB);
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }
        //классический тогглер, равносильно условию (personalMovieDB.privat == true)
    }
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();







//personalMovieDB.movies[a] = b;


// let f = "something";
// console.log(f.length);

// function shfs(text) {
//     console.log(text);
// }

// shfs("pisun");
