import { isScrollLocked } from '/assets/js/bodyScrollLock.es6.js';

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.topFunction = topFunction;

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById("nav");
    const socials = document.getElementById('socials');
    const topbutton = document.getElementById("topbtn");

    function GUIscroll() {
        if (isScrollLocked())
            return;

        const socialsBottom = socials.getBoundingClientRect().bottom;
        if (socialsBottom <= 0) {
            nav.classList.add("visible");
            topbutton.classList.add("visible");
            return;
        }
        nav.classList.remove("visible");
        topbutton.classList.remove("visible");
    }

    GUIscroll();
    window.addEventListener('scroll', GUIscroll);
});