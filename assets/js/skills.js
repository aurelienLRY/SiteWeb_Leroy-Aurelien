// Fonction pour supprimer la classe "active" de tous les éléments de navigation
function removeActive(skillsNav) {
    for (const nav of skillsNav) {
      nav.classList.remove("active");
    }
  }
  
  // Fonction pour basculer l'affichage des éléments en fonction de la navigation
  function toggleSkillDisplay(nav, skillsItems) {
    const selectedItem = document.querySelector(`#${nav.dataset.item}`);
    for (const item of skillsItems) {
      item.classList.add("displayNone");
    }
    selectedItem.classList.remove("displayNone");
  }
  
  export function skills() {
    const skills = document.querySelector("#skills");
    const skillsNav = skills.querySelectorAll(".skills_nav a");
    const skillsItems = skills.querySelectorAll(".skills_item .item");
  
    for (const nav of skillsNav) {
      nav.addEventListener("click", (e) => {
        e.preventDefault();
        removeActive(skillsNav);
        nav.classList.add("active");
        toggleSkillDisplay(nav, skillsItems);
      });
    }
  }
  