/**
 * Create Todo and add to list of undone todos
 * @param {string} text todo description
 */
function addTodo (text) {

    var todo = document.createElement('li');

    // create edit button
    var editBtn = createBtn(editIcon);
    editBtn.addEventListener('click', editTodo);

    // create set done button
    var setDoneBtn = createBtn(checkIcon);
    setDoneBtn.addEventListener('click', checkTodo);

    // create delete button
    var deleteBtn = createBtn(deleteIcon);
    deleteBtn.addEventListener('click', deleteTodo);

    // create button container
    var btnContainer = document.createElement('div');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(setDoneBtn);
    btnContainer.appendChild(deleteBtn);

    // add text and buttons to todo item
    todo.innerHTML = text;
    todo.appendChild(btnContainer);

    // add todo item to todo list (first in order)
    todoList.insertBefore(todo, todoList.childNodes[0]);
}

/**
 * Edit a todo's description
 * @return {void}
 */
function editTodo () {
    // save and remove content from node
    var todo = this.parentNode.parentNode;
    var btnContainer = todo.childNodes[1];

    todo.removeChild(btnContainer);

    var text = todo.textContent;

    todo.innerHTML = "";

    // create input field
    var editInput = document.createElement('input');
    editInput.value = text;

    // create update button
    var updateBtn = createBtn('update');
    updateBtn.addEventListener('click', function () {
        var updatedText = editInput.value;
        confirmEdit(todo, updatedText, btnContainer);
    });

    // create cancel button
    cancelBtn = createBtn('cancel');
    cancelBtn.addEventListener('click', function () {
        cancelEdit(todo, text, btnContainer);
    });

    // create edit-button container
    var editBtnContainer = document.createElement('div');
    editBtnContainer.appendChild(updateBtn);
    editBtnContainer.appendChild(cancelBtn);

    // add input field and buttons to todo item
    todo.appendChild(editInput);
    todo.appendChild(editBtnContainer);

    // focus input field
    editInput.focus();
}

/**
 * delete a todo permanently
 * @return {void}
 */
function deleteTodo () {
    var todo = this.parentNode.parentNode;
    todo.remove();
}

/**
 * Confirm changes to the todo's description and update todo
 *
 * @param  {object} todo         The todo object (LI-node with children)
 * @param  {string} text         The todos updated description
 * @param  {object} btnContainer Button container (DIV-node)
 * @return {void}
 */
function confirmEdit (todo, text, btnContainer) {
    while (todo.hasChildNodes()) {
        todo.removeChild(todo.lastChild);
    }
    todo.innerHTML = text;
    todo.appendChild(btnContainer);
}

/**
 * Cancel changes to todo's description and reset to previous description
 *
 * @param  {object} todo         The todo object (LI-node with children)
 * @param  {string} text         The todos previous description
 * @param  {object} btnContainer Button container (DIV-node)
 * @return {void}
 */
function cancelEdit (todo, text, btnContainer) {
    while (todo.hasChildNodes()) {
        todo.removeChild(todo.lastChild);
    }
    todo.innerHTML = text;
    todo.appendChild(btnContainer);
}

/**
 * Mark todo as done and move it to the list of done todos.
 * This will replace the edit- and check buttons with a "uncheck" button
 * @return {void}
 */
function checkTodo () {
    var todo = this.parentNode.parentNode;
    doneList.appendChild(todo);

    // remove move-to-done button
    this.removeEventListener('click', checkTodo);
    this.remove();

    // remove edit-button
    var btnContainer = todo.childNodes[1];
    var editBtn = btnContainer.childNodes[0];
    editBtn.removeEventListener('click', editTodo);
    editBtn.remove();

    // create uncheck todo button
    var uncheckBtn = createBtn(uncheckIcon);
    uncheckBtn.addEventListener('click', uncheck);

    btnContainer.insertBefore(uncheckBtn, btnContainer.childNodes[0]);
}

/**
 * Mark the todo as undone and move it back to the list of undone todos.
 * This will remove the todo and create a new one with the same description.
 * @return {void}
 */
function uncheck () {
    // TODO: remove eventlisteners
    var todo = this.parentNode.parentNode;
    var text = todo.textContent;
    todo.remove();
    addTodo(text);
}
