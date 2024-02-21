const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  
    effect: 'slide',
    direction: 'horizontal',
    loop: true,
    autoHeight:true,
 });

 var menuButton = document.getElementById("menu-button");
 var menu = document.getElementById("menu");
 
 menuButton.addEventListener("click", function() {
   if (menu.style.display === "block") {
     menu.style.display = "none";
   } else {
     menu.style.display = "block";
   }
 });