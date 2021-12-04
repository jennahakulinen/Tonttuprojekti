const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigationNav");
const menuBtn = document.querySelector(".hamBut");
const searchBtn = document.querySelector(".searchBut");
const userBtn = document.querySelector(".userBut");
const closeBtn = document.querySelector(".closeBut");
const dropdownBtn = document.querySelector(".dropBut");
const dropdownMenu = document.getElementById("dropdownMenu");
const userMenu = document.querySelector(".user-menu");
const user = document.querySelector(".user");
const search = document.querySelector(".search");
const body = document.querySelector("body");


const disableScrolling = () => {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
    body.classList.toggle("lockScroll");
  };
}

const enableScrolling = () => {
  window.onscroll = () => {
    body.classList.remove("lockScroll");
  };
}


const showNav = () => {
  menu.classList.toggle('active');
}

const hideNav = () => {
  menu.classList.remove('active');
}

menuBtn.onclick = () => {
  menu.style.opacity = "100%";
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
  searchBtn.style.display = "none";
  userBtn.style.display = "none";
  showNav();
  disableScrolling();
}

closeBtn.onclick = () => {
  menu.style.opacity = "60%";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  searchBtn.style.display = "block";
  userBtn.style.display = "block";
  hideNav();
  enableScrolling();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
dropdownBtn.onclick = () => {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
// if (!event.target.matches('.dropbtn')) {
// var dropdowns = document.getElementsByClassName("dropdown-content");
// var i;
// for (i = 0; i < dropdowns.length; i++) { // var openDropdown=dropdowns[i]; // if
    //(openDropdown.classList.contains('show')) { // openDropdown.classList.remove('show'); // } // } // } // } //
    //dropdownBtn.onclick=()=> {
    // if (dropdownMenu.style.display === "none") {
    // dropdownMenu.style.display = "block";
    // } else {
    // dropdownMenu.style.display = "none";
    // }

    // }

    // /* Toggle mobile menu */ //nuoli funktiot!
    // const toggleMenu = () => {
    // menu.classList.toggle('active');

    // if (userMenu.classList.contains('active')) {
    // userMenu.classList.remove('active');
    // }
    // if (menu.classList.contains("active")) {
    // // adds the close (x) icon
    // toggle.querySelector("a").innerHTML = "<i class='fas fa-times-circle'></i>";
    // } else {
    // // adds the menu (hamburger) icon
    // toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    // }
    // }

    // // Toggle user

    // const toggleUser = () => {
    // userMenu.classList.toggle('active');

    // if (menu.classList.contains('active')) {
    // menu.classList.remove('active');
    // }
    // if (userMenu.classList.contains("active")) {
    // // adds the close (x) icon
    // user.querySelector("a").innerHTML = "<i class='fas fa-times-circle'></i>";
    // } else {
    // // adds the user icon
    // user.querySelector("a").innerHTML = '<i class="fas fa-user"></i>';
    // }
    // }

    // /* Event Listener */
    // toggle.addEventListener("click", toggleMenu, false);

    // const items = document.querySelectorAll(".item");

    // user.addEventListener("click", toggleUser, true);



    // /* Activate Submenu */
    // const toggleItem = (evt) => {
    // if (evt.currentTarget.classList.contains("submenu-active")) {
    // evt.currentTarget.classList.remove("submenu-active");
    // } else if (menu.querySelector(".submenu-active")) {
    // menu.querySelector(".submenu-active").classList.remove("submenu-active");
    // evt.currentTarget.classList.add("submenu-active");
    // } else {
    // evt.currentTarget.classList.add("submenu-active");
    // }
    // }

    // /* Event Listeners */
    // for (let item of items) {
    // if (item.querySelector(".submenu")) {
    // item.addEventListener("click", toggleItem, false);
    // item.addEventListener("keypress", toggleItem, false);
    // }
    // }

    // /* Close Submenu From Anywhere */
    // function closeSubmenu(e) {
    // let isClickInside = menu.contains(e.target);

    // if (!isClickInside && menu.querySelector(".submenu-active")) {
    // menu.querySelector(".submenu-active").classList.remove("submenu-active");
    // }
    // }

    // /* Event listener */
    // document.addEventListener("click", closeSubmenu, false);
