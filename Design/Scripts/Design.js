document.addEventListener('DOMContentLoaded', function() {


// Select the button element
const readMoreBtn = document.querySelector('.sideBarButton');

// Define the function to run when the button is clicked
function printShit() {
    console.log('100'); // This logs '100' to the console
}

// Attach the function to the button's click event
readMoreBtn.addEventListener('click', printShit);
});