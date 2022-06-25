const inputTask = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskLists");

let taskLists = [];


// get items from localStorage with key 'tasks'
let localStorageList = JSON.parse(localStorage.getItem("tasks"));


// if localStorageList is not empty, forEach loop will create tasks from localStorageList
localStorageList?.forEach((task) => {
  createTask(task.text);
});

//* Add task
addBtn.addEventListener("click", () => {
  createTask(inputTask.value);
});

function createTask(textValue) {
  if (textValue === '') {
    return
  }
  let task = document.createElement("li");
  task.className = "mb-1";
  let text = document.createElement("span");
  text.innerText = textValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.className = "bg-red-50 text-red-500 p-1 text-sm rounded-md ml-2";

  inputTask.value = "";

  deleteBtn.addEventListener("click", (event) => {
    
    taskLists = taskLists.filter((task) => {
      console.log(task.text)
      return (task.text !== event.target.parentElement.getElementsByTagName("span")[0].innerText);
    });
    event.target.parentElement.remove();
    localStorage.setItem("tasks", JSON.stringify(taskLists));
  });

  task.appendChild(text);
  task.appendChild(deleteBtn);

  list.appendChild(task);

  // adding new item in array
  taskLists.push({ text: textValue });

  // set item for localStorage from taskLists array
  localStorage.setItem("tasks", JSON.stringify(taskLists));
}
