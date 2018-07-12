window.onscroll = function () {
    sticky()
};
var header = document.getElementById("headerAnchor");
var sticky = header.offsetTop;

function sticky() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};