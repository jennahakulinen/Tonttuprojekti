'use strict';
// const url = 'http://localhost:3000'; // change url when uploading to server
const url = 'https://10.114.34.22/app/';
// select existing html elements
const addForm = document.querySelector('#addRecipeForm');


// submit add recipe form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: fd,
  };
  const response = await fetch(url + '/recipe', fetchOptions);
  const json = await response.json();
  alert("Recipe added!");
  location.href = 'etusivu.html';
});
