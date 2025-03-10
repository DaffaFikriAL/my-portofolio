/* Scroll to Section */
function scrollToSection(event, sectionId) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  const offset = 70;

  window.scrollTo({
    top: section.offsetTop - offset
  });
}
/* End Scroll to Section */




/* Menu Toggle */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuItems = document.querySelectorAll(".nav-links li a");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove("active");

            
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.classList.add("active");
    } else {
        navLinks.classList.remove("active");
    }
});
/* End Menu Toggle */









/* Back To Top */
document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.querySelector("#backToTop");

  // Pastikan elemen ditemukan
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function(event) {
      event.preventDefault(); // Cegah perilaku default <a href>

      // Scroll ke atas secara halus
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  } else {
    console.error();
  }
});

/* End Back To Top */





// Library Typeit JS
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#myskills", {
      loop: true,
      speed: 100,
      deleteSpeed: 105,
      waitUntilVisible: true
    })
    .type('Web Developer')
    .pause(250)
    .delete()
    .type('Android Developer')
    .pause(300)
    .delete()
    .type('UI/UX Designer')
    .pause(350)
    .delete()
    .go();

  });




  // Library ScrollReveal JS

  /* Scroll Reveal Section About
  ScrollReveal().reveal('#section-tittle-about', {
    distance: '20px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: 0.5,
    mobile: true
    // reset: true
  });

  ScrollReveal().reveal('.about-description', {
    distance: '40px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: 0.3,
    mobile: true
  });
  End Scroll Reveal Section About */




  /* Scroll Reveal Section Education
  ScrollReveal().reveal('#section-tittle-education', {
    distance: '30px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: .3,
    mobile: true
  });

  ScrollReveal().reveal('.timeline-item', {
    distance: '20px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: 0.1,
    mobile: true
  });

  ScrollReveal().reveal('.timeline-date', {
    distance: '20px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: 0.3,
    mobile: true
  });

  ScrollReveal().reveal('.timeline-content', {
    distance: '20px',
    origin: 'bottom',
    duration: 700,
    easing: 'ease',
    viewFactor: 0.3,
    mobile: true
  });
  End Scroll Reveal Section Education */



/* Year */
document.getElementById('year').textContent = new Date().getFullYear();