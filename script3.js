const inputListEl = document.querySelector("#input-list");
const duplicateEl = document.getElementById("duplicate");
const duplicateBtn = document.getElementById("duplicate-btn");

// cloneNode(false) only clone the top Element

// const cloneData = inputListEl.cloneNode();

// cloneNode(true) clone all elements and its subtree

// const cloneData = inputListEl.cloneNode(true);

duplicateBtn.addEventListener("click", () => {
  duplicateEl.innerHTML = "";

  const cloneData = inputListEl.cloneNode(true);

  duplicateEl.append(cloneData);
});
