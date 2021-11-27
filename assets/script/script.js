var title = document.querySelector("#title");
var hs = document.querySelector("#hs");
var gbBtn = document.querySelector("#hs button");
var time = document.querySelector("#time h3");
var sqBtn = document.querySelector("#sq-button");
var highscoreBtn = document.querySelector("#high-scores");
var quiz = document.querySelector("#quiz");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btnArray = [btn1, btn2, btn3, btn4];
var quizQ = document.querySelector("#quiz-container h1");
var slctBtn = 0;
var score = 0;
var timeLeft = 60;

var questions = [
    {
        question: 'javascript is a ___ programming language.',
        answers: ['high-level', 'mid-level', 'low-level', 'none of the above'],
        correctAnswer: 0
    }, {
        question: 'which of the following is not a programming language?',
        answers: ['typescript', 'python', 'anaconda', 'java'],
        correctAnswer: 2
    }, {
        question: 'inside which HTML element do we put javascript?',
        answers: ['<javascript>', '<scripting>', '<js>', '<script>'],
        correctAnswer: 3
    }, {
        question: 'where is the correct place to insert javascript?',
        answers: ['the <body> section', 'the <head> section', '<body> and <head> sections', 'all of the above'],
        correctAnswer: 0
    }, {
        question: 'how do you write "hello world" in an alert box?',
        answers: ['msgBox("hello world");', 'alertBox("hello world");', 'alert("hello world");', 'msg("hello world");'],
        correctAnswer: 2
    }, {
        question: 'how do you declare a javascript variable?',
        answers: ['var carName;', 'v carName;', 'variable varName;', 'none of the above'],
        correctAnswer: 0
    }, {
        question: 'which operator is used to assign a value to a variable?',
        answers: ['x', '=', '-', '*'],
        correctAnswer: 1
    },
]

function showTitle() {
    title.setAttribute("style", "display: block;");
    hs.setAttribute("style", "display: none;");
    quiz.setAttribute("style", "display: none;");
}

function showHs() {
    title.setAttribute("style", "display: none;");
    hs.setAttribute("style", "display: block;");
    quiz.setAttribute("style", "display: none;");
}

function strtQz() {
    setTime();
    title.setAttribute("style", "display: none;");
    hs.setAttribute("style", "display: none;");
    quiz.setAttribute("style", "display: block;");
    qzTxt();
}

function qzTxt() {
    quizQ.textContent = questions[slctBtn].question;

    for (i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = questions[slctBtn].answers[i];
    }
    slctBtn++;
}

function runQuiz() {
    if (btnArray.indexOf(this) == questions[slctBtn - 1].correctAnswer) {
        score = score + 10;
    }
    else {
        timeLeft = timeLeft - 10;
    }
    if (slctBtn < questions.length) {
        qzTxt();
    }
    else {
        slctBtn = 0;
        showTitle();
    }
}

function renderTime(num) {
    var label = (num !== 1) ? "seconds" : "second";
    time.textContent = "time: " + num + " " + label;
}

function setTime() {
    renderTime(timeLeft);
    var timerInterval = setInterval(function () {
        timeLeft--;

        renderTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showTitle();
            timeLeft = 60;
        }
        if (slctBtn === 0 && quiz.getAttribute("style") === "display: none;") {
            clearInterval(timerInterval);
            timeLeft = 60;
            renderTime(timeLeft);
        }
    }, 1000);
}

for (i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener("click", runQuiz)
}

function inputScore() {
    when(timeLeft === 0)
    hs();
}



sqBtn.addEventListener("click", strtQz);
gbBtn.addEventListener("click", showTitle);
highscoreBtn.addEventListener("click", showHs);

