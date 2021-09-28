const allButtons = document.querySelectorAll(".buttons button");
const listElement = document.querySelector(".guestList ol");
let guestList = [];

function updateList() {
  listElement.innerHTML = "";
  guestList.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;

    listElement.appendChild(listItem);
  });
}

allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const guestName = document.querySelector("#guestName").value;

    switch (event.target.id) {
      case "addEnd":
        if (guestName) {
          guestList.push(guestName);
        }
        break;
      case "addStart":
        if (guestName) {
          guestList.unshift(guestName);
        }
        break;
      case "removeFirst":
        guestList.shift();
        break;
      case "removeLast":
        guestList.pop();
        break;
      case "reverse":
        guestList.reverse();
        break;
      default:
        break;
    }

    updateList();
  });
});
