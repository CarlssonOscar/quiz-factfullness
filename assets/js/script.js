const start_btn = document.querySelector(".begin_button button");
const information_box = document.querySelector(".information_box");
const quit_btn = information_box.querySelector(".buttons .quit");
const continue_btn = information_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");

const option_list = document.querySelector(".option_list");

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
    startTimer(20);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 20;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If try again button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    timeValue = 20;
    userScore = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
}

quit_quiz.onclick = () => {
    window.location.reload();
}

// If next button
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
    } else {
        console.log("You have finished the questions!");
        showResultBox();
    }
}

// Accessing questions from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[1] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[2] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
     if (userAns == correctAns) {
         if(timeCount.textContent >= 10){
             userScore += 1;
         }
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct!");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect")
        console.log("Wrong...")
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // If wrong answer show correct
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }

    }
    // to enable one answer only
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
}

function showResultBox() {
    information_box.classList.remove("activeInfo"); //hide
    quiz_box.classList.remove("activeQuiz"); // hide
    result_box.classList.add("activeResult"); // show
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>Your score is <p>' + userScore + '</p> out of <p>10</p></span>';
    scoreText.innerHTML = scoreTag;
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "0";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
        }
    }
}

function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}