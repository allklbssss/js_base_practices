const pad = document.querySelector("#pad");
const input = pad.querySelector("input");
const numberKeys = pad.querySelectorAll(".keyboard .key.number");
const clearKey = pad.querySelector(".keyboard .key.clear");
const doneKey = pad.querySelector(".keyboard .key.done");

const PIN_LENGTH = 4;
const PIN = "1234";

clearKey.addEventListener("click", () => (input.value = ""));

numberKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (input.value.length < PIN_LENGTH) input.value += e.target.innerHTML;
  });
});
doneKey.addEventListener("click", () => {
  input.setAttribute("type", "text");
  if (input.value.length == 4 && input.value == PIN)
    return (input.value = "PASSED");
  if (input.value.length == 4 && input.value != PIN)
    return (input.value = "DENIED");
});
