// Сделайте сворачивание/разворачивание списка по нажатию на кнопку
// Сделайте замену значения по выбору соответствующего пункта меню
// Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
// Не забывайте запрещать переход по ссылке

const listButton = document.querySelector('.dropdown');
const listButtonValue = document.querySelector('.dropdown__value');

const listMenu = document.querySelector('.dropdown__list');
const listMenuElements = document.querySelectorAll('.dropdown__item');
const listMenuElementsLinks = document.querySelectorAll('.dropdown__link');

listButton.addEventListener('click', function() {
    listMenu.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < listMenuElements.length; i++) {
    listMenuElements[i].addEventListener('click', function() {
        listMenu.classList.remove('dropdown__list_active');
        listButtonValue.textContent = this.textContent;
    });
};

for (let i = 0; i < listMenuElementsLinks; i++) {
    listMenuElementsLinks.addEventListener('click', function(event) => {
        event.preventDefault();
    }
}

for (let i = 0; i < listMenuElementsLinks; i++) {
    listMenuElementsLinks.addEventListener('click', function(e) => {
        e.preventDefault();
    }
}


/*
Владимир, я, к сожалению, совершенно вас не понял.

Первое задание.

Второй цикл я убрал.

Правильно ли я понял, что нужно в коллбэк функции одного 
обработчика события
вставить другой элемент со своим обработчиком?
Я не понимаю, зачем. При клике на элемент списка отменяем
переход по ссылкам внутри списка. 
Я понимаю, что это нужно реализовать, но почему именно 
в коллбэке обработчика событий?

В любом случае, я попытался это реализовать и в коллбэке, 
и даже в отдельном цикле, хотя вы сказали, что он не нужен.

Я посмотрел, как использовать preventDefault, на MDN,
и сделал так, как сделал в этой версии ДЗ.

В первом случае аргумент коллбэка event у меня 'deprecated'.
Во втором случае аргумент коллбэка e просто выделяется красным.
В любом случае, ни тот, ни тот не работают.


Кроме того, тот факт, что переход по ссылка не запрещён,
никак не объясняет, почему название списка не меняется.
Вы написали, что клик по элементу списка закроет список,
но дальше почему-то будет вызываться .toggle.

Я не понимаю, почему так.
Вот, где у меня toggle:

listButton.addEventListener('click', function() {
    listMenu.classList.toggle('dropdown__list_active');
});

При нажатии на кнопку меню список то выпадает, то исчезает.

Почему при нажатии на элемент выпадающего списка, обработчик
события которого в коде прописан ниже,
должен включаться toggle? Он же вызывается только при нажатии
на кнопку меню.


*/