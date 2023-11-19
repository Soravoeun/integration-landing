// selection les parties photos avec la class".card-container-section"
let slideElements = document.querySelectorAll(".card-container-section");

// selection des dots avec la class".dot"
let dotsElements = document.querySelectorAll(".dot");

// declaration de la viariable "currentIndex" et assignation de la variable à 0
let currentIndex = 0;

// pour chaque dots, on ajoute un event listener et on fait glisser les images
dotsElements.forEach((element, i) => {
  element.addEventListener("click", () => {
    slides(i);
  });
});

// selection des la class".prev" pour ajouter un event listener et on fait glisser les images dans le sens negatif
document.querySelector(".prev").addEventListener("click", () => {
  slides(currentIndex - 1);
});

// slectection des la class".next" pour ajouter un event listener et on fait glisser les images dans le sens positif
document.querySelector(".next").addEventListener("click", () => {
  slides(currentIndex + 1);
});

// creation de la fonction "slides"
function slides(index) {
  // si la position de l'image est inferieur à 0,
  if (index < 0) {
    //  on part à partir du dernier element
    index = slideElements.length - 1;

    // si la position est supérieur à la taille de la liste,
  } else if (index > slideElements.length - 1) {
    // je retourne à la 1ere position
    index = 0;
  }

  // initialiation de la variable "currentIndex" et assignation de la variable à l'index
  currentIndex = index;

  // pour chaque slide selectionné,
  slideElements.forEach((element, i) => {
    // on enleve la classe "active"
    element.classList.remove("active");
    // si i qui parcourt, est  egal à la position de l'image
    if (i === index) {
      // on ajoute la classe "active"
      element.classList.add("active");
    }
  });
    // on appelle la fonction "setActiveDots" pour que les dots et les images soient actifs en meme temps.  
  setActiveDots(currentIndex);
}

// declaration de la fonction "setActiveDots" et on fait la meme action que pour les elements images
function setActiveDots(index) {
  // pour chaque element dots,
  dotsElements.forEach((element, i) => {
    // on enleve la classe "active"
    element.classList.remove("active");
    // si i qui parcourt, est  egal à la position de l'image
    if (i === index) {
      // on ajoute la classe "active"
      element.classList.add("active");
    }
  });
}
