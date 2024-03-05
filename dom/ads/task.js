let rotators = document.querySelectorAll('.rotator__case');

let timerId = setInterval(function() {
    for (let i = 0; i < rotators.length; i++) {
        if (i === rotators.length - 1) {
            rotators[i].classList.remove('rotator__case_active');
            rotators[0].classList.add('rotator__case_active');
            i = 0;
        }
        rotators[i].classList.remove('rotator__case_active');
        rotators[i + 1].classList.add('rotator__case_active');
    }
}, 1000);

/*
Итак, как программа работает?
Классы не удаляются, а только добавляются через один.
