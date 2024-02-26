// Сделайте сворачивание/разворачивание списка по нажатию на кнопку
// Сделайте замену значения по выбору соответствующего пункта меню
// Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
// Не забывайте запрещать переход по ссылке

const listButton = document.querySelector('.dropdown');
const listButtonValue = document.querySelector('.dropdown__value');

const listMenu = document.querySelector('.dropdown__list');
const listElements = document.querySelectorAll('.dropdown__item');
const listElementsLinks = document.querySelectorAll('.dropdown__link');

listButton.addEventListener('click', function() {
    listMenu.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('click', function() {
        listMenu.classList.remove('dropdown__list_active');
        listButtonValue.textContent = this.textContent;
    });
};

for (let i = 0; i < listElementsLinks.length; i++) {
    listElementsLinks[i].onclick = false;
};