// SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FNC
function addTodo(event){
    event.preventDefault();
   // TODO DIV
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   //Créer le Li
   const newTodo = document.createElement("li");
   newTodo.innerText =todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   //Boutton CHACK
   const completedButton = document.createElement("button");
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //Boutton CSupp
   const trashbutton = document.createElement("button");
   trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
   trashbutton.classList.add("trash-btn");
   todoDiv.appendChild(trashbutton);

   //AJouter todo 
   todoList.appendChild(todoDiv);
   todoInput.value ="";
}

function deleteCheck(e){
   const item = e.target;

   if (item.classList[0] === "trash-btn"){
    item.parentElement.remove()
   }
   if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
   }
}