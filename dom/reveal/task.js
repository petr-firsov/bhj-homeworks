const reveals = document.querySelectorAll('.reveal');

for (let i = 0; i < reveals.length; i++) {
    reveals[i].addEventListener('scroll', function() {
        let revealPosition = reveals[i].getBoundingClientRect();
        if (revealPosition.top <= window.innerHeight && revealPosition.bottom > 0) {
            this.classList.add('reveal_active');
        } else {
            this.classList.remove('reveal_active');
        }
    });
}

/*
Почему в отладчике я ставлю точки останова в условной конструкции, а код начинается сверху
и до условной конструкции вообще не доходит?
*/