let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

renderList();
function renderList(){
  let todoListHtml = '';
  todoList.forEach( (todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button"
      >Delete</button>
      `;
    todoListHtml = todoListHtml + html;
  });

  localStorage.setItem('todoList', JSON.stringify(todoList));
  document.querySelector('.js-todo-list').innerHTML= todoListHtml;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index,1);
        renderList();
      });
  });
}

function addTodo(){
  const inputElement = document.querySelector('.js-list');
  const dateInput = document.querySelector('.js-date-input');
  const dueDate = dateInput.value;
  const name = inputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = ''; 
  renderList();
}