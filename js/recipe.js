'use strict';

const url = 'http://localhost:3000';

// const recipe = [
//     {
//         filename: 'img/image10.jpg',
//         title: 'Joululetut',
//         user: 'BestCook',
//         profilepic: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
//         rates: '4/5',
//         cooktime: '30',
//         categories: ["Leivonta", "Jälkiruoka", "Jouluinen", "Herkku"],
//         ingredients: [
//             {
//                 count: '1',
//                 unit: 'dl',
//                 name: 'sokeri',
//             },
//             {
//                 count: '4',
//                 unit: 'dl',
//                 name: 'jauhot',
//             },
//             {
//                 count: '1',
//                 unit: 'rkl',
//                 name: 'leivinjauhe',
//             },
//             {
//                 count: '3',
//                 unit: 'kpl',
//                 name: 'kananmuna',
//             },
//             {
//                 count: '6',
//                 unit: 'dl',
//                 name: 'maito',
//             },
//         ],
//         steps: [
//             {
//                 desc: 'Vatkaa munien rakenne rikki kulhossa. Lisää taikinaan n. 2 dl maitoa ja muut aineet ja vatkaa tasaiseksi. Lisää loppu maito ja sekoita. Anna turvota 30 min.',
//             },
//             {
//                 desc: 'Paista taikinasta ohukaisia Oivariini rasvassa pannulla.',
//             },
//             {
//                 desc: 'Tarjoa lisänä esim. kermavaahtoa, marjoja, sokeria, hilloa, sokeroitua marjasurvosta tai jäätelöä.',
//             },
//         ],
//     },
// ];


// const getRecipe = async () => {
//     try {
//         const response = await fetch(url + '/recipe');
//         const recipes = await response.json();
//         return recipes;
//     } catch (e) {
//         console.log(e.message);
//     }
// };

// getRecipe();


// const categoryStuff = ["Leivonta", "Jälkiruoka", "Jouluinen", "Herkku"];

// const ingredientStuff = [
//     {
//         count: '1',
//         unit: 'dl',
//         name: 'sokeri',
//     },
//     {
//         count: '4',
//         unit: 'dl',
//         name: 'jauhot',
//     },
//     {
//         count: '1',
//         unit: 'rkl',
//         name: 'leivinjauhe',
//     },
//     {
//         count: '3',
//         unit: 'kpl',
//         name: 'kananmuna',
//     },
//     {
//         count: '6',
//         unit: 'dl',
//         name: 'maito',
//     },
// ];

// const stepsStuff = [
//     {
//         desc: 'Vatkaa munien rakenne rikki kulhossa. Lisää taikinaan n. 2 dl maitoa ja muut aineet ja vatkaa tasaiseksi. Lisää loppu maito ja sekoita. Anna turvota 30 min.',
//     },
//     {
//         desc: 'Paista taikinasta ohukaisia Oivariini rasvassa pannulla.',
//     },
//     {
//         desc: 'Tarjoa lisänä esim. kermavaahtoa, marjoja, sokeria, hilloa, sokeroitua marjasurvosta tai jäätelöä.',
//     },
// ];


const recipebasis = document.querySelector('.recipebasis');

const getRecipe = (recipeData) => {
    recipebasis.innerHTML = ``;
    recipebasis.innerHTML +=
        `<div class="col-12 recipebasis">
        <div class="recipe-header-img">
            <img class="recipe-img" src="${recipeData[0].filename}" alt="Reseptin kuva">
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
                <img src="${recipeData[0].profilepic}"
                    alt="user" />
                <h5 class="recipe-username"><a href="profilepage.html">${recipeData[0].user}</a></h5>
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
        const response = await fetch(url + '/recipe');
        const recipes = await response.json();
        getRecipe(recipes);
    } catch (e) {
        console.log(e.message);
    }
};

getrecipeData();

