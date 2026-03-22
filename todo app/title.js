const input = document.getElementById("new");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function toggleTaskStatus(checkbox, taskTextElement) {
  if (checkbox.checked) {
    taskTextElement.style.textDecoration = "line-through";
    taskTextElement.style.color = "gray";
  } else {
    taskTextElement.style.textDecoration = "none";
    taskTextElement.style.color = "black";
  }
}

function createTask(taskName) {
  const item = document.createElement("div");
  item.classList.add("task");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark task complete");

  const task = document.createElement("p");
  task.textContent = taskName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Remove";

  editButton.addEventListener("click", () => {
    const text = prompt("Edit your task", task.textContent);
    if (text && text.trim()) {
      task.textContent = text.trim();
    }
  });

  deleteButton.addEventListener("click", () => {
    item.remove();
  });

  checkbox.addEventListener("change", () => {
    toggleTaskStatus(checkbox, task);
  });

  item.appendChild(checkbox);
  item.appendChild(task);
  item.appendChild(editButton);
  item.appendChild(deleteButton);
  taskList.appendChild(item);
}

function addTask() {
  const taskName = input.value.trim();
  if (!taskName) {
    input.focus();
    return;
  }

  createTask(taskName);
  input.value = "";
  input.focus();
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
