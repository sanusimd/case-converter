// Variable declearation
const inputText = document.querySelector("#convertForm");
const upperCase = document.querySelector(".upperBtn");
const lowerCase = document.querySelector(".lowerBtn");
const sentenceCase = document.querySelector(".sentenceBtn");
const titleButton = document.querySelector(".titleBtn");
const copyButton = document.querySelector(".copyBtn");
const clearButton = document.querySelector(".clearBtn");

// Upper Case Event Listener
upperCase.addEventListener("click", function () {
  const inputValue = inputText.value;
  const caseUpper = inputValue.toLocaleUpperCase();
  document.querySelector("#convertForm").value = caseUpper;
});

// Lower Case Event Listener
lowerCase.addEventListener("click", function () {
  const inputValue = inputText.value;
  const caseLower = inputValue.toLowerCase();
  document.querySelector("#convertForm").value = caseLower;
});


// Sentence Case Event Listener
sentenceCase.addEventListener("click", function () {
  const inputValue = inputText.value;
  const toSmallCase = inputValue.toLowerCase();
  const senCase = toSmallCase.charAt(0).toUpperCase();
  const newSenCase = senCase + toSmallCase.slice(1);
  document.querySelector("#convertForm").value = newSenCase;
});


// Title Case Functionality Event listener
titleButton.addEventListener("click", function () {
  const inputValue = inputText.value;
  const strToLowerCase = inputValue.toLowerCase();

  function capitalize(strToLowerCase) {
    return strToLowerCase.charAt(0).toUpperCase() + strToLowerCase.slice(1);
  }
  
  const caps = strToLowerCase.split(" ").map(capitalize).join(" ");
  document.querySelector("#convertForm").value = caps;
});

// Functionality Added for select and copy button Event listener
copyButton.addEventListener("click", function () {
  inputText.select();
  inputText.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

// Clear button Event listener
clearButton.addEventListener("click", function () {
  inputText.value = " Type or Paste Your Text Here To Convert Case... ";
});
