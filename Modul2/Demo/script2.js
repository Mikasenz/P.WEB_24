// script.js

document.getElementById('add-task-btn').addEventListener('click', addTask);
let taskList = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Task cannot be empty');
        return;
    }

    // Buat objek task dan tambahkan ke taskList
    const task = {
        id: Date.now(),
        text: taskText,
    };
    
    taskList.push(task);
    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = ''; // Kosongkan daftar tugas sebelumnya
    
    taskList.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskText = document.createElement('p');
        taskText.textContent = task.text;
        
        // Tambahkan event listener untuk double-click (edit)
        taskText.addEventListener('dblclick', () => editTask(task.id, taskText));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        
        taskListElement.appendChild(taskItem);
    });
}

function deleteTask(taskId) {
    // Hapus task berdasarkan id
    taskList = taskList.filter((task) => task.id !== taskId);
    renderTasks(); // Render ulang daftar tugas
}

function editTask(taskId, taskTextElement) {
    const task = taskList.find((task) => task.id === taskId);
    const newTaskText = prompt('Edit your task:', task.text);
    
    if (newTaskText === null || newTaskText.trim() === '') {
        alert('Task cannot be empty');
        return;
    }
    
    // Update teks task dan render ulang
    task.text = newTaskText;
    renderTasks();
}
