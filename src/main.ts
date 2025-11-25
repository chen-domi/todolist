// import './style.css'
// add tasks
// delete tasks
// view tasks

let addEl = document.getElementById("add-el") as HTMLButtonElement
let inputEl = document.getElementById("input-el") as HTMLInputElement
let taskEl = document.getElementById("task-el") as HTMLUListElement
let listEl = document.getElementById("list-el") as HTMLUListElement
let task = ""

let tasksList: string[] = []

function addTask(tasksList: string[], task: string): void {
    task = inputEl.value
    if (task === "") return
    tasksList.unshift(task)
    console.log(tasksList)
}

addEl.addEventListener("click", function() {
    addTask(tasksList, task)
    renderTasks(tasksList)
    inputEl.value = ""
})

function renderTasks(tasksList: string[]): void {
    listEl.textContent = ""
    for (let i = 0; i < tasksList.length; i++) {
        listEl.innerHTML += `
        <li class="flex justify-between items-center bg-gray-200 p-2 my-2 rounded">
            <input type="checkbox"/>
            <span>${tasksList[i]}</span>
            <button id="delete-btn" class="bg-red-500 text-white px-2 py-1 rounded" data-index="${i}">Delete</button>
        </li>
        `
    }
    let deleteButtons = document.querySelectorAll("#delete-btn") as NodeListOf<HTMLButtonElement>
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            let index = parseInt(this.getAttribute("data-index") || "0")
            deleteTask(tasksList, index)
            renderTasks(tasksList)
        })
    })
}

function deleteTask(tasksList: string[], index: number): void {
    tasksList.splice(index, 1)
}  