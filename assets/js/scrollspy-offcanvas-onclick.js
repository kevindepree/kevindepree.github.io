const button = document.querySelector('.uk-navbar-toggle-animate');
const navLinks = document.querySelectorAll('.uk-nav li');

button.addEventListener('click', (event) => {
  button.classList.toggle("nav-open");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      button.classList.remove("nav-open");
    });
}