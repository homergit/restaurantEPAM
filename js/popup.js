var bookingPopUp = document.getElementById("bookingPopUp");
var bookingFadeOut = document.getElementById("bookingFadeOut");
var bookingFadeIn = document.getElementById("bookingFadeIn");

function fadeOut(e) {
  event.preventDefault();
  document.body.style.overflow = 'auto';
  e.style.opacity = 1;
  (function fade() {
    if ((e.style.opacity -= .05) < 0) {
      e.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(e, display) {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  e.style.opacity = 0;
  e.style.display = display || "block";
  (function fade() {
    var val = parseFloat(e.style.opacity);
    if (!((val += .05) > 1)) {
      e.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};


function handlerFadeOut() {
  fadeOut(bookingPopUp);
}
function handlerFadeIn() {
  fadeIn(bookingPopUp);
}


bookingFadeIn.addEventListener("click", handlerFadeIn);
bookingFadeOut.addEventListener("click", handlerFadeOut);