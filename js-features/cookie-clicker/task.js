const clickCounter = document.getElementById('clicker__counter');

const cookie = document.getElementById('cookie');


cookie.onclick = function() {
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if (cookie.width < 300 && cookie.height < 228) {
        cookie.width = 300;
        cookie.height = 228;
    } else {
        cookie.width = 200;
        cookie.height = 128;
    }
}