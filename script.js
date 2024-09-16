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
    { username: "BENEDICTA", password: "23/207CHM/369" }, // Renamed to ensure uniqueness
    { username: "LOVETH", password: "23/208CHM/409" }, // Renamed to ensure uniqueness
    { username: "ABDULKADIR", password: "23/208CHM/387" },
    { username: "GERALD", password: "23/208CHM/356" },
    { username: "FAVOUR", password: "23/208CHM/359" },
    { username: "OYIZA", password: "23/208CHM/367" },
    { username: "MARY", password: "23/208CHM/385" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];

// Questions array
const questions = [
    { 
        question: "Which ancient civilization is credited with the use of the sexagesimal number system?", 
        options: ["Babylonians", "Egyptians", "Greeks", "Romans"], 
        answer: "Babylonians" 
    },
    { 
        question: "The sexagesimal number system is based on which base number?", 
        options: ["Base 60", "Base 12", "Base 10", "Base 20"], 
        answer: "Base 60" 
    },
    { 
        question: "In which era did humans start using bronze tools?", 
        options: ["Bronze Age", "Iron Age", "Stone Age", "Neolithic Age"], 
        answer: "Bronze Age" 
    },
    { 
        question: "Which hominid is known as the first tool maker?", 
        options: ["Homo habilis", "Australopithecus", "Homo erectus", "Homo sapiens"], 
        answer: "Homo habilis" 
    },
    { 
        question: "Ramapithecus is considered to belong to which evolutionary stage?", 
        options: ["Miocene", "Pleistocene", "Oligocene", "Holocene"], 
        answer: "Miocene" 
    },
    { 
        question: "What is the main component of natural gas?", 
        options: ["Methane", "Ethane", "Propane", "Butane"], 
        answer: "Methane" 
    },
    { 
        question: "Which element is the primary component of the ozone layer?", 
        options: ["Oxygen", "Nitrogen", "Ozone", "Hydrogen"], 
        answer: "Ozone" 
    },
    { 
        question: "The process of separating crude oil into its components is known as?", 
        options: ["Fractional distillation", "Cracking", "Polymerization", "Combustion"], 
        answer: "Fractional distillation" 
    },
    { 
        question: "What type of pollution is caused by excessive nitrogen and phosphorus in water bodies?", 
        options: ["Eutrophication", "Acid rain", "Global warming", "Thermal pollution"], 
        answer: "Eutrophication" 
    },
    { 
        question: "Which scientist is credited with the discovery of electrons?", 
        options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "Albert Einstein"], 
        answer: "J.J. Thomson" 
    },
    { 
        question: "Which particle has a negative charge?", 
        options: ["Electron", "Proton", "Neutron", "Photon"], 
        answer: "Electron" 
    },
    { 
        question: "What is the mass number of an atom with 6 protons and 7 neutrons?", 
        options: ["13", "12", "14", "7"], 
        answer: "13" 
    },
    { 
        question: "Which gas is primarily responsible for the greenhouse effect?", 
        options: ["Carbon dioxide", "Methane", "Nitrogen", "Oxygen"], 
        answer: "Carbon dioxide" 
    },
    { 
        question: "Which gas forms the protective ozone layer in the atmosphere?", 
        options: ["Ozone", "Carbon dioxide", "Nitrogen", "Methane"], 
        answer: "Ozone" 
    },
    { 
        question: "The Paleolithic Age is also known as the?", 
        options: ["Old Stone Age", "Middle Stone Age", "Bronze Age", "New Stone Age"], 
        answer: "Old Stone Age" 
    },
    { 
        question: "What is the main mineral resource found in Jos Plateau, Nigeria?", 
        options: ["Tin", "Gold", "Coal", "Limestone"], 
        answer: "Tin" 
    },
    { 
        question: "What is the fundamental unit of life?", 
        options: ["Cell", "Atom", "Molecule", "Organism"], 
        answer: "Cell" 
    },
    { 
        question: "Which of the following elements is NOT a noble gas?", 
        options: ["Oxygen", "Neon", "Helium", "Argon"], 
        answer: "Oxygen" 
    },
    { 
        question: "Which form of radiation is most harmful to living tissues?", 
        options: ["Gamma rays", "Microwaves", "Radio waves", "Infrared"], 
        answer: "Gamma rays" 
    },
    { 
        question: "Which human ancestor is associated with the first use of fire?", 
        options: ["Homo erectus", "Homo habilis", "Australopithecus", "Homo sapiens"], 
        answer: "Homo erectus" 
    },
    { 
        question: "The Mesolithic period is also referred to as the?", 
        options: ["Middle Stone Age", "New Stone Age", "Old Stone Age", "Bronze Age"], 
        answer: "Middle Stone Age" 
    },
    { 
        question: "Which layer of the Earth is responsible for the greenhouse effect?", 
        options: ["Atmosphere", "Mantle", "Core", "Lithosphere"], 
        answer: "Atmosphere" 
    },
    { 
        question: "What is the term used to describe organisms that obtain energy from inorganic substances?", 
        options: ["Chemotrophs", "Phototrophs", "Heterotrophs", "Autotrophs"], 
        answer: "Chemotrophs" 
    },
    { 
        question: "The process of converting natural resources into finished products is known as?", 
        options: ["Industrialization", "Fractionation", "Polymerization", "Manufacturing"], 
        answer: "Manufacturing" 
    },
    { 
        question: "The ability of the atmosphere to retain heat is largely due to the presence of which gas?", 
        options: ["Water vapor", "Oxygen", "Nitrogen", "Methane"], 
        answer: "Water vapor" 
    },
    { 
        question: "Which stage in human evolution is associated with bipedalism?", 
        options: ["Australopithecus", "Homo sapiens", "Homo erectus", "Homo habilis"], 
        answer: "Australopithecus" 
    },
    { 
        question: "Which human ancestor is associated with the development of stone tools?", 
        options: ["Homo habilis", "Homo sapiens", "Homo erectus", "Neanderthals"], 
        answer: "Homo habilis" 
    },
    { 
        question: "Which scientist proposed the model of the atom where electrons orbit the nucleus?", 
        options: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "James Chadwick"], 
        answer: "Niels Bohr" 
    },
    { 
        question: "Which gas is a major contributor to acid rain?", 
        options: ["Sulfur dioxide", "Carbon monoxide", "Methane", "Nitrogen"], 
        answer: "Sulfur dioxide" 
    },
    { 
        question: "What is the energy transformation in photosynthesis?", 
        options: ["Light to chemical", "Chemical to thermal", "Mechanical to electrical", "Electrical to light"], 
        answer: "Light to chemical" 
    },
    { 
        question: "The majority of Earth's atmosphere is composed of which gas?", 
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], 
        answer: "Nitrogen" 
    },
    { 
        question: "Which of the following is not a mineral resource in Nigeria?", 
        options: ["Diamonds", "Coal", "Limestone", "Tin"], 
        answer: "Diamonds" 
    },
    { 
        question: "Who discovered the neutron?", 
        options: ["James Chadwick", "J.J. Thomson", "Ernest Rutherford", "Niels Bohr"], 
        answer: "James Chadwick" 
    },
    { 
        question: "What percentage of Earth's surface is covered by water?", 
        options: ["71%", "60%", "45%", "85%"], 
        answer: "71%" 
    },
    { 
        question: "Which process is used to convert nitrogen gas from the atmosphere into ammonia?", 
        options: ["Nitrogen fixation", "Nitrification", "Ammonification", "Denitrification"], 
        answer: "Nitrogen fixation" 
    },
    { 
        question: "What is the primary cause of the greenhouse effect?", 
        options: ["Increased levels of greenhouse gases", "Deforestation", "Volcanic eruptions", "Ocean acidification"], 
        answer: "Increased levels of greenhouse gases" 
    },
    { 
        question: "Which tool was primarily used during the Paleolithic Age?", 
        options: ["Stone tools", "Iron tools", "Bronze tools", "Wooden tools"], 
        answer: "Stone tools" 
    },
    { 
        question: "Which element has the highest atomic number?", 
        options: ["Uranium", "Lead", "Plutonium", "Gold"], 
        answer: "Uranium" 
    },
    { 
        question: "Which layer of Earth's atmosphere contains the ozone layer?", 
        options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], 
        answer: "Stratosphere" 
    },
    { 
        question: "Which of the following is an example of renewable energy?", 
        options: ["Solar power", "Coal", "Natural gas", "Petroleum"], 
        answer: "Solar power" 
    },
    { 
        question: "Which of the following is the best method to reduce acid rain?", 
        options: ["Using renewable energy sources", "Increasing the use of coal", "Cutting down trees", "Building more factories"], 
        answer: "Using renewable energy sources" 
    },
    { 
        question: "The age of the Earth is estimated to be about?", 
        options: ["4.5 billion years", "6,000 years", "3 million years", "1 billion years"], 
        answer: "4.5 billion years" 
    },
    { 
        question: "Which mineral resource is abundant in Enugu, Nigeria?", 
        options: ["Coal", "Gold", "Tin", "Iron ore"], 
        answer: "Coal" 
    },
    { 
        question: "Which fossil fuel is mainly used in transportation?", 
        options: ["Petroleum", "Coal", "Natural gas", "Uranium"], 
        answer: "Petroleum" 
    },
    { 
        question: "Which planet in the solar system has the most moons?", 
        options: ["Jupiter", "Saturn", "Mars", "Earth"], 
        answer: "Jupiter" 
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
             <span>Your answer: <strong style="color: ${isCorrect ? 'white' : 'red'};">${userAnswer}</strong></span><br>
             ${isCorrect ? `<span style="color: yellow;">Correct!</span>` : `<span style="color: red;">Correct answer: ${q.answer}</span>`}
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
