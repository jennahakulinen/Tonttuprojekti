'use strict'

document.getElementById("addBtn").onclick = newRow;

const newRow = () => {
    `<div class="recipe-includes">
    <input type="number" id="recipe-input" name="quantity" min="1" placeholder="2">
    <input type="text" id="recipe-input" name="unit" max="3" placeholder="dl">
    <input type="text" id="recipe-input" name="ingredient" placeholder="sokeri">
    </div>`;
}


    
