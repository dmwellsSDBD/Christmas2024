const btn = document.getElementById("show-menu");
const menu = document.querySelector(".mobile-menu");
const hamb = document.getElementById("hamburger");
const closex = document.getElementById("closeX");
// closex.classList.toggle("hidden");

btn.addEventListener("click", () => {
    if (hamb.classList.contains("block")) {
        closex.classList.toggle("block");
        hamb.classList.toggle("hidden");
        console.log("IF statement")
    } 
    
    if (hamb.classList.contains("hidden")) {
        closex.classList.toggle("hidden");
        hamb.classList.toggle("block");
        console.log("ELSE statement")
    }

    menu.classList.toggle("hidden");
    menu.classList.toggle("transition");
    menu.classList.toggle("delay-150");
    menu.classList.toggle("duration-300");

});