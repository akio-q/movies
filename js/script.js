"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched already?', '');

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
        const a = prompt('One of the last movies you watched?', ''),
              b = prompt('How much would you rate it?', '');
    
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

console.log(personalMovieDB);