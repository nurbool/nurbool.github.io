const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todoWrap = document.querySelector("#todo_wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value.trim();
    if (username != "") {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, username);
        todoWrap.classList.remove(HIDDEN_CLASSNAME);
        printGreetings(username);
    }
}
function onLogout() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    todoWrap.classList.add(HIDDEN_CLASSNAME);
}

function printGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    todoWrap.classList.add(HIDDEN_CLASSNAME);
} else {
    printGreetings(saveUsername);
    todoWrap.classList.remove(HIDDEN_CLASSNAME);
}

greeting.addEventListener("mouseenter", () => {
    const editButton = document.createElement("img");
    editButton.src = "/img/pen-to-square-solid.svg";
    editButton.id = "btn-edit-greeting";
    editButton.addEventListener("click", onLogout);
    greeting.appendChild(editButton);
});
greeting.addEventListener("mouseleave", () => {
    const editButton = greeting.querySelector("img");
    greeting.removeChild(editButton);
});
