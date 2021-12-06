const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigationNav");
const menuBtn = document.querySelector(".hamBut");
const userBtn = document.querySelector(".userBut");
const closeBtn = document.querySelector(".closeBut");
const dropdownBtn = document.querySelector(".dropBut");
const dropdownMenu = document.getElementById("dropdownMenu");
const userMenu = document.querySelector(".userNav");
const user = document.querySelector(".user");
const body = document.querySelector("body");
const searchBtn = document.querySelector(".searchBut");
const searchForm = document.querySelector(".search-box");
const closeSearchBtn = document.querySelector(".closeSearchBut");


const disableScrolling = () => {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
}

const enableScrolling = () => {
  window.onscroll = () => {
  };
}


const showNav = () => {
  menu.classList.toggle('active');
}

const hideNav = () => {
  menu.classList.remove('active');
}


searchBtn.onclick = () => {
  searchForm.style.visibility = "visible";
  searchBtn.style.display = "none";
  userBtn.style.display = "none";
  menuBtn.style.display = "none";
  closeSearchBtn.style.display = "block";
}

closeSearchBtn.onclick = () => {
  searchForm.style.visibility = "hidden";
  searchBtn.style.display = "block";
  userBtn.style.display = "block";
  menuBtn.style.display = "block";
  closeSearchBtn.style.display = "none";
}


menuBtn.onclick = () => {
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
  searchBtn.style.display = "none";
  userBtn.style.display = "none";
  body.style.overflow = "hidden";
  showNav();
  disableScrolling();
}

closeBtn.onclick = () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  searchBtn.style.display = "block";
  userBtn.style.display = "block";
  body.style.overflow = "visible";
  hideNav();
  enableScrolling();
}


dropdownBtn.onclick = () => {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

