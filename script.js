
var pendingTasks = document.getElementById("pendingTasks");
var completedTasks = document.getElementById("completedTasks");


function AddTask() {
    var Title = document.getElementById("title").value.trim();
    var Desc = document.getElementById("description").value.trim();

    const li = document.createElement("li");
    li.innerHTML = `<button class="button" onclick="completeTask(this)">✓</button>
                    <span>${Title}</span>
                    <span>${Desc}</span>
                    <button class="button" onclick="deleteTask(this)">✕</button>`;
    
    pendingTasks.appendChild(li);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function completeTask(button) {
    const li = button.parentElement;
    button.textContent = "↩";
    button.onclick = function () {
        undoTask(this);
    };
    
    completedTasks.appendChild(li);
}

function undoTask(button) {
    const li = button.parentElement;
    button.textContent = "✓";
    button.onclick = function () {
        completeTask(this);
    };

    pendingTasks.appendChild(li);
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('save').addEventListener('click', AddTask);
});