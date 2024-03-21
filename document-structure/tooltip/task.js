const tooltips = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', (click) => {
        click.preventDefault();
        let activeTooltip = document.querySelector('.tooltip');
        if (activeTooltip === null) {
            tooltips[i].insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
            let tooltip = document.querySelector('.tooltip');
            let tooltipTitle = tooltips[i].getAttribute('title');
            tooltip.insertAdjacentText('afterbegin', tooltipTitle);
            tooltip.classList.add('tooltip_active');
            tooltip.dataset.position = 'bottom';
        } else {
            activeTooltip.remove();
        }
    })
}