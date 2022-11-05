const navLinksClick = document.querySelectorAll('.uk-nav li');

for (let i = 0; i < navLinks.length; i++) {
    navLinksClick[i].addEventListener("click", function() {
        navLinksClick.forEach(element => element.classList.remove("uk-active"));       
        this.classList.add("uk-active");
    });
}