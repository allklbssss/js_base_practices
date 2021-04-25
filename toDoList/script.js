// heading
const $$ = (s, o = document) => o.querySelectorAll(s);

$$(".td").forEach((el) =>
  el.addEventListener("mousemove", function (e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width / 2;
    const my = e.clientY - pos.top - pos.height / 2;

    this.style.transform = "translate(" + mx * 0.15 + "px, " + my * 0.3 + "px)";
    this.style.transform +=
      "rotate3d(" + mx * -0.1 + ", " + my * -0.3 + ", 0, 12deg)";
    this.children[0].style.transform =
      "translate(" + mx * 0.025 + "px, " + my * 0.075 + "px)";
  })
);

// todoList
let addMessage = document.querySelector(".message"),
  addButton = document.querySelector(".add").addEventListener("click", newTodo),
  todo = document.querySelector(".todo");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessage();
}

function newTodo() {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
  };
  todoList.push(newTodo);
  displayMessage();
  localStorage.setItem("todo", JSON.stringify(todoList));
  addMessage.value = "";
}

function displayMessage() {
  let displayMessage = "";
  if (todoList.length === 0) todo.innerHTML = "";
  todoList.forEach(function (item, i) {
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
    <label for='item_${i}'class="${item.text ? "text" : ""}">${
      item.todo
    }</label>
    <span onclick="deleteMessage(${i})"><i class="fas fa-trash"></i></span>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

todo.addEventListener("change", function (event) {
  let valueLabel = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  ).innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      item.text = !item.text;
      displayMessage();
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});

function deleteMessage(i) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  todoList.splice(i, 1);
  localStorage.setItem("todo", JSON.stringify(todoList));
  displayMessage();
}
