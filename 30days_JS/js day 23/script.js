const coder = document.querySelector(".coder"),
  ecode = coder.querySelector("#encode"),
  dcode = coder.querySelector("#decode"),
  checkbox = coder.querySelector('input[type="checkbox"]');

const _listeners = ["keydown", "change", "paste", "cut", "input"];
let _translateAutomatically;

function _addListeners() {
  _listeners.forEach((listener) => {
    ecode.querySelector("textarea").addEventListener(listener, encode);
    dcode.querySelector("textarea").addEventListener(listener, decode);
  });
}

function _removeListeners() {
  _listeners.forEach((listener) => {
    ecode.querySelector("textarea").removeEventListener(listener, encode);
    dcode.querySelector("textarea").removeEventListener(listener, decode);
  });
}
window.onload = () => {
  _addListeners();
  checkbox.addEventListener("change", function () {
    !this.checked ? _removeListeners() : _addListeners();
  });

  ecode.querySelector("button").addEventListener("click", encode);
  dcode.querySelector("button").addEventListener("click", decode);
};

function encode() {
  dcode.querySelector("textarea").value = encodeURI(
    ecode.querySelector("textarea").value
  );
}

function deСode() {
  ecode.querySelector("textarea").value = decodeURI(
    dcode.querySelector("textarea").value
  );
}
