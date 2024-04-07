const progress = document.getElementById('progress');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();