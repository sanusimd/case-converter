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
  let senCase = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  document.querySelector("#convertForm").value = senCase;
  console.log('sentence case');
});



// Functionality Added for select and copy button Event listener
copyButton.addEventListener("click", function () {
  inputText.select();
  inputText.setSelectionRange(0, 99999)
  document.execCommand("copy");
});

// Clear button Event listener
clearButton.addEventListener("click", function () {
  inputText.value = " Type or Paste Your Text Here To Convert Case... ";
});
