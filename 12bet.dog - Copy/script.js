// var dropdown = document.querySelector(".dropdown");
// var show1 = document.querySelector(".show1");
// var hide = document.querySelector(".hide");

// function showDropdown() {
//   hide.style.height = "100%";
//   hide.style.overflow = "visible";
//   show1.style.height = "0%";
//   show1.style.overflow = "hidden";

//   dropdown.style.paddingBottom = "1rem";
//   dropdown.style.height = "340px";
//   dropdown.style.overflow = "visible";
//   dropdown.style.transition = "all 0.5s ease";
// }

// function hideDropdown() {
//   hide.style.height = "0";
//   hide.style.overflow = "hidden";
//   show1.style.height = "100%";
//   show1.style.overflow = "visible";

//   dropdown.style.paddingBottom = "0";
//   dropdown.style.height = "0";
//   dropdown.style.overflow = "hidden";
//   dropdown.style.transition = "all 0.5s ease";
// }



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
