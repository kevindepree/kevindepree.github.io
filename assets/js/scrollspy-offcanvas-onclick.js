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

window.onscroll = () => scrollsleuth();
window.onload = () => scrollsleuth();
window.onresize = () => scrollsleuth();

scrollsleuth = () => {
  const pagePosition = window.scrollY;
  scrollSections.forEach(section => {
    let sectionPosition = section.offsetTop;
    if(pagePosition > sectionPosition - 50){
      navLinkAnchors.forEach(anchor => {
        let anchorIdArray = anchor.href.split("#");
        let anchorId = anchorIdArray.at(-1);
        if(anchorId === section.id){
          navLinks.forEach(element => element.classList.remove("uk-active"));
          anchor.parentElement.classList.add("uk-active");
        }  
      });            
    }
  });
};