console.log("Hello");

interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(renderTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  renderTodo(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodo(todo: Todo) {
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Submitted!");
// });

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
