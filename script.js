const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const quesBlockElement = document.getElementById('questionsblock')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

let counterTime = 60

startButton.addEventListener('click', startGame)
//nextButton.addEventListener('click', () => {
//    currentQuestionIndex++
//   setNextQuestion()
//})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    //start the time
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer
        }
        else{
            counterTime= counterTime - 15
        }
        
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    //nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    selectedButton.onclick = function () {
        const key = button.dataset.correct
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        //nextButton.classList.remove('hide')
        currentQuestionIndex++
        setNextQuestion()

    }else {
        // you nee to hide all and unhide the form (inititals and the submit to save local storage)
       quesBlockElement.classList.add('hide')
        // read from local storag JSON.parse
        // onclick for the button
        submitButton.addEventListener('click', inputStore())
       //grab the input for the initials
       function inputStore() {
           localStorage.setItem('user',JSON.stringify(initials))
       }
       // you read the localstorage varibale rank  (parse)
       var user = JSON.parse(localStorage.getItem('user'))
       // if empyt start rank =[]
       //stop the timer  (clearInterval)

        newUsser={
           initials: $("inputname").val(),
           score:  counterTime
        }

        //push inside rank and then samve local storage JSON.stringify
        // [{initicals:IA,score:45},{initals:HI, score:50}]
       }
      
        // startButton.innerText = 'Restart'
       // startButton.classList.remove('hide')
    }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types do not include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'The condition of an if/else statement is enclosed within _____.',
        answers: [
            { text: 'parenthesis', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'quotes', correct: false },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store_____.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parenthesis', correct: false }
        ]
    }
]
