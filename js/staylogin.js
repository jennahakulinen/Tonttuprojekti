(async () => {
    'use strict';
    const url = 'http://localhost:3000'; // change url when uploading to server

    // check sessionStorage
    if (!sessionStorage.getItem('token') || !sessionStorage.getItem('user')) {
        location.href = 'etusivu.html';
        return;
    } else {
        const json = await response.json();
        sessionStorage.setItem('user', JSON.stringify(json.user));
        document.querySelector('#login').href = 'profilepage.html';
        const recipeAddBtn = document.querySelector('#recipeadd');
        recipeAddBtn.style.display = 'block';
    }
});
