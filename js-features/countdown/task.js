let time = document.getElementById('timer').textContent;
let seconds = Number(time);

let timerId = setInterval(time => {
    if (seconds !== 0) { 
        time = seconds - 1; 
    }
    },
    1000);

