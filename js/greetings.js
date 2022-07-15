const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value.trim();
    if (username != "") {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, username);
        printGreetings(username);
    }
}

function printGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    printGreetings(saveUsername);
}

greeting.addEventListener("mouseenter", () => {
    const editButton = document.createElement("img");
    editButton.src = "/img/pen-to-square-solid.svg"
    editButton.id = "btn-edit-greeting"
    greeting.appendChild(editButton);
});
greeting.addEventListener("mouseleave", () => {
    const editButton = greeting.querySelector("img");
    greeting.removeChild(editButton);
});
