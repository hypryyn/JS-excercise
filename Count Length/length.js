let inputField = document.querySelector('.input');
let button = document.querySelector('.btn').addEventListener('click', count);
let container = document.querySelector(".fieldContainer");
let inputLength = inputField.value.length;

function count(e) {
    //e.preventDefault();
    //console.log(e.target);
    const lengthDiv = document.createElement('div');
    lengthDiv.classList.add('wordCount');
    lengthDiv.innerText = inputField.value.length;
    container.appendChild(lengthDiv);
    inputField.value = "";
};

function addKey(e) {
    console.log('hi')
    //e.preventDefault();
    if (e.key === "Enter") { 
        count();
    }
}

inputField.addEventListener('keypress', addKey);

//another input by enter refenrecess
container.addEventListener('ctrl' + 'Enter', e => {
    if (e.key === 'Enter') return
     saveNote();
    }
)