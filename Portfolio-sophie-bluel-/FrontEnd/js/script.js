//on appelle a chaque fois les images et le texte
const displayGallery = (works) => {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML="";
  
    works.forEach(function (work) {
      const imageUrl = work.imageUrl;
      const title = work.title;
  
      const figure = document.createElement('figure');
  
      const image = document.createElement('img');
      image.src = imageUrl;
      figure.appendChild(image);
  
      const text = document.createElement('figcaption');
      text.innerText = title;
      figure.appendChild(text);
  
      gallery.appendChild(figure);
  
    })
  }
  const handleFilterWorks =(event,works)=>{
    const filtredCategory = event.target.textContent.toLowerCase();
    let filteredWorks =[]
  
  if(filtredCategory==="tous"){
    filteredWorks=works;
  }else{
    filteredWorks = works.filter(function (work) {
      return work.category.name.toLowerCase() === filtredCategory;
    });
  }
    displayGallery(filteredWorks);
  }
  
  fetch('http://localhost:5678/api/works')
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (works) {
      console.log(works)
      const categories = new Set();
      displayGallery(works);
  
      works.forEach(function (work) {
        categories.add(work.category.name);
      })
  
  
      const filterBar = document.querySelector('.filterBar');
      Array.from(categories).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add("filterBarButton");
        categoryElement.textContent = category;
  
        categoryElement.addEventListener('click',(event)=>handleFilterWorks(event,works))
  
        filterBar.appendChild(categoryElement);
      });
  const filterButtonAll= document.getElementById('filterButtonAll');
  filterButtonAll.addEventListener('click',(event)=>handleFilterWorks(event,works))
    })
  
    .catch(function (error) {
  
    });
  
const token = localStorage.getItem('token');
if (token){
  // créer chaque elements de connection
const headerBar = document.createElement('div');
headerBar.textContent='Mode édition';
headerBar.classList.add('editorMode__BarHeader')

const headerBarButton = document.createElement('button');
headerBarButton.textContent ='publier les changements';
headerBarButton.classList.add("editorMode__button");

const idImage = document.createElement('div');
idImage.textContent ='modifier';
idImage.classList.add("editorMode__idImage");

const filters = document.createElement('div');
filters.textContent= 'modifier';
filters.classList.add("editorMode__filterBar");

const fontModal = document.createElement('i');
//fontModal.classList.add("fa-regular fa-pen-to-square");
headerBar.appendChild(fontModal);
idImage.appendChild(fontModal);
filter.appendChild(fontModal);

document.body.appendChild(headerBar);
document.body.appendChild(idImage);
document.body.appendChild(filters);

  // modifier login logout(+vide localstorage)
  const logOut = document.getElementById("loginButton");
  logOut.textContent= 'Logout';
  logOut.classList.add('nav li');
  localStorage.clear();

  //ajouter un event click pour appeler la modale (differente selon le bouton)

  const modalButton = [headerBarButton, idImage, filters];

  modalButton.forEach(function(button){
    button.addEventListener('click', function(event){
      //quel bouton?
      const clikedModalButton = event.target;

      if(clikedModalButton===headerBarButton){

      }else if(clikedModalButton === idImage){

      }else if(clikedModalButton===filters){

      }
    });
  });

}

  
  