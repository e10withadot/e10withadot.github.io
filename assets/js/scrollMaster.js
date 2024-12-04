function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.topFunction = topFunction;

// show/hide navbar on scroll point
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById("nav-wrapper");
    const socials = document.getElementById('socials');
    const topbutton = document.getElementById("topbtn");

    function GUIscroll() {
        const socialsBottom = socials.getBoundingClientRect().bottom;
        if (socialsBottom <= 0) {
            wrapper.classList.add("visible");
            topbutton.classList.add("visible");
            return;
        }
        wrapper.classList.remove("visible");
        topbutton.classList.remove("visible");
    }

    GUIscroll();
    window.addEventListener('scroll', GUIscroll);
});