
var todoList = document.querySelector('ul#todos');
var doneList = document.querySelector('ul#completed-todos');

function submitTodoForm (e) {
    e.preventDefault();

    var input = document.querySelector('#todo-input');
    var text = input.value;

    if (!text) return;

    input.value = "";

    addTodo(text);
}

document.querySelector('#add-todo-form')
    .addEventListener('submit', submitTodoForm);
