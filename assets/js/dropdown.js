import { em2px } from '/assets/js/em2px.js';
import { enableBodyScroll, disableBodyScroll } from '/assets/js/bodyScrollLock.es6.js';

function dropOrDont() {
    var arrow = document.getElementById("arrow");
    const down = document.getElementById("down");
    const wrapper = document.getElementById("down-wrapper");

    down.classList.toggle("show");
    if (down.classList.contains("show"))
        disableBodyScroll(wrapper);
    else enableBodyScroll(wrapper);
    arrow.innerHTML = arrow.innerHTML === "V" ? "X" : "V";
}

window.dropOrDont = dropOrDont;

window.addEventListener('resize', function(){
    var arrow = document.getElementById("arrow");
    const down = document.getElementById("down");
    const wrapper = document.getElementById("down-wrapper");
    if (window.innerWidth > em2px(42)) {
        down.classList.remove("show");
        enableBodyScroll(wrapper);
    }
    else {
        down.classList.add("show");
        disableBodyScroll(wrapper);
    }
});