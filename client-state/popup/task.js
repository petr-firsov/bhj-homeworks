const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

// modal.classList.add('modal_active');

window.onload = function() {
    let cookie = document.cookie;
    if (cookie['popup'] === undefined) {
        modal.classList.add('modal_active');
    }
};

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = "popup=closed";
});

