'use strict';
// const url = 'http://localhost:3000'; // change url when uploading to server
const url = 'https://10.114.34.22/app/';
(async () => {
  try {
    const response = await fetch(url + '/auth/logout');
    const json = await response.json();
    console.log(json);
    // remove token
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    alert('You have logged out');
    location.href = 'etusivu.html';
  } catch (e) {
    console.log(e.message);
  }
})();
