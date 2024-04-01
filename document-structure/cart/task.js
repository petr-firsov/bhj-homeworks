// Продукты
const products = document.querySelectorAll('.product');

// Кнопки товаров
const productDecrease = document.querySelectorAll('.product__quantity-control_dec'); 
const productIncrease = document.querySelectorAll('.product__quantity-control_inc'); 
const productQuantity = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');

// Корзина
const cartProducts = document.querySelector('.cart__products');

// Изображения товаров
const productImages = document.querySelectorAll('.product__image');

// Увеличение/уменьшение количества товара

for (let i = 0; i < productDecrease.length; i++) {
    productDecrease[i].addEventListener('click', () => {
        if (Number(productQuantity[i].textContent) !== 0) {
            productQuantity[i].textContent = Number(productQuantity[i].textContent) - 1;
        }
    })
}

for (let i = 0; i < productIncrease.length; i++) {
    productIncrease[i].addEventListener('click', () => {
        productQuantity[i].textContent = Number(productQuantity[i].textContent)  + 1;
    })
}

// Добавление товара в корзину

for (let i = 0; i < products.length; i++) {
    productAdd[i].addEventListener('click', () => {
        cartProducts.insertAdjacentHTML('beforeEnd', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div></div>')
        let cartProduct = document.querySelector('.cart__product');
        cartProduct.dataset.id = `${i}`;
        let cartProductImage = document.querySelector('.cart__product-image');
        let productImage = productImages[i].getAttribute('src');
        cartProductImage.setAttribute('src', productImage);
        let cartProductCount = document.querySelector('.cart__product-count');
        cartProductCount.textContent = productQuantity.textContent;
    });
}

