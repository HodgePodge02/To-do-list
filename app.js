// What needs to get done?
// 1. DOM selector (getElementByID)
// 2. Add an event listener on click
// 3. event listener is taking html and displaying it in a OL format on UI.

let toDo = [];

// ---Dom selectors ---

const MainButton = document.getElementById("AddItem");
const inputDOM = document.getElementById("Input");
const toDoList = document.getElementById("ToDoList");

// ---Event listenters ---

MainButton.addEventListener("click", (e) => {
  const currentInputValue = inputDOM;
  console.log(currentInputValue.value);

  addItem(currentInputValue.value);

  clearList();

  generateList();
  clearInputField();
});

// ---functions---
function clearInputField() {
  inputDOM.value = "";
}

function clearList() {
  toDoList.innerHTML = "";
}

function addItem(item) {
  if (item.trim()) {
    toDo.push(item);
  }
}

function generateList() {
  if (!toDo) return;

  toDo.forEach((item, i) => {
    const liWrapper = document.createElement("div");
    liWrapper.innerHTML = `
        <li> ${item} </li>
        <button>delete</button>
    `;
    liWrapper.addEventListener("click", (e) => {
      deleteItem(i);
    });
    toDoList.appendChild(liWrapper);
  });
}

function deleteItem(index) {
  toDo.splice(index, 1);
  clearList();
  generateList();
}
