"use strict";

// console.log(1);
let number = 5;
const leftBorderWidth = 1;

// console.log(something);
// let und;
// console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
// console.log(obj["name"]);
console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[1]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result); //выводит true или false

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);
// console.log(typeof(answer)); // По умолчанию всегда строка
// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer)); // А сдесь число, так как prompt привели к числу

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
const category = 'toys';
// console.log('https://someurl.com/' + category);
//Интерполяция
console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);


// Задание
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastOfFilms = prompt('Один из последних просмотренных фильмов?',''),
    costOfFilms = prompt('На сколько оцените его?',''),
    lastOfFilms2 = prompt('Один из последних просмотренных фильмов?',''),
    costOfFilms2 = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastOfFilms] = costOfFilms;
personalMovieDB.movies[lastOfFilms2] = costOfFilms2;
console.log(personalMovieDB);
// Конец задания

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num >100) {
    console.log('Много');
} else {
    console.log('Ок!');
}

(num === 50) ? console.log('Ок!') : console.log('Error');
 
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

let numbers = 50;

// while (numbers <= 55 ) {
//     console.log(numbers);
//     numbers++;
// }

// do {
//     console.log(numbers);
//     numbers++;
// }
// while (numbers < 55 );

// for (let i = 1; i < 8; i++) {
//     // console.log(i);
//     console.log(numbers);
//     numbers++;
// }

for (let i = 1; i < 8; i++) {
    // Делаем досрочный выход из цикла по условию
    if (i === 6) {
        break;
    }
    // Пропускаем только не нужный шаг
    if (i === 3) {
         continue;
    }  
    console.log(i);
}
