const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value) {
        tasksList.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
        let taskTitle = document.querySelector('.task__title');
        taskTitle.innerText = taskInput.value;
    
        taskForm.reset();
    }
});

let tasks = document.getElementsByClassName('.task');
let taskRemoves = document.getElementsByClassName('.task__remove');

for (let i = 0; i < tasks.length; i++) {
    taskRemoves[i].addEventListener('click', () => {
        tasks[i].remove();
    });
}
