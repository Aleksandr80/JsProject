/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let lastOfFilms = prompt('Один из последних просмотренных фильмов?',''),
//     costOfFilms = prompt('На сколько оцените его?',''),
//     lastOfFilms2 = prompt('Один из последних просмотренных фильмов?',''),
//     costOfFilms2 = prompt('На сколько оцените его?','');

// personalMovieDB.movies[lastOfFilms] = costOfFilms;
// personalMovieDB.movies[lastOfFilms2] = costOfFilms2;

for (let i = 0; i < 2; i++) {
    let lastOfFilms = prompt('Один из последних просмотренных фильмов?',''),
    costOfFilms = prompt('На сколько оцените его?','');
    if (lastOfFilms != null && costOfFilms != null && lastOfFilms != '' && costOfFilms != '' && lastOfFilms.length < 50 ) {
        personalMovieDB.movies[lastOfFilms] = costOfFilms;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
    // if (lastOfFilms == null || lastOfFilms.length < 1 || lastOfFilms.length > 50 ) {
    //    i--;
    // } else {
    //     personalMovieDB.movies[lastOfFilms] = costOfFilms;
    // }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
