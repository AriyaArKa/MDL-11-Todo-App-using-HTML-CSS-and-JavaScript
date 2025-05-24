document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("todo-input");
  const addBtn  = document.getElementById("add-btn");
  const listEl  = document.getElementById("todo-list");

  let todos = [];

  // Create and insert the "Delete All" button next to "Add Todo"
  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.textContent = "Delete All";
  deleteAllBtn.className = "btn btn-danger ms-2";
  addBtn.insertAdjacentElement("afterend", deleteAllBtn);

  // Event listeners
  addBtn.addEventListener("click", addTodo);
  deleteAllBtn.addEventListener("click", deleteAll);

  function addTodo() {
    const text = inputEl.value.trim();
    if (text === "") return;    // ignore empty
    todos.push(text);
    inputEl.value = "";
    renderTodos();
  }

  function deleteAll() {
    todos = [];
    renderTodos();
  }

  function renderTodos() {
    // Clear out existing list
    listEl.innerHTML = "";

    // Render each todo as an <li>
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = todo;
      listEl.appendChild(li);
    });
  }
});
