let deadMoles = document.getElementById('dead');
let misses = document.getElementById('lost');

clickCount = () => {
    let hole = index => document.getElementById(`hole${index}`);

    if (Number(deadMoles.textContent) === 10) {
        alert('Победа!')
    }

    if (Number(misses.textContent) === 5) {
        alert('Вы проиграли!')
    }

    if (hole.onclick && hole.className.contains('hole_has-mole')) {
        deadMoles.textContent += 1;
    } else {
        misses.textContent += 1;
    }
}
