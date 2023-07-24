const modale = document.getElementById('modale');
const login = function (mail, password) {

  //call to API with fetch
  fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'accept':'application/json',
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      email: mail,
      password: password
    })
  })
    .then(function (response) {
      console.log(response)
      // check if response is OK (200)
      if (response.ok) {
        // send data of response JSON
        return response.json();
      } else {
        // error 
        throw new Error('Identifiants incorrects');
      }
    })
    .then(function (identification) {
      console.log(identification);
      window.location = "index.html";
      //delete data 
      localStorage.clear();
      // keep token and UserID on locale storage
      localStorage.setItem('token', identification.token);
      localStorage.setItem('userId', identification.userId);
    })
    .catch(function (error) {
      alert(error.message);
    });
}
const formulaire = document.getElementById("formulaire");//ref of element with ID
const Button = document.getElementById("sendButton");// ref of element with send button

formulaire.addEventListener('submit', function (event) {//submit form
  event.preventDefault();
  const mail = formulaire.elements['email'].value;// get element write by user for mail and PW
  const password = formulaire.elements['password'].value;

  if (mail && password) {// check if mail and password are writed 
    login(mail, password);
  } else {
    alert('Identification incorrecte');
  }
});


