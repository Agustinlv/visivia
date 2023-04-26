//Código para el menú desplegable
const menu = document.getElementById("menu");
const menuToggleContainer = document.getElementById('menu-toggle-container');
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('#menu-link');

function toggleMenu(){
    if(!menu.style.height || menu.style.height === "0px"){
        menu.style.height = "fit-content";
    } else {
        menu.style.height = "0px";
    };
}

function closeMenu(){
    if(window.outerWidth > 720){
        return;
    };
    
    menu.style.height = "0px";
}

function resetMenuDisplay(){
    if(window.outerWidth > 720){
        menu.style.height = "fit-content";

        menuLinks.forEach((element)=>{
            element.removeEventListener('click', closeMenu);
        });
    } else {
        menu.style.height = "0px";

        menuToggleContainer.addEventListener('click', toggleMenu);
        
        menuLinks.forEach((element)=>{
            element.addEventListener('click', closeMenu);
        });
    };
}

window.addEventListener('resize', resetMenuDisplay);

window.addEventListener('scroll', closeMenu);

resetMenuDisplay();

//Código para enviar el mail
const nameDOM = document.getElementById('name');
const phoneDOM = document.getElementById('phone');
const emailDOM = document.getElementById('email');
const messageDOM = document.getElementById('message');
const submitDOM = document.getElementsByClassName('formulario')[0];
const submitButtonDOM = document.getElementById('enviar');
const formularioDOM = document.getElementById('formulario-container');
const submitMessageDOM = document.createElement('h3');

submitMessageDOM.textContent = 'Gracias por su consulta. En la brevedad le estaremos respondiendo!'

submitDOM.addEventListener('submit', (event) =>{
    
    event.preventDefault();

    submitButtonDOM.value =  'ENVIANDO...';

    let body = `
        <h2>Nueva Consulta</h2>
        <p>${messageDOM.value}</p>
        <br>
        <p>Nombre: ${nameDOM.value}<br>Teléfono: ${phoneDOM.value}<br>Correo: ${emailDOM.value}</p>
    `;
    
    Email.send({
        SecureToken : "5f444320-1d49-4c62-95bf-7d839d7a89cd",
        To : `visivia.consultores@gmail.com`,
        From : `visivia.consultores@gmail.com`,
        Subject : `Nueva consulta de ${nameDOM.value}`,
        Body : body
    })
    .then(
        () => {
            formularioDOM.replaceChildren();
            formularioDOM.style.height = "300px";
            formularioDOM.appendChild(submitMessageDOM);
        }
    )
    .catch(
      message => alert(message)
    );
});