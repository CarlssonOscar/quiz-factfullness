let start_btn = document.querySelector(".begin_button button");
let information_box = document.querySelector(".information_box");
let quit_btn = information_box.querySelector(".buttons .quit");
let continue_btn = information_box.querySelector(".buttons .continue");

// If begin button
start_btn.onclick = ()=>{
    information_box.classList.add("activeInfo"); //show the information box
}

// If exit button
quit_btn.onclick = ()=>{
    information_box.classList.remove("activeInfo"); //hide the information box
}
