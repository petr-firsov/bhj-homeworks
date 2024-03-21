const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

if (taskInput.hasAttribute('value')) {
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        tasksList.insertAdjacentHTML('beforeend', '<div class="task"></div>')
        
        let task = document.querySelector('.task');
        let taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        task.appendChild(taskTitle);
        
        let taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        task.appendChild(taskRemove);
        taskForm.reset();
});
}
