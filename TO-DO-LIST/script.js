var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
}

var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearToDoItem);

function clearToDoItem() {
  clearCompletedToDoItems();
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList() {
  emptyList();
}

var saveListButton = document.getElementById("save-button");
saveListButton.addEventListener("click", saveList);

function saveList() {
  saveList()
}


function emptyList() {
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);

}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");

  } else {
    this.classList.add("completed");
  }
}

function clearCompletedToDoItems() {
  var completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);

    var toDoInfo = {
      "task": toDo.innerText,
      "completed": toDo.classList.contains("comleted")
    };
    toDos.push(toDoInfo);
  }

  localStorage.setItem("toDos", JSON.stringify(toDos));

}