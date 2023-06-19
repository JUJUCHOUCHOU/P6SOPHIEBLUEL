const showModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
};

const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
};

const initModal = () => {
  fetch('http://localhost:5678/api/works')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function(works) {
      console.log(works);

      const modalOpen = document.getElementById('modal');

      function closeModale() {
        closeModal('modal');
      }
      
      const modalCloseCross = document.querySelector('.modalCloseCross');
      modalCloseCross.addEventListener('click', closeModale);

      window.addEventListener('click', function(event) {
        if (event.target === modalOpen) {
          closeModale();
        }
      });

      const addPhotoButton = document.querySelector('.addPhotoButton');
      addPhotoButton.addEventListener('click', () => {
        closeModal('modal');
        showModal('modalAddPhoto');
      });

      // Code pour afficher les miniatures d'images dans la modale
      const modalContent = document.querySelector('.modalContent');
      const miniGallery = document.createElement('div');
      miniGallery.classList.add('miniGallery');

      works.forEach(function(miniWork) {
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

        const textModaleFigure = document.createElement('figcaption');
        textModaleFigure.textContent = "éditer";
        figureModale.appendChild(textModaleFigure);
        figureModale.classList.add('textModaleFigure');

        miniGallery.appendChild(figureModale);
      });

      modalContent.appendChild(miniGallery);

      // Code pour la modale d'ajout de photo
      const addPhotoModal = document.querySelector('.modalContentPhoto');
      const addPhotoModalCloseCross = document.querySelector('.modalPhotoCloseCross');
      const arrowBack = document.querySelector('.arrowBack');

      arrowBack.addEventListener('click', () => {
        closeModal('modalAddPhoto');
        showModal('modal');
      });

      addPhotoModalCloseCross.addEventListener('click', () => {
        closeModal('modalAddPhoto');
      });

    })
    .catch(function(error) {
      console.log(error);
    });
};

initModal();