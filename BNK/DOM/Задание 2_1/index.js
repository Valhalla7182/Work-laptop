const tasks = [{}];

const taskList = document.querySelector(".tasks-list");
const taskItems = document.querySelectorAll(".tasks-item");
const taskText = document.querySelector(".create-task-block__input default-text-input");
const form = document.querySelector("form");

// function addNewTask() {
//     tasks.forEach((keys, index) => {
//         keys.id = Date.now();
//         keys.text = taskText;
//         keys.completed = false;
//         const newTask = document.createElement("div");
//         newTask.className = "task-item";
//         newTask.dataset.taskId = keys.id;
//         newTask.innerHTML = `
//           <div class="task-item__main-container">
//             <div class="task-item__main-content">
//               <form class="checkbox-form">
//                 <input class="checkbox-form__checkbox" type="checkbox" id="task-${keys.id}">
//                 <label for="task-${keys.id}"></label>
//               </form>
//               <span class="task-item__text">${keys.text}</span>
//             </div>
//             <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
//               Удалить
//             </button>
//           </div>  
//         `;
//     taskList.append(newTask);
//     })  
// }   

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { target } = event;
    tasks.forEach((keys, index) => {
        const taskNameInput = target.taskName;
        const inputValue = taskNameInput.value;
        keys.id = Date.now();
        keys.completed = false;
        keys.text = inputValue;

        const newTask = document.createElement("div");
        newTask.className = "task-item";
        newTask.dataset.taskId = keys.id;
        newTask.innerHTML = `
          <div class="task-item__main-container">
            <div class="task-item__main-content">
              <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${keys.id}">
                <label for="task-${keys.id}"></label>
              </form>
              <span class="task-item__text">${keys.text}</span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
              Удалить
            </button>
          </div>  
        `;
    taskList.append(newTask);
    tasks.push();
    console.log(tasks);
    })
});
