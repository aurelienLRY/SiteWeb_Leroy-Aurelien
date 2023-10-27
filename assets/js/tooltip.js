// Sélectionnez tous les éléments avec data-toggle="tooltip"
const tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');

tooltipElements.forEach((element) => {
  const title = element.dataset.toggleContent; // Récupérez le texte du titre
  element.classList.add("tooltip");
  const placement = element.dataset.placement;

  const tooltipText = document.createElement("span");
  tooltipText.classList.add("tooltip-text",`tooltip-text--${placement}`);
  tooltipText.textContent = title;

  element.appendChild(tooltipText);
});
