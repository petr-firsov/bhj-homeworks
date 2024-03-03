const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('book');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', function() {
        for (let i = 0; i < fontSizes.length; i++) {
            let fontButton = fontSizes[i];
            fontButton.classList.remove('font-size_active');
            if (fontButton.classList.contains('books_fs-small')) {
                fontButton.classList.remove('book_fs-small')
            } 
            if (fontButton.classList.contains('books_fs-big')) {
                fontButton.classList.remove('book_fs-big')
            }
        };

        this.classList.add('font-size_active');

        if (this.classList.contains('font-size_small')) {
            this.classList.add('book_fs-small');
        } else if (this.classList.contains('font-size_big')) {
            this.classList.add('book_fs-big')
        } 
    });
}

/* 
Почему при нажатии на кнопку размера шрифта кнопка на мгновение переключается,
шрифт не меняется, и потом кнопка сразу возвращается?
*/
