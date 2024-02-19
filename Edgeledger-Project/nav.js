// Navbar jump
const navbar = document.getElementById("nav-edge");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-90px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 150);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
