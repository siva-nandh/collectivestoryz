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


// Give focus on the element to scroll seamlessly
// after loading
document.addEventListener('keydown', function (e) {
  document.getElementById("scrolldiv").focus();
});


// from here auto video pause starts
function autoplaypause() {
  console.log('Video will be paused if it is not fully visible')
    let video = document.getElementById('projVideo');
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
}


// function showcookiesnotice() {
//   console.log("working")
//   $(".cookies-notice").show()
//   $(".cookies-notice").removeClass("is-closed");

//   // var n = window.localStorage.getItem("cPop");
//   // console.log(t), "hide" === n && e(".cookies-notice").remove(), e(".cookies-notice__close-btn").click(function (t) {
//   //     e(".cookies-notice").addClass("is-closed"), setTimeout(function () {
//   //         e(".cookies-notice").remove()
//   //     }, 700), window.localStorage.setItem("cPop", "hide")
//   // })
// }