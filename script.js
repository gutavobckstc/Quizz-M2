// Perguntas do Quiz
const questions = [
    {
        question: "Quem cantou a música 'Evidências'?",
        options: ["Chitãozinho & Xororó", "Zezé Di Camargo & Luciano", "Jorge & Mateus", "Mayck & Lyan"],
        answer: 0
    },
    {
        question: "Qual é o nome da música famosa de Gusttavo Lima?",
        options: ["Apelido Carinhoso", "Balada Boa", "Que Mal Te Fiz Eu", "Eu Não Vou"],
        answer: 2
    },
    {
        question: "Quem fez sucesso com a música 'Festa no Apê'?",
        options: ["MC Gui", "Jorge & Mateus", "Zezé Di Camargo & Luciano", "Chorão"],
        answer: 1
    },
    {
        question: "Quem canta a música 'Ai Se Eu Te Pego'?",
        options: ["Michel Teló", "Luan Santana", "Jorge & Mateus", "Zezé Di Camargo & Luciano"],
        answer: 0
    },
    {
        question: "Qual desses sertanejos fez sucesso com a música 'Amei Te Ver'?",
        options: ["Luan Santana", "Eduardo Costa", "Jorge & Mateus", "Thiaguinho"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz');
    questionElement.innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        ${questions[currentQuestion].options.map((option, index) => `
            <div class="option" onclick="checkAnswer(${index})">${option}</div>
        `).join('')}
    `;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    document.getElementById('next-btn').style.display = 'none';
}

loadQuestion();
