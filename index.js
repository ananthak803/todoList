const removeBtn = document.querySelector(".removeBtn");
const doneBtn = document.querySelector(".doneBtn");
function addTodo() 
{
    const newTodo = document.getElementById("input");
    const todo=newTodo.value;
    if(todo==="")
        exit();
    const li = document.createElement("li");
    const span =document.createElement("span");
    const done =document.createElement("button");
    const remove =document.createElement("button");

    done.textContent = "done";
    remove.textContent = "remove";
    li.setAttribute("class", "li");
    span.setAttribute("class", "liSpan");
    done.classList.add("todoBtn","doneBtn");
    remove.classList.add("todoBtn","removeBtn");

    li.appendChild(span);
    li.appendChild(done);
    li.appendChild(remove);
    const ul =document.querySelector("ul");
    span.textContent = todo;
    ul.prepend(li);
    done.addEventListener("click",doneTodo);
    remove.addEventListener("click",removeTodo);
    newTodo.value="";
}

function removeTodo()
{
        const li =this.closest("li");
        li.remove();
}

function doneTodo()
{
    const li =this.closest("li");
    const done=li.querySelector(".doneBtn");
    const span = li.querySelector("span");
    span.style.textDecoration="line-through";
    span.style.color="red";
    done.remove();
}

const addBtn = document.getElementById("addBtn");
addBtn.onclick=addTodo;

doneBtn.addEventListener("click",doneTodo);
removeBtn.addEventListener("click",removeTodo);



