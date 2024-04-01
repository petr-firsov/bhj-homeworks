// Общие переменные
const bookContent = document.querySelector('.book__content');

// Размер шрифта
const fontSizes = document.querySelectorAll('.font-size');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', (click) => {
        click.preventDefault();

        let activeFont = document.querySelector('.font-size_active');
        activeFont.classList.remove('font-size_active');
        fontSizes[i].classList.add('font-size_active');
        activeFont = fontSizes[i];

        if (activeFont.classList.contains('font-size_big')) {
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.add('book_fs-big');
        } else if (activeFont.classList.contains('font-size_small')) {
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.add('book_fs-small');
        } else {
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.remove('book_fs-big');
        }
    });
}


// Цвет текста
const textColorsContainer = document.querySelector('.book__control_color');
let textColors = textColorsContainer.getElementsByTagName('a');

for (let i = 0; i < textColors.length; i++) {
    textColors[i].addEventListener('click', (reset) => {
        reset.preventDefault();

        // Смена кнопки при нажатии
        let activeTextColor = document.querySelector('.color_active');
        activeTextColor.classList.remove('color_active');
        textColors[i].classList.add('color_active');
        activeTextColor = textColors[i];

        // Смена цвета текста 
        if (activeTextColor.classList.contains('text_color_black')) {
            bookContent.classList.remove('book_color-gray');
            bookContent.classList.remove('book_color-whitesmoke');
            bookContent.classList.add('book_color-black');
        } else if (activeTextColor.classList.contains('text_color_gray')) {
            bookContent.classList.remove('book_color-black');
            bookContent.classList.remove('book_color-whitesmoke');
            bookContent.classList.add('book_color-gray');
        } else {
            bookContent.classList.remove('book_color-black');
            bookContent.classList.remove('book_color-gray');
            bookContent.classList.add('book_color-whitesmoke');
        }
    })
}


// Цвет фона
const backgroundColorsContainer = document.querySelector('.book__control_background');
const backgroundColors = backgroundColorsContainer.getElementsByTagName('a');

for (let i = 0; i < backgroundColors.length; i++) {
    backgroundColors[i].addEventListener('click', (reset) => {
        reset.preventDefault();

        // Смена кнопки при нажатии
        let activeBackgroundColor = backgroundColorsContainer.querySelector('.color_active');
        activeBackgroundColor.classList.remove('color_active');
        backgroundColors[i].classList.add('color_active');
        activeBackgroundColor = backgroundColors[i];

        // Смена цвета текста 
        if (activeBackgroundColor.classList.contains('bg_color_black')) {
            bookContent.classList.remove('book_bg-gray');
            bookContent.classList.remove('book_bg-whitesmoke');
            bookContent.classList.add('book_bg-black');
        } else if (activeBackgroundColor.classList.contains('bg_color_gray')) {
            bookContent.classList.remove('book_bg-black');
            bookContent.classList.remove('book_bg-whitesmoke');
            bookContent.classList.add('book_bg-gray');
        } else {
            bookContent.classList.remove('book_bg-black');
            bookContent.classList.remove('book_bg-gray');
            bookContent.classList.add('book_bg-whitesmoke');
        }
    })
}