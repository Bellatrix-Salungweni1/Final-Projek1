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

const to_do_list = document.querySelector("#to_do_list");
const to_do = document.querySelector("#to_do");
const to_do_btn_close = document.querySelector("#to_do_btn_close");
const to_do_input = document.querySelector("#to_do_input");
const to_do_btn = document.querySelector("#to_do_btn");
const to_do_items = document.querySelector("#to_do_items");



let todos = JSON.parse(localStorage.getItem('to_do'));
to_do_btn.addEventListener('click', function(e) {
    if(to_do_input.value != '') {
        addToDoList(to_do_input.value)
    } else {
        Swal.fire({
            title: 'Warning',
            text: "Tidak boleh kosong!!!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
          });
    }
})
to_do_list.addEventListener('click', function(e) {
    pop_up_bg.classList.add('active');
    to_do.classList.add('active');
    showToDoList();
})
to_do_btn_close.addEventListener('click', function(e) {
    pop_up_bg.classList.remove('active');
    to_do.classList.remove('active');
})

function addToDoList(todo) {
    const new_to_do = {
        name : todo,
        status : false,
    };
    if(!todos) {
        todos = [];
    }
    todos.push(new_to_do);
    localStorage.setItem('to_do', JSON.stringify(todos));
    showToDoList();
    to_do_input.value = '';
}

function showToDoList() {
    if(!todos) {
        todos = [];
    }
    let li = '';
    todos.forEach((e, i) => {
        let isChecked = (e.status == true) ? 'checked' : '';
        li += `
            <li class="to_do_item">
                <label for="${i}">
                    <input type="checkbox" id="${i}" ${isChecked} onclick="updateStatus(this, ${i})">
                    <p class="${isChecked}">${e.name}</p>
                </label>
                <button class="to_do_btn_del" onclick="delToDoList(${i})">
                    <i class="fas fa-times"></i>
                </button>
            </li>
        `;
    });
    to_do_items.innerHTML = li;
}

function delToDoList(id) {           
    todos.splice(id, 1);
    localStorage.setItem('to_do', JSON.stringify(todos));
    showToDoList();
}

function updateStatus(e, id) {
    let to_do_item_name = e.parentElement.lastElementChild;
    if(e.checked) {
        to_do_item_name.classList.add('checked');
        todos[id].status = true;
    } else {
        to_do_item_name.classList.remove('checked');
        todos[id].status = false;
    }
    localStorage.setItem('to_do', JSON.stringify(todos));
    showToDoList();
}

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


let topButton = document.getElementById("topBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
