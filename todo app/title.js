let input = document.getElementById("new");
let addbtn = document.querySelector(".contain button");
let row = document.querySelector(".row");

addbtn.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("Enter the task");
        return;
    }

    // create task container
    let item = document.createElement("div");
    item.classList.add("task");

    // checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // task text
    let task = document.createElement("p");
    task.innerText = input.value;

    // remove button
    let del = document.createElement("button");
    del.innerText = "Remove";

    // edit button
    let edit = document.createElement("button");
    edit.innerText = "Edit";

    // append to row
    item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(del);
    item.appendChild(edit);
    row.appendChild(item);

    input.value = "";

    // delete functionality
    del.addEventListener("click", function() {
        row.removeChild(item);
    });

    // edit functionality
    edit.addEventListener("click", function() {
        let text = prompt("Edit your task", task.innerText);
        if (text != null && text.trim() !== "") {
            task.innerText = text;
        }
    });

    // checkbox functionality
    checkbox.addEventListener("change", function() {
        toggleTaskStatus(checkbox, task);
    });
});

function toggleTaskStatus(checkbox, taskTextElement) {
    if (checkbox.checked) {
        taskTextElement.style.textDecoration = "line-through";
        taskTextElement.style.color = "gray";
    } else {
        taskTextElement.style.textDecoration = "none";
        taskTextElement.style.color = "black";
    }
}
