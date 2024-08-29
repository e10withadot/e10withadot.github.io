import { em2px } from '/assets/js/em2px.js';
import { enableBodyScroll, disableBodyScroll } from '/assets/js/bodyScrollLock.es6.js';

function dropOrDont() {
    var arrow = document.getElementById("arrow");
    const topbtn = document.getElementById("topbtn");
    const down = document.getElementById("down");

    down.classList.toggle("show");
    if (down.classList.contains("show"))
        disableBodyScroll(down);
    else enableBodyScroll(down);

    if (topbtn != null)
        topbtn.classList.toggle("visible");
    
    arrow.innerHTML = arrow.innerHTML === "V" ? "X" : "V";
}

window.dropOrDont = dropOrDont;

window.addEventListener('resize', function(){
    const down = document.getElementById("down");
    if (down.classList.contains("show"))
        if (window.innerWidth > em2px(42)) {
            enableBodyScroll(down);
            return;
        }
        else disableBodyScroll(down);
});