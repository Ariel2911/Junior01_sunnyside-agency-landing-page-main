const btnMenu=document.getElementById('btn-menu');
const menu= document.querySelector('.menu');

//Activa el menú
btnMenu.addEventListener('click', () =>{    
    btnMenu.firstChild.classList.toggle('btn-menu__bar--active')
    menu.classList.toggle('menu--active')
})
//cuando un elemento del menú es seleccionado, desactiva el menú 
menu.addEventListener('click', ()=>{
    menu.classList.remove('menu--active')
    btnMenu.firstChild.classList.remove('btn-menu__bar--active')
})