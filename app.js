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

  addItem(currentInputValue.value);

  clearList();

  generateList();
  clearInputField();
});

// --- functions  ---
function clearInputField() {
  inputDOM.value = "";
}

function clearList() {
  toDoList.innerHTML = "";
}

function addItem([item]) {
  if (item.trim()) {
    toDo.push({ name: item, completed: false });
    console.log(toDo);
  }
}
function completeItem(index) {
  toDo[index].completed = true;
  console.log(toDo);
}

function deleteItem(index) {
  toDo.splice(index, 1);
  clearList();
  generateList();
}
function generateList() {
  if (!toDo) return;

  toDo.forEach((item, i) => {
    const liWrapper = document.createElement("div");

    //Create new <li> for each object in array
    const li = document.createElement("li");
    li.innerText = `${item.name}`;
    if (item.completed) {
      li.classList.add("green-bg");
    }
    li.addEventListener("click", (e) => {
      li.classList.add("green-bg");
      completeItem(i);
    });

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = `delete`;
    deleteButton.addEventListener("click", (e) => {
      deleteItem(i);
    });
    //append newly created nodes to Wrapper element in DOM
    liWrapper.appendChild(li);
    liWrapper.appendChild(deleteButton);
    toDoList.appendChild(liWrapper);
  });
}
