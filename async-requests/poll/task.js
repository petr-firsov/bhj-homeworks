const request = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();

request.addEventListener('load', () => {
    if (request.readyState === request.DONE) {
        let json = request.response;
        let pollTemplate = JSON.parse(json);
        console.log(pollTemplate);

        pollTitle.innerText = pollTemplate.data.title;
        let templateAnswers = pollTemplate.data.answers;

        for (let i = 0; i < templateAnswers.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeend', '<button class="poll__answer"></button>');
            let lastButton = pollAnswers.lastChild;
            lastButton.innerText = templateAnswers[i];
        }

        const buttons = document.getElementsByClassName('poll__answer');
        let buttonsArray = Array.from(buttons);
        buttonsArray.forEach(button => {
            button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
            })
        })

    } else if (request.readyState === request.DONE(4)) {
        alert('Ошибка загрузки!');
    }
});

