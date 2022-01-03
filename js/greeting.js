
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input")
const greeting=document.querySelector("#greeting");

function loginSubmitBtn(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username=loginInput.value;
    localStorage.setItem("username",username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}` ;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",loginSubmitBtn);

const savedUsername=localStorage.getItem("username");
if (savedUsername===null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmitBtn);    
} else {
    loginForm.classList.add("hidden");
    paintGreetings(savedUsername);
}