document.addEventListener("DOMContentLoaded", function () {
  const GalarySection = document.getElementById("art");
  const previousbuttondiv = document.getElementById("left-button");
  const nextbuttondiv = document.getElementById("right-button");

  const previousbutton = document.querySelector(".left");
  const nextbutton = document.querySelector(".right");

  //Picture enlarger
  const images = this.querySelectorAll(".artwork");

  let isScrolling = false;
  // Create an observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Div is in view
          previousbuttondiv.style.display = "block";
          nextbuttondiv.style.display = "block";
        } else {
          // Div is out of view
          previousbuttondiv.style.display = "none";
          nextbuttondiv.style.display = "none";
        }
      });
    },
    { threshold: 0.85 }
  ); //trigger the buttons when 80% of the div is in view

  observer.observe(GalarySection);

  function scrollright() {
    GalarySection.scrollTo({
      left: GalarySection.scrollLeft + 400,
    });
  }

  function scrollleft() {
    GalarySection.scrollTo({
      left: GalarySection.scrollRight + 400,
    });
  }

  // Track enlarged state
  let isEnlarged = false;
  let currentEnlargedImg = null;
  let scrollTimer;

  // Add click handlers to all images
  images.forEach((img) => {
    img.addEventListener("click", function enlarge() {
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
  window.addEventListener("scroll", function () {
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

  previousbutton.addEventListener("click", scrollleft);
  nextbutton.addEventListener("click", scrollright);


  const RandomGameGenerator = document.getElementById('random-game-generator')

  const API_KEY = 'be0c66c2ecc04dc0b9e1109a6af9938d'; 
const GAMES_LIST = document.getElementById('games-list');

async function fetchRandomGame() {
  try {
    const countResponse = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=1`
    );
    const countData = await countResponse.json();
    const totalGames = countData.count; // Total games in RAWG DB (e.g., 500,000+)

    const randomPage = Math.floor(Math.random() * 100) + 1;

    const gameResponse = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${randomPage}&page_size=1`
    );
    const gameData = await gameResponse.json();
    displayRandomGame(gameData.results[0]); // Pass the first (and only) game

  } catch (error) {
    console.error("Error fetching random game:", error);
    GAMES_LIST.innerHTML = `<p>Failed to load game. Try refreshing!</p>`;
  }
}

function displayRandomGame(game) {
  GAMES_LIST.innerHTML = `
    <div class="game-card">
      <img src="${game.background_image || 'https://via.placeholder.com/400x225?text=No+Image'}" alt="${game.name}">
      <div class="game-info">
        <h3>${game.name}</h3>
        <p>⭐ ${game.rating || 'N/A'}/5 (${game.reviews_count || 0} reviews)</p>
        <p>Released: ${game.released || 'Unknown'}</p>
       
      </div>
    </div>
  `;
}

RandomGameGenerator.addEventListener('click', fetchRandomGame);
});
