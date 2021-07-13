const start_btn = document.querySelector(".begin_button button");
const information_box = document.querySelector(".information_box");
const quit_btn = information_box.querySelector(".buttons .quit");
const continue_btn = information_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");

// If begin button
start_btn.onclick = () => {
    information_box.classList.add("activeInfo"); //show the information box
}

// If exit button
quit_btn.onclick = () => {
    information_box.classList.remove("activeInfo"); //hide the information box
}

// If continue button
continue_btn.onclick = () => {
    information_box.classList.remove("activeInfo"); //hide the information box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(3);
}

let que_count = 0;

const next_btn = quiz_box.querySelector(".next_btn");

// If next button
next_btn.onclick = ()=>{
    if(que_count > questions.length -1){
    que_count++;
    showQuestions(que_count);
    } else {
        console.log("You have finished the questions!");
    }
}

// Accessing questions from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';

    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>' 
                   + '<div class="option">'+ questions[index].options[1] +'<span></span></div>' 
                   +'<div class="option">'+ questions[index].options[2] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

}