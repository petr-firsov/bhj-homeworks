const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

signinForm.insertAdjacentHTML('afterend', '<button class="btn" id="signout__btn">Выйти</button>');
const signoutBtn = document.getElementById('signout__btn');

window.onload = function() {
    if (localStorage.hasOwnProperty('id')) {
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.id;
    }
}

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData =  new FormData(signinForm);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.send(formData);

    request.onload = function() { 
        let result = JSON.parse(request.response);
        if (result.success === true) {
            signinForm.reset();
            localStorage.id = result.user_id;
            welcome.classList.add('welcome_active');
            userId.innerText = result.user_id;
        } else {
            signinForm.reset();
            alert('Неверный логин/пароль');
        }
    };
});

signoutBtn.addEventListener('click', () => {
    localStorage.removeItem('id');
    welcome.classList.remove('welcome_active');
    location.reload();
})

