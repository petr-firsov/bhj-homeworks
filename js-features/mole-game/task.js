let deadMoles = document.getElementById('dead');
let misses = document.getElementById('lost');

clickCount = () => {
    if (Number(deadMoles.textContent) === 10) {
        alert('Победа!')
    }

    if (Number(misses.textContent) === 5) {
        alert('Вы проиграли!')
    }

    let holeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < holeNumber.length; i++) {
        if (document.getElementById(`hole${i}`).onclick) {
            let element = document.getElementById(`hole${i}`);
            if (element.className.contains('hole_has-mole')) {
                deadMoles.textContent += 1;
            } else {
                misses.textContent += 1;
            }
        }
    }
    // Проверять лунки с номерами из массива на нажатие.
    // При нажатии обратиться к элементу по id 'лунка[номер нажатой лунки]'
}