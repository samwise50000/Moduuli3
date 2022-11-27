'use strict';
let target = document.querySelector('#target')
let item_amount = parseInt(prompt('Give number of items'))
let items = []


// Luetaan nimet
for(let i = 0; i<item_amount; i++){
    items[i] = prompt('Item: ');
}


// Generoidaan html-lista
let html = '<ul class="my-list">';
html += '<ol>';
for(let i = 0; i< item_amount; i++){
    html += '<li>';
    html += items[i];
    html += '</li>';
}

html += '</ol></ul>';
target.innerHTML = html