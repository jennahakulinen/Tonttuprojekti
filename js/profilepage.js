'use strict';

const url = 'http://localhost:3000';


const addProfile = document.querySelector('#addProfile');

const getProfile = (profileData) => {
    console.log('profiledata', profileData);
    addProfile.innerHTML = ``;
    addProfile.innerHTML +=
        `<div class="img__profile">
            <img src="${url}/${profileData.ProfilePic}" alt="profile">
        </div>
        <div class="name">${profileData.Username}</div>`;
}

const getProfileData = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    try {
        const fetchOptions = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/user/' + user.Username, fetchOptions);
        const profiles = await response.json();
        getProfile(profiles);
    } catch (e) {
        console.log(e.message);
    }
};

getProfileData();
