const btnMenu=document.getElementById('btn-menu');
const menu= document.querySelector('.menu');

//Despliega el menú
btnMenu.addEventListener('click', () =>{    
    btnMenu.firstChild.classList.toggle('btn-menu__bar--active')
    menu.classList.toggle('menu--active')
})