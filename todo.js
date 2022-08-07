const todoItemTemplate = document.querySelector('[data-todo-item-template]');
const todoList = document.querySelector('[data-container-task]');
const btnAdd = document.querySelector('[data-btn-add]');
const btnDelete = document.querySelector('[data-btn-delete]');
const input = document.querySelector('[data-input-add]');

let toDo = [
    {id:1, text: 'Create to-do app',},
    {id:2, text: 'Do housework'},
    {id:3, text: 'Learn JS'},
]
btnAdd.addEventListener('click', ()=> {
    const text = input.value.trim();
    if (text) {
        const newToDO = {
            id: toDo.length + 1,
            text
        } 
        toDo.push(newToDO);
        input.value = '';
    }
    input.focus();
    render();

})
const todoDate = (
    year = new Date().getFullYear(),
    month = new Date().getMonth()+1,
    day = new Date().getDate(), 
    time = new Date().getHours(),
    min = new Date().getMinutes(),
) => {
    const date = new Date (year,month,day,time,min);
return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}


function CreateTodoItem(id,text) {
    const todoItem = document.importNode(todoItemTemplate.content, true);
    const todoText = todoItem.querySelector('[data-task-name]');
    todoText.textContent = text;
    const date = todoDate();
    const todoItemDate = todoItem.querySelector('[data-todo-item-date]');
    todoItemDate.textContent = date;
    const btnDeleteItem = todoItem.querySelector('[data-btn-delete-task]');
    btnDeleteItem.addEventListener ('click',() => {
        toDo = toDo.filter(el => el.id !== id);
        render ();
});
    return todoItem;
}
function clearTodoList() {
    todoList.innerHTML = '';
}
function appendTodo() {
    if (toDo.length) {
        toDo.forEach(el => {
            const newTask = CreateTodoItem(el.id,el.text,el.date);
            todoList.append(newTask);
        })
    }
}
function render() {
    clearTodoList();
    appendTodo();
}

render();