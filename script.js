// User data with unique usernames
const users = [
    { username: "AL-AMEEN", password: "23/208CHM/420" },
    { username: "ISAAC", password: "23/207ACC/924" },
    { username: "AYONIJOYCE", password: "23/208CHM/395" },
    { username: "ZUBEIDAH", password: "23/208CHM/417" },
    { username: "AKACHUKWU", password: "23/208CHM/358" },
    { username: "FATHIA", password: "23/208CHM/379" },
    { username: "MARDIYA", password: "23/208CHM/353" },
    { username: "MIRACLE", password: "23/208CHM/355" },
    { username: "ABIMBOLA", password: "23/208CHM/340" },
    { username: "JACKSON", password: "23/208CHM/394" },
    { username: "MAAMI", password: "23/208CHM/401" },
    { username: "CHIMAOBI", password: "23/208CHM/415" },
    { username: "HAVILAH", password: "23/208CHM/399" }, // Renamed to ensure uniqueness
    { username: "UMMI", password: "23/208CHM/330" },
    { username: "MICHEAL", password: "23/207ACC/832" },
    { username: "FELICIA", password: "1234" },
    { username: "SHALOM", password: "1234" },
    { username: "JOY", password: "1234" },
    { username: "ABDULRAHMAN", password: "1234" },
    { username: "HOPE", password: "1234" },
    { username: "RASHEEDAT", password: "1234" },
    { username: "OLUCHI", password: "1234" },
    { username: "RODIAT", password: "23/208CHM/412" },
    { username: "AISHA", password: "23/208CHM/350" },
    { username: "JEMILAT", password: "23/208CHM/367" },
    { username: "GOODLUCK", password: "23/208CHM/338" },
    { username: "BENEDICTA", password: "23/208CHM/369" }, // Renamed to ensure uniqueness
    { username: "LOVETH", password: "23/208CHM/409" }, // Renamed to ensure uniqueness
    { username: "ABDULKADIR", password: "23/208CHM/387" },
    { username: "GERALD", password: "23/208CHM/356" },
    { username: "FAVOUR", password: "23/208CHM/359" },
    { username: "OYIZA", password: "23/208CHM/367" },
    { username: "MARY", password: "23/208CHM/385" },
    { username: "PESH", password: "23/208CHM/411" },
    { username: "SARAH", password: "23/208CHM/413" },
    { username: "NGOZI", password: "23/208CHM/343" },
    { username: "DANIEL", password: "23/208CHM/291" },
    { username: "ANGEL", password: "23/208CHM/366" },
    { username: "VICTORIA", password: "23/208CHM/351" },
    { username: "GUEST-I", password: "0000A" },
    { username: "GUEST-II", password: "1111B" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];

const questions = [
    { 
        question: "Which gas is the primary contributor to the greenhouse effect?", 
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"], 
        answer: "Carbon Dioxide" 
    },
    { 
        question: "Which layer of the atmosphere is most affected by ozone depletion?", 
        options: ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"], 
        answer: "Stratosphere" 
    },
    { 
        question: "What is the SI unit of mass?", 
        options: ["Kilogram", "Gram", "Pound", "Ounce"], 
        answer: "Kilogram" 
    },
    { 
        question: "Which tool is used to measure length with high precision in the lab?", 
        options: ["Vernier Calipers", "Meter Rule", "Tape Measure", "Protractor"], 
        answer: "Vernier Calipers" 
    },
    { 
        question: "What is the relationship between mass and weight on Earth?", 
        options: ["Weight = Mass × Gravity", "Weight = Mass ÷ Gravity", "Weight = Mass × Speed", "Weight = Mass ÷ Time"], 
        answer: "Weight = Mass × Gravity" 
    },
    { 
        question: "Which form of energy is stored in an object due to its position?", 
        options: ["Potential Energy", "Kinetic Energy", "Thermal Energy", "Electrical Energy"], 
        answer: "Potential Energy" 
    },
    { 
        question: "Which form of energy is associated with motion?", 
        options: ["Kinetic Energy", "Potential Energy", "Chemical Energy", "Nuclear Energy"], 
        answer: "Kinetic Energy" 
    },
    { 
        question: "Which civilization is credited with the development of early mathematics?", 
        options: ["Babylonia", "Greece", "Egypt", "India"], 
        answer: "Babylonia" 
    },
    { 
        question: "Which Indian mathematician made significant contributions to trigonometry?", 
        options: ["Aryabhata", "Ramanujan", "Brahmagupta", "Bhaskara"], 
        answer: "Aryabhata" 
    },
    { 
        question: "What is the significance of zero in the history of mathematics?", 
        options: ["It was first introduced in India", "It was discovered by the Greeks", "It represents infinity", "It has no significance"], 
        answer: "It was first introduced in India" 
    },
    { 
        question: "What was a major mathematical contribution of the ancient Egyptians?", 
        options: ["Pyramids' geometry", "Algebraic equations", "Calculus", "Binary system"], 
        answer: "Pyramids' geometry" 
    },
    { 
        question: "Which civilization is known for its contributions to the field of geometry?", 
        options: ["Greece", "India", "Babylonia", "China"], 
        answer: "Greece" 
    },
    { 
        question: "Which scientist is known for formulating the theory of gravitation?", 
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"], 
        answer: "Isaac Newton" 
    },
    { 
        question: "Which of the following is NOT a fundamental unit in the SI system?", 
        options: ["Volt", "Meter", "Kilogram", "Second"], 
        answer: "Volt" 
    },
    { 
        question: "Which type of resource is coal classified as?", 
        options: ["Non-renewable", "Renewable", "Inexhaustible", "Biological"], 
        answer: "Non-renewable" 
    },
    { 
        question: "Which process is used to separate crude petroleum into its various products?", 
        options: ["Distillation", "Filtration", "Cracking", "Fractionation"], 
        answer: "Distillation" 
    },
    { 
        question: "What is the primary use of crude petroleum?", 
        options: ["Fuel", "Construction", "Fertilizer", "Jewelry"], 
        answer: "Fuel" 
    },
    { 
        question: "Which product is obtained from the distillation of petroleum?", 
        options: ["Gasoline", "Plastic", "Wood", "Coal"], 
        answer: "Gasoline" 
    },
    { 
        question: "What is the major pollutant produced by burning fossil fuels?", 
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"], 
        answer: "Carbon Dioxide" 
    },
    { 
        question: "Which phenomenon is responsible for the formation of acid rain?", 
        options: ["Sulfur Dioxide emissions", "Ozone depletion", "Deforestation", "Greenhouse effect"], 
        answer: "Sulfur Dioxide emissions" 
    },
    { 
        question: "Which type of smog is caused by reactions between sunlight and pollutants?", 
        options: ["Photochemical Smog", "Industrial Smog", "Acid Smog", "Thermal Smog"], 
        answer: "Photochemical Smog" 
    },
    { 
        question: "Which scientist is known for his contributions to thermodynamics?", 
        options: ["James Joule", "Isaac Newton", "Albert Einstein", "Michael Faraday"], 
        answer: "James Joule" 
    },
    { 
        question: "Which renewable resource is widely used for electricity generation?", 
        options: ["Solar Energy", "Natural Gas", "Coal", "Oil"], 
        answer: "Solar Energy" 
    },
    { 
        question: "Which country is known for early advancements in hydraulic engineering?", 
        options: ["Egypt", "Babylonia", "India", "Greece"], 
        answer: "Egypt" 
    },
    { 
        question: "Which term describes the depletion of non-renewable resources?", 
        options: ["Resource exhaustion", "Pollution", "Recycling", "Conservation"], 
        answer: "Resource exhaustion" 
    },
    { 
        question: "Which process is essential for the recycling of renewable resources?", 
        options: ["Sustainable harvesting", "Mining", "Cracking", "Fracking"], 
        answer: "Sustainable harvesting" 
    },
    { 
        question: "Which element is represented by the symbol 'O'?", 
        options: ["Oxygen", "Gold", "Osmium", "Oganesson"], 
        answer: "Oxygen" 
    },
    { 
        question: "Which of the following processes is part of the water cycle?", 
        options: ["Evaporation", "Combustion", "Photosynthesis", "Digestion"], 
        answer: "Evaporation" 
    },
    { 
        question: "Which concept explains the potential and kinetic energy of an object?", 
        options: ["Mechanical energy", "Thermal energy", "Chemical energy", "Nuclear energy"], 
        answer: "Mechanical energy" 
    },
    { 
        question: "Which branch of science deals with the structure and behavior of matter?", 
        options: ["Physics", "Chemistry", "Biology", "Geology"], 
        answer: "Physics" 
    },
    { 
        question: "Which of the following energy sources is considered renewable?", 
        options: ["Wind", "Natural Gas", "Coal", "Oil"], 
        answer: "Wind" 
    },
    { 
        question: "What is the fundamental principle behind hydroelectric power?", 
        options: ["Converting water flow into electrical energy", "Burning water for energy", "Using solar energy to power dams", "Harnessing ocean currents"], 
        answer: "Converting water flow into electrical energy" 
    },
    { 
        question: "What is the term for the long-term increase in Earth's average temperature?", 
        options: ["Global Warming", "Acid Rain", "Ozone Depletion", "Resource Depletion"], 
        answer: "Global Warming" 
    },
    { 
        question: "Which measurement tool uses a sliding scale for precise readings of length?", 
        options: ["Vernier Caliper", "Protractor", "Compass", "Thermometer"], 
        answer: "Vernier Caliper" 
    },
    { 
        question: "Which law describes the relationship between energy, work, and heat?", 
        options: ["First Law of Thermodynamics", "Newton's First Law", "Law of Conservation of Momentum", "Law of Universal Gravitation"], 
        answer: "First Law of Thermodynamics" 
    }
];


// Initialize variables
let examStartTime = null;
let currentQuestionIndex = 0;
let selectedAnswers = {};

// Handle Sign-In form submission
document.getElementById('details-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const username = document.getElementById('user-name').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(`Username: ${username}, Password: ${password}`); // Debug log

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.isAdmin) {
            viewResults();  // Admin login, view all results
        } else {
            // Check if user has already taken the exam
            if (sessionStorage.getItem(`score_${username}`) !== null) {
                alert("You have already attempted the exam.");
            } else {
                startExam(username);
            }
        }
    } else {
        alert("Invalid username or password.");
    }
});

