import { em2px } from '/assets/js/em2px.js';

function dropOrDont() {
    var arrow = document.getElementById("arrow");
    document.getElementById("down").classList.toggle("show");
    document.getElementById("topbtn").classList.toggle("visible");
    document.body.classList.toggle("disable-scroll");
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