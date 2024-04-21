const request = new XMLHttpRequest();
const progress = document.getElementById('progress');

request.upload.onprogress = function (event) {
    progress.value = `${event.loaded}` / `${event.total}`;
}

request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
request.send();