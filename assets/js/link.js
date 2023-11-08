/**
 * active / désactive le loader
 */
function displayLoader() {
  // Vérifie si la classe 'displayNone' est présente
  const isDisplayNone = this.classList.contains("displayNone");
  // Vous pouvez maintenant utiliser la valeur de isDisplayNone
  if (isDisplayNone) {
    // La classe 'displayNone' est présente
    this.classList.remove("displayNone");
    setTimeout(displayLoader.bind(this), 2000);
  } else {
    // La classe 'displayNone' n'est pas présente
    this.classList.add("displayNone");
  }
}

/**
 * Affiche la section correspondant à l'élément cliqué'
 * @param {*} sections de la page
 * @param {*} link de la page
 */
function displaySections(sections, link) {
  for (const section of sections) {
    if (link.dataset.link === section.id) {
      if (section.classList.contains("displayNone")) {
        section.classList.remove("displayNone");
      }
    } else {
      section.classList.add("displayNone");
    }
  }
}

/**
 *
 */
export function linkLoader() {
  const loader = document.getElementById("loader"); // récupère le loader de la page
  const mainLinks = document.querySelectorAll("a"); // récupère tous les liens de la page
  const navLinks = document.querySelectorAll("nav a"); // récupère tous les liens du nav
  const sections = document.querySelectorAll("section"); // récupère tous les sections de la page
  // Lance le loader

  for (const link of mainLinks) {
    if (link.dataset.link !== undefined) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        //activer le lien correspondant à l'affichage
        for (const navLink of navLinks) {
          if (navLink.dataset.link === link.dataset.link) {
            navLink.classList.add("active-link");
          } else {
            navLink.classList.remove("active-link");
          }
        }
        displayLoader.call(loader);
        setTimeout(() => {
          displaySections(sections, link);
        }, 500); //retarde l'affiche le temps de l'animation loader
      });
    } else {
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  }
}