// Admin Login Button Functionality
document.getElementById('admin-btn').addEventListener('click', () => {
    const adminUsername = prompt("Enter admin username:");
    const adminPassword = prompt("Enter admin password:");

    const adminUser = users.find(u => u.username === adminUsername && u.password === adminPassword && u.isAdmin);

    if (adminUser) {
        viewResults(); // Show all results for admin
    } else {
        alert("Invalid admin credentials.");
    }
});

// Function to start the exam
function startExam(username) {
    examStartTime = Date.now();
    document.querySelector('.first').style.display = 'none';
    document.getElementById('admin-btn').style.display = 'none'; // Hide admin button during exam
    const examContainer = document.getElementById('exam-container');
    examContainer.style.display = 'block';
    currentQuestionIndex = 0;
    selectedAnswers = {}; // Reset selected answers
    renderQuestion(currentQuestionIndex, username);
    startTimer();
}

// Function to render a question
function renderQuestion(index, username) {
    console.log(`Rendering question ${index + 1}`); // Debug log
    const examContainer = document.getElementById('exam-container');
    const q = questions[index];

    examContainer.innerHTML = `
        <div>
            <p><strong>Question ${index + 1} of ${questions.length}:</strong> ${q.question}</p>
            ${q.options.map(option => 
                `<label><input type="radio" name="q${index}" value="${option}" ${selectedAnswers[index] === option ? 'checked' : ''}> ${option}</label><br>`).join('')}
        </div>
        <br>
        <div>
            ${index > 0 ? `<button type="button" onclick="previousQuestion()">Previous</button>` : ''}
            ${index < questions.length - 1 ? `<button type="button" onclick="nextQuestion('${username}')">Next</button>` : `<button type="button" onclick="submitExam('${username}')">Submit Exam</button>`}
        </div>
    `;
}

