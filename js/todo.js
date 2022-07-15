const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];

function setToDoList(todoObject) {
    const todoLi = document.createElement("li");
    todoLi.id = todoObject.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todoObject.text;
    const todoButton = document.createElement("button");
    todoButton.innerHTML = "X";
    todoButton.addEventListener("click", deleteToDo);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoButton);
    todoList.appendChild(todoLi);
}

function saveToDos(savedToDos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(savedToDos))
}

function deleteToDo(event) {
    const todoId = event.target.parentElement.id;
    savedToDos = savedToDos.filter((element) => {
        return element.id !== parseInt(todoId)
    });
    saveToDos(savedToDos);
    event.target.parentElement.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = todoInput.value.trim();

    if (newToDo != "") {
        const todoObject = {
            "id": new Date().getTime(),
            "text": newToDo
        }
        setToDoList(todoObject);

        savedToDos.push(todoObject);
        saveToDos(savedToDos);
    }

    todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit);


savedToDos.forEach((todoObject) => {
    setToDoList(todoObject);
});
