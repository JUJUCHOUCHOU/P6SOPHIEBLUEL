  //Modal open & close function
  const buttonModal = document.querySelector(".modalButton");
  const closeButton = document.querySelector(".closeButton");
  
  function toggleModal(){//add CSS class to modal
    modal.classList.add("modalOpen");
  }
  function modalOpenOnClick(event){
    if(event.target===modal){
      toggleModal()
    }
  }
  buttonModal.addEventListener('click', toggleModal);
  
  closeButton.addEventListener('click', toggleModal);
  
  modalOpenOnClick.addEventListener('click', modalOpenOnClick);

/*quand la modale est ouverte je peux charger des images 
(miniatures dans la modale)supprimer ces images 
( icone poubelle font noir), si je click sur ajout d'image je tombe sur
un formulaire pour envoyer des images, l'ajout doit etre dynamique 
et non refresh il me faut dont une requete post et une requete delete
 dans le fetch
2 aspects pour la modale (dynamiques)*/

