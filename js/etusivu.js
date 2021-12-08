'use strict';

const recipeArray = [
    {
        filename: 'img/image10.jpg',
        title: 'Otsikko 1',
        user: 'BestCook',
        profilepic: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
        rates: '4/5',
    },
    {
        filename: 'img/image11.jpg',
        title: 'Otsikko 2',
        user: 'ChristmasSpirit',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '5/5',
    },
    {
        filename: 'img/image12.jpg',
        title: 'Otsikko 3',
        user: 'SnowFlake',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '2.8/5',
    },
    {
        filename: 'img/image13.jpg',
        title: 'Otsikko 4',
        user: 'Rodolf',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.7/5',
    },
    {
        filename: 'img/image13.jpg',
        title: 'Otsikko 4',
        user: 'Rodolf',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.7/5',
    },
    {
        filename: 'img/image13.jpg',
        title: 'Otsikko 4',
        user: 'Rodolf',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.7/5',
    },
];

const recipes = document.querySelector('.recipes');

recipes.innerHTML = ``;

for (let i = 0; i < recipeArray.length; i++) {
    recipes.innerHTML +=
        `<div class="card col-5">
        <a href="recipe.html">
            <div class="card-header">
                <img class="card-img" src="${recipeArray[i].filename}" alt="Reseptin kuva">
            </div>
            <div class="card-container">
                <h4 class="card-title">${recipeArray[i].title}</h4>
                <div class="info-container">
                    <div class="user">
                        <img src="${recipeArray[i].profilepic}"
                            alt="Käyttäjän profiilikuva">
                        <h5 class="username">${recipeArray[i].user}</h5>
                    </div>
                    <div class="user-info">
                        <i class="fas fa-candy-cane"></i>${recipeArray[i].rates}
                    </div>
                </div>
            </div>
        </a>
    </div>`;
}
