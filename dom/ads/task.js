const rotators = document.querySelectorAll('.rotator__case');
let delay = 1000;
let i = 0;

let timerId = setTimeout(function request() {
    if (i === rotators.length - 1) {
        rotators[i].classList.remove('rotator__case_active');
        rotators[0].classList.add('rotator__case_active');
        i = 0;
        delay = rotators[i].dataset.speed;
        timerId = setTimeout(request, delay);
        return
    }
    let color = rotators[i].dataset.color;
    rotators[i].style.color = color;
    rotators[i].classList.remove('rotator__case_active');
    rotators[i + 1].classList.add('rotator__case_active');
    i++;

    delay = rotators[i].dataset.speed;

    timerId = setTimeout(request, delay)

}, delay);