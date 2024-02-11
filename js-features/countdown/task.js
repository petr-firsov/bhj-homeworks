let time = document.getElementById('timer');

let timerId = setInterval(() => {
    if ((Number(time.textContent)) !== 0) { 
        time.textContent = Number(time.textContent) - 1; 
    } 
    else { 
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }
    },
    1000);