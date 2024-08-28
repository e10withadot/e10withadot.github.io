import { em2px } from '/assets/js/em2px.js';

const $body = document.querySelector('body');
let scrollPosition = 0;

function dropOrDont() {
    var arrow = document.getElementById("arrow");
    const topbtn = document.getElementById("topbtn");

    document.getElementById("down").classList.toggle("show");
    if (topbtn != null)
        topbtn.classList.toggle("visible");
    document.body.classList.toggle("disable-scroll");
    scrollPosition = window.scrollY;
    if (document.body.classList.contains("disable-scroll"))
        document.body.style.top = `-${scrollPosition}px`;
    else {
        document.body.style.removeProperty('top');
        window.scrollTo(0, scrollPosition);
    }
    arrow.innerHTML = arrow.innerHTML === "V" ? "X" : "V";
}

window.dropOrDont = dropOrDont;

window.addEventListener('resize', function(){
    if (document.getElementById("down").classList.contains("show"))
        if (window.innerWidth > em2px(42)) {
            document.body.classList.remove("disable-scroll");
            return;
        }
        else document.body.classList.add("disable-scroll");
});