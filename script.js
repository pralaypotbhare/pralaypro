const navlinks = document.querySelectorAll(".nav-menu .nav-link")
const menuopenbutton = document.querySelector("#menu-open-button");
const menuclosebutton = document.querySelector("#menu-close-button");
menuopenbutton.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile-menu");
});
menuclosebutton.addEventListener("click", () => menuopenbutton.click())
navlinks.forEach(links => {
    links.addEventListener("click", () => menuopenbutton.click());
}

);
const swiper = new Swiper('.slider-wrapper', {
    
  
    loop: true,
    
  
    
    pagination: {
      el: '.swiper-pagination',
   
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });