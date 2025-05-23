document.addEventListener('DOMContentLoaded', function() {
  const GalarySection = document.getElementById("art");
  const previousbuttondiv = document.getElementById("left-button");
  const nextbuttondiv = document.getElementById("right-button");

  const previousbutton = document.querySelector('.left');
  const nextbutton = document.querySelector('.right');

  //Picture enlarger
  const images = this.querySelectorAll(".artwork");
  

  let isScrolling = false;
  // Create an observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting ) {
        // Div is in view
        previousbuttondiv.style.display = 'block';
        nextbuttondiv.style.display = 'block';
      } else {
        // Div is out of view
        previousbuttondiv.style.display = 'none';
        nextbuttondiv.style.display = 'none';
      }
    });
  }, { threshold: 0.85 }); //trigger the buttons when 80% of the div is in view

  observer.observe(GalarySection);

  function scrollright()
  {
    GalarySection.scrollTo({
      left: GalarySection.scrollLeft + 400,
    })
  }

  function scrollleft()
  {
    GalarySection.scrollTo({
      left: GalarySection.scrollRight + 400,
    })
  }

  // Track enlarged state
let isEnlarged = false;
let currentEnlargedImg = null;
let scrollTimer;

// Add click handlers to all images
images.forEach(img => {
  img.addEventListener('click', function enlarge() {
    if (this.style.width !== "80%") {
      // Reset any previously enlarged image
      if (currentEnlargedImg) {
        resetImage(currentEnlargedImg);
      }
      
      // Enlarge this image
      this.style.width = "80%";
      this.style.position = "absolute";
      this.style.left = "50%";
      this.style.transform = "translateX(-50%)";
      previousbuttondiv.style.display = "none";
      nextbuttondiv.style.display = "none";
      document.body.style.cursor = "zoom-out";
      
      
      // Update state
      isEnlarged = true;
      currentEnlargedImg = this;
    } else {
      resetImage(this);
    }
  });
});

// Reset image function
function resetImage(img) {
  img.style.width = "430px";
  img.style.position = "inherit";
  img.style.zIndex = "";
  img.style.left = "";
  img.style.transform = "";
  previousbuttondiv.style.display = "block";
  nextbuttondiv.style.display = "block";
  // Update state
  isEnlarged = false;
  currentEnlargedImg = null;
  document.body.style.cursor = "auto";

}

// Scroll detection
window.addEventListener('scroll', function() {
  if (isEnlarged && currentEnlargedImg) {
    // Reset the enlarged image when scrolling
    resetImage(currentEnlargedImg);
  }
  
  // Optional: Debounce to prevent multiple resets during fast scrolling
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    // Additional scroll-end logic if needed
  }, 100);
});
    
  

  previousbutton.addEventListener('click', scrollleft);
  nextbutton.addEventListener('click', scrollright);
  
});