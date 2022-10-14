const nav_toggle = document.querySelector("#my_nav_toggle");
const nav_menu = document.querySelector("#my_nav_menu");
const btn_content = document.querySelector("#btn_content");
const pop_up_bg = document.querySelector("#pop_up_bg");
const pop_up = document.querySelector("#pop_up");
const btn_pop_up_close = document.querySelector("#btn_pop_up_close");


nav_toggle.addEventListener('click', function() {
    nav_menu.classList.toggle('active')
});

btn_content.addEventListener('click', function() {
    pop_up_bg.classList.add('active');
    pop_up.classList.add('active');
});
btn_pop_up_close.addEventListener('click', function() {
    pop_up_bg.classList.remove('active');
    pop_up.classList.remove('active');
});