// Переменные
const products = document.querySelectorAll('.product');
const productImages = document.querySelectorAll('.product__image');

const decreaseBtns = document.querySelectorAll('.product__quantity-control_dec'); 
const increaseBtns = document.querySelectorAll('.product__quantity-control_inc'); 
const quantityCounts = document.querySelectorAll('.product__quantity-value');
const addBtns = document.querySelectorAll('.product__add');

const cart = document.querySelector('.cart__products');
const itemsInCart = document.getElementsByClassName('cart__product');

const header = document.querySelector('header');
const cartBlock = document.querySelector('.cart');


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
for (let i = 0; i < products.length; i++) {
    addBtns[i].addEventListener('click', () => {
        // Если товар добавлен, увеличить
        let cartArray = Array.from(itemsInCart);
        let cartItem = cartArray.find(item  => item.dataset.id === products[i].dataset.id);
        if (cartItem) {
            let cartItemCount = cartItem.querySelector('.cart__product-count');
            cartItemCount.textContent = Number(cartItemCount.textContent) + Number(quantityCounts[i].textContent);
        } else {
        // Добавить новый товар
        header.classList.remove('invisible');
        cartBlock.classList.remove('invisible');

        cart.insertAdjacentHTML('afterbegin', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div><div class="removeBtn">&times;</div></div>')
        
        let newItem = cart.firstChild;
        newItem.dataset.id = products[i].dataset.id;

        let newImage = newItem.querySelector('.cart__product-image');
        let productImage = productImages[i].getAttribute('src');
        newImage.setAttribute('src', productImage);

        let cartProductCount = newItem.querySelector('.cart__product-count');
        cartProductCount.textContent = Number(quantityCounts[i].textContent); 
        }
    });
}

// Удаление товара

cart.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeBtn')) {
        event.target.parentElement.remove();
    }
})
