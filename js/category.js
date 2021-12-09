'use strict';

const categoryArray = [
    {
        filename: 'img/image10.jpg',
        title: 'Piparitalo',
        user: 'BestCook',
        profilepic: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
        rates: '4/5',
    },
    {
        filename: 'img/image11.jpg',
        title: 'Paistettu kalkkuna sitruunalla',
        user: 'ChristmasSpirit',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '5/5',
    },
    {
        filename: 'img/image12.jpg',
        title: 'Herkkutikut',
        user: 'SnowFlake',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '2.8/5',
    },
    {
        filename: 'img/image13.jpg',
        title: 'Mehevä pihvi',
        user: 'Rodolf',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.7/5',
    },
    {
        filename: 'img/image14.jpg',
        title: 'Kasvisgratiini',
        user: 'Santa',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '3.9/5',
    },
    {
        filename: 'img/image15.jpg',
        title: 'Joulupulla',
        user: 'Olof',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.2/5',
    },
    {
        filename: 'img/image13.jpg',
        title: 'Mehevä pihvi',
        user: 'Rodolf',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.7/5',
    },
    {
        filename: 'img/image14.jpg',
        title: 'Kasvisgratiini',
        user: 'Santa',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '3.9/5',
    },
    {
        filename: 'img/image15.jpg',
        title: 'Joulupulla',
        user: 'Olof',
        profilepic: 'https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo',
        rates: '4.2/5',
    },
];

const categoryStuff = [
    "Perinteinen joulu",
    "Vegaaninen joulu",
    "Leivonta",
    "Suolainen",
    "Alkuruoka",
    "Pääruoka",
    "Jälkiruoka",
    "Aamupala",
    "Illallinen",
    "Liharuuat",
    "Joululaatikot",
    "Suolainen",
    "Makea"];

const recipeCategories = document.querySelector('.recipe-categories-page');


recipeCategories.innerHTML = ``;



for (let i = 0; i < categoryStuff.length; i++) {
    recipeCategories.innerHTML +=
        `<button onclick="categoryPressed(${i})" id="${i}" class="recipe-cat-item">${categoryStuff[i]}</button>`;
}

const categoryPressed = (index) => {
    console.log("Kategoria: " + categoryStuff[index]);
    categoryCards.innerHTML = ``;
    const categoryName = document.querySelector('.category-name');
    categoryName.innerHTML = ``;
    categoryName.innerHTML +=
        `<h1 class="header">${categoryStuff[index]}</h1>`;

}



// const categoricalBtn1 = document.getElementById('1');
// categoricalBtn1.onclick = () => {
//     console.log("haloo");
// }
// const categoricalBtn2 = document.getElementById('2');
// categoricalBtn2.onclick = () => {
//     console.log("haloo");
// }
// const categoricalBtn3 = document.getElementById('3');
// categoricalBtn3.onclick = () => {
//     console.log("haloo");
// }





const categoryCards = document.querySelector('.recipes');
const categoryHeader = document.querySelector('.category-name');

const getCards = () => {
    categoryCards.innerHTML = ``;
    for (let i = 0; i < categoryArray.length; i++) {
        categoryCards.innerHTML +=
            `<div class="card col-5">
            <a href="recipe.html">
                <div class="card-header">
                    <img class="card-img" src="${categoryArray[i].filename}" alt="Reseptin kuva">
                </div>
                <div class="card-container">
                    <h4 class="card-title">${categoryArray[i].title}</h4>
                    <div class="info-container">
                        <div class="user">
                            <img src="${categoryArray[i].profilepic}"
                                alt="Käyttäjän profiilikuva">
                            <h5 class="username">${categoryArray[i].user}</h5>
                        </div>
                        <div class="user-info">
                            <i class="fas fa-candy-cane"></i>${categoryArray[i].rates}
                        </div>
                    </div>
                </div>
            </a>
        </div>`;
    }
}

getCards();


