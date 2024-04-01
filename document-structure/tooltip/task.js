const tooltips = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', (click) => {
        click.preventDefault();
        let activeTooltip = document.querySelector('.tooltip');
        if (activeTooltip === null) {
            // Показать подсказку
            tooltips[i].insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
            let tooltip = document.querySelector('.tooltip');

            // Добавить в подсказку текст
            let tooltipTitle = tooltips[i].getAttribute('title');
            tooltip.insertAdjacentText('afterbegin', tooltipTitle);
            tooltip.classList.add('tooltip_active');

            // Разместить подсказку на странице
            let tooltipPlace = tooltips[i].getBoundingClientRect();
            tooltip.style.left = `${tooltipPlace.left} px`;
            tooltip.style.top = `${tooltipPlace.bottom} px`;
        } else {
            if (activeTooltip.textContent === tooltips[i].title) {
                // Убрать подсказку
                activeTooltip.remove();
            } else {
                // Сменить текст 
                let tooltipTitle = tooltips[i].getAttribute('title');
                activeTooltip.innerText = tooltipTitle;
                activeTooltip.classList.add('tooltip_active');
    
                // Разместить подсказку на странице
                let tooltipPlace = tooltips[i].getBoundingClientRect();
                activeTooltip.style.left = `${tooltipPlace.left} px`;
                activeTooltip.style.top = `${tooltipPlace.bottom} px`;
            }
        }
    })
}