const questions = [
    {
        "question": "What does 'NaN' stand for in JavaScript?",
        "answers": [
            { "text": "No and No", "correct": false },
            { "text": "Not available Number", "correct": false },
            { "text": "Not a Number", "correct": true },
            { "text": "Null and None", "correct": false }
        ]
    },
    {
        "question": "Which method is used to add an element at the end of an array?",
        "answers": [
            { "text": "shift()", "correct": false },
            { "text": "unshift()", "correct": false },
            { "text": "push()", "correct": true },
            { "text": "pop()", "correct": false }
        ]
    },
    {
        "question": "What is the default value of a variable declared with 'var' but not initialized?",
        "answers": [
            { "text": "0", "correct": false },
            { "text": "undefined", "correct": true },
            { "text": "null", "correct": false },
            { "text": "false", "correct": false }
        ]
    },
    {
        "question": "Which operator is used for equality comparison in JavaScript?",
        "answers": [
            { "text": "==", "correct": true },
            { "text": "=", "correct": false },
            { "text": "===", "correct": false },
            { "text": "><", "correct": false }
        ]
    },
    {
        "question": "What is the purpose of the 'let' keyword in JavaScript?",
        "answers": [
            { "text": "To declare global variables", "correct": false },
            { "text": "To declare block-scoped variables", "correct": true },
            { "text": "To declare constants", "correct": false },
            { "text": "To declare functions", "correct": false }
        ]
    },
    {
        "question": "Which of the following is NOT a primitive data type in JavaScript?",
        "answers": [
            { "text": "String", "correct": false },
            { "text": "Boolean", "correct": false },
            { "text": "Object", "correct": true },
            { "text": "Number", "correct": false }
        ]
    },
    {
        "question": "What does 'JSON' stand for?",
        "answers": [
            { "text": "Java Object Notation", "correct": false },
            { "text": "JavaScript Syntax Object", "correct": false },
            { "text": "JavaScript Object Notation", "correct": true },
            { "text": "Java Syntax Object Notation", "correct": false }
        ]
    },
    {
        "question": "Which function is used to parse a JSON string into a JavaScript object?",
        "answers": [
            { "text": "objectify()", "correct": false },
            { "text": "parseJSON()", "correct": false },
            { "text": "JSON.parse()", "correct": true },
            { "text": "JSON.stringify()", "correct": false }
        ]
    },
    {
        "question": "What will 'console.log(0 / 0)' print in JavaScript?",
        "answers": [
            { "text": "NaN", "correct": true },
            { "text": "Infinity", "correct": false },
            { "text": "undefined", "correct": false },
            { "text": "0", "correct": false }
        ]
    },
    {
        "question": "Which method is used to remove the last element from an array?",
        "answers": [
            { "text": "push()", "correct": false },
            { "text": "slice()", "correct": false },
            { "text": "shift()", "correct": false },
            { "text": "pop()", "correct": true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `Question ${questionNo}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});


startQuiz();
