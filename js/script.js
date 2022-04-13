/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {// скрипт сработает только после полной прогрузки вебсайта

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
        movieList = document.querySelector('.promo__interactive-list'),// Получаем первый элемент по данному сселектору
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();// при нажатии на кнопку Отправить страница не будет перезагружаться

        let newFilm = addInput.value; //мы получаем ввод пользователя в placeholder
        const favorite = checkbox.checked;// проверка boolean значения

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;// Если название фильма больше 21 символа, оно обрезается и заменяется троеточием
            }

            if (favorite) {
                console.log('Любимый фильм');
            }
            <!--Добавляем фильмы в базу данных и сортируем их по имени -->
            movieDB.movies.push(newFilm);

            //после добавления фильмов они сортируются по алфавиту
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => { // мы передаём в функцию аргумент, который будет определяться только в момент вызова функции
        adv.forEach(item => {// Получение и перебор элемента. Передаём внутрь стрелочную коллбэк функцию
            item.remove();//вызов метода удаления элемента
        });
    };


//
//
// adv.forEach(function(item) {
//     item.remove();
// });


    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        <!--Change the background image to bg.jpeg -->
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    <!-- Create movie list basing on JS data, sort alphabetically -->

    const sortArray = (arr) => {
        arr.sort();
    };


    movieList.innerHTML = "";


    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film} <!--получаем из каждого элемента, автоматическое проставление нумерации и сортировка по алфавиту-->
                            <div class="delete"></div>
                            </li>
   `;
    });

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);
        movieDB.movies.sort();

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film} <!--получаем из каждого элемента, автоматическое проставление нумерации и сортировка по алфавиту-->
                            <div class="delete"></div>
                            </li>
   `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {//перебираем элементы for...each, если мы хотим повесить на элементы одно и то же событие
            btn.addEventListener('click', () => { // Обращаемся к каждой кнопке удаления
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);// При удалении одного из элементов у нас заново перестраивается список и нумеруется по порядку
            });
        });

    }

    createMovieList(movieDB.movies, movieList); //При открытии страницы мы создаём муви лист для отображения на странице
    makeChanges();
    deleteAdv(adv);


});