// Function to go to the next question
function nextQuestion(username) {
    saveAnswer(currentQuestionIndex);
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex, username);
}

// Function to go to the previous question
function previousQuestion() {
    saveAnswer(currentQuestionIndex);
    currentQuestionIndex--;
    const username = document.getElementById('user-name').value.trim();
    renderQuestion(currentQuestionIndex, username);
}

// Function to save the selected answer
function saveAnswer(index) {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption) {
        selectedAnswers[index] = selectedOption.value;
    }
}

// Timer Logic for 30 Minutes
function startTimer() {
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.fontSize = '20px';
    timerElement.style.marginBottom = '20px';
    document.getElementById('exam-container').prepend(timerElement);
    updateTimer();
}

// Update Timer Every Second
function updateTimer() {
    const now = Date.now();
    const timeElapsed = Math.floor((now - examStartTime) / 1000);
    const timeRemaining = 30 * 60 - timeElapsed; // 30-minute timer

    if (timeRemaining <= 0) {
        submitExam(); // Auto-submit when time runs out
        return;
    }

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    setTimeout(updateTimer, 1000);
}

// Function to submit the exam
function submitExam(username) {
    saveAnswer(currentQuestionIndex); // Save the last answer
    let score = 0;

    // Calculate score based on selected answers
    questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
            score++;
        }
    });

    console.log(`User: ${username}, Score: ${score}`); // Debug log

    // Save the score in localStorage
    localStorage.setItem(`score_${username}`, score);

    // Display the score with animation
    animateScoreDisplay(score, username);
}

