// window - global - globalThis

// let myQueryParams = JSON.parse("name=vasya&id=1");
// console.log(myQueryParams);

// console.log(window.innerWidth);
// let myDivs = document.querySelectorAll("my-div");

// console.log(myDivs);

// let myId = document.getElementById("my-id");

// console.log(myId);
// myId.style.background = "red";

// let myLovelyDiv = document.getElementsByClassName("my-div");

// const div = myLovelyDiv[0];
// div.innerHTML += " poka";

// div.outerHTML = "kdsfjgh"
// console.log(div);

let header = document.createElement(`header`);
header.className = "header";
header.innerHTML = "ToDo List:";
header.style.background = `#FFFF00`;
header.style.margin = "20px";
header.style.fontSize = "30px";
document.body.prepend(header);

let container = document.createElement(`container`);
container.className = "container";
header.after(container);

let list = document.createElement(`ol`);
list.className = "ol-List";
container.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement(`li`);
  li.className = "list-element";
  li.innerHTML = `Заметка ${i}`;
  list.append(li);
}

let input = document.createElement(`input`);
input.className = "input";
input.type = "text";
input.style.display = "block";
container.append(input);

let button = document.createElement(`button`);
button.className = "button";
button.innerHTML = "Add ToDo";
// button.onclick = () => {
//   let li = document.createElement(`li`);
//   li.className = "list-element";
//   li.innerHTML = input.value;
//   input.value = "";
//   list.append(li);
// };
button.addEventListener("click", handleAddTodo);
container.append(button);

function handleAddTodo() {
  let li = document.createElement(`li`);
  li.className = "list-element";
  li.innerHTML = input.value;
  input.value = "";
  list.append(li);
}
