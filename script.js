const inputText = document.querySelector("#convertForm");
const upperCase = document.querySelector(".upperBtn");
const lowerCase = document.querySelector(".lowerBtn");
const sentenceCase = document.querySelector(".sentenceBtn");
const clearButton = document.querySelector(".clearBtn");

// Upper Case 
upperCase.addEventListener("click", function () {
  const inputValue = inputText.value
  const caseUpper = inputValue.toLocaleUpperCase();
  document.querySelector("#convertForm").value = caseUpper
   
});


