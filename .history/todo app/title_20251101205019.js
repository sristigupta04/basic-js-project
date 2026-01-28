// // ====== Selecting DOM elements ======
// const input = document.getElementById("new");
// const addButton = document.querySelector(".contain button");
// const row = document.querySelector(".row");

// // ====== Event Listener ======
// addButton.addEventListener("click", addTask);

// // ====== Function to Add a Task ======
// function addTask() {
//     const taskText = input.value.trim();

//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     // Create new task container
//     const taskDiv = document.createElement("div");
//     taskDiv.classList.add("task-item");

//     // Create task content
//     taskDiv.innerHTML = `
//         <input type="checkbox">
//         <p>${taskText}</p>
//         <button class="removeBtn">Remove</button>
//         <button class="editBtn">Edit</button>
//     `;

//     // Append to main row
//     row.appendChild(taskDiv);
//     input.value = "";

//     // Attach functionality
//     attachTaskFunctions(taskDiv);
// }

// // ====== Attach Remove, Edit, and Checkbox Features ======
// function attachTaskFunctions(taskDiv) {
//     const removeBtn = taskDiv.querySelector(".removeBtn");
//     const editBtn = taskDiv.querySelector(".editBtn");
//     const checkbox = taskDiv.querySelector("input[type='checkbox']");
//     const taskText = taskDiv.querySelector("p");

//     // Remove Task
//     removeBtn.addEventListener("click", () => removeTask(taskDiv));

//     // Edit Task
//     editBtn.addEventListener("click", () => editTask(taskText));

//     // Checkbox Functionality
//     checkbox.addEventListener("change", () => toggleTaskStatus(checkbox, taskText));
// }

// // ====== Remove Task ======
// function removeTask(taskDiv) {
//     taskDiv.remove();
// }

// // ====== Edit Task ======
// function editTask(taskTextElement) {
//     const currentText = taskTextElement.textContent;
//     const newText = prompt("Edit your task:", currentText);
//     if (newText !== null && newText.trim() !== "") {
//         taskTextElement.textContent = newText.trim();
//     }
// }

// // ====== Toggle Checkbox (mark done) ======
// function toggleTaskStatus(checkbox, taskTextElement) {
//     if (checkbox.checked) {
//         taskTextElement.style.textDecoration = "line-through";
//         taskTextElement.style.color = "gray";
//     } else {
//         taskTextElement.style.textDecoration = "none";
//         taskTextElement.style.color = "black";
//     }
// }
let input = document.getElementById("new");
let addbtn = document.querySelector(".contain button");
let row = document.querySelector(".row");

addbtn.addEventListener("click", function()  {
    if(input.value.trim() === "")
    alert("enter the tassk");
return;
}
    let item = document.createElement("li");
      item.innerText = input.value ;
    row.appendChild(item);
    input.value = "";


    item.createElement("button");
    item.button.innerText ="delete";
    item.appendChild(button);
    button.addEventListener("click",function() {
        row.removeChild(item);

    })
    item.createElement("button");
    item.button.innerText ="Edit";
    item.appendChild(button);
    button.addEventListener("click",function() {
    item.innerText = prompt("Edit your task", item.innerText);
    row.appendChild(item);
        
    })
})