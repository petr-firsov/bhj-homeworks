const rotators = document.querySelectorAll('.rotator__case');
let i = 0;

let timerId = setInterval(function() {
    if (i === rotators.length - 1) {
        rotators[i].classList.remove('rotator__case_active');
        rotators[0].classList.add('rotator__case_active');
        i = 0;
        return;
    }
    let color = rotators[i].dataset.color;
    rotators[i].style.color = color;
    rotators[i].classList.remove('rotator__case_active');
    rotators[i + 1].classList.add('rotator__case_active');
    i++;
}, 1000);