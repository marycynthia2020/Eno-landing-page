const hambugerHolder = document.getElementById("hambuger-holder");
const mobileNav = document.getElementById("mobile-nav");
const container = document.getElementById("container");

hambugerHolder.addEventListener("click", showMenu);

function showMenu() {
  mobileNav.classList.toggle("open");

  if (mobileNav.classList.contains("open")) {
    hambugerHolder.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    hambugerHolder.innerHTML = ' <i class="fa-solid fa-bars" ></i>';
  }
}
