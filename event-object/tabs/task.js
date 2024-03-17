const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (let a = 0; a < tabs.length; a++) {
    tabs[a].addEventListener('click', () => {
        let i = tabs.findIndex(tab => tab.classList.contains('tab_active'));
        // Очистить предыдущие нажатые таб и контент
        tabs[i].classList.remove('tab_active');
        contents[i].classList.remove('tab__content_active');

        // Добавить активный класс табу и контенту
        tabs[a].classList.add('tab_active');
        contents[a].classList.add('tab__content_active');
    });
}