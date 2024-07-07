# Morse Code Translator

## Overview

This project provides a JavaScript-based Morse Code translator utility. It includes methods to convert text into Morse Code and vice versa.

## Features

- **translateTxtToMorse**: Converts plain text (alphabetical characters and numbers) into Morse Code.
- **translateMorseToTxt**: Converts Morse Code back into plain text.

## Usage

### translateTxtToMorse

```javascript
const { translateTxtToMorse } = require("./morse_code_translator");

const text = "Hello, World!";
const morseCode = translateTxtToMorse(text);
console.log(morseCode); // Output: ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--"
```

### 🚀 [Launch Live Project](https://morse-code-gamma.vercel.app/)
