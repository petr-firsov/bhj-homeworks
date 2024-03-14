const fontSizes = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', (click) => {
        click.preventDefault();

        let activeFont = document.querySelector('.font-size_active');
        activeFont.classList.remove('font-size_active');
        fontSizes[i].classList.add('font-size_active');
        activeFont = fontSizes[i];

        if (activeFont.classList.contains('book_fs-big')) {
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.add('book_fs-big');
        } else if (activeFont.classList.contains('book_fs-small')) {
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.add('book_fs-small');
        } else {
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.remove('book_fs-big');
        }
    });
}
