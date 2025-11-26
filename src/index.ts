console.log("Hello");

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodoText = input.value;
  const newLI = document.createElement("LI");
  newLI.append(newTodoText);
  list.append(newLI);
  input.value = "";
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
