const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-task");
const errorDiv = document.getElementById("error-div");

addTask.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value;

    if (taskText) {
        errorDiv.innerHTML = "";
        taskInput.value = "";

        // Create Div
        const singleTaskDiv = document.createElement("div");
        singleTaskDiv.classList.add("single-task");


        // Creat input
        const singleTaskTaxt = document.createElement("input");
        singleTaskTaxt.type = "Text";
        singleTaskTaxt.value = taskText;
        singleTaskTaxt.setAttribute("readonly", "readonly");

        // Edit button
        const editTask = document.createElement("button");
        editTask.classList.add("edit-task");
        editTask.innerText = "Edit";

        const completeTask = document.createElement("button");
        completeTask.classList.add("complete-task");
        completeTask.innerText = "Complete";

        const deleteTask = document.createElement("button");
        deleteTask.classList.add("delete-task");
        deleteTask.innerText = "Delete";

        // Create Component
        singleTaskDiv.appendChild(singleTaskTaxt);
        singleTaskDiv.appendChild(editTask);
        singleTaskDiv.appendChild(completeTask);
        singleTaskDiv.appendChild(deleteTask);


        // Add ta task
        taskDiv.appendChild(singleTaskDiv);

        // Edit Task Function
        editTask.addEventListener("click", function (e) {
            if (editTask.innerText == "Edit") {
                editTask.innerText = "Save";
                singleTaskTaxt.removeAttribute("readonly");
                singleTaskTaxt.focus();
            } else {
                editTask.innerText = "Edit";
                singleTaskTaxt.setAttribute("readonly", "readonly");
            }
        })

        // Complete Task Function
        completeTask.addEventListener("click", function (e) {
            if (completeTask.innerText == "Complete") {
                completeTask.innerText = "Completed";
                singleTaskDiv.classList.add("task-completed")
            }
        })

        // Delete Function
        deleteTask.addEventListener("click", function (e) {
            taskDiv.removeChild(singleTaskDiv);
        })
    } else {
        errorDiv.innerHTML = "<p>Please write task name!</p>"
    }

})