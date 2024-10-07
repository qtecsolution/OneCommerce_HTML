// scroll to top
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    // You can adjust the 50px as needed
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
