document.addEventListener("DOMContentLoaded", function () {
  const BackToTopButton = document.querySelector(".back-to-top");
  const BackToTopdiv = document.getElementById("Button-div");
  const Header = this.getElementById("header");

  function BackToTop() {
    document.getElementById("header").scrollIntoView();
    BackToTopdiv.style.display = "none";
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        BackToTopdiv.style.display = "none";
      } else {
        BackToTopdiv.style.display = "block";
      }
    });
  });

  observer.observe(Header);

  BackToTopButton.addEventListener("click", BackToTop);
});