// Function to animate score display
function animateScoreDisplay(score, username) {
    const examContainer = document.getElementById('exam-container');
    examContainer.style.display = 'none';

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `<h2>Your Score: <span id="animated-score">0</span> / ${questions.length}</h2>`;

    let currentScore = 0;
    const targetScore = score;
    const incrementSpeed = 50; // Speed of score increment in ms

    const scoreInterval = setInterval(() => {
        if (currentScore < targetScore) {
            currentScore++;
            document.getElementById('animated-score').textContent = currentScore;
        } else {
            clearInterval(scoreInterval);
            // Optionally, show top scorers after a delay
            setTimeout(() => showTopFive(), 500);
        }
    }, incrementSpeed);


 // Hide the exam container and show the results container
 document.getElementById('exam-container').style.display = 'none';
 displayCorrectAnswers(score);
}

// Function to display correct answers and feedback
function displayCorrectAnswers(score) {
 const resultsContainer = document.getElementById('results-container');
 resultsContainer.style.display = 'block'; // Show results container
 resultsContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;

 // Display question-by-question feedback
 resultsContainer.innerHTML += `<h3>Correct Answers:</h3>`;
 questions.forEach((q, index) => {
     const userAnswer = selectedAnswers[index] || "No answer selected";
     const isCorrect = userAnswer === q.answer;
     resultsContainer.innerHTML += `
         <div style="margin-bottom: 10px;">
             <strong>Question ${index + 1}:</strong> ${q.question}<br>
             <span>Your answer: <strong style="color: ${isCorrect ? 'blue' : 'red'};">${userAnswer}</strong></span><br>
             ${isCorrect ? `<span style="color: green;">Correct!</span>` : `<span style="color: red;">Correct answer: ${q.answer}</span>`}
         </div>
     `;
 });

}

// Function to show top five scorers
function showTopFive() {
    const resultsContainer = document.getElementById('results-container');

    const scores = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('score_')) {
            const username = key.replace('score_', '');
            const user = users.find(u => u.username === username);
            if (user && !user.isAdmin) {
                scores.push({ username: username, score: parseInt(localStorage.getItem(key)) });
            }
        }
    }

    scores.sort((a, b) => b.score - a.score);

    resultsContainer.innerHTML += `<h2>Top 5 Scores</h2>`;
    if (scores.length === 0) {
        resultsContainer.innerHTML += `<p>No scores available.</p>`;
        return;
    }

    scores.slice(0, 5).forEach((s, index) => {
        resultsContainer.innerHTML += `<p>${index + 1}. ${s.username} - ${s.score} / ${questions.length}</p>`;
    });

    // Optionally, provide a button to restart or logout
    resultsContainer.innerHTML += `<button onclick="location.reload()">Logout</button>`;
}

// Function to view all results (Admin)
function viewResults() {
    document.querySelector('.first').style.display = 'none';
    document.getElementById('admin-btn').style.display = 'none';
    const examContainer = document.getElementById('exam-container');
    examContainer.style.display = 'none';

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `<h2>All User Scores</h2>`;

    const scores = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('score_')) {
            const username = key.replace('score_', '');
            const user = users.find(u => u.username === username);
            if (user && !user.isAdmin) {
                scores.push({ username: username, score: parseInt(localStorage.getItem(key)) });
            }
        }
    }

    if (scores.length === 0) {
        resultsContainer.innerHTML += `<p>No scores available.</p>`;
        return;
    }

    scores.sort((a, b) => b.score - a.score);

    scores.forEach((s, index) => {
        resultsContainer.innerHTML += `<p>${index + 1}. ${s.username} - ${s.score} / ${questions.length}</p>`;
    });

    // Optionally, provide a button to logout
    resultsContainer.innerHTML += `<button onclick="location.reload()">Logout</button>`;
}
