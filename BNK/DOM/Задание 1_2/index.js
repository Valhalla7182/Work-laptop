const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
    {
        id: '1138465078064',
        completed: false,
        text: 'Задание выполнено',
    }
];




const taskLists = document.querySelector(".tasks-list");
const taskItem = document.querySelectorAll(".task-item");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll('input');

taskItem.forEach((keys, index) => {
    keys.dataset.taskId = tasks[index].id;
    if(keys.dataset.taskId === tasks[index].id) {
        keys.querySelector(".task-item__text").textContent = tasks[index].text;
    }
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].text === keys.querySelector(".task-item__text").textContent) {
            taskItem[index].remove();
        }
    }
})

labels.forEach((keys, index) => {
    keys.setAttribute("for", tasks[index].id);
})


inputs.forEach((keys, index) => {
    keys.setAttribute("id", tasks[index].id);
})



tasks.forEach((keys, index) => {
    if(tasks.length > taskItem.length) {
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
        taskLists.append(newTask);
    }

    
});
console.log(taskLists);
