'use strict';

const url = 'http://localhost:3000';


const recipebasis = document.querySelector('.recipebasis');

const getRecipe = (recipeData) => {
    recipebasis.innerHTML = ``;
    recipebasis.innerHTML +=
        `<div class="col-12 recipebasis">
        <div class="recipe-header-img">
            <img class="recipe-img" src="${url}/${recipeData[0].filename}" alt="Reseptin kuva">
        </div>
        <div class="recipe-addfav">
            <i class="far fa-heart recipe-emptyfav"></i>
            <i class="fas fa-heart recipe-fav"></i>
        </div>
        <div class="recipe-header">
            <div class="recipe-name">
                <h2>${recipeData[0].title}</h2>
            </div>
            <div class="rates">
                <i class="fas fa-candy-cane rate"></i>
                <i class="fas fa-candy-cane rate"></i>
                <i class="fas fa-candy-cane rate"></i>
                <i class="fas fa-candy-cane rate"></i>
                <i class="fas fa-candy-cane rate"></i>
            </div>
        </div>
        <div class="recipe-info-container">
            <div class="recipe-user">
                <img src="${url}/${recipeData[0].profilepic}"
                    alt="user" />
                <h5 class="recipe-username"><a href="#">${recipeData[0].user}</a></h5>
            </div>
            <div class="recipe-rates">
                <i class="fas fa-candy-cane"></i>${recipeData[0].rates}
            </div>
        </div>
        <div class="recipe-categories">
        </div>
    </div>`;

    const recipeCategories = document.querySelector('.recipe-categories');

    recipeCategories.innerHTML = ``;

    for (let i = 0; i < recipeData[0].categories.length; i++) {
        recipeCategories.innerHTML +=
            `<button class="recipe-cat-item">${recipeData[0].categories[i]}</button>`;
    }

    recipebasis.innerHTML +=
        `<hr class="re-hr">

        <div class="col-12 recipe-container">
            <div class="col-12">
                <h1 class="header recipe-h">Ainesosat</h1>
                <div class="col-11 recipe-ingredients">
                    <ul class="recipe-grid-container">
                    </ul>
                </div>
            </div>
    
            <div class="col-12">
                <h1 class="header recipe-h">Ohjeet</h1>
                <div class="col-11 recipe-steps">
                    <ol class="step-list">
                    </ol>
                </div>
                <div class="recipe-cookingtime">
                    <i class="far fa-clock cooktime"></i>
                    <p>${recipeData[0].cooktime} min</p>
                </div>
            </div>
        </div>`;

    const recipeIngredients = document.querySelector(".recipe-grid-container");

    recipeIngredients.innerHTML = ``;

    for (let i = 0; i < recipeData[0].ingredients.length; i++) {
        recipeIngredients.innerHTML +=
            `<li class="recipe-grid">${recipeData[0].ingredients[i].count}</li>
            <li class="recipe-grid">${recipeData[0].ingredients[i].unit}</li>
            <li class="recipe-grid">${recipeData[0].ingredients[i].name}</li>`;
    }

    const recipeSteps = document.querySelector(".step-list");

    recipeSteps.innerHTML = ``;

    for (let i = 0; i < recipeData[0].steps.length; i++) {
        recipeSteps.innerHTML +=
            `<li>${recipeData[0].steps[i].desc}</li>`;
    }


    const likeBtn = document.querySelector(".recipe-addfav");
    const heart = document.querySelector(".recipe-fav");

    likeBtn.onclick = () => {
        if (heart.style.visibility === "visible") {
            heart.style.visibility = "hidden";
        } else {
            heart.style.visibility = "visible";
        }
    }

}

const getrecipeData = async () => {
    try {
        let params = new URLSearchParams(location.search);
        const recipeID = params.get("recipeID");
        const response = await fetch(url + '/recipe/' + recipeID);
        const recipes = await response.json();
        console.log(recipes)
        getRecipe(recipes);
    } catch (e) {
        console.log(e.message);
    }
};

getrecipeData();

if (sessionStorage.getItem('user')) {
    document.querySelector('#login').href = 'profilepage.html';
    const recipeAddBtn = document.querySelector('#recipeadd');
    recipeAddBtn.style.display = 'block';
}
