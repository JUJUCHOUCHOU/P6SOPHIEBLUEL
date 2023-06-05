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
  


  
  