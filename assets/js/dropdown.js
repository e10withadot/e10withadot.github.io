import { em2px } from '/assets/js/em2px.js';
import { enableBodyScroll, disableBodyScroll } from '/assets/js/bodyScrollLock.es6.js';

const down = document.getElementById("down");
const wrapper = document.getElementById("nav-wrapper");

function dropOrDont() {
    down.classList.toggle("show");
    if (down.classList.contains("show")){
        disableBodyScroll(wrapper);
    }
    else enableBodyScroll(wrapper);
    arrow.innerHTML = arrow.innerHTML === "V" ? "X" : "V";
}

window.dropOrDont = dropOrDont;

window.addEventListener('resize', function(){
    if (window.innerWidth > em2px(42) && down.classList.contains("show")) {
        down.classList.remove("show");
        enableBodyScroll(wrapper);
    }
    else if (window.innerWidth < em2px(42) && !(down.classList.contains("show"))){
        down.classList.add("show");
        disableBodyScroll(wrapper);
    }
});