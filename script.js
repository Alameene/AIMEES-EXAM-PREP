// User data with unique usernames
const users = [
    { username: "AL-AMEEN", password: "23/208CHM/420" },
    { username: "GUEST", password: "CHEMISTRY" },
    { username: "ISAAC", password: "23/207ACC/924" },
    { username: "MICHEAL", password: "23/207ACC/832" },
    { username: "FELICIA", password: "1234" },
    { username: "SHALOM", password: "1234" },
    { username: "JOY", password: "1234" },
    { username: "ABDULRAHMAN", password: "1234" },
    { username: "HOPE", password: "1234" },
    { username: "RASHEEDAT", password: "1234" },
    { username: "OLUCHI", password: "1234" },
    { username: "RODIAT", password: "23/208CHM/412" },
    { username: "GUEST-II", password: "1111B" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];

const questions = [
    { 
        question: "Which system is used to track books borrowed from the library?", 
        options: ["Library Management System", "Accession Register", "Index", "OPAC"], 
        answer: "Library Management System" 
    },
    { 
        question: "Which library service allows users to access books and resources online?", 
        options: ["Library of Congress", "Online Public Access Catalogue (OPAC)", "Academic Library", "Public Library"], 
        answer: "Online Public Access Catalogue (OPAC)" 
    },
    { 
        question: "What does OPAC stand for in library services?", 
        options: ["Online Public Access Catalogue", "Open Public Access Catalogue", "Official Public Access Center", "Organized Public Access Code"], 
        answer: "Online Public Access Catalogue" 
    },
    { 
        question: "Which of the following is an online resource commonly used in academic libraries?", 
        options: ["Journals", "E-books", "Magazines", "Novels"], 
        answer: "E-books" 
    },
    { 
        question: "Which term refers to the digital library of research papers available online?", 
        options: ["Research Database", "Digital Archive", "E-library", "Digital Repository"], 
        answer: "Digital Repository" 
    },
    { 
        question: "What is the primary function of a library database?", 
        options: ["To store digital books", "To organize printed materials", "To help users search for academic articles and journals", "To keep track of overdue books"], 
        answer: "To help users search for academic articles and journals" 
    },
    { 
        question: "Which of the following is an example of an academic online database?", 
        options: ["Google", "ERIC", "Amazon", "Wikipedia"], 
        answer: "ERIC" 
    },
    { 
        question: "Which of the following is NOT a digital library service?", 
        options: ["Interlibrary loan", "Virtual reference services", "Google Scholar", "Open access journals"], 
        answer: "Google Scholar" 
    },
    { 
        question: "Which of these is a benefit of digital libraries over physical libraries?", 
        options: ["They are available 24/7", "They offer fewer resources", "They have a limited collection", "They do not support research"], 
        answer: "They are available 24/7" 
    },
    { 
        question: "The technology that allows libraries to loan e-books is called?", 
        options: ["E-circulation", "E-loan", "Digital loaning", "Electronic lending"], 
        answer: "E-circulation" 
    },
    { 
        question: "Which of the following internet tools can be used to search for academic papers?", 
        options: ["Google Books", "PubMed", "Yahoo Search", "Instagram"], 
        answer: "PubMed" 
    },
    { 
        question: "What does DOI stand for in academic publishing?", 
        options: ["Digital Object Identifier", "Document Official Identifier", "Direct Online Index", "Database Object Identifier"], 
        answer: "Digital Object Identifier" 
    },
    { 
        question: "Which is the primary function of an e-journal?", 
        options: ["To provide entertainment", "To deliver academic papers online", "To distribute news", "To sell books"], 
        answer: "To deliver academic papers online" 
    },
    { 
        question: "Which of the following provides free access to research papers and publications?", 
        options: ["Open Access Journals", "Subscription-based databases", "Private Library", "Magazines"], 
        answer: "Open Access Journals" 
    },
    { 
        question: "Which library system allows remote access to digital resources for its users?", 
        options: ["E-library", "OPAC", "Academic Library", "Public Library"], 
        answer: "E-library" 
    },
    { 
        question: "Which service allows libraries to share resources with other libraries over the internet?", 
        options: ["Interlibrary Loan", "Digital Archives", "OPAC", "Circulation Services"], 
        answer: "Interlibrary Loan" 
    },
    { 
        question: "What does VPN stand for, a tool sometimes used to access library resources remotely?", 
        options: ["Virtual Private Network", "Virtual Public Network", "Verified Personal Network", "Voluntary Public Network"], 
        answer: "Virtual Private Network" 
    },
    { 
        question: "Which system protects digital library resources from unauthorized access?", 
        options: ["Encryption", "Subscription", "Classification", "Indexing"], 
        answer: "Encryption" 
    },
    { 
        question: "The process of digitizing physical materials for online use in a library is called?", 
        options: ["Archiving", "Digitalization", "Conversion", "Scanning"], 
        answer: "Digitalization" 
    },
    { 
        question: "Which of the following is a disadvantage of digital libraries?", 
        options: ["24/7 access", "Limited access without the internet", "Searchable databases", "Lower cost"], 
        answer: "Limited access without the internet" 
    },
    { 
        question: "Which of the following best describes cloud-based library systems?", 
        options: ["Library systems stored on remote servers", "Traditional physical libraries", "Systems without user access", "Offline library resources"], 
        answer: "Library systems stored on remote servers" 
    },
    { 
        question: "Which of these is NOT a role of the library in supporting digital literacy?", 
        options: ["Teaching users how to use digital tools", "Providing access to e-resources", "Giving access to printed magazines", "Providing computer workstations"], 
        answer: "Giving access to printed magazines" 
    },
    { 
        question: "Which type of library provides specialized resources related to a specific subject area?", 
        options: ["Special Library", "Public Library", "National Library", "Private Library"], 
        answer: "Special Library" 
    },
    { 
        question: "Which of the following represents a way libraries support e-learning?", 
        options: ["Providing access to study materials and online courses", "Renting textbooks", "Selling digital books", "Providing internet-free zones"], 
        answer: "Providing access to study materials and online courses" 
    },
    { 
        question: "What is a repository in the context of digital libraries?", 
        options: ["A storage location for physical books", "An online database for storing research data and publications", "A type of library catalog", "A newspaper archive"], 
        answer: "An online database for storing research data and publications" 
    },
    { 
        question: "Which of the following internet tools allows libraries to preserve old and rare books?", 
        options: ["Digital Archiving", "Cloud Services", "Library Automation", "Web Browsing"], 
        answer: "Digital Archiving" 
    },
    { 
        question: "Which of the following does NOT fall under the responsibility of library technical services?", 
        options: ["Binding and repairing books", "Cataloging materials", "Shelving books", "Lending books"], 
        answer: "Lending books" 
    },
    { 
        question: "Which of the following helps libraries manage electronic resources?", 
        options: ["Electronic Resource Management System", "Dewey Decimal Classification", "Call number system", "Accession register"], 
        answer: "Electronic Resource Management System" 
    },
    { 
        question: "Which of the following best describes 'library automation'?", 
        options: ["Using technology to manage and operate library functions", "Hiring more staff to improve efficiency", "Building more physical libraries", "Reorganizing physical bookshelves"], 
        answer: "Using technology to manage and operate library functions" 
    },
    { 
        question: "Which system is widely used for managing electronic library resources?", 
        options: ["Library Management System", "Online Public Access Catalogue", "Card Catalogue", "Indexing"], 
        answer: "Library Management System" 
    },
    { 
        question: "Which term is used for resources available on the internet but outside the traditional library?", 
        options: ["Virtual Library", "Database", "Physical Library", "Digital Reserve"], 
        answer: "Virtual Library" 
    },
    { 
        question: "Which of the following is used to protect intellectual property rights in digital libraries?", 
        options: ["Copyright law", "Subscription fees", "Dewey Decimal System", "Spine mark"], 
        answer: "Copyright law" 
    },
    { 
        question: "Which of the following library services helps users with research queries?", 
        options: ["Reference Services", "Circulation Desk", "Cataloging", "Binding"], 
        answer: "Reference Services" 
    },
    { 
        question: "The act of converting printed library materials to digital form is called?", 
        options: ["Digitization", "Indexing", "Binding", "Classification"], 
        answer: "Digitization" 
    },
    { 
        question: "Which of these is a common internet resource in modern libraries?", 
        options: ["Wi-Fi access", "Library Stamps", "Reference Desks", "Printed Newspapers"], 
        answer: "Wi-Fi access" 
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
