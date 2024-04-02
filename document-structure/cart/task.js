// Продукты
const products = document.querySelectorAll('.product');

// Кнопки товаров
const productDecrease = document.querySelectorAll('.product__quantity-control_dec'); 
const productIncrease = document.querySelectorAll('.product__quantity-control_inc'); 
const productQuantity = document.querySelectorAll('.product__quantity-value');
const addButtons = document.querySelectorAll('.product__add');

// Корзина
const cart = document.querySelector('.cart__products');
const productsInCart = document.getElementsByClassName('cart__product');

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
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', () => {
        let productInCart = productsInCart.find(product => product === products[i]);
        if (productInCart) {
            let thisProduct = productInCart.querySelector('.cart__product-count');
            thisProduct.textContent = Number(thisProduct.textContent) + Number(productQuantity[i]);
        } else {
        // Создать элемент товара в корзине
        cart.insertAdjacentHTML('beforeEnd', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div></div>')
        
        // Присвоить data-id
        let cartProduct = document.querySelector('.cart__product');
        cartProduct.dataset.id = `${i}`;

        // Присвоить изображение
        let cartProductImage = document.querySelector('.cart__product-image');
        let productImage = productImages[i].getAttribute('src');
        cartProductImage.setAttribute('src', productImage);

        // Присвоить количество
        let cartProductCount = document.querySelector('.cart__product-count');
        cartProductCount.textContent = productQuantity[i].textContent; 
        }
    });
}


// // Добавление товара в корзину
// for (let i = 0; i < products.length; i++) {
//     productAdd[i].addEventListener('click', () => {
//         // Увеличение количества товара в корзине
//         for (let a = 0; a < addedProducts; a++) {
//             if (addedProducts[i].dataset.id === i) {
//                 let cartProductCount = document.querySelector('.cart__product-count');
//                 cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productQuantity[i].textContent);
//             }
//         }

//         // Создать элемент товара в корзине
//         cart.insertAdjacentHTML('beforeEnd', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div></div>')
        
//         // Присвоить data-id, изображение и количество
//         let cartProduct = document.querySelector('.cart__product');
//         cartProduct.dataset.id = `${i}`;
//         let cartProductImage = document.querySelector('.cart__product-image');
//         let productImage = productImages[i].getAttribute('src');
//         cartProductImage.setAttribute('src', productImage);
//         let cartProductCount = document.querySelector('.cart__product-count');
//         cartProductCount.textContent = productQuantity[i].textContent; 
//     });
// }

