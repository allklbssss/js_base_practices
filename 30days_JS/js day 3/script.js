let names = "";
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector("#output");
const promt = document
  .querySelector("#promt")
  .addEventListener("submit", handleSubmit);
const input = document.querySelector("#promt input");

printMessage("Введите имя: ");

function handleSubmit(event) {
  event.preventDefault();

  processInput(input.value);

  input.value = "";
}

function printMessage(message) {
  let li = document.createElement("li");

  li.textContent = message;

  output.appendChild(li);
}

function clearOutput() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function processInput(input) {
  if (!input) return;

  if (!names) {
    names = input;
    clearOutput();
    printMessage(`${names}, загадано число от 0 до 100. Попробуй отгадать :)`);
    return;
  }

  printMessage(input);

  let guess = Number.parseInt(input);

  if (Number.isNaN(guess)) return;

  guesses += 1;

  if (guess > number) {
    printMessage("Много. Попробуй еще раз.");
  } else if (guess < number) {
    printMessage("Мало. Попробуй еще раз.");
  } else {
    printMessage(`Верно, это число ${guess}.`);
    printMessage(`Количество попыток: ${guesses}.`);
  }
}
