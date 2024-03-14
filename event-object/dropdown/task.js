
// Объявление переменных
const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');

const dropdownList = document.querySelector('.dropdown__list')
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

// Открытие списка по нажатию
dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

// Запрет перехода по ссылке && Замена значения при нажатии 
for (let i = 0; i < dropdownItems.length; i++) {
    dropdownLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
    });

    dropdownItems[i].addEventListener('click', () => {
        dropdownValue.textContent = dropdownItems[i].textContent;
        dropdownList.classList.add('dropdown__list_active');
    })
};