document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector('.btn');
    const inputBox = document.getElementById('input-box');
    const listContainer = document.querySelector('.list-container');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('div');
            listItem.classList.add('list-item');

            const taskParagraph = document.createElement('p');
            taskParagraph.classList.add('item');
            taskParagraph.textContent = taskText;

            const editButton = document.createElement('button');
            editButton.classList.add('edit-btn');
            editButton.textContent = 'edit';
            editButton.addEventListener('click', editTask);

            const clearButton = document.createElement('button');
            clearButton.classList.add('clear-btn');
            clearButton.textContent = 'clear';
            clearButton.addEventListener('click', clearTask);

            listItem.appendChild(taskParagraph);
            listItem.appendChild(editButton);
            listItem.appendChild(clearButton);

            listContainer.appendChild(listItem);

            inputBox.value = "";
        }
    }

    function editTask(event) {
        const listItem = event.target.parentNode;
        const taskParagraph = listItem.querySelector('.item');
        const newTaskText = prompt('Edit task:', taskParagraph.textContent);

        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskParagraph.textContent = newTaskText;
        }
    }

    function clearTask(event) {
        const listItem = event.target.parentNode;
        listContainer.removeChild(listItem);
    }
});
