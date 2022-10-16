const pop_up_bg_to_do = document.querySelector("#pop_up_bg");
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
        alert('Fild Must Required');
    }
})
to_do_list.addEventListener('click', function(e) {
    pop_up_bg_to_do.classList.add('active');
    to_do.classList.add('active');
    showToDoList();
})
to_do_btn_close.addEventListener('click', function(e) {
    pop_up_bg_to_do.classList.remove('active');
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