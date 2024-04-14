const request = new XMLHttpRequest();
const progress = document.getElementById('progress');

request.onprogress = function (event) {
    if (request.response === request.DONE) {
        progress.value = event.loaded / total;
    } else if (request.response === request.DONE(4)) {
        alert('Ошибка!')
    }
};

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
request.send();