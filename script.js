document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();
    const taskPriority = prioritySelect.value;

    if (taskText !== '') {
        addTask(taskText, taskPriority);
        taskInput.value = '';
        prioritySelect.value = 'low';
    }
});

function addTask(taskText, taskPriority) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = `(${taskPriority})`;
    prioritySpan.classList.add('priority');
    li.appendChild(prioritySpan);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-btn');
    li.appendChild(removeButton);

    taskList.appendChild(li);
}

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.parentElement.remove();
    }
});