import {
  isEnglishCode,
  translateMorseToTxt,
  translateTxtToMorse,
} from "./translator.js";

// Get the dom elements:
const convertToMorseBtn = document.getElementById("morseBtn");
const convertToTextBtn = document.getElementById("txtBtn");
const clearBtn = document.getElementById("clrBtn");
const outputText = document.getElementById("output_text");
const inputText = document.getElementById("input_text");

export const clearTextArea = () => {
  outputText.value = "";
  inputText.value = "";
};

// convertToMorseBtn.addEventListener("click", translateTxtToMorse);
// convertToTextBtn.addEventListener("click", translateMorseToTxt);

clearBtn.addEventListener("click", clearTextArea);

inputText.addEventListener("input", () => {
  const inputValue = inputText.value;
  try {
    if (isEnglishCode(inputValue)) {
      outputText.value = translateTxtToMorse(inputValue);
    } else {
      outputText.value = translateMorseToTxt(inputValue);
    }
  } catch (error) {
    outputText.value = error;
  }
});
