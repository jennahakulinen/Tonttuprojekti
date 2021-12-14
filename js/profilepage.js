'use strict';

const url = 'http://localhost:3000';

// const profileArray = [
//     {
//     filename: 'img/santa-claus.png',
//     username: 'Käyttäjä 1'
//     },
//     {
//     filename: 'img/santa-claus.png',
//     username: 'Käyttäjä 1'
//     },
//     {
//     filename: 'img/santa-claus.png',
//     username: 'Käyttäjä 1'
//     }

// ]

const addProfile = document.querySelector('#addProfile');

const getProfile = (users) => {
    addProfile.innerHTML = ``;
    addProfile.innerHTML +=
        `<div class="img__profile">
            <img src="${profileData[0].filename}" alt="profile">
        </div>
        <div class="name">${profileData[0].username}</div>`;
}

getProfile();


const getProfileData = async () => {
    try {
        const response = await fetch(url + '/user');
        const profiles = await response.json();
        getProfile(profiles);
    } catch (e) {
        console.log(e.message);
    }
};

getProfileData();
