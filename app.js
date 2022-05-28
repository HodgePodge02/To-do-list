// What needs to get done?
// 1. DOM selector (getElementByID)
// 2. Add an event listener on click
// 3. event listener is taking html and displaying it in a OL format on UI.
// 4.

// Dom selectors

const MainButton = document.getElementById("MainButton");
const inputDOM = document.getElementById("Input");

// Event listenters

// MainButton.addEventListener(click, (e)) => {

// }

MainButton.addEventListener("click", (e) => {
  const currentInputValue = inputDOM;
  console.log(currentInputValue.value);
});
