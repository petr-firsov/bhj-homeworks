const request = new XMLHttpRequest();
const loaderImg = document.getElementById('loader');
const items = document.getElementById('items');

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        const jsonResponse = request.response;
        loaderImg.classList.remove('loader_active');
        
        for (let currency in jsonResponse) {
            items.innerHTML('beforeEnd', '<div class="item"><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div>');
            let itemCode = document.querySelector('item__code');
            itemCode.innerText = currency;
            let itemValue = document.querySelector('item__value');
            itemValue.innerText = jsonResponse[currency].Value;
        }
    }
})

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();