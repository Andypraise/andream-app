const loadDiv = document.querySelector(".form-feat")
const lastDiv = document.querySelector(".home-feature")
const setDiv = document.querySelector(".show")
const menuDiv = document.querySelector(".open")

function menu(){
    loadDiv.style.display ="block"
    lastDiv.style.display= "none"
    setDiv.style.display= "block"
    menuDiv.style.display= "none"
    
}
function show(){
    loadDiv.style.display ="block"
    lastDiv.style.display= "none"
    setDiv.style.display= "none"
    menuDiv.style.display= "block"
    
}

  // Select all Play Now buttons
  const playButtons = document.querySelectorAll(".btc");

  playButtons.forEach(btc => {
    btc.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default anchor behavior

      // Get the game name from the <h3>
      let gameName = btc.parentElement.querySelector("h3").innerText;

      // Get the link from data-links
      let appLink = btc.getAttribute("data-link");

      // Show welcome alert
      alert("Welcome to " + gameName + "!");

      // Open Play Store after short delay
      setTimeout(() => {
        if (appLink) {
          window.open(appLink.trim(), "_blank");
        }
      }, 500);
    });
  });

