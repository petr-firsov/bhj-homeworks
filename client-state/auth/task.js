const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function signoutBtn() {
    const signoutBtn = document.getElementById('signout__btn');
    signoutBtn.addEventListener('click', () => {
        localStorage.removeItem('id');
        welcome.classList.remove('welcome_active');
        location.reload();
    });
}

window.onload = function() {
    if (localStorage.hasOwnProperty('id')) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.id;
        welcome.insertAdjacentHTML('afterend', '<button class="btn" id="signout__btn">Выйти</button>');
        signoutBtn();
    }
}

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData =  new FormData(signinForm);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.responseType = 'json';
    request.send(formData);

    request.onload = function() { 
        let result = request.response;
        if (result.success === true) {
            localStorage.id = result.user_id;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = result.user_id;
            welcome.insertAdjacentHTML('afterend', '<button class="btn" id="signout__btn">Выйти</button>');
            signoutBtn();
        } else {
            alert('Неверный логин/пароль');
        }
        signinForm.reset();
    };
});