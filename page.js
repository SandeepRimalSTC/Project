const navToggle = document.getElementById('js-nav-toggle'); 
const sideNav = document.getElementById('js-side-nav'); 
const mainContent = document.getElementById('js-main-content'); 

navToggle.addEventListener('click', function() {
    sideNav.classList.toggle('is-active');
    navToggle.classList.toggle('is-active');
    mainContent.classList.toggle('is-pushed');
});
