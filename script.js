const allButtons = document.querySelectorAll(".buttons button");
const listElement = document.querySelector(".guestList ol");
let guestList = [];

function updateList() {
  listElement.innerHTML = null;
  guestList.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;

    listElement.appendChild(listItem);
  });
}

allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const guestName = document.querySelector("#guestName").value;
    const removeFrom = Number(document.querySelector("#from").value);
    const removeTo = Number(document.querySelector("#to").value);
    const addAt = Number(document.querySelector("#at").value);

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
      case "removeFrom":
        if (removeTo) {
          guestList.splice(removeFrom - 1, removeTo - removeFrom);
        } else {
          guestList.splice(removeFrom - 1, 1);
        }
      case "addAt":
        guestList.splice(addAt - 1, 0, guestName);
        break;
      case "moveFirst":
        guestList.push(guestList.splice(0, 1));
        break;
      case "moveLast":
        guestList.unshift(guestList.splice(-1));
        break;
      default:
        break;
    }

    updateList();
  });
});
