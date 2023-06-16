// Appel à l'API
fetch('http://localhost:5678/api/works')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (works) {
    console.log(works);

    const modalOpen = document.getElementById('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modalContent');

    const modalCloseCross = document.createElement('p');
    modalCloseCross.classList.add('modalCloseCross');
    modalCloseCross.textContent = "x";
    //fermeture de ma modale au click et hors modale

    function closeModale() {
      modalOpen.style.display = "none";
    }
    modalCloseCross.addEventListener('click', closeModale);
    window.addEventListener('click', function (event) {
      if (event.target === modalOpen) {
        closeModale();
      }
    });
    // Titre
    const modalTitle = document.createElement('p');
    modalTitle.textContent = 'Galerie Photo';
    modalTitle.classList.add('modalTitle');

    //barre
    const decoElement = document.createElement('div');
    decoElement.classList.add('deco');

    // Bouton "Ajouter une photo"
    const addPhotoButton = document.createElement('button');
    addPhotoButton.classList.add('addPhotoButton');
    addPhotoButton.textContent = 'Ajouter une photo';
    modalContent.appendChild(addPhotoButton);

    // Texte "supprimer la galerie"
    const deleteWord = document.createElement('p');
    deleteWord.textContent = "Supprimer la galerie";
    deleteWord.classList.add("deleteWord");

    // Attacher les éléments au parent
    modalOpen.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalCloseCross);
    modalContent.appendChild(decoElement);
    modalContent.appendChild(deleteWord);

//poubelle sur chaque image


    const imageForModal = (miniWorks) => {
      const miniGallery = document.createElement('div');
      miniGallery.classList.add('miniGallery');

      miniWorks.forEach(function (miniWork) {
        const miniImageUrl = miniWork.imageUrl;
        const miniTitle = miniWork.title;

        const figureModale = document.createElement('figure');
        figureModale.classList.add('figureBox');

        const imageModale = document.createElement('img');
        imageModale.src = miniImageUrl;
        figureModale.appendChild(imageModale);
        imageModale.classList.add('miniImage');

        const textModalFigure = document.createElement('figcaption');
        textModalFigure.textContent = "éditer";
        figureModale.appendChild(textModalFigure);

        miniGallery.appendChild(figureModale);
      });

      modalContent.appendChild(miniGallery);
    };

    imageForModal(works);
  })
  .catch(function (error) {
    console.log(error);
  });
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

//close modale

