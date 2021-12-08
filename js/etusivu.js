'use strict';

const popularArray = [
    {
        filename: 'img/image5.jpg',
        recipelink: 'recipe.html',
    },
    {
        filename: 'img/image4.jpg',
        recipelink: 'recipe.html',
    },
    {
        filename: 'img/image3.jpg',
        recipelink: 'recipe.html',
    },
    {
        filename: 'img/image2.jpg',
        recipelink: 'recipe.html',
    },
    {
        filename: 'img/image1.jpg',
        recipelink: 'recipe.html',
    },
];

const slideshow = document.querySelector('.slideshow-container');

const getPopularRecipes = () => {
    slideshow.innerHTML = ``;
    slideshow.innerHTML +=
        `<div class="items">
        <div class="item active">
            <a href="${popularArray[0].recipelink}"><img src="${popularArray[0].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item next">
            <a href="${popularArray[1].recipelink}"><img src="${popularArray[1].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item">
            <a href="${popularArray[2].recipelink}"><img src="${popularArray[2].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item">
            <a href="${popularArray[3].recipelink}"><img src="${popularArray[3].filename}" alt="Slideshow-kuva"></a>
        </div>
        <div class="item prev">
            <a href="${popularArray[4].recipelink}"><img src="${popularArray[4].filename}" alt="Slideshow-kuva"></a>
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

getPopularRecipes();



const recipeArray = [
    {
        filename: 'img/image10.jpg',
        title: 'Piparitalo',
        user: 'BestCook',
        profilepic: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
        rates: '4/5',
    },
    {
        filename: 'img/image11.jpg',
        title: 'Paistettu kalkkuna',
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
