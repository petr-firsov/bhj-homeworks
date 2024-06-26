const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fileForm = new FormData(form);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    request.upload.onprogress = (event) => {
        progress.value = String(event.loaded / event.total);
    };
    request.send(fileForm);
});