import { em2px } from '/assets/js/em2px.js';
import { clearAllBodyScrollLocks, disableBodyScroll } from '/assets/js/bodyScrollLock.es6.js';

var arrow = document.getElementById("arrow");
const down = document.getElementById("down");
const wrapper = document.getElementById("down-wrapper");
const nav = document.getElementById("nav");

function dropOrDont() {
    down.classList.toggle("show");
    if (down.classList.contains("show")){
        disableBodyScroll(nav);
        disableBodyScroll(wrapper);
    }
    else clearAllBodyScrollLocks();
    arrow.innerHTML = arrow.innerHTML === "V" ? "X" : "V";
}

window.dropOrDont = dropOrDont;

window.addEventListener('resize', function(){
    if (down.classList.contains("show")){
        if (window.innerWidth > em2px(42)) {
            down.classList.remove("show");
            clearAllBodyScrollLocks();
        }
        else {
            down.classList.add("show");
            disableBodyScroll(nav);
            disableBodyScroll(wrapper);
        }
    }
});