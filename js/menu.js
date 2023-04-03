const menu = document.getElementById("menu");
const menuToggleContainer = document.getElementById('menu-toggle-container');
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('#menu-link');

function toggleMenu(){
    if(!menu.style.display || menu.style.display === "none"){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    };
}

function closeMenu(){
    menu.style.display = "none";
}

function resetMenuDisplay(){
    if(window.outerWidth > 720){
        menu.style.display = "flex";

        menuToggleContainer.removeEventListener('click', toggleMenu);

        menuLinks.forEach((element)=>{
            element.removeEventListener('click', closeMenu);
        });
    } else {
        menu.style.display = "none";
        
        menuToggleContainer.addEventListener('click', toggleMenu);
        
        menuLinks.forEach((element)=>{
            element.addEventListener('click', closeMenu);
        });
    };
}

window.addEventListener('resize', resetMenuDisplay);