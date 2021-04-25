// то же самое что const speech = window.speechSynthesis;
const { speechSynthesis } = window;
const voicesSelect = document.getElementById("voices");
const text = document.getElementById("text");

let voices = [];

const generateVoices = () => {
  voices = speechSynthesis.getVoices();

  const voicesList = voices
    .map(
      (voice, index) =>
        voice.lang === "ru-RU" &&
        `<option value=${index}>${voice.name} (${voice.lang})</option>`
    )
    .join("");

  voicesSelect.innerHTML = voicesList;
};

const speak = () => {
  if (speechSynthesis.speaking) {
    console.error("hueta");
    return;
  }

  if (text.value !== "") {
    const ssUtterance = new SpeechSynthesisUtterance(text.value);

    ssUtterance.voice = voices[voicesSelect.value];

    speechSynthesis.speak(ssUtterance);
  }
};

generateVoices();

document.getElementById("listen").addEventListener("click", speak);

speechSynthesis.addEventListener("voiceschanged", generateVoices);
