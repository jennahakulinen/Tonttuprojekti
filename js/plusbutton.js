'use strict';

const formtagInc = document.getElementById("addMore-includes");
const formtagStep = document.getElementById("addMore-steps");
const formtagCategory = document.getElementById("addMore-category");
const addMoreBtnInc = document.getElementById("addBtnInc");
const addMoreBtnStep = document.getElementById("addBtnSteps");
const addMoreCategory = document.getElementById("addBtnCategory");
let input_number = 1;

addMoreBtnInc.addEventListener('click', (evt) => {
    evt.preventDefault();

    const lisaaKentta = () => {
        input_number++;
        let inputKentat =
            `<div class="recipe-includes">
        <input type="number" id="recipe-input" name="quantity" min="1" placeholder="2">
        <input type="text" id="recipe-input" name="unit" placeholder="dl">
        <input type="text" id="recipe-input" name="ingredient" placeholder="sokeri">
        </div>`;
        formtagInc.insertAdjacentHTML("beforeend", inputKentat);
    }

    lisaaKentta();

});

addMoreBtnStep.addEventListener('click', (evt) => {
    evt.preventDefault();
    const lisaaKentta = () => {
        input_number++;
        let inputKentat =
            `<div class="add-recipe-steps">
        <textarea name="description" class="resizable" id="recipe-input" placeholder="Laita uuni päälle"></textarea>
        </div>`;
        formtagStep.insertAdjacentHTML("beforeend", inputKentat);
    }

    lisaaKentta();

})

addMoreCategory.addEventListener('click', (evt) => {
    evt.preventDefault();
    const lisaaKentta = () => {
        input_number++;
        let inputKentat =
            `<div class="add-recipe-category">
        <input type="text" id="recipe-input" name="category" placeholder="Leivonta" class="category">
        </div>`;
        formtagCategory.insertAdjacentHTML("beforeend", inputKentat);
    }
    lisaaKentta();
})
