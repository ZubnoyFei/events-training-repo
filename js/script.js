/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
genre = poster.querySelector('.promo__genre'), // Получаем элемент и приписываем его в переменную
    movieList = document.querySelector('.promo__interactive-list');// Получаем первый элемент по данному сселектору
adv.forEach(item => {// Получение и перебор элемента. Передаём внутрь стрелочную коллбэк функцию
    item.remove();//вызов метода удаления элемента
});
//
//
// adv.forEach(function(item) {
//     item.remove();
// });


genre.textContent = 'ДРАМА';


<!--Change the background image to bg.jpeg -->

poster.style.backgroundImage = 'url("img/bg.jpg")';

<!-- Create movie list basing on JS data, sort alphabetically -->

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
   movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film} <!--получаем из каждого элемента, автоматическое проставление нумерации и сортировка по алфавиту-->
                            <div class="delete"></div>
                            </li>
   `;
});