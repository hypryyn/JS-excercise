let table = document.querySelector('table')
let pName = document.getElementById('itemName');
let pDate = document.getElementById('itemDate');
let pPrice = document.getElementById('itemPrice');
let button = document.getElementById('btn');
//let pName = document.querySelector(".name");
//let pDate = document.querySelector(".date");
//let pPrice = document.querySelector(".amount");
//let button = document.querySelector(".btn");
//let table = document.querySelector("table");

button.addEventListener('click', function() {
    event.preventDefault()
    console.log('hi')


    let holder = document.createElement("tr");
    let row = document.createElement("td");
    let btnRow = document.createElement("td");
    let removeButton = document.createElement("button");

    table.appendChild(holder);
    holder.appendChild(row).textContent = pName.value;
    holder.appendChild(row.cloneNode(true)).textContent = pDate.value;
    holder.appendChild(row.cloneNode(true)).textContent = `$ ${pPrice.value}`;
    holder.appendChild(btnRow);
    btnRow.appendChild(removeButton).textContent = "X";

    removeButton.addEventListener('click', function() {
        holder.remove();
    })

});

console.log(pName)
//window.alert(pName);
/*function add(form) {
    var TestVar = form.itemName.value;
    alert (TestVar);
}*/

//outputing value into the table
/*const outpuptTable = () => {
    const outputTable = document.getElementById('expenseTable');
     outputTable.innerHTML = '';
        outputTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>${expenses[i].name}</td>
                <td>${expenses[i].date}</td>
                <td>$${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;
}
//deleting list
function deleteExpense() {
    var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
}
function deleteListItem(){
    li.classList.add("delete")
}*/