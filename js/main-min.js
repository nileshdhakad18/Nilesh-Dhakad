document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar burger and navbar menu elements
    var navbarBurger = document.querySelector(".navbar-burger");
    var navbarMenu = document.querySelector("#navMenu");
  
    // Add click event listener to the navbar burger
    navbarBurger.addEventListener("click", function() {
      // Toggle the "is-active" class on both the burger and menu
      navbarBurger.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    });
  });
  