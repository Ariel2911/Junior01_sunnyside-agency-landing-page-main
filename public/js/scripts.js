"use strict";console.log("hola");var btnMenu=document.getElementById("btn-menu");btnMenu.addEventListener("click",(function(){btnMenu.firstChild.classList.toggle("btn-menu__bar--active"),btnMenu.childNodes[2].firstElementChild.classList.toggle("header__menu--active")}));