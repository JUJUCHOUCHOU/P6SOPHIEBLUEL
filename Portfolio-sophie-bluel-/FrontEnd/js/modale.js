// Modale galerie
const modalOpen = document.getElementById('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modalContent');

const modalCloseCross = document.createElement('p');
modalCloseCross.classList.add('fa-sharp', 'fa-regular', 'fa-xmark');
// Titre
const modalTitle = document.createElement('p');
modalTitle.textContent = 'Galerie Photo';
modalTitle.classList.add('modalTitle');



const figureModale = document.createElement('figure');
const imageModale = document.createElement('img');
const textModalFigure = document.createElement('figcaption');

// Attacher les éléments au parent
modalOpen.appendChild(modalContent);
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalCloseCross);
modalOpen.appendChild(figureModale);




// Décoration CSS de la barre
const decoElement = document.createElement('div');
decoElement.classList.add('deco'); // Added a class name for styling

// Bouton "Ajouter une photo"
const addPhotoButton = document.createElement('button');
addPhotoButton.classList.add('addPhotoButton'); // Added a class name for styling
addPhotoButton.textContent = 'Ajouter une photo';

  //appendchild for each element
  //delete gallery

   //requete delete

//event listener bouton ajout photo qui ouvre l'autre modale
// appel de l'api
// fonction de suppression


// requete post

// modale ajout photos
//formulaire form action method post
// div bleu
//icone montagne dans div bleu
//input type image src
//bouton + ajout Photo sous icone
//text JPG, png:4mo max dans cadre bleu

//input type text label for title

//input type text label for category

// appel de l'api
// fonction d'ajout/verification du format et des éléménts
// si elements != title && !=categories && format alors affiche message d'erreur

// requete post avec le fetch de maniere dynamique

