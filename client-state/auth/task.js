const signin = document.getElementById('signin');
const button = document.getElementById('signin__btn');

signin.classList.add('signin_active');

signin.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData =  new FormData(signin);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.send(formData);
});