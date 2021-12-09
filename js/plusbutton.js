'use strict';

const formtagInc = document.getElementById("addMore-includes");
const formtagStep = document.getElementById("addMore-steps");
const formtagCategory = document.getElementById("addMore-category");
const addMoreBtnInc = document.getElementById("addBtnInc");
const addMoreBtnStep = document.getElementById("addBtnSteps");
const addMoreCategory = document.getElementById("addBtnCategory");

addMoreBtnInc.onclick = () => {
    const addMoreIncHtml =

        `<div class="recipe-includes">
        <input type="number" id="recipe-input" name="quantity" min="1" placeholder="2">
        <input type="text" id="recipe-input" name="unit" max="3" placeholder="dl">
        <input type="text" id="recipe-input" name="ingredient" placeholder="sokeri">
        </div>`;

    formtagInc.innerHTML += addMoreIncHtml;
}
    
addMoreBtnStep.onclick = () => {
    const addMoreStepHtml =

        `<div class="add-recipe-steps">
        <textarea name="description" class="resizable" id="recipe-input" placeholder="Laita uuni päälle"></textarea>
        </div>`;

    formtagStep.innerHTML += addMoreStepHtml;
}

addMoreCategory.onclick = () => {
    const addMoreCategoryHtml =

        `<div class="add-recipe-category">
        <input type="text" id="recipe-input" name="category" placeholder="Leivonta" class="category">
        </div>`;

    formtagCategory.innerHTML += addMoreCategoryHtml;
}
