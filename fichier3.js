document.addEventListener('DOMContentLoaded', function () {
    const tasksList = document.getElementById('tasks');
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            const taskText = newTaskInput.value.trim();

            if (taskText !== '') {
                addTask(taskText);
                newTaskInput.value = '';
            }
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            tasksList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);

        tasksList.appendChild(taskItem);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = 'line-through';
            } else {
                taskLabel.style.textDecoration = 'none';
            }
        });
    }
});
