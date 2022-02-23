const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
 menu.classList.toggle(".visible");

if(menu.classList.contains("visible")){
 toggle.setAttribute("aria-label", "cerrar menu");
} else{
    toggle.setAttribute("aria-label", "abrir menu");}
});