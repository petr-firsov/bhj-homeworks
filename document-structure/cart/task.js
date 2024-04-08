// Переменные
const products = document.querySelectorAll('.product');
const productImages = document.querySelectorAll('.product__image');

const decreaseBtns = document.querySelectorAll('.product__quantity-control_dec'); 
const increaseBtns = document.querySelectorAll('.product__quantity-control_inc'); 
const quantityCounts = document.querySelectorAll('.product__quantity-value');
const addBtns = document.querySelectorAll('.product__add');

const cart = document.querySelector('.cart__products');
const itemsInCart = Array.from(document.getElementsByClassName('cart__product'));


// Выбор количества товара
for (let i = 0; i < products.length; i++) {
    decreaseBtns[i].addEventListener('click', () => {
        if (Number(quantityCounts[i].textContent) !== 1) {
            quantityCounts[i].textContent = Number(quantityCounts[i].textContent) - 1;
        }
    })

    increaseBtns[i].addEventListener('click', () => {
        quantityCounts[i].textContent = Number(quantityCounts[i].textContent)  + 1;
    })
}

// Добавление товара в корзину
for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', () => {
        // Если товар добавлен, увеличить
        let cartItem = itemsInCart.find(item => item.dataset.id === products[i].dataset.id);
        if (cartItem) {
            let cartItemCount = cartItem.querySelector('.cart__product-count');
            cartItemCount.textContent = Number(cartItemCount.textContent) + Number(quantityCounts[i]);
        } else {
        // Добавить новый товар
        cart.insertAdjacentHTML('beforeEnd', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div></div>')
        
        let cartProduct = document.querySelector('.cart__product');
        cartProduct.dataset.id = `${i}`;

        let cartProductImage = document.querySelector('.cart__product-image');
        let productImage = productImages[i].getAttribute('src');
        cartProductImage.setAttribute('src', productImage);

        let cartProductCount = document.querySelector('.cart__product-count');
        cartProductCount.textContent = quantityCounts[i].textContent; 
        }
    });
}