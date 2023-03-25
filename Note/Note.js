let input = document.querySelector('textarea');
let addNote = document.querySelector('.btn');
let container = document.querySelector('.output2');

addNote.addEventListener('click', saveNote);
function saveNote(e){
   // console.log(e.target);
    const setNote = document.createElement('div');
    setNote.classList.add('styling');

    //make delete element
   // var dBtn = document.createElement('span');
   // dBtn.appendChild(document.createTextNode('&times'));
   // container.appendChild(dBtn);
   // dBtn.addEventListener('click', function(del){
   //     container.removeChild(setNote)
   // });
   var dBtn = document.createElement("h3");
    dBtn.appendChild(document.createTextNode('DEL'));
    dBtn.classList.add('styling')
	container.appendChild(dBtn);
	dBtn.addEventListener("click", function(){
        container.removeChild(setNote);
        container.removeChild(dBtn);
    });
    container.addEventListener('keypress', e => {
        if (e.key === 'Enter') return
         setNote();
        }
    )

   // setNote.innerHTML.add('<i class="fa-solid fa-trash-xmark"></i>');
    setNote.innerText = input.value;
    container.appendChild(setNote);
};
