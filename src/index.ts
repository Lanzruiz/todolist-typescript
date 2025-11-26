console.log("Hello");

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   console.log("Submitted");
// }

// form.addEventListener("submit", handleSubmit);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted!");
});

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
