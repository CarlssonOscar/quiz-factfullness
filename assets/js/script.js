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
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

// If next button
next_btn.onclick = ()=>{
    if(que_count < questions.length -1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    } else {
        console.log("You have finished the questions!");
    }
}

// Accessing questions from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';

    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>' 
                   + '<div class="option">'+ questions[index].options[1] +'<span></span></div>' 
                   +'<div class="option">'+ questions[index].options[2] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Correct!");
    } else {
        answer.classList.add("incorrect")
        console.log("Wrong...")
    }
}


function queCounter(index) {
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}