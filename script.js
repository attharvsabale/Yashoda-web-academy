
'use strict';

// event function
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// nav-bars
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const marquee = document.getElementById("looptext");



const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}


addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}


addEventOnElem(navLinks, "click", closeNavbar);

const toggleMarquee = function () {
    if (window.scrollY > 100) {
        marquee.style.display = "none";
    } else {
        marquee.style.display = "block";
    }
};

window.addEventListener("scroll", toggleMarquee);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}


addEventOnElem(window, "scroll", activeElem);


// slideing loop  our Desk SECTION

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  

// function  for img sliding


document.addEventListener("DOMContentLoaded", function () {
  const heroImage = document.getElementById("hero-image");
  const imageArray = [
    "./assets/images/lightbulp.jpg",
    "./assets/images/photo1.jpeg",
    "./assets/images/photo2.jpeg", 
    "./assets/images/photo3.jpeg",
    "./assets/images/photo4.jpeg",
    "./assets/images/photo5.jpeg",
    "./assets/images/photo7.jpeg",
    "./assets/images/hero-banner-1.jpg"
  ];
  let currentIndex = 0;

  function changeImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    heroImage.src = imageArray[currentIndex];
  }

  setInterval(changeImage, 4000); // Change image every 1 second (adjust as needed)
});
















// 'Use strick'

// // event function

// const addEventOnElem = function (elem, type, callback) {
//     if (elem.length > 1) {
//       for (let i = 0; i < elem.length; i++) {
//         elem[i].addEventListener(type, callback);
//       }
//     } else {
//       elem.addEventListener(type, callback);
//     }
//   }


//   // nav-bars

// const navbar = document.querySelector("[data-navbar]");
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");
// const navLinks = document.querySelectorAll("[data-nav-link]");
// const overlay = document.querySelector("[data-overlay]");
// const marquee = document.getElementById("looptext");

// const toggleMarquee = function () {
//   if (window.scrollY > 100) {
//     marquee.style.display = "none";
//   } else {
//     marquee.style.display = "block";
//   }
// };


// navTogglers.forEach(function (toggler) {
//   toggler.addEventListener("click", toggleNavbar);
// });

// navLinks.forEach(function (link) {
//   link.addEventListener("click", toggleNavbar);
// });




//   addEventOnElem(navTogglers, "click", toggleNavbar); 

//   const closeNavbar = function () {
//     navbar.classList.remove("active");
//     overlay.classList.remove("active");
//   }
  
//   addEventOnElem(navLinks, "click", closeNavbar);



// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// const activeElem = function () {
//     if (window.scrollY > 100) {
//       header.classList.add("active");
//       backTopBtn.classList.add("active");
//     } else {
//       header.classList.remove("active");
//       backTopBtn.classList.remove("active");
//     }
//   }
  
//   addEventOnElem(window, "scroll", activeElem);