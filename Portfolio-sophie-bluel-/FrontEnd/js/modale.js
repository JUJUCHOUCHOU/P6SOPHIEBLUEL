function createElementWithClasses(tagName, classes) {
  const element = document.createElement(tagName);
  element.classList.add(...classes);
  return element;
  //fonction permettant d'éviter d'écrire classList.add à chaque fois
}

// Fonction pour fermer la modale
function closeModal() {
  const modalOpen = document.getElementById('modal');
  modalOpen.style.display = 'none';
  window.addEventListener('click', function(event) {
    if (event.target === modalOpen) {
      closeModal();
    }
  });
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

    function deleteGalleryElement(imageId) {
      // Envoi de la demande de suppression à l'API
      fetch(`http://localhost:5678/api/works/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        if (response.ok) {
          console.log('Élément supprimé avec succès');
          // Mettre à jour la galerie après la suppression
          miniGallery.removeChild(figureModale);
        } else {
          console.error('Erreur lors de la suppression de l\'élément');
        }
      })
      .catch(function (error) {
        console.error('Erreur:', error);
      });
    }

    works.forEach(function (miniWork) {
      const miniImageUrl = miniWork.imageUrl;
      const miniTitle = miniWork.title;
      const imageId = miniWork.id;

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

      // Ajout d'un gestionnaire d'événements pour la suppression d'un élément
      deleteButton.addEventListener('click', function () {
        deleteGalleryElement(imageId);
      });
    });

    // Fonction de suppression des éléments de la galerie
    function deleteGalleryElement() {
      const deleteButton = createElementWithClasses('div', ['trashBox']);
      // Appel à l'API pour delete
      fetch('http://localhost:5678/api/works/', {
        method: 'DELETE',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({

        })
      })
    }
    // Deuxième modale
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
    // Icône
    const modalphotoBoxEmptyIcon = createElementWithClasses('i', ['fa-sharp', 'fa-regular', 'fa-image']);
    modalphotoBoxEmpty.appendChild(modalphotoBoxEmptyIcon);
    // Texte informatif
    const modalphotoBoxEmptyText = createElementWithClasses('p', ['modalPhotoBoxEmptyText']);
    modalphotoBoxEmptyText.textContent = 'jpeg, png : 4mo max';
    modalphotoBoxEmpty.appendChild(modalphotoBoxEmptyText);
    const modalPhotoBoxEmptyForm = document.createElement('form');
    modalPhotoBoxEmptyForm.setAttribute('enctype', 'multipart/form-data'); // Spécifier l'encodage
    modalPhotoBoxEmptyForm.setAttribute('method', 'POST'); // Spécifier la méthode POST
    modalPhotoBox.appendChild(modalPhotoBoxEmptyForm);

    const titleLabel = createElementWithClasses('label', ['modalPhotoBoxLabel']);
    titleLabel.textContent = 'Titre:';
    modalPhotoBoxEmptyForm.appendChild(titleLabel);

    const titleInput = createElementWithClasses('input', ['modalPhotoBoxInput']);
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    modalPhotoBoxEmptyForm.appendChild(titleInput);

    const categoryLabel = createElementWithClasses('label', ['modalPhotoBoxLabel']);
    categoryLabel.textContent = 'Catégorie:';
    modalPhotoBoxEmptyForm.appendChild(categoryLabel);

    const categorySelect = createElementWithClasses('select', ['modalPhotoBoxSelect']);
    categorySelect.setAttribute('name', 'category');
    modalPhotoBoxEmptyForm.appendChild(categorySelect);

    // Options de catégories
    const categories = ['Objet', 'Appartements', 'Hôtel et Restaurant'];
    categories.forEach(function (category) {
      const option = document.createElement('option');
      option.setAttribute('value', category.toLowerCase());
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    const imageInput = createElementWithClasses('input', ['modalPhotoBoxInput']);
    imageInput.setAttribute('type', 'file');
    imageInput.setAttribute('name', 'image');
    modalPhotoBoxEmptyForm.appendChild(imageInput);

    // Cacher le bouton de parcourir par défaut
    imageInput.style.display = 'none';

  // Afficher l'image miniature sélectionnée
imageInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageUrl = event.target.result;
    addButton.style.backgroundImage = `url(${imageUrl})`;
    addButton.textContent = ''; // Supprimer le texte du bouton

    // Créer et afficher l'image miniature
    const imagePreview = document.createElement('img');
    imagePreview.src = imageUrl;
    imagePreview.classList.add('modalPhotoPreview');
    modalPhotoBox.appendChild(imagePreview);
  };

  reader.readAsDataURL(file);
});

    // Créer le bouton "+ Ajouter photo"
    const addButton = createElementWithClasses('button', ['modalPhotoBoxAddButton']);
    addButton.textContent = '+ Ajouter photo';
    modalPhotoBoxEmptyForm.appendChild(addButton);

  // Lorsque le bouton "+ Ajouter photo" est cliqué, déclencher le clic du bouton de parcourir
addButton.addEventListener('click', function () {
  imageInput.click();
});

// Afficher le nom du fichier sélectionné dans le champ "Titre"
imageInput.addEventListener('change', function () {
  const fileName = imageInput.files[0].name;
  titleInput.value = fileName;
});
    const imagePreview = createElementWithClasses('img', ['modalPhotoPreview']);
    modalphotoBoxEmptyForm.appendChild(imagePreview);

    // Gestionnaire d'événements pour la sélection d'une image
    imageInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';
      };

      reader.readAsDataURL(file);
    });

    // Gestionnaire d'événements pour la soumission du formulaire
    modalPhotoBoxEmptyForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Récupérer les valeurs du formulaire
      const formData = new FormData(modalPhotoBoxEmptyForm);
      const title = formData.get('title');
      const category = formData.get('category');
      const imageFile = formData.get('image');

      const apiUrl = 'http://localhost:5678/api/works';

      // Préparer les données à envoyer
      const requestData = new FormData();
      requestData.append('title', title);
      requestData.append('category', category);
      requestData.append('image', imageFile);

      // Envoyer la requête POST à l'API pour enregistrer les données
      fetch(apiUrl, {
        method: 'POST',
        body: requestData
      })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Erreur lors de l\'enregistrement des données');
          }
        })
        .then(function (data) {
          console.log('Données enregistrées avec succès:', data);

          // Réinitialiser le formulaire après l'enregistrement des données
          modalPhotoBoxEmptyForm.reset();
        })
        .catch(function (error) {
          console.error('Erreur:', error);
        });
    });
  });