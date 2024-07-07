import { morseChars } from "./data.js";

export const translateTxtToMorse = (inputValue) => {
  // Step2: split the input to array of characters
  let chars = inputValue.split("");
  //console.log("+++++++++++++chars++++++", chars);
  //Step3: traverse the characters and if its lowercase change to uppercase and return the corresponding morse code: PUSH it to translatedChars

  let translatedChars = chars.map((char) => {
    let lookUpKey;
    if (/[a-z]/.test(char)) {
      lookUpKey = char.toUpperCase();
    } else {
      lookUpKey = char;
    }

    // console.log("+++++++++++++lookup key++++", lookUpKey);
    const validInput = morseChars[lookUpKey];
    // console.log("---------Valid Input------", validInput);
    if (!validInput && lookUpKey !== " ") {
      throw new Error(`Invalid character: ${lookUpKey}`);
    }
    return validInput;
  });
  return translatedChars.join(" ").trim();
};

const createDataForMorseToTxt = () => {
  return Object.entries(morseChars).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
};

export const translateMorseToTxt = (inputValue) => {
  //Step1 :Call the function to get the data
  const reverseMorseChars = createDataForMorseToTxt();

  // split the input to array of characters absed on space
  let chars = inputValue.split(" ");
  // console.log(chars);

  let translatedChars = chars.map((char) => {
    if (char === "") {
      return " ";
    }
    if (!reverseMorseChars.hasOwnProperty(char)) {
      // alert(`${char} is not a valid character`);
      throw new Error(`Invalid character: ${char}`);
    }
    return reverseMorseChars[char];
  });
  return translatedChars.join("").toUpperCase().trim();
};

//Function to check if input is Morse Code:
export const isEnglishCode = (input) => {
  const regex = /[a-zA-Z0-9!@\$&()_:;"'?,\/]/;
  return regex.test(input); // Check for dots,dashes and spaces
};
