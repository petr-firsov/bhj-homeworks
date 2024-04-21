// Переменные формы
const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const tasks = document.getElementsByClassName('task');

// Добавление новых заданий
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim()) {
        taskList.insertAdjacentHTML('afterbegin', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
        taskForm.reset();
    }
});

// Удаление созданных заданий
taskList.addEventListener ('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    }
})
   