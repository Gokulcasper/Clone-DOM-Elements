// Create Element By Using DOM
let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputList = document.getElementById("input-list");

inputButtonId.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.createTextNode(inputTxtId.value);
  li.className = "input-item";
  li.append(text);
  inputList.append(li);
});

//---------------------------
