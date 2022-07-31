"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        personalMovieDB.count = +prompt('How many movies have you watched already?', '').trim();
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched already?', '');
        }
    },

    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies you watched?', '').trim(),
                  b = prompt('How much would you rate it?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            console.log('You watched quite a bit films');
        } else if (personalMovieDB.count < 30) {
            console.log('You are typical viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a true cinephile!');
        } else {
            console.log('Error');
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genre at number ${i}`).trim();
        }
    }
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();