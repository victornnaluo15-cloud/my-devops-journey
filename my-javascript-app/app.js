function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const list = document.getElementById("taskList");

    const task = document.createElement("li");

    task.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    list.appendChild(task);

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}