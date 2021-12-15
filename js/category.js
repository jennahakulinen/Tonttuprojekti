'use strict';

const url = 'http://localhost:3000';


const recipeCategories = document.querySelector('.recipe-categories-page');

const CategoryData = (categories) => {
    recipeCategories.innerHTML = ``;

    for (let i = 0; i < categories.length; i++) {
        recipeCategories.innerHTML +=
            `<button onclick="categoryPressed('${categories[i]}')" id="${i}" class="recipe-cat-item">${categories[i]}</button>`;
    }

}

const categoryPressed = (name) => {
    console.log("Kategoria: " + name);
    categoryCards.innerHTML = ``;
    const categoryName = document.querySelector('.category-name');
    categoryName.innerHTML = ``;
    categoryName.innerHTML +=
        `<h1 class="header">${name}</h1>`;
    createRecipeCards(name);
}



const categoryCards = document.querySelector('.recipes');
const categoryHeader = document.querySelector('.category-name');

const drawRecipeCards = (unfilteredRecipeData, category) => {
    const recipeData = filter_recipes(unfilteredRecipeData, category)

    categoryCards.innerHTML = ``;
    for (let i = 0; i < recipeData.length; i++) {
        categoryCards.innerHTML +=
            `<div class="card col-5">
            <a href="recipe.html">
                <div class="card-header">
                    <img class="card-img" src="${url}/${recipeData[i].filename}" alt="Reseptin kuva">
                </div>
                <div class="card-container">
                    <h4 class="card-title">${recipeData[i].title}</h4>
                    <div class="info-container">
                        <div class="user">
                            <img src="${url}/${recipeData[i].profilepic}"
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
const createRecipeCards = async (category) => {
    try {
        const response = await fetch(url + '/recipe');
        const recipes = await response.json();
        drawRecipeCards(recipes, category);
    } catch (e) {
        console.log(e.message);
    }
};

const getCategories = async () => {
    try {
        const response = await fetch(url + '/category');
        const categories = await response.json();
        const unique_categories = remove_duplicate_categories(categories)
        CategoryData(unique_categories);
    } catch (e) {
        console.log(e.message);
    }
};

getCategories();

createRecipeCards("");

const filter_recipes = (recipes, category) => {
    console.log(recipes[0])
    if (category === "") { return recipes }
    console.log("HELLO")
    const filtered_recipes = []
    console.log("HELLO2")
    for (let i = 0; i < recipes.length; i++) {
        console.log("HELLO3")
        for (let u = 0; u < recipes[i].categories.length; u++) {
            console.log("HELLO4")
            if (recipes[i].categories[u] === category) {
                filtered_recipes.push(recipes[i])
                console.log(i + u)
            }
        }
    }
    console.log(filtered_recipes)
    return filtered_recipes

};

const remove_duplicate_categories = (arr) => {
    let some_array = [];
    for (let i = 0; i < arr.length; i++) {
        some_array.push(arr[i].CategoryName)
    }
    return remove_duplicates(some_array);

}

const remove_duplicates = (arr) => {
    let obj = {};
    let ret_arr = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (let key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}

if (sessionStorage.getItem('user')) {
    document.querySelector('#login').href = 'profilepage.html';
    const recipeAddBtn = document.querySelector('#recipeadd');
    recipeAddBtn.style.display = 'block';
}