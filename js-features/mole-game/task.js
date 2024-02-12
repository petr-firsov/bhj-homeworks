let deadMoles = document.getElementById('dead');
let misses = document.getElementById('lost');

clickCount = () => {
    if (Number(deadMoles.textContent) === 10) {
        alert('Победа!')
    }

    if (Number(misses.textContent) === 5) {
        alert('Вы проиграли!')
    }

    const getHole = index => document.getElementById(`hole${index}`);

    for (let index = 1; index <= 9; index++) {
        let hole = getHole(index);
        hole.onclick = function() {
            if (hole.className.includes('hole_has-mole')) {
                    deadMoles.textContent += 1;
                } else {
                    misses.textContent += 1;
                }
        }
    }
}
