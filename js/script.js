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
 document.querySelectorAll(".btc").forEach((btc) => {
        btc.addEventListener("click", (e) => {
          e.preventDefault();
          alert(
            "Welcome to " +
              btc.parentElement.querySelector("h3").innerText +
              "!"
          );
        });
      });