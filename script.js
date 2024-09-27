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
        question: "Which early hominid species is associated with the first known use of stone tools?", 
        options: ["Australopithecus", "Neanderthals", "Homo habilis", "Homo erectus"], 
        answer: "Homo habilis" 
    },
    { 
        question: "Which species is considered the first to use fire for cooking and warmth?", 
        options: ["Neanderthals", "Homo erectus", "Australopithecus", "Homo habilis"], 
        answer: "Homo erectus" 
    },
    { 
        question: "Which early human ancestor had a relatively small brain and is considered one of the earliest hominids?", 
        options: ["Ramapithecus", "Homo erectus", "Australopithecus", "Homo habilis"], 
        answer: "Australopithecus" 
    },
    { 
        question: "Which species is known for living in Europe and parts of western Asia and coexisted with early Homo sapiens?", 
        options: ["Neanderthals", "Australopithecus", "Ramapithecus", "Homo habilis"], 
        answer: "Neanderthals" 
    },
    { 
        question: "The genus Homo first emerged during which geological period?", 
        options: ["Holocene", "Pleistocene", "Miocene", "Eocene"], 
        answer: "Pleistocene" 
    },
    { 
        question: "Which species is believed to have first migrated out of Africa?", 
        options: ["Homo erectus", "Australopithecus", "Homo habilis", "Neanderthals"], 
        answer: "Homo erectus" 
    },
    { 
        question: "Ramapithecus is an early ancestor thought to have existed during which epoch?", 
        options: ["Holocene", "Miocene", "Pleistocene", "Eocene"], 
        answer: "Miocene" 
    },
    { 
        question: "Which hominid species is known for creating sophisticated tools using the Levallois technique?", 
        options: ["Australopithecus", "Neanderthals", "Homo erectus", "Homo habilis"], 
        answer: "Neanderthals" 
    },
    { 
        question: "Which gas is primarily responsible for the depletion of the ozone layer?", 
        options: ["Methane", "Chlorofluorocarbons (CFCs)", "Nitrous oxide", "Carbon dioxide"], 
        answer: "Chlorofluorocarbons (CFCs)" 
    },
    { 
        question: "Which unit is used to measure electric current?", 
        options: ["Volt", "Watt", "Joule", "Ampere"], 
        answer: "Ampere" 
    },
    { 
        question: "The fundamental SI unit for measuring length is?", 
        options: ["Foot", "Inch", "Meter", "Centimeter"], 
        answer: "Meter" 
    },
    { 
        question: "Which instrument is used to measure atmospheric pressure?", 
        options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"], 
        answer: "Barometer" 
    },
    { 
        question: "The vernier caliper is primarily used to measure which of the following?", 
        options: ["Mass", "Speed", "Length", "Temperature"], 
        answer: "Length" 
    },
    { 
        question: "Which of the following refers to energy stored in a stretched or compressed object?", 
        options: ["Kinetic energy", "Thermal energy", "Elastic potential energy", "Chemical energy"], 
        answer: "Elastic potential energy" 
    },
    { 
        question: "Kinetic energy is the energy an object possesses due to its?", 
        options: ["Motion", "Charge", "Temperature", "Position"], 
        answer: "Motion" 
    },
    { 
        question: "Which form of energy is associated with an object’s position relative to the Earth?", 
        options: ["Gravitational potential energy", "Thermal energy", "Nuclear energy", "Kinetic energy"], 
        answer: "Gravitational potential energy" 
    },
    { 
        question: "In physics, which law states that energy cannot be created or destroyed, only transformed?", 
        options: ["Newton's Third Law", "Law of Conservation of Energy", "Ohm's Law", "Law of Inertia"], 
        answer: "Law of Conservation of Energy" 
    },
    { 
        question: "Which device is used to measure temperature?", 
        options: ["Calorimeter", "Anemometer", "Barometer", "Thermometer"], 
        answer: "Thermometer" 
    },
    { 
        question: "Which form of radiation is most harmful to human tissues?", 
        options: ["Beta particles", "Alpha particles", "Ultraviolet light", "Gamma rays"], 
        answer: "Gamma rays" 
    },
    { 
        question: "Which of the following gases does not contribute significantly to global warming?", 
        options: ["Methane", "Carbon dioxide", "Nitrous oxide", "Nitrogen"], 
        answer: "Nitrogen" 
    },
    { 
        question: "The greenhouse effect is primarily caused by which of the following gases?", 
        options: ["Carbon dioxide", "Helium", "Oxygen", "Nitrogen"], 
        answer: "Carbon dioxide" 
    },
    { 
        question: "Which mineral resource is primarily extracted in Nigeria’s Niger Delta?", 
        options: ["Coal", "Gold", "Tin", "Petroleum"], 
        answer: "Petroleum" 
    },
    { 
        question: "Which process is used to separate petroleum into its components?", 
        options: ["Condensation", "Cracking", "Polymerization", "Fractional distillation"], 
        answer: "Fractional distillation" 
    },
    { 
        question: "Which fossil fuel is known as 'black gold'?", 
        options: ["Natural Gas", "Petroleum", "Coal", "Oil Shale"], 
        answer: "Petroleum" 
    },
    { 
        question: "Which gas is used as a shielding gas in welding?", 
        options: ["Carbon dioxide", "Nitrogen", "Argon", "Oxygen"], 
        answer: "Argon" 
    },
    { 
        question: "The measurement of mass is typically carried out using which instrument?", 
        options: ["Calorimeter", "Thermometer", "Balance", "Barometer"], 
        answer: "Balance" 
    },
    { 
        question: "In which layer of the Earth’s atmosphere does the ionosphere reside?", 
        options: ["Troposphere", "Mesosphere", "Thermosphere", "Stratosphere"], 
        answer: "Thermosphere" 
    },
    { 
        question: "Which element has the highest atomic number that is still naturally occurring?", 
        options: ["Lead", "Thorium", "Plutonium", "Uranium"], 
        answer: "Uranium" 
    },
    { 
        question: "Which era is known for the introduction of bronze tools?", 
        options: ["Iron Age", "Paleolithic Age", "Bronze Age", "Neolithic Age"], 
        answer: "Bronze Age" 
    },
    { 
        question: "Which region in Nigeria is most known for tin mining?", 
        options: ["Ogun State", "Cross River State", "Niger Delta", "Jos Plateau"], 
        answer: "Jos Plateau" 
    },
    { 
        question: "Which type of fossil is commonly used to determine the age of a sedimentary rock layer?", 
        options: ["Body fossil", "Molecular fossil", "Index fossil", "Trace fossil"], 
        answer: "Index fossil" 
    },
    { 
        question: "What is the primary source of lead pollution?", 
        options: ["Solar panels", "Lead-based paints", "Hydroelectric dams", "Natural gas"], 
        answer: "Lead-based paints" 
    },
    { 
        question: "Which early hominid species is believed to be the direct ancestor of both Neanderthals and Homo sapiens?", 
        options: ["Homo habilis", "Homo erectus", "Australopithecus", "Homo heidelbergensis"], 
        answer: "Homo heidelbergensis" 
    },
    { 
        question: "Which form of renewable energy relies on the heat from the Earth’s core?", 
        options: ["Wind energy", "Geothermal energy", "Solar energy", "Hydropower"], 
        answer: "Geothermal energy" 
    },
    { 
        question: "Which instrument is used to measure the refractive index of a material?", 
        options: ["Spectrometer", "Barometer", "Refractometer", "Calorimeter"], 
        answer: "Refractometer" 
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
            if (localStorage.getItem(`score_${username}`) !== null) {
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
