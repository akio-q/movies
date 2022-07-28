"use strict";

const numberOfFilms = +prompt('How many movies have you watched already?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count <= 10) {
    alert('You watched quite a bit films');
} else if (personalMovieDB.count < 30) {
    alert('You are typical viewer');
} else if (personalMovieDB.count >= 30) {
    alert('You are a true cinephile!');
} else {
    alert('Error');
}
