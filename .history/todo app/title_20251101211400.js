
let input = document.getElementById("new");
let addbtn = document.querySelector(".contain button");
let row = document.querySelector(".row");

addbtn.addEventListener("click", function {
    if(input.value.trim() === "")
    alert("enter the tassk");
return;
 let item = document.createElement("p");
 item.innertext = input.value;
 row.appendChild(item);
 input.value ="";
})
//checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";


//task add
let task = document.createElement("p");
task.innertext = input.value;

//delete

let del = document.createElement("button");
del.innertext = "remove";

//edit

let edit = document.createElement("button");
edit.innerText ="edit";



item.appendChild(checkbox);
    item.appendChild(task);
    item.appendChild(del);
    item.appendChild(edit);
    row.appendChild(item);

    input.value = "";

    del.addEventListener("click", function(){
        row.removeChild(item);
    });

    edit.addEventListener("click", function() {
        let text = prompt("edit your task", task.innertext);
        if(text != null && text.trim() !== ""){
            task.innertext = text;

        }



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

