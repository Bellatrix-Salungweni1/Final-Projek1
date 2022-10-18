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

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();
