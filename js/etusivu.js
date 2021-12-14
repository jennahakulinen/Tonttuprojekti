'use strict';

const url = 'http://localhost:3000';

// const popularArray = [
//     {
//         filename: 'img/image5.jpg',
//         recipelink: 'recipe.html',
//     },
//     {
//         filename: 'img/image4.jpg',
//         recipelink: 'recipe.html',
//     },
//     {
//         filename: 'img/image3.jpg',
//         recipelink: 'recipe.html',
//     },
//     {
//         filename: 'img/image2.jpg',
//         recipelink: 'recipe.html',
//     },
//     {
//         filename: 'img/image1.jpg',
//         recipelink: 'recipe.html',
//     },
// ];

const slideshow = document.querySelector('.slideshow-container');

const getPopularRecipes = (recipeData) => {
    slideshow.innerHTML = ``;
    slideshow.innerHTML +=
        `<div class="items">
        <div class="item active">
            <a href="recipe.html?recipeID=${recipeData[0].recipeID}"><img src="${url}/${recipeData[0].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item next">
            <a href="recipe.html?recipeID=${recipeData[1].recipeID}"><img src="${url}/${recipeData[1].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item">
            <a href="recipe.html?recipeID=${recipeData[2].recipeID}"><img src="${url}/${recipeData[2].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item">
            <a href="recipe.html?recipeID=${recipeData[3].recipeID}"><img src="${url}/${recipeData[3].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item prev">
            <a href="recipe.html?recipeID=${recipeData[4].recipeID}"><img src="${url}/${recipeData[4].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="button-container">
            <div class="button"><i class="fas fa-angle-left"></i></div>
            <div class="button"><i class="fas fa-angle-right"></i></div>
        </div>
    </div>`;

    const slides = document.querySelectorAll(".item");
    const button = document.querySelectorAll(".button");

    let current = 0;
    let prev = 4;
    let next = 1;

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == 5) {
            next = 0;
        }

        if (prev == -1) {
            prev = 4;
        }

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
    }
}



const recipes = document.querySelector('.recipes');

const getRecipeCards = (recipeData) => {
    recipes.innerHTML = ``;

    for (let i = 0; i < recipeData.length; i++) {

        recipes.innerHTML +=
            `<div class="card col-5">
            <a href="recipe.html?recipeID=${recipeData[i].recipeID}">
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


const getrecipeData = async () => {
    try {
        const response = await fetch(url + '/recipe');
        const recipes = await response.json();
        getRecipeCards(recipes);
        getPopularRecipes(recipes);
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