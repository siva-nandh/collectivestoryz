var cursor = document.querySelector(".custom-cursor");
var follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + (e.clientX - 35) + "px; top: " + (e.clientY - 45) + "px;";
  follower.style.cssText ="left: " + (e.clientX - 30) + "px; top: " + (e.clientY - 30) + "px;";
});

var cursorr = $(".custom-cursor"),
  followerr = $(".cursor-follower");

$(".cursor-active").on("mouseenter", function () {
  cursorr.addClass("active");
  followerr.addClass("active");
});

$(".cursor-active").on("mouseleave", function () {
  cursorr.removeClass("active");
  followerr.removeClass("active");
});


