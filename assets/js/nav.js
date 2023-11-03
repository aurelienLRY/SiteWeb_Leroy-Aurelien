export function navTrigger(){
const trigger = document.querySelector("#nav_trigger button");
const navLinks = document.querySelector(".nav_links");
trigger.addEventListener("click", () => {
  trigger.classList.toggle("opened");
  trigger.setAttribute("aria-expanded", trigger.classList.contains("opened"));

  if (trigger.classList.contains("opened")) {
    navLinks.classList.add("opened");
    // Ajoutez un délai pour que la transition s'applique
  } else {
    navLinks.classList.remove("opened");
  }
});
}



