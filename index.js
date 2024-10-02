const myForm = document.getElementById("myForm");
const item = document.getElementById("item");
const itemList = document.getElementById("itemList");

myForm.addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.classList.add("listStyle");
  li.innerText = item.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dlBtn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteFunction);

  function deleteFunction() {
    li.remove();
  }

  itemList.appendChild(li);
  li.appendChild(deleteBtn);
  item.value = "";
}
