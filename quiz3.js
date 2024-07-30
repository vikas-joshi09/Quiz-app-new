let startBtn = document.getElementById("start-btn");
let startPage = document.getElementById("start-page");
let quizPage = document.getElementById("quiz-page");
let nextBtn = document.getElementById("next-btn");
let preBtn = document.getElementById("pre-btn");
let userName = document.getElementById("user-name");
let profession = document.getElementById("profession");
let resultPage = document.getElementById("result-page");
let playerName = document.getElementById("playername");
let playerProfession = document.getElementById("playerProfession");
let finalResult = document.getElementById("final-result");
let question = document.getElementById("quiz-question");
let optionsDiv = document.getElementById("quiz-options")
let answerBtn = document.querySelector(".ans-btn")
let restartBtn = document.getElementById("restart");




let userscore = 0;


startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    currentQuestionIndex = 0;
    userscore = 0;
    displayQuestions();
});


let currentQuestionIndex = "0";

function displayQuestions() {
    resetContainer();
    question.textContent = quizData[currentQuestionIndex].question;
    
    quizData[currentQuestionIndex].options.forEach((ans) => {
        const btnEl = document.createElement("button");

       btnEl.innerHTML = "💥" + " " + ans;
       
       btnEl.classList.add("ans-btn");
       optionsDiv.appendChild(btnEl);

           if (ans === quizData[currentQuestionIndex].answer) {
               btnEl.dataset.correctAns = quizData[currentQuestionIndex].answer;
        }
        // console.log(btnEl);
       
        btnEl.addEventListener("click", checkAns);

    });

}

function checkAns(e) {
    const selectedbtn = e.target;
    if (selectedbtn.dataset.correctAns) {
        userscore++;
        selectedbtn.classList.add("correct-ans");
    } else {
        selectedbtn.classList.add("wrong-ans");
    }

    var child = Array.from(optionsDiv.children).forEach((onebtn) => {
        if (onebtn.dataset.correctAns === quizData[currentQuestionIndex].answer) {
            onebtn.classList.add("correct-ans");
        
        }
    });

  
    nextBtn.style.display="block";       
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        nextBtn.style.display = "none";
        displayQuestions();
    } else {
        displayResult();
    }
}


nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < quizData.length) {
        nextQuestion();
    }
})


function resetContainer(){
    optionsDiv.innerHTML = " ";
}

// preBtn.addEventListener("click", function () {
//     if (currentQuestionIndex > quizData.length) {
//         currentQuestionIndex--;
//         displayQuestions;
//     }
// })

function displayResult() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    document.querySelector(".cmplt").innerHTML = "Quiz is completed..";
    playerName.innerHTML = `Name: ${userName.value}`;
    playerProfession.innerHTML = `Profession: ${profession.value}`;
    finalResult.innerHTML = `Your Score:  ${userscore}/${quizData.length}`;
}

restartBtn.addEventListener("click", function () {
    resultPage.style.display = "none";
    startPage.style.display = "block";
})



const quizData = [
    {
        question: " Q1: What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Q2: Who wrote 'Romeo and Juliet'?",
        options: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Q3: What is the currency of USA?",
        options: ["Rupees", "Dinar", "Dollar", "Taka"],
        answer: "Dollar"
    },
        
    {
        question: "Q4: What is the capital of Bangladesh?",
        options: ["Delhi", "Washigton", "Kathmandu", "Dhaka"],
        answer: "Dhaka"
    },
    {
        question: "Q5: What is the hieghest mountain in the world?",
        options: ["Everest", "Nanda devi", "K2", "Kliminjaro"],
        answer: "Everest"
    },
    {
        question: "Q6: Where is India's Silicon Vally located?",
        options: ["chennai", "Bangluru", "Mumbai", "sikkim"],
        answer: "Bangluru"
    },
    {
        question: "Q7: Which country has the world's best education system?",
        options: ["America", "Frace", "Sweden", "India"],
        answer: "Sweden"
    },
    {
        question: "Q8: What is the full form of CAT exam?",
        options: ["common acadmy test", "common all test", "cat apple tomato",
            "common admission test"],
        answer: "common admission test"
    },
    {
        question: "Q9: Who is the most literate state of india?",
        options: ["Kerala", "Delhi", "Uttar Pradesh", "Tamilnadu"],
        answer: "Kerala"
    },
    {
        question: "Q10: What is the hottest planet in our solor system?",
        options: ["Mercury", "Neptune", "Venus", "Jupiter"],
        answer: "Venus"
    }
    
];