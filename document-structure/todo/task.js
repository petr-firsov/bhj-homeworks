// Переменные формы
const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim()) {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
        let taskTitle = document.querySelector('.task__title');
        taskTitle.innerText = taskInput.value;
        taskForm.reset();
    }
});

// Переменные созданных заданий
const tasks = document.getElementsByClassName('task');
const taskRemoves = document.getElementsByClassName('task__remove');

tasksList.addEventListener ('click', (click) => {
    click.preventDefault();
    for (let i = 0; i < taskRemoves.length; i++) {
        if (click.currentTarger === taskRemoves[i]) {
            tasks[i].remove();
        }
    }
})
   