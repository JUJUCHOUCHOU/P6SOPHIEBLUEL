function createElementWithClasses(tagName, classes) {
  const element = document.createElement(tagName);
  element.classList.add(...classes);
  return element;
  //fonction permettant d'eviter d'ecrire classlist.add a chaque fois
}

// Fonction pour fermer la modale
function closeModal() {
  const modalOpen = document.getElementById('modal');
  modalOpen.style.display = 'none';
}

// Fonction pour ouvrir la deuxième modale
function openSecondModal() {
  const modalContent = document.querySelector('.modalContent');
  const addPhotoModal = document.querySelector('.modalContentPhoto');

  modalContent.style.display = 'none';
  addPhotoModal.style.display = 'block';
}

// Fonction pour réinitialiser l'état des modales
function resetModalState() {
  const modalContent = document.querySelector('.modalContent');
  const addPhotoModal = document.querySelector('.modalContentPhoto');

  modalContent.style.display = 'block';
  addPhotoModal.style.display = 'none';
}

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

    const modalContent = createElementWithClasses('div', ['modalContent']);

    const modalCloseCross = createElementWithClasses('p', ['modalCloseCross']);
    modalCloseCross.textContent = 'x';
    modalCloseCross.addEventListener('click', closeModal);

    const modalTitle = createElementWithClasses('p', ['modalTitle']);
    modalTitle.textContent = 'Galerie Photo';

    const decoElement = createElementWithClasses('div', ['deco']);

    const addPhotoButton = createElementWithClasses('button', ['addPhotoButton']);
    addPhotoButton.textContent = 'Ajouter une photo';
    addPhotoButton.addEventListener('click', openSecondModal);
    modalContent.appendChild(addPhotoButton);

    const deleteWord = createElementWithClasses('p', ['deleteWord']);
    deleteWord.textContent = 'Supprimer la galerie';

    modalOpen.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalCloseCross);
    modalContent.appendChild(decoElement);
    modalContent.appendChild(deleteWord);
    modalContent.appendChild(addPhotoButton);

    const miniGallery = createElementWithClasses('div', ['miniGallery']);
    modalContent.appendChild(miniGallery);

    works.forEach(function (miniWork) {
      const miniImageUrl = miniWork.imageUrl;
      const miniTitle = miniWork.title;

      const figureModale = createElementWithClasses('figure', ['figureBox']);

      const imageModale = document.createElement('img');
      imageModale.src = miniImageUrl;
      imageModale.classList.add('miniImage');
      figureModale.appendChild(imageModale);

      const deleteButton = createElementWithClasses('div', ['trashBox']);
      const deleteIcon = createElementWithClasses('i', ['fa-solid', 'fa-trash-can']);
      deleteButton.appendChild(deleteIcon);
      figureModale.appendChild(deleteButton);

      const textModaleFigure = createElementWithClasses('figcaption', ['textModaleFigure']);
      textModaleFigure.textContent = 'éditer';
      figureModale.appendChild(textModaleFigure);

      miniGallery.appendChild(figureModale);
    });

    const addPhotoModal = createElementWithClasses('div', ['modalContentPhoto']);
    addPhotoModal.style.display = 'none';
    modalOpen.appendChild(addPhotoModal);

    const addPhotoModalCloseCross = createElementWithClasses('p', ['modalPhotoCloseCross']);
    addPhotoModalCloseCross.textContent = 'x';
    addPhotoModalCloseCross.addEventListener('click', closeModal);
    addPhotoModal.appendChild(addPhotoModalCloseCross);

    const arrowBack = createElementWithClasses('i', ['fa-solid', 'fa-arrow-left', 'arrowBack']);
    arrowBack.addEventListener('click', resetModalState);
    addPhotoModal.appendChild(arrowBack);

    const modalPhotoTitle = createElementWithClasses('p', ['modalPhotoTitle']);
    modalPhotoTitle.textContent = 'Ajout Photo';
    addPhotoModal.appendChild(modalPhotoTitle);

    const modalPhotoBox = createElementWithClasses('div', ['modalPhotoBox']);
    addPhotoModal.appendChild(modalPhotoBox);

    const modalphotoBoxEmpty = createElementWithClasses('div', ['modalphotoBoxEmpty']);
    modalPhotoBox.appendChild(modalphotoBoxEmpty);

    const modalphotoBoxEmptyIcon = createElementWithClasses('i', ['fa-sharp', 'fa-regular', 'fa-image']);
    modalphotoBoxEmpty.appendChild(modalphotoBoxEmptyIcon);

    const modalphotoBoxEmptyButton = createElementWithClasses('button', ['photoBoxButton']);
    modalphotoBoxEmptyButton.textContent = '+ Ajouter photo';
    modalphotoBoxEmpty.appendChild(modalphotoBoxEmptyButton);

    const modalphotoBoxEmptyText = document.createElement('p');
    modalphotoBoxEmpty.appendChild(modalphotoBoxEmptyText);
    modalPhotoBox.appendChild(modalphotoBoxEmpty);
  })
  .catch(function (error) {
    console.log(error);
  })
 