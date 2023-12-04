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

formItem.addEventListener('submit', onAddToSubmit);