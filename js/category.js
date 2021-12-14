'use strict';

const url = 'http://localhost:3000';


// const categories = [
//     {
//         CategoryID: '1',
//         CategoryName: 'Leivonta',
//     },
//     {
//         CategoryID: '2',
//         CategoryName: 'Jouluinen',
//     },
//     {
//         CategoryID: '3',
//         CategoryName: 'Vegaaninen',
//     },
// ];



const recipeCategories = document.querySelector('.recipe-categories-page');

const CategoryData = (categories) => {
    recipeCategories.innerHTML = ``;

    for (let i = 0; i < categories.length; i++) {
        recipeCategories.innerHTML +=
            `<button onclick="categoryPressed('${categories[i].CategoryName}')" id="${i}" class="recipe-cat-item">${categories[i].CategoryName}</button>`;
    }

}

const categoryPressed = (name) => {
    console.log("Kategoria: " + name);
    categoryCards.innerHTML = ``;
    const categoryName = document.querySelector('.category-name');
    categoryName.innerHTML = ``;
    categoryName.innerHTML +=
        `<h1 class="header">${name}</h1>`;
}










const categoryCards = document.querySelector('.recipes');
const categoryHeader = document.querySelector('.category-name');

const getRecipeCards = (recipeData) => {
    categoryCards.innerHTML = ``;
    for (let i = 0; i < recipeData.length; i++) {
        categoryCards.innerHTML +=
            `<div class="card col-5">
            <a href="recipe.html">
                <div class="card-header">
                    <img class="card-img" src="${recipeData[i].filename}" alt="Reseptin kuva">
                </div>
                <div class="card-container">
                    <h4 class="card-title">${recipeData[i].title}</h4>
                    <div class="info-container">
                        <div class="user">
                            <img src="${recipeData[i].profilepic}"
                                alt="Käyttäjän profiilikuva">
                            <h5 class="username">${recipeData[i].user}</h5>
                        </div>
                        <div class="user-info">
                            <i class="fas fa-candy-cane"></i>${recipeData[i].rates}
                        </div>
                    </div>
                </div>
            </a>
        </div>`;
    }
}

//AJAX CALLS
const getrecipeData = async () => {
    try {
        const response = await fetch(url + '/recipe');
        const recipes = await response.json();
        getRecipeCards(recipes);
    } catch (e) {
        console.log(e.message);
    }
};

const getCategories = async () => {
    try {
        const response = await fetch(url + '/category');
        const categories = await response.json();
        CategoryData(categories);
    } catch (e) {
        console.log(e.message);
    }
};

getCategories();

getrecipeData();




