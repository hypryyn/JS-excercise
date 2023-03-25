let nameInput = document.querySelector(".name");
let dateInput = document.querySelector(".date");
let amountInput = document.querySelector(".amount");

let button = document.querySelector(".add-btn");
let ifEmpty = document.querySelector(".if-empty");
let table = document.querySelector("table");

button.addEventListener("click", function() {
    ifEmpty.remove();
  
    // CREATE THE EXPENSE
    let holder = document.createElement("tr");
    let row = document.createElement("td");
    let btnRow = document.createElement("td");
    let removeButton = document.createElement("button");

    table.appendChild(holder);
    holder.appendChild(row).textContent = nameInput.value;
    holder.appendChild(row.cloneNode(true)).textContent = dateInput.value;
    holder.appendChild(row.cloneNode(true)).textContent = amountInput.value;
    holder.appendChild(btnRow);
    btnRow.appendChild(removeButton).textContent = "REMOVE ENTRY";

    // REMOVE THE EXPENSE
    removeButton.addEventListener("click", function() {
        holder.remove();
    });

    /* TRIED THIS TO MAKE THE ELEMENT RE-APPEAR IF THE TABLE IS EMPTY BUT                      
    IT DIDN'T WORK */

    if (!table.contains(holder)) {
       table.appendChild(ifEmpty);
    }
});

console.log(nameInput);