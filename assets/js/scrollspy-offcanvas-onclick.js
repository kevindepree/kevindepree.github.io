const button = document.querySelector('.uk-navbar-toggle-animate');
const navLinks = document.querySelectorAll('.uk-nav li');
const navLinkAnchors = document.querySelectorAll('.uk-nav li a');
const scrollSections = document.querySelectorAll('.scroll-target');

button.addEventListener('click', (event) => {
  button.classList.toggle("nav-open");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      button.classList.remove("nav-open");
      navLinks.forEach(element => element.classList.remove("uk-active"));       
      this.classList.add("uk-active");
    });
}

window.onload = (event) => {
  scrollSections.forEach(element => console.log(element.offsetTop))
  console.log(window.scrollY);
};