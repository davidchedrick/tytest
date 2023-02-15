const input = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#todo-list");
const title = document.querySelector("h1");

addButton.addEventListener("click", addItem);
input.addEventListener("input", () => {
    addButton.disabled = input.value.length === 0;
});

function addItem() {
    const li = createListItem(input.value);
    list.appendChild(li);
    input.value = "";
    addButton.disabled = true;
}

function createListItem(name) {
    const listItem = document.createElement("li");

    const heading = document.createElement("h2");
    heading.textContent = name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove();
    });

    listItem.append(heading, deleteButton);
    return listItem;
}
