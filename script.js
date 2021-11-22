"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');     

        if (a != '' && b != '' && a.length < 50 && b.length < 50 && a != null && b != null ) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        }
        else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотренно довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Да вы киноман');
    } else {
        console.log('Произошла ошибка!');
    }
}
detectPersonalLevel();

function writeYoreGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);        
    }
}

writeYoreGenres();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);