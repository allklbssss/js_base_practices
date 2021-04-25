const output = document.querySelector("#output");
const button = document.querySelector("#btn").addEventListener("click", () => {
  let randomNumber = getRandomInt(
    document.querySelector("#min").value,
    document.querySelector("#max").value
  );
  output.innerHTML = `${randomNumber}`;
});

function getRandomInt(min, max) {
  let number = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return number;
}
