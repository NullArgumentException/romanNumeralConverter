const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numeralData = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const decimalToRoman = (input, i = 0) => {
  if (input === 0) {
    return "";
  }

  if (input >= numeralData[i][0]) {
    return numeralData[i][1] + decimalToRoman(input - numeralData[i][0], i);
  } else {
    return decimalToRoman(input, i + 1);
  }
};

const setOutputRed = (isRed) => {
  output.style.display = "block";
  if (isRed) {
    output.style.borderColor = "var(--crimson)";
    output.style.backgroundColor = "var(--lightred)";
    output.style.color = "var(--crimson)";
  } else {
    output.style.borderColor = "var(--gold)";
    output.style.backgroundColor = "var(--brown)";
    output.style.color = "var(--darkolive)";
  }
};

const checkInput = () => {
  const input = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(input)) {
    output.textContent = "Please enter a valid number";
    setOutputRed(true);
    return;
  }

  if (input < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    numberInput.value = "";
    setOutputRed(true);
    return;
  }

  if (input > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    numberInput.value = "";
    setOutputRed(true);
    return;
  }

  setOutputRed(false);
  output.textContent = decimalToRoman(input);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
