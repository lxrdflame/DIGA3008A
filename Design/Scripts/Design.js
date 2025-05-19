document.addEventListener('DOMContentLoaded', function() {


// Select the button element
const ShowSideBarBtn = document.getElementById('sideBarButton');
const sideBar = document.querySelector('.SideBar');
// Define the function to run when the button is clicked
let isMoved = false;
function printShit() {
    if (!isMoved) {
        sideBar.style.left = '0px'; // Move right
        isMoved = true;
      } else {
        sideBar.style.left = '-210px'; // Return to start
        isMoved = false;
      }
}

function CloseSideBar()
{
    if(isMoved)
    {
        sideBar.style.left = '-210px'; // Return to start
        isMoved = false;
    }
    else {return;}
}

// Attach the function to the button's click event
ShowSideBarBtn.addEventListener('click', printShit);
window.addEventListener('scroll', CloseSideBar);

});