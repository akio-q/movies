"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched already?', '').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched already?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', '').trim(),
              b = prompt('How much would you rate it?', '').trim();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('You watched quite a bit films');
    } else if (personalMovieDB.count < 30) {
        console.log('You are typical viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a true cinephile!');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre at number ${i}`).trim();
    }
}

writeYourGenres();