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

    function closeModale() {
      modalOpen.style.display = "none";
    }
    modalCloseCross.addEventListener('click', closeModale);
    window.addEventListener('click', function (event) {
      if (event.target === modalOpen) {
        closeModale();
      }
    });

    const modalTitle = document.createElement('p');
    modalTitle.textContent = 'Galerie Photo';
    modalTitle.classList.add('modalTitle');

    const decoElement = document.createElement('div');
    decoElement.classList.add('deco');

    const addPhotoButton = document.createElement('button');
    addPhotoButton.classList.add('addPhotoButton');
    addPhotoButton.textContent = 'Ajouter une photo';
    modalContent.appendChild(addPhotoButton);

    const deleteWord = document.createElement('p');
    deleteWord.textContent = "Supprimer la galerie";
    deleteWord.classList.add("deleteWord");

    modalOpen.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalCloseCross);
    modalContent.appendChild(decoElement);
    modalContent.appendChild(deleteWord);

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

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('trashBox');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash-can');
        deleteButton.appendChild(deleteIcon);
        figureModale.appendChild(deleteButton);

        const textModalFigure = document.createElement('figcaption');
        textModalFigure.textContent = "éditer";
        figureModale.appendChild(textModalFigure);

        miniGallery.appendChild(figureModale);
      });

      modalContent.appendChild(miniGallery);
    };

    imageForModal(works);

    const addPhotoModal = document.createElement('div');
    addPhotoModal.classList.add('modalContentPhoto');
    addPhotoModal.style.display = "none"; // Masquer la deuxième modale par défaut
    
    const addPhotoModalCloseCross = document.createElement('p');
    addPhotoModalCloseCross.classList.add('modalPhotoCloseCross');
    addPhotoModalCloseCross.textContent = "x";

    const modalPhotoTitle = document.createElement('p');
    modalPhotoTitle.textContent="Ajout Photo";
    modalPhotoTitle.classList.add('modalPhotoTitle');
    
    function changeModale() {
      modalContent.style.display = "none";
      addPhotoModal.style.display = "block";
    }
    addPhotoButton.addEventListener('click', changeModale);

    modalOpen.appendChild(addPhotoModal);
    addPhotoModal.appendChild(addPhotoModalCloseCross);

  })
  .catch(function (error) {
    console.log(error);
  });