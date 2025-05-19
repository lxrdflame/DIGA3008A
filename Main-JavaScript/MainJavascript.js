document.addEventListener('DOMContentLoaded', function() {

const BackToTopButton = document.querySelector('.back-to-top');
const BackToTopdiv = document.getElementById("Button-div");
function BackToTop(){
    document.getElementById("header").scrollIntoView();
    BackToTopdiv.style.display = "none";

}

let lastScrollTop = 0;

function HideBacToTopButton(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop)
    {
        BackToTopdiv.style.display = "block";

    }
    lastScrollTop = scrollTop <= 0 ? 0 :scrollTop;
}

BackToTopButton.addEventListener('click', BackToTop);
window.addEventListener('scroll', HideBacToTopButton);

});