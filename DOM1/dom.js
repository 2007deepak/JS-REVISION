const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");

const todoItemContainer = document.getElementById("todo-item");

addBtn.addEventListener('click' ,()=> {
    
    const value = todoInput.value;

    const li =document.createElement('li');

    li.innerText = value;
    console.log(li);

    const deltbtn = document.createElement("button");
    deltbtn.innerText = 'X';
    li.appendChild(deltbtn);
    deltbtn.addEventListener('click', () => {

        li.remove();
    });
    
    
    todoItemContainer.appendChild(li);
    todoInput.value ='';

});