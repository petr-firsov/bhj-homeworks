let deadMoles = document.getElementById('dead');
let misses = document.getElementById('lost');

clickCount = () => {

    const getHole = index => document.getElementById(`hole${index}`);

    for (let index = 1; index <= 9; index++) {
        let hole = getHole(index);
        hole.onclick = function() {
            if (hole.className.includes('hole_has-mole')) {
                deadMoles.textContent = Number(deadMoles.textContent) + 1;
            } else {
                misses.textContent = Number(misses.textContent) + 1;
            }

            if (Number(deadMoles.textContent) === 10) {
                alert('Победа!')
                deadMoles.textContent = 0;
                misses.textContent = 0;
            }
            
            if (Number(misses.textContent) === 5) {
                alert('Вы проиграли!')
                deadMoles.textContent = 0;
                misses.textContent = 0;
            }
        }
    }
}

clickCount()
