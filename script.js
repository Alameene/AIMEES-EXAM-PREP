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
    { username: "GUEST-I", password: "0000" },
    { username: "GUEST-II", password: "1111" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];
 
// Questions array
const questions = [
    {
        question: "What is the term for a verb that expresses an action directed toward a person or thing?",
        options: ["Intransitive verb", "Transitive verb", "Linking verb", "Auxiliary verb"],
        answer: "Transitive verb"
    },
    {
        question: "Which of the following sentences contains a dangling modifier?",
        options: [
            "Walking down the street, the flowers were blooming.",
            "I walked down the street while the flowers were blooming.",
            "As I walked down the street, I saw the flowers blooming.",
            "The flowers were blooming as I walked down the street."
        ],
        answer: "Walking down the street, the flowers were blooming."
    },
    {
        question: "What is the difference between a simile and a metaphor?",
        options: [
            "A simile compares two things using 'like' or 'as', while a metaphor does not.",
            "A metaphor compares two things using 'like' or 'as', while a simile does not.",
            "A simile describes a metaphor.",
            "There is no difference."
        ],
        answer: "A simile compares two things using 'like' or 'as', while a metaphor does not."
    },
    {
        question: "What do we call a verb form that acts as an adjective?",
        options: ["Gerund", "Infinitive", "Participle", "Adverb"],
        answer: "Participle"
    },
    {
        question: "Which of the following is an example of a fused sentence?",
        options: [
            "I went to the store, I bought apples.",
            "I went to the store; I bought apples.",
            "I went to the store I bought apples.",
            "I went to the store and bought apples."
        ],
        answer: "I went to the store I bought apples."
    },
    {
        question: "Which of the following sentences uses an incorrect verb tense?",
        options: [
            "She has been waiting for an hour.",
            "He had already left when she arrived.",
            "I will finish the project last week.",
            "They are planning to visit tomorrow."
        ],
        answer: "I will finish the project last week."
    },
    {
        question: "What is a split infinitive?",
        options: [
            "An infinitive that is interrupted by another word",
            "A verb phrase that uses two infinitives",
            "An infinitive that comes at the beginning of a sentence",
            "An infinitive that follows a preposition"
        ],
        answer: "An infinitive that is interrupted by another word"
    },
    {
        question: "What is the function of an adverbial clause?",
        options: [
            "To modify a verb, adjective, or another adverb",
            "To connect two independent clauses",
            "To introduce a noun clause",
            "To replace a noun or pronoun"
        ],
        answer: "To modify a verb, adjective, or another adverb"
    },
    {
        question: "Which of the following sentences is an example of a compound-complex sentence?",
        options: [
            "I went to the store, and I bought milk.",
            "Because it was raining, I stayed inside.",
            "I went to the store, and because it was raining, I bought an umbrella.",
            "I love reading books."
        ],
        answer: "I went to the store, and because it was raining, I bought an umbrella."
    },
    {
        question: "What is the correct use of a semicolon?",
        options: [
            "To separate two independent clauses",
            "To separate items in a simple list",
            "To show possession",
            "To join a dependent clause to an independent clause"
        ],
        answer: "To separate two independent clauses"
    },
    {
        question: "Which sentence contains an appositive?",
        options: [
            "My friend, a talented artist, is painting a mural.",
            "I saw a bird flying in the sky.",
            "She is taller than her sister.",
            "He ran to the store quickly."
        ],
        answer: "My friend, a talented artist, is painting a mural."
    },
    {
        question: "What is an independent clause?",
        options: [
            "A clause that can stand alone as a sentence",
            "A group of words without a subject or verb",
            "A clause that requires a subordinating conjunction",
            "A clause that cannot stand alone"
        ],
        answer: "A clause that can stand alone as a sentence"
    },
    {
        question: "What is the correct use of an apostrophe?",
        options: [
            "To show possession or form a contraction",
            "To join two independent clauses",
            "To separate items in a list",
            "To introduce a quotation"
        ],
        answer: "To show possession or form a contraction"
    },
    {
        question: "Which of the following is a simple sentence?",
        options: [
            "The dog barked loudly.",
            "The dog barked loudly, and the cat ran away.",
            "Because the dog barked loudly, the cat ran away.",
            "The dog barked, and because it was loud, the cat ran away."
        ],
        answer: "The dog barked loudly."
    },
    {
        question: "Which of the following is an example of a relative pronoun?",
        options: ["Which", "She", "He", "It"],
        answer: "Which"
    },
    {
        question: "What is a collective noun?",
        options: [
            "A noun that represents a group of individuals",
            "A noun that describes an emotion",
            "A proper noun",
            "A noun used to describe a place"
        ],
        answer: "A noun that represents a group of individuals"
    },
    {
        question: "What is the function of a direct object?",
        options: [
            "To receive the action of the verb",
            "To show possession",
            "To modify the subject",
            "To act as a predicate nominative"
        ],
        answer: "To receive the action of the verb"
    },
    {
        question: "Which of the following is an abstract noun?",
        options: ["Happiness", "Table", "Car", "Dog"],
        answer: "Happiness"
    },
    {
        question: "What type of sentence expresses a command?",
        options: ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
        answer: "Imperative"
    },
    {
        question: "What is a predicate adjective?",
        options: [
            "An adjective that follows a linking verb and describes the subject",
            "An adjective that modifies the direct object",
            "An adjective that describes a pronoun",
            "An adjective that precedes the subject"
        ],
        answer: "An adjective that follows a linking verb and describes the subject"
    },
    {
        question: "Which of the following sentences contains a gerund?",
        options: ["She enjoys running.", "She ran to the store.", "She will run tomorrow.", "She is running now."],
        answer: "She enjoys running."
    },
    {
        question: "What is the function of a relative clause?",
        options: [
            "To modify a noun or pronoun",
            "To replace the subject",
            "To express time or condition",
            "To introduce a new idea"
        ],
        answer: "To modify a noun or pronoun"
    },
    {
        question: "Which of the following is a demonstrative pronoun?",
        options: ["This", "She", "Him", "Their"],
        answer: "This"
    },
    {
        question: "What is a declarative sentence?",
        options: [
            "A sentence that makes a statement",
            "A sentence that asks a question",
            "A sentence that expresses a command",
            "A sentence that shows strong emotion"
        ],
        answer: "A sentence that makes a statement"
    },
    {
        question: "Which sentence contains a compound subject?",
        options: ["John and Mary went to the store.", "He went to the store.", "She is running.", "The dog barked."],
        answer: "John and Mary went to the store."
    },
    {
        question: "What is the past participle of the verb 'to go'?",
        options: ["Gone", "Go", "Went", "Going"],
        answer: "Gone"
    },
    {
        question: "Which of the following is an example of a correlative conjunction?",
        options: ["Neither...nor", "Although", "But", "And"],
        answer: "Neither...nor"
    },
    {
        question: "What is an infinitive?",
        options: [
            "The base form of a verb preceded by 'to'",
            "A verb form used as a noun",
            "A verb that agrees with the subject",
            "A verb that expresses past action"
        ],
        answer: "The base form of a verb preceded by 'to'"
    },
    {
        question: "Which sentence uses a prepositional phrase?",
        options: [
            "She walked to the park.",
            "She is taller than her sister.",
            "The book is interesting.",
            "He ran quickly."
        ],
        answer: "She walked to the park."
    },
    {
        question: "Which of the following sentences is passive?",
        options: [
            "The book was read by the teacher.",
            "The teacher read the book.",
            "She is reading the book.",
            "The book is interesting."
        ],
        answer: "The book was read by the teacher."
    },
    {
        question: "What type of conjunction is used in the sentence: 'She stayed home because it was raining'?",
        options: ["Subordinating conjunction", "Coordinating conjunction", "Correlative conjunction", "Conjunctive adverb"],
        answer: "Subordinating conjunction"
    },
    {
        question: "What is the comparative form of the adjective 'good'?",
        options: ["Better", "Best", "More good", "Gooder"],
        answer: "Better"
    },
    {
        question: "What is a dangling participle?",
        options: [
            "A participle that does not modify any noun or pronoun in the sentence",
            "A participle that follows the subject",
            "A participle that describes the direct object",
            "A participle that acts as a subject complement"
        ],
        answer: "A participle that does not modify any noun or pronoun in the sentence"
    },
    {
        question: "Which of the following is an example of an imperative sentence?",
        options: [
            "Please pass the salt.",
            "He is going to the park.",
            "She will attend the meeting tomorrow.",
            "It is a sunny day."
        ],
        answer: "Please pass the salt."
    },
    {
        question: "What type of word is used to join two independent clauses?",
        options: ["Conjunction", "Adverb", "Preposition", "Interjection"],
        answer: "Conjunction"
    },
    {
        question: "Which of the following sentences contains an adverbial phrase?",
        options: [
            "She sings beautifully.",
            "She sings very beautifully.",
            "The music is loud.",
            "She sang the song beautifully."
        ],
        answer: "She sings very beautifully."
    },
    {
        question: "What is the past tense of the verb 'to bring'?",
        options: ["Brought", "Brang", "Bringed", "Broughten"],
        answer: "Brought"
    },
    {
        question: "Which of the following sentences contains a subject-verb agreement error?",
        options: [
            "The cat chases the mouse.",
            "The dogs barks loudly.",
            "She is reading a book.",
            "They have finished their homework."
        ],
        answer: "The dogs barks loudly."
    },
    {
        question: "Which type of sentence asks a question?",
        options: ["Interrogative", "Declarative", "Imperative", "Exclamatory"],
        answer: "Interrogative"
    },
    {
        question: "What is the function of a coordinating conjunction?",
        options: [
            "To join two words, phrases, or clauses of equal importance",
            "To introduce a dependent clause",
            "To show possession",
            "To express a command"
        ],
        answer: "To join two words, phrases, or clauses of equal importance"
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
