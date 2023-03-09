const hum_menu = document.querySelector("#hamburgur-menu")
const menu_click = document.querySelector(".menu-open");
const close_btn = document.querySelector("#close");
hum_menu.addEventListener("click", openFunction);
function openFunction() {
    console.log('Hello');
    menu_click.classList.add("active");
    
}
close_btn.addEventListener('click', closeFunction);
function closeFunction() {
    menu_click.classList.remove("active");
}
