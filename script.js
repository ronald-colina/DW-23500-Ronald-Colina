const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

window.addEventListener ("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});