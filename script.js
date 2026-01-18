let input = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

function addTask() {
  let task = input.value.trim();
  if (task === "") return; // prevent empty tasks

  let el = document.createElement("li");
  let delButton = document.createElement("button");

  el.innerText = task;
  delButton.innerText = "delete";
  delButton.classList.add("delete");

  el.appendChild(delButton);
  ul.appendChild(el);

  input.value = "";
}

// Button click
btn.addEventListener("click", addTask);

// Enter key
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Delete using event delegation
ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
    console.log("deleted");
  }
});
