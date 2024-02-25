// Сделайте сворачивание/разворачивание списка по нажатию на кнопку
// Сделайте замену значения по выбору соответствующего пункта меню
// Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
// Не забывайте запрещать переход по ссылке

const listButton = document.querySelector('.dropdown');
const listValue = document.querySelector('.dropdown__value');
const listMenu = document.querySelector('.dropdown__list');
const listElements = Array.from(document.querySelectorAll('.dropdown__item'));

listButton.addEventListener('click', function() {
    listMenu.classList.toggle('.dropdown__list_active');
});

for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('click', function() {
        listMenu.className.remove('.dropdown__list_active');
        listValue = this.textContent;
    });
};

