const body = document.body;
const reveals = document.querySelectorAll('.reveal');

function revealAd() {
    for (let i = 0; i < reveals.length; i++) {
        let revealPosition = reveals[i].getBoundingClientRect();
        if (revealPosition.top <= window.innerHeight && revealPosition.bottom > 0) {
            reveals[i].classList.add('reveal_active');
        } else {
            reveals[i].classList.remove('reveal_active');
        }
    }
}

body.addEventListener('scroll', revealAd());
