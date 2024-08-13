const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

async function getTodos() {
  const response = await fetch('http://localhost:3000/todos');
  const todos = await response.json();

  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    todoList.appendChild(li);
  });
}

async function addTodo() {
  const todoText = todoInput.value;
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: todoText })
  });

  if (response.ok) {
    todoInput.value = '';
    getTodos();
  }
}

getTodos();

