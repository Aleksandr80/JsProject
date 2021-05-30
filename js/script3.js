"use strict";

// function showFirstMessage() {
//     console.log("Hello World!");
// }

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function expression
const logger = function() {
console.log("Hello");
};

// Вызов
logger();

// Стрелочная функция не имеет своего вызова
// Полная форма
const calcul = (a, b) => { 
    console.log('1');
    return a + b; 
};
// Сокращенная форма
// const calcul = (a, b) => a + b;

//Свойства и методы 

const str ="test";

console.log(str.length);
const arr = [1, 2, 4];
console.log(arr.length);
console.log(str[2]);

// Выполняем действие над строкой с помощью метода toUpperCase()
console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());

// Поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

// Вырезаем методом из строки слово world
// В slice второй аргумент до не включаемого символа 
const logg = "Hello world";
console.log(logg.slice(6,11));
// Можно указать только первый параметр
console.log(logg.slice(6));
// То же самое выводим с 6-го символа по 10 включительно
console.log(logg.substring(6, 11));
//Substr указываем с какого символа начать вырезать и сколько символов вырезать
console.log(logg.substr(6, 5));

// Методы чисел

// Округление
const num = 12.2;
console.log(Math.round(num));
// Превращаем строку в целое число
const test = "12.2px";
console.log(parseInt(test));
// Превращаем строку в дробное число
console.log(parseFloat(test));

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    // isNan - проверяет число ли в скобках - если не число, то true
    while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
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
        let lastOfFilms = prompt('Один из последних просмотренных фильмов?',''),
        costOfFilms = prompt('На сколько оцените его?','');
        if (lastOfFilms != null && costOfFilms != null && lastOfFilms != '' && costOfFilms != '' && lastOfFilms.length < 50 ) {
            personalMovieDB.movies[lastOfFilms] = costOfFilms;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
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
    for (let i = 1; i <=3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`,""); 
        // personalMovieDB.genres[i-1] = genre;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();
// console.log(personalMovieDB);