document.addEventListener('DOMContentLoaded', function() {
  const GalarySection = document.getElementById("art");
  const previousbuttondiv = document.getElementById("left-button");
  const nextbuttondiv = document.getElementById("right-button");

  const previousbutton = document.querySelector('.left');
  const nextbutton = document.querySelector('.right');
  // Create an observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Div is in view
        previousbuttondiv.style.display = 'block';
        nextbuttondiv.style.display = 'block';
      } else {
        // Div is out of view
        previousbuttondiv.style.display = 'none';
        nextbuttondiv.style.display = 'none';
      }
    });
  }, { threshold: 0.85 }); // Trigger when 50% of the div is visible

  // Start observing the target div
  observer.observe(GalarySection);

  function scrollright()
  {
    console.log("lllllllllllllllllllllll");
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

  previousbutton.addEventListener('click', scrollleft);
  nextbutton.addEventListener('click', scrollright);

});