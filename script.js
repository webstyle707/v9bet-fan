function toggle() {
  var clickNavbar = document.querySelector("#clickNavbar");
  clickNavbar.style.transition = "all 0.1s ease";
  clickNavbar.style.display = "flex";
}


function hiddenMenu() {
  var clickNavbar = document.querySelector("#clickNavbar");
  clickNavbar.style.transition = "all 1s ease";
  clickNavbar.style.display = "none";
}








//=================>  click button scroll to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}



// When the user clicks on the button, scroll to the top of the document with animation
function scrollToTop() {
  // Scroll to the top of the document with animation
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 8);
  }
}





