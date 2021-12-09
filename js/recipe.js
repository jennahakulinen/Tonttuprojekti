'use strict';

const recipeStuff = [
    {
        filename: 'img/image10.jpg',
        title: 'Joululetut',
        user: 'BestCook',
        profilepic: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
        rates: '4/5',
        ingredients: 'blabla',
        steps: 'blabla',
        cooktime: '30',
    },
];

const categoryStuff = ["Vegaaninen joulu", "Leivonta", "Jälkiruoka", "Jouluinen", "Herkku"];

const recipebasis = document.querySelector('.recipebasis');


const getRecipe = () => {
    recipebasis.innerHTML = ``;
    recipebasis.innerHTML +=
        `<div class="col-12 recipebasis">
        <div class="recipe-header-img">
            <img class="recipe-img" src="${recipeStuff[0].filename}" alt="Reseptin kuva">
        </div>
        <div class="recipe-addfav">
            <i class="far fa-heart recipe-emptyfav"></i>
            <i class="fas fa-heart recipe-fav"></i>
        </div>
        <div class="recipe-header">
            <div class="recipe-name">
                <h2>${recipeStuff[0].title}</h2>
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
                <img src="${recipeStuff[0].profilepic}"
                    alt="user" />
                <h5 class="recipe-username"><a href="profilepage.html">${recipeStuff[0].user}</a></h5>
            </div>
            <div class="recipe-rates">
                <i class="fas fa-candy-cane"></i>${recipeStuff[0].rates}
            </div>
        </div>
        <div class="recipe-categories">
        </div>
    </div>`;

    const recipeCategories = document.querySelector('.recipe-categories');

    recipeCategories.innerHTML = ``;

    for (let i = 0; i < categoryStuff.length; i++) {
        recipeCategories.innerHTML +=
            `<div class="recipe-cat-item">${categoryStuff[i]}</div>`;
    }

    recipebasis.innerHTML +=
        `<hr class="re-hr">

        <div class="col-12 recipe-container">
            <div class="col-12">
                <h1 class="header recipe-h">Ainesosat</h1>
                <div class="col-11 recipe-ingredients">
                    <ul class="recipe-grid-container">
                        <li class="recipe-grid">2</li>
                        <li class="recipe-grid">dl</li>
                        <li class="recipe-grid">korppujauhoja</li>
                        <li class="recipe-grid">1</li>
                        <li class="recipe-grid">kpl</li>
                        <li class="recipe-grid">sitruunaa</li>
                    </ul>
                </div>
            </div>
    
            <div class="col-12">
                <h1 class="header recipe-h">Ohjeet</h1>
                <div class="col-11 recipe-steps">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in. Repellat
                            doloremque
                            earum, vitae alias aliquam debitis laboriosam doloribus. Odio, libero? Doloribus
                            asperiores
                            sit
                            eum nemo repellat aspernatur nisi fugiat?</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi obcaecati odit itaque
                            ipsam
                            eos nisi quos ut quae ducimus sequi, facilis rerum beatae architecto nam pariatur
                            numquam
                            temporibus. Sapiente, sunt.</li>
                    </ul>
                </div>
                <div class="recipe-cookingtime">
                    <i class="far fa-clock cooktime"></i>
                    <p>${recipeStuff[0].cooktime} min</p>
                </div>
            </div>
        </div>`;




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

getRecipe();
