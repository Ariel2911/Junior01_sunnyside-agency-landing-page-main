"use strict";var btnMenu=document.getElementById("btn-menu"),menu=document.querySelector(".menu");btnMenu.addEventListener("click",(function(){btnMenu.firstChild.classList.toggle("btn-menu__bar--active"),menu.classList.toggle("menu--active")}));