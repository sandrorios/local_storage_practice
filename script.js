let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let filterItem = document.getElementById('filter')
let clearBtn = document.getElementById('clear');

function onAddToSubmit(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an item");
        return;
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);
}


function addItemToDOM(item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listItem.appendChild(li);

    inputField.value = '';
    inputField.focus();
}


formItem.addEventListener('submit', onAddToSubmit);