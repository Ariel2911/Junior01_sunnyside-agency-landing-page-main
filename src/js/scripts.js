console.log("hola")
const btnMenu=document.getElementById('btn-menu');

btnMenu.addEventListener('click', () =>{    
    btnMenu.firstChild.classList.toggle('btn-menu__bar--active')
    btnMenu.childNodes[2].firstElementChild.classList.toggle('header__menu--active')
})