const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=todoForm.querySelector("input");


let toDos=[];

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((todo)=> todo.id!==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li=document.createElement("li");
    li.id=newTodoObj.id;
    const span=document.createElement("span")
    span.innerText=newTodoObj.text;
    const button=document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem("todos");
if (savedToDos!==null) {
    const parsedToDos=JSON.parse(savedToDos)
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}