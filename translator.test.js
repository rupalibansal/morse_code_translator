import {
  translateTxtToMorse,
  clearTextArea,
  translateMorseToTxt,
} from "./modules/translator.js";

describe("Translate English to Morse Code", () => {
  it("Should translate each character as expected", () => {
    expect(translateTxtToMorse("H")).toBe("....");
    expect(translateTxtToMorse("h")).toBe("....");
    expect(translateTxtToMorse("0")).toBe("-----");
    expect(translateTxtToMorse(";")).toBe("-.-.-.");
    expect(translateTxtToMorse("/")).toBe("-..-.");
  });

  it("Should translate the spaces correctly", () => {
    expect(translateTxtToMorse("a a")).toBe(".-  .-");
    expect(translateTxtToMorse("a     ")).toBe(".-");
  });

  it("Should translate the words including space in the sentence correctly", () => {
    expect(
      translateTxtToMorse("The quick brown fox jumps over the lazy dog")
    ).toBe(
      "- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-  .--- ..- -- .--. ...  --- ...- . .-.  - .... .  .-.. .- --.. -.--  -.. --- --."
    );
  });

  it("Should throw an error for an invalid character", () => {
    expect(() => {
      translateTxtToMorse("~");
    }).toThrow("Invalid character: ~");
  });
});

describe("Translate Morse Code to English", () => {
  it("Should translate each character as expected", () => {
    expect(translateMorseToTxt(".-")).toBe("A");
    expect(translateMorseToTxt("..--..")).toBe("?");
    expect(translateMorseToTxt("----.")).toBe("9");
    expect(translateMorseToTxt(".--.-.")).toBe("@");
  });

  it("Should translate the spaces correctly", () => {
    expect(translateMorseToTxt("--- ---  ---")).toBe("OO O");
    expect(translateMorseToTxt(".-.     ")).toBe("R");
  });

  it("Should translate the words including space in the sentence correctly", () => {
    expect(
      translateMorseToTxt(
        "- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-  .--- ..- -- .--. ...  --- ...- . .-.  - .... .  .-.. .- --.. -.--  -.. --- --."
      )
    ).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
  });

  it("Should throw an error for an invalid character", () => {
    expect(() => {
      translateMorseToTxt("----..");
    }).toThrow("Invalid character: ----..");
  });
});
