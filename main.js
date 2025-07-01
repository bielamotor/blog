      function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; // px

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // Optional: remove class to re-trigger animation on scroll up
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Trigger on load as well
reveal();

// Contact Modal Logic
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("contact-modal");
    const openBtn = document.getElementById("open-contact-modal");
    const closeBtn = document.querySelector(".close-modal");

    if(openBtn) {
      openBtn.onclick = function(e) {
          e.preventDefault();
          modal.style.display = "flex";
      }
    }

    if(closeBtn) {
      closeBtn.onclick = function() {
          modal.style.display = "none";
      }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});