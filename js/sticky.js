var header = document.getElementById("headerAnchor");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("header_sticky");
    } else {
        header.classList.remove("header_sticky");
    }
};

window.onscroll = function () {
    stickyHeader()
};