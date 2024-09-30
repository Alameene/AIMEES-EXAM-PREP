// User data with unique usernames
const users = [
    { username: "AL-AMEEN", password: "23/208CHM/420" },
    { username: "GUEST-I", password: "LIBRARY" },
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
        question: "Which of the following is a function of a reference library?", 
        options: ["Providing materials for consultation", "Lending books to users", "Organizing community events", "Hosting book sales"], 
        answer: "Providing materials for consultation" 
    },
    { 
        question: "The process of systematically arranging library materials according to subject or format is called?", 
        options: ["Classification", "Cataloging", "Weeding", "Acquisition"], 
        answer: "Classification" 
    },
    { 
        question: "Which of these is the primary purpose of an academic library?", 
        options: ["Supporting research and teaching", "Organizing social events", "Promoting recreational reading", "Offering book repair services"], 
        answer: "Supporting research and teaching" 
    },
    { 
        question: "Which of the following is used to organize books on shelves by subject?", 
        options: ["Dewey Decimal System", "Kardex", "Indexing", "Barcode"], 
        answer: "Dewey Decimal System" 
    },
    { 
        question: "The librarian in charge of organizing and maintaining the physical collection of books is known as?", 
        options: ["Cataloger", "Circulation officer", "Archivist", "Reference librarian"], 
        answer: "Cataloger" 
    },
    { 
        question: "Which of the following is the first step in the acquisition of books for a library?", 
        options: ["Selection", "Classification", "Circulation", "Weeding"], 
        answer: "Selection" 
    },
    { 
        question: "Which of the following is NOT considered a public library function?", 
        options: ["Providing free access to information", "Lending books to the public", "Conducting original research", "Organizing literacy programs"], 
        answer: "Conducting original research" 
    },
    { 
        question: "Which of these is used to identify books within a library?", 
        options: ["Call number", "Kardex", "Index", "Access number"], 
        answer: "Call number" 
    },
    { 
        question: "Which of the following is a periodical publication?", 
        options: ["Journal", "Novel", "Anthology", "Textbook"], 
        answer: "Journal" 
    },
    { 
        question: "Which part of the library contains information about the library’s materials, such as author and title?", 
        options: ["Catalogue", "Kardex", "Acquisitions", "Weeding section"], 
        answer: "Catalogue" 
    },
    { 
        question: "Which section of the library typically houses research papers, theses, and dissertations?", 
        options: ["Reference section", "Circulation", "Special collections", "Acquisitions"], 
        answer: "Special collections" 
    },
    { 
        question: "The term 'stack' in a library refers to?", 
        options: ["The shelves where books are stored", "The cataloguing system", "The reference desk", "The circulation area"], 
        answer: "The shelves where books are stored" 
    },
    { 
        question: "What is the primary responsibility of a circulation librarian?", 
        options: ["Issuing and returning books", "Cataloging new books", "Conducting research", "Assisting with acquisitions"], 
        answer: "Issuing and returning books" 
    },
    { 
        question: "Which of the following describes the process of removing outdated or damaged books from the library?", 
        options: ["Weeding", "Cataloging", "Acquisition", "Shelf-reading"], 
        answer: "Weeding" 
    },
    { 
        question: "A library classification system is primarily used for?", 
        options: ["Arranging books by subject", "Recording loan history", "Labeling borrowed materials", "Maintaining the digital catalogue"], 
        answer: "Arranging books by subject" 
    },
    { 
        question: "Which type of library is designed to serve government departments and civil servants?", 
        options: ["Special Library", "National Library", "Public Library", "Private Library"], 
        answer: "Special Library" 
    },
    { 
        question: "Which section of the library is responsible for book processing and repair?", 
        options: ["Technical Services", "Reference Section", "Cataloging", "Acquisitions"], 
        answer: "Technical Services" 
    },
    { 
        question: "Which of the following services is offered in a library’s reference section?", 
        options: ["Answering research inquiries", "Book lending", "Weeding outdated materials", "Binding books"], 
        answer: "Answering research inquiries" 
    },
    { 
        question: "A book’s spine label contains information about?", 
        options: ["The call number and classification", "The number of pages", "The book's binding material", "The author and publisher"], 
        answer: "The call number and classification" 
    },
    { 
        question: "In a library, materials that are reserved for in-library use only are called?", 
        options: ["Reference materials", "Periodicals", "Fiction", "Audio-visual materials"], 
        answer: "Reference materials" 
    },
    { 
        question: "Which of the following materials are most likely to be found in a special collections section of a library?", 
        options: ["Rare manuscripts and archival materials", "Popular novels", "Textbooks", "Audio books"], 
        answer: "Rare manuscripts and archival materials" 
    },
    { 
        question: "Which library staff member is primarily responsible for helping users with research and finding information?", 
        options: ["Reference Librarian", "Archivist", "Circulation Officer", "Cataloger"], 
        answer: "Reference Librarian" 
    },
    { 
        question: "Which library material is typically issued for a short-term loan?", 
        options: ["Course reserve books", "Fiction books", "Reference materials", "Rare manuscripts"], 
        answer: "Course reserve books" 
    },
    { 
        question: "Which of the following items cannot be checked out from a library?", 
        options: ["Reference books", "Fiction novels", "Audio-visual materials", "Journals"], 
        answer: "Reference books" 
    },
    { 
        question: "Which term is used to describe books that have not been borrowed for a long period of time?", 
        options: ["Dormant books", "Periodicals", "Reference materials", "Rare books"], 
        answer: "Dormant books" 
    },
    { 
        question: "Which of the following is a core function of a public library?", 
        options: ["Providing access to reading materials", "Conducting primary research", "Selling academic journals", "Organizing reading competitions"], 
        answer: "Providing access to reading materials" 
    },
    { 
        question: "Which classification system is used in most university libraries?", 
        options: ["Library of Congress Classification", "Dewey Decimal System", "Kardex System", "MARC Classification"], 
        answer: "Library of Congress Classification" 
    },
    { 
        question: "Which library system uses call numbers to categorize and arrange books?", 
        options: ["Dewey Decimal Classification", "Kardex", "Barcode system", "Weeding"], 
        answer: "Dewey Decimal Classification" 
    },
    { 
        question: "Which library service is intended for patrons with special needs?", 
        options: ["Accessible reading materials", "Weeding", "Book sale events", "Rare collections"], 
        answer: "Accessible reading materials" 
    },
    { 
        question: "Which of the following is an essential component of a library catalog?", 
        options: ["Author, title, subject", "Date of publication, price, length", "Shelf number, volume, binding", "Location, barcode, accession number"], 
        answer: "Author, title, subject" 
    },
    { 
        question: "Which type of library typically contains information tailored for business purposes?", 
        options: ["Special library", "Public library", "National library", "School library"], 
        answer: "Special library" 
    },
    { 
        question: "Which of the following materials would NOT be found in a periodicals section?", 
        options: ["Textbooks", "Magazines", "Newspapers", "Academic journals"], 
        answer: "Textbooks" 
    },
    { 
        question: "Which of the following is a task performed by an acquisitions librarian?", 
        options: ["Selecting new books for the library", "Organizing books on shelves", "Binding damaged books", "Answering reference questions"], 
        answer: "Selecting new books for the library" 
    },
    { 
        question: "What is the primary purpose of a cataloging system in a library?", 
        options: ["To help users locate materials", "To circulate books", "To issue late fines", "To maintain book repairs"], 
        answer: "To help users locate materials" 
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
