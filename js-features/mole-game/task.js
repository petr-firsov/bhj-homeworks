let deadMoles = document.getElementById('dead');
let misses = document.getElementById('lost');

clickCount = () => {
    let hole1 = document.getElementById('hole1');
    let hole2 = document.getElementById('hole2');
    let hole3 = document.getElementById('hole3');
    let hole4 = document.getElementById('hole4');
    let hole5 = document.getElementById('hole5');
    let hole6 = document.getElementById('hole6');
    let hole7 = document.getElementById('hole7');
    let hole8 = document.getElementById('hole8');
    let hole9 = document.getElementById('hole9');

    let holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

    if (Number(deadMoles.textContent) === 10) {
        alert('Победа!')
    }

    if (Number(misses.textContent) === 5) {
        alert('Вы проиграли!')
    }

    if (holes[i].onclick && holes[i].className.contains('hole_has-mole')) {
        deadMoles.textContent += 1;
    } else {
        misses.textContent += 1;
    }
}
