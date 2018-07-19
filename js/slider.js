var TIMER_LENGTH = 1000;

function timeoutDecorator() {

    var TIME_LENGTH = 5000;
    var photoNum = 0;
    var stopped = false;

    function nextSlide(currentPhoto) {
        var slides = document.getElementsByClassName("carousel__item-wrapper");
        currentPhoto %= slides.length;
        for (var i = 0; i < slides.length; i++) {
            if (i === currentPhoto) {
                slides[i].classList.add("active");
            } else {
                slides[i].classList.remove("active");
            }
        }
        progressBar(0);
    }

    function progressBar() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var elem = document.querySelector(".active .carousel__loader");
        var id = setInterval(frame, TIME_LENGTH / 200);

        function frame() {
            if (stopped) clearInterval(id);
            if (width >= 100) {
                clearInterval(id);
                nextSlide(photoNum++);
            } else {
                width += 0.5;
                elem.style.width = width + "%";
            }
        }
    }

    progressBar(0);
    return function inner(event) {
        if (event) {
            if (event.type === "mouseenter") {
                stopped = true;
            }
            if (event.type === "mouseleave") {
                stopped = false;
                progressBar(parseInt(document.querySelector(".active .carousel__loader").style.width));
            }
        }
    };
}

var timeout = timeoutDecorator();
timeout();

Array.from(document.getElementsByClassName("carousel__inner")).forEach(function (element) {
    element.addEventListener("mouseleave", timeout);
    element.addEventListener("mouseenter", timeout);
});
