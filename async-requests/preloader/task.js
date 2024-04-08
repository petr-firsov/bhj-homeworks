let request = new XMLHttpRequest();
const loaderImg = document.getElementById('loader');
const items = document.getElementById('items');

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        loaderImg.classList.remove('loader_active');

        let jsonResponse = request.response;              
        let currencies = JSON.parse(jsonResponse);
        currencies = currencies.response.Valute;
    
    for (currency in currencies) {
        items.insertAdjacentHTML('beforeend', '<div class="item"><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div>');
        let newItem = items.lastChild;
        let itemCode = newItem.querySelector('.item__code');
        itemCode.innerText = currency;
        let itemValue = newItem.querySelector('.item__value');
        itemValue.innerText = currencies[currency].Value;
    }
    }
})

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();