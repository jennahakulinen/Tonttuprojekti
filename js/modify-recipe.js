// Ei toimi

'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// get query parameter
const getQParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};

// get id from address
const RecipeID = getQParam('ID');

// select existing html elements
const modForm = document.querySelector('#modRecipeForm');

// get user data for admin check
const user = JSON.parse(sessionStorage.getItem('user'));

// if user is not admin delete owner selection
if (user.role > 0) userList.remove();

// add existing recipe data to form
const getRecipe = async (id) => {
  const fetchOptions = {
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  };
  const response = await fetch(url + '/cat/' + id, fetchOptions);
  const recipe = await response.json();
  const inputs = modForm.querySelectorAll('input');
  inputs[0].value = recipe.name;
  inputs[1].value = recipe.quantity;
  inputs[2].value = recipe.unit;
  inputs[3].value = recipe.ingredient;
  inputs[4].value = recipe.step;
  inputs[5].value = recipe.description;
  inputs[6].value = recipe.cooktime;
  inputs[7].value = recipe.category;
  inputs[8].value = recipe.picture;
  if (user.role === 0) modForm.querySelector('select').value = recipe.username;
};

// create user options to <select>
const createUserOptions = (users) => {
  // clear user list
  userList.innerHTML = '';
  users.forEach((user) => {
    // create options with DOM methods
    const option = document.createElement('option');
    option.value = user.user_id;
    option.innerHTML = user.name;
    userList.appendChild(option);
  });
  // load cat data after users
  getRecipe(cat_id);
};

// get users to make options
const getUsers = async () => {
  try {
    const options = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user', options);
    const users = await response.json();
    createUserOptions(users);
  } catch (e) {
    console.log(e.message);
  }
};

// submit modify form
modForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(modForm);
  // remove empty properties
  for (const [prop, value] of Object.entries(data)) {
    if (value === '') {
      delete data[prop];
    }
  }
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  };

  console.log(fetchOptions);
  const response = await fetch(url + '/recipe/' + RecipeID, fetchOptions);
  const json = await response.json();
  if (json.error) {
    alert(json.error.message);
  } else {
    alert(json.message);
  }
  location.href = 'etusivu.html';
});

// start filling the form
if (user.role === 0) {
  getUsers(); // if admin
} else {
  getRecipe(RecipeID); // if regular user
}
