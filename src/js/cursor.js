var cursor = document.querySelector(".custom-cursor");
var cursorr = $(".custom-cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + (e.clientX - 35) + "px; top: " + (e.clientY - 45) + "px;";

  $(".cursor-active").on("mouseenter", function () {
    cursorr.addClass("active");
  });

  $(".cursor-active").on("mouseleave", function () {
    cursorr.removeClass("active");
  });
});




let video = document.getElementById('projVideo');
let isPaused = false;
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio != 1 && !video.paused) {
      video.pause();
      isPaused = true;
    }
    // else if(isPaused) {
    //     video.play(); 
    //     isPaused=false}
  });
}, {
  threshold: 1
});
observer.observe(video);