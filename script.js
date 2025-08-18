function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(false);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let slideIndex = 1;

// show the first slide once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots   = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1)             { slideIndex = slides.length; }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // deactivate all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // show the current slide and activate its dot
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}

/*let ytPlayer;

  // Called by YouTube API when it’s ready (must be global)
  function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('yt-player', {
      playerVars: { rel: 0, playsinline: 1 }
    });

    const videoSlide = document.getElementById('yt-player').closest('mySlides');

    videoSlide.addEventListener("mouseenter", handlePlayButton, false);
    videoSlide.addEventListener("mouseleave", handlePlayButton, false);

  async function playVideo() {
    try {
      await videoSlide.play();
      playButton.classList.add("playing");
    } catch (err) {
      playButton.classList.remove("playing");
    }
  } 

  function handlePlayButton() {
  if (videoSlide.paused) {
    playVideo();
  } else {
    videoSlide.pause();
    playButton.classList.remove("playing");
  }
  }
}*/
