const tasks = [];

const taskList = document.querySelector(".tasks-list");
const form = document.querySelector("form");

const deleteModalOverlay = document.querySelector(".modal-overlay")
const deleteButton = document.querySelector(".task-item__delete-button");
const deleteModalButtons = document.querySelector(".delete-modal__buttons");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskNameInput = event.target.taskName;
    const inputValue = taskNameInput.value.trim();

    const existingErrorMessage = document.querySelector(".error-message-block");
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message-block";
    
    if (inputValue === "") {
        errorMessage.textContent = "Название задачи не должно быть пустым";
        form.prepend(errorMessage);
        return;
    }

    const taskExists = tasks.some(task => task.text === inputValue);
    if (taskExists) {
        errorMessage.textContent = "Задача с таким названием уже существует.";
        form.prepend(errorMessage);
        return;
    }

    const newTaskObject = {
        id: Date.now(),
        completed: false,
        text: inputValue
    };

    const newTask = document.createElement("div");
    newTask.className = "task-item";
    newTask.dataset.taskId = newTaskObject.id;
    newTask.innerHTML = `
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="task-${newTaskObject.id}">
                    <label for="task-${newTaskObject.id}"></label>
                </form>
                <span class="task-item__text">${newTaskObject.text}</span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${newTaskObject.id}">
                Удалить
            </button>
        </div>
    `;  
    console.log(tasks);
    taskList.append(newTask);
    tasks.push(newTaskObject);
  });

taskList.addEventListener("click", (event) => {
    const { target } = event;
    const isDeleteButton = target.closest(".task-item__delete-button")
    
    if(isDeleteButton) {
        deleteModalOverlay.classList.remove("modal-overlay_hidden");
        
        deleteModalButtons.addEventListener("click", (event) => {
            const {target} = event;
            const isModalButton = target.closest(".delete-modal__button");
            
            if(isModalButton.className.includes("delete-modal__confirm-button")) {
                deleteModalOverlay.classList.add("modal-overlay_hidden");
                isDeleteButton.closest(".task-item").remove(); 
                for(let index = 0; index < tasks.length; index++) {    
                    if(target.dataset.taskId = tasks[index].id) {
                            tasks.splice(index, 1);
                            console.log(tasks);
                        }
                    }
            }else {
                deleteModalOverlay.classList.add("modal-overlay_hidden");
            }
        });
    }
})





