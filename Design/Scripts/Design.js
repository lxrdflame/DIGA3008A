document.addEventListener("DOMContentLoaded", function () {
  // Select the button element

  const ShowSideBarBtn = document.getElementById("sideBarButton");
  const sideBar = document.querySelector(".SideBar");

  const viewportWidth = window.innerWidth;

  // Define the function to run when the button is clicked
  let isMoved = false;
  function printShit() {
    if (viewportWidth > 768) {
      if (window.screen.width > 768) {
        if (!isMoved) {
          sideBar.style.left = "0px"; // Move right
          isMoved = true;
        } else {
          sideBar.style.left = "-14%"; // Return to start
          isMoved = false;
        }
      }
    } else if (viewportWidth < 768) {
      if (window.screen.width > 768) {
        if (!isMoved) {
          sideBar.style.left = "0px"; // Move right
          isMoved = true;
        } else {
          sideBar.style.left = "-22%"; // Return to start
          isMoved = false;
        }
      }
    }
  }

  function CloseSideBar() {
    if (isMoved) {
      sideBar.style.left = "-14%"; // Return to start
      isMoved = false;
    } else {
      return;
    }
  }

  // Attach the function to the button's click event
  ShowSideBarBtn.addEventListener("click", printShit);
  window.addEventListener("scroll", CloseSideBar);
});
