let themeToggleBtn = document.querySelector("#theme-toggle");

let totalTask = document.querySelector("#total-tasks");
let pendingTask = document.querySelector("#pending-tasks");
let completedTask = document.querySelector("#completed-tasks");

let addTaskInp = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-task-button");

let priorityOptions = document.querySelector("#priority-select");

let completeToggleBtn = document.querySelector("#complete-toggle");

let editBtn = document.querySelector(".edit-button");
let deleteBtn = document.querySelector(".delete-button");

let taskListContainer = document.querySelector(".task-list-container");
let taskList = document.querySelector(".task-list");

addTaskBtn.addEventListener("click", () => {
  let taskInpVal = addTaskInp.value;

  if (taskInpVal.trim() === "") {
    alert("Enter something to add task!!!");
    return;
  }

  taskListContainer.innerHTML += `
   <div class="task-list">
        <button class="complete-toggle"></button>
        <h3>${taskInpVal}</h3>
        <div class="task-actions">
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
    </div>`;

  addTaskInp.value = "";

  totalTask.textContent++;
  pendingTask.textContent++;
});

taskListContainer.addEventListener("click", (e) => {
  //event delegation
  // console.log(e.target.className);

  if (e.target.className === "delete-button") {
    e.target.closest(".task-list").remove(); //e.target.parentElement.parentElement.remove();

    totalTask.textContent--;
    pendingTask.textContent--;
  }

  let clickedTask = e.target.closest(".task-list");

  if (e.target.className === "complete-toggle") {
    if (clickedTask.classList.toggle("completed-task")) {
      completedTask.textContent++;
      pendingTask.textContent--;
    } else {
      completedTask.textContent--;
      pendingTask.textContent++;
    }
  }

  if (e.target.className === "edit-button") {
    let taskText = clickedTask.querySelector("h3");
    let updatedTask = prompt("Enter updated task");
    if (updatedTask.trim() !== "") {
      taskText.textContent = updatedTask;
    }
  }
});

let priorityClass = "";

let highPriority = priorityOptions.value === "high";
let mediumPriority = priorityOptions.value === "medium";
let lowPriority = priorityOptions.value === "low";

if (highPriority) {
  priorityClass="high"
}else if (mediumPriority) {
  priorityClass="medium"
} else {
  priorityClass="low"
}