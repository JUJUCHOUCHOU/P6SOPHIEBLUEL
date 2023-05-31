//
const login = function(mail, password){

    //fetch call API post
fetch('http://localhost:5678/api/users/login',{
    method:'POST',
    body:JSON.stringify({
        email:mail,
        password:password
    }),
    headers:{
        'content-type':'application/json; charsert=UFT-8'//specifie Json
    }
})
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function (identification) {//identification data
 // stock mail and password on localestorage
 console.log(identification);
 localStorage.setItem('email', mail.value);
 localStorage.setItem('password', password.value);
 let stockEmail = localStorage.getItem('email', 'example@email.com');
 let stockPassword = localStorage.getItem('password', 'motdepasse');
     //redirection on the good way 
     window.location.href = "./front-end/index.html";
    })
.catch(function(error) {//call of fetch don't work

});
}

const formulaire = document.getElementById("formulaire").elements;
const Button = document.getElementById("sendButton");

Button.addEventListener('click', function (event) {
    event.preventDefault();// empeche le comportement par defaut du bouton
    const mail = formulaire['email'];
    const password = formulaire['password'];
    //compare value with api
    if ( mail.value&&password.value){
    login(mail.value, password.value)
}else{
    //if password and mail don't work
    alert('identification incorrecte');
}
})



//if ID and Password OK Index in editor mode =>

//Modales!!

window.addEventListener('load', function(){
    let stockEmail = localStorage.getItem('email', 'example@email.com');
    let stockPassword = localStorage.getItem('password', 'motdepasse');
    let editorMode = document.getElementById('EditorMode');

    if (stockEmail, stockPassword){
        editorMode.classList.add("editorModeCss").style;
        //visibility:visible?
    }else{
        window.location.href = "./front-end/index.html";
        //editorMode.style.display: none;
        //ou visibility:hidden?
    }


})
