(async () => {
  'use strict';
  // const url = 'http://localhost:3000'; // change url when uploading to server
  const url = 'https://10.114.34.22/app/';
  // check sessionStorage
  if (!sessionStorage.getItem('token') || !sessionStorage.getItem('user')) {
    location.href = 'login.html';
    return;
  }
  // check if token valid
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user/token', fetchOptions);
    if (!response.ok) {
      location.href = 'logout.html';
    } else {
      const json = await response.json();
      sessionStorage.setItem('user', JSON.stringify(json.user));
      document.querySelector('#login').href = 'profilepage.html';
      const recipeAddBtn = document.querySelector('#recipeadd');
      recipeAddBtn.style.display = 'block';
    }
  } catch (e) {
    console.log(e.message);
  }
})();
