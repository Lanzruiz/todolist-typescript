console.log("Hello");

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Array<Todo> = [];

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  renderTodo(newTodo);
  const newTodoText = input.value;
  input.value = "";
}

function renderTodo(todo: Todo) {
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
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
