const loadTodo = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  1; //
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todocard = document.createElement("div");
    todocard.innerHTML = `
        <div class="todo-card">
        <p>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
            <h2>${todo.title}
            </h2>
            
            
        </div>
    `;
    todoContainer.appendChild(todocard);
  });
};

loadTodo();
