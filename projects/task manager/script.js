let themeToggleBtn = document.querySelector("#theme-toggle");

let totalTask = document.querySelector("#total-tasks");
let pendingTask = document.querySelector("#pending-tasks");
let completedTask = document.querySelector("#completed-tasks");

let addTaskInp = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-task-button");

let priorityOptions = document.querySelector("#priority-select");
let completeToggleBtn = document.querySelector("#complete-toggle");

let taskListContainer = document.querySelector(".task-list-container");

let progressPercent = document.querySelector("#progress-percent");
let progressFill = document.querySelector(".progress-fill");

document.body.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.id === "theme-toggle") {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeToggleBtn.textContent = "Dark";
    } else {
      themeToggleBtn.textContent = "Light";
    }
  }
});

addTaskBtn.addEventListener("click", () => {
  let taskInpVal = addTaskInp.value;
  let priorityClass = "";

  let highPriority = priorityOptions.value === "high";
  let mediumPriority = priorityOptions.value === "medium";
  let lowPriority = priorityOptions.value === "low";

  if (highPriority) {
    priorityClass = "high";
  } else if (mediumPriority) {
    priorityClass = "medium";
  } else {
    priorityClass = "low";
  }

  if (taskInpVal.trim() === "") {
    alert("Enter something to add task!!!");
    return;
  }

  taskListContainer.innerHTML += `
   <div class="task-list ${priorityClass}">
        <button class="complete-toggle"></button>
        <h3>${taskInpVal}</h3>
        <div class="task-actions">
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
    </div>`;

  addTaskInp.value = "";

  totalTask.textContent++;
  confusingUI();
});

taskListContainer.addEventListener("click", (e) => {
  //event delegation
  // console.log(e.target.className);

  let clickedTask = e.target.closest(".task-list");
  if (!clickedTask) return;

  if (e.target.className === "complete-toggle") {
    if (clickedTask.classList.toggle("completed-task")) {
      completedTask.textContent++;
    } else {
      completedTask.textContent--;
    }

    confusingUI();
  }

  if (e.target.className === "delete-button") {
    let isCompleted = clickedTask.classList.contains("completed-task");

    if (isCompleted) {
      completedTask.textContent--;
    }

    totalTask.textContent--;

    e.target.closest(".task-list").remove(); //e.target.parentElement.parentElement.remove();
    confusingUI();
  }

  if (e.target.className === "edit-button") {
    let taskText = clickedTask.querySelector("h3");
    let updatedTask = prompt("Enter updated task");

    if (updatedTask && updatedTask.trim() !== "") {
      taskText.textContent = updatedTask;
    }
  }
});

function confusingUI() {
  let total = Number(totalTask.textContent);
  let completed = Number(completedTask.textContent);

  pendingTask.textContent = total - completed;

  let progress = total === 0 ? 0 : (completed / total) * 100;

  progressFill.style.width = progress + "%";
  progressPercent.textContent = Math.floor(progress) + "%";
}
