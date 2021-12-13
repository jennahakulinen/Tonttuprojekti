'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

const addUserForm = document.querySelector('#add-user-form');

// submit register form
addUserForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = new FormData(addUserForm);
    const fetchOptions = {
      method: 'POST',
      body: data,
    };
    const response = await fetch(url + '/auth/register', fetchOptions);
    const json = await response.json();
    alert(json.message);
  });