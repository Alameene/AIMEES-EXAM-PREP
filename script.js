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
    { username: "PESH", password: "23/208CHM/411" },
    { username: "SARAH", password: "23/208CHM/413" },
    { username: "NGOZI", password: "23/208CHM/343" },
    { username: "GUEST", password: "0000" },
    { username: "GUEST-II", password: "1111" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];

// Questions array
const questions = [
    {
        question: "Which conjunction is used to introduce a conditional clause?",
        options: ["if", "but", "so", "when"],
        answer: "if"
    },
    {
        question: "What term refers to the act of placing side by side to compare or contrast?",
        options: ["Juxtaposition", "Alliteration", "Hyperbole", "Oxymoron"],
        answer: "Juxtaposition"
    },
    {
        question: "Which punctuation mark is used to separate clauses in a complex sentence?",
        options: ["Comma", "Full stop", "Colon", "Semi-colon"],
        answer: "Semi-colon"
    },
    {
        question: "What figure of speech involves the repetition of the same consonant sound at the beginning of words?",
        options: ["Alliteration", "Simile", "Metaphor", "Personification"],
        answer: "Alliteration"
    },
    {
        question: "Which type of sentence expresses a command or request?",
        options: ["Imperative", "Declarative", "Interrogative", "Exclamatory"],
        answer: "Imperative"
    },
    {
        question: "Which is the correct auxiliary verb in the sentence: 'She _____ finished the project by tomorrow'?",
        options: ["will have", "is", "will", "was"],
        answer: "will have"
    },
    {
        question: "Which form of the verb 'to be' is used in the sentence: 'The results _____ surprising'?",
        options: ["are", "was", "is", "were"],
        answer: "are"
    },
    {
        question: "Which punctuation is used to indicate possession?",
        options: ["Apostrophe", "Semi-colon", "Hyphen", "Comma"],
        answer: "Apostrophe"
    },
    {
        question: "What is the term for a clause that cannot stand alone as a complete sentence?",
        options: ["Dependent clause", "Independent clause", "Simple sentence", "Complex sentence"],
        answer: "Dependent clause"
    },
    {
        question: "Which term refers to the repetition of similar vowel sounds within words?",
        options: ["Assonance", "Consonance", "Alliteration", "Onomatopoeia"],
        answer: "Assonance"
    },
    {
        question: "What is a word that modifies a noun called?",
        options: ["Adjective", "Adverb", "Preposition", "Conjunction"],
        answer: "Adjective"
    },
    {
        question: "What is the grammatical term for the subject's action or state in a sentence?",
        options: ["Predicate", "Subject", "Object", "Adverb"],
        answer: "Predicate"
    },
    {
        question: "Which of the following is not a coordinating conjunction?",
        options: ["Although", "But", "And", "Or"],
        answer: "Although"
    },
    {
        question: "In a compound sentence, which of the following is used to join two independent clauses?",
        options: ["Conjunction", "Comma", "Semicolon", "Colon"],
        answer: "Conjunction"
    },
    {
        question: "What is the correct verb form in the sentence: 'She has been _____ since morning'?",
        options: ["working", "worked", "work", "works"],
        answer: "working"
    },
    {
        question: "Which type of sentence asks a question?",
        options: ["Interrogative", "Imperative", "Declarative", "Exclamatory"],
        answer: "Interrogative"
    },
    {
        question: "Which punctuation mark is used to indicate an abrupt break or pause in a sentence?",
        options: ["Dash", "Hyphen", "Comma", "Colon"],
        answer: "Dash"
    },
    {
        question: "What is the grammatical term for the use of two negatives in a sentence to express a positive meaning?",
        options: ["Double negative", "Affirmative", "Paradox", "Hyperbole"],
        answer: "Double negative"
    },
    {
        question: "Which part of speech expresses an action or state of being?",
        options: ["Verb", "Noun", "Adjective", "Pronoun"],
        answer: "Verb"
    },
    {
        question: "What type of sentence makes a statement?",
        options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        answer: "Declarative"
    },
    {
        question: "Which punctuation mark is used to introduce a list or explanation?",
        options: ["Colon", "Comma", "Semi-colon", "Apostrophe"],
        answer: "Colon"
    },
    {
        question: "What is the term for a word that takes the place of a noun?",
        options: ["Pronoun", "Verb", "Adjective", "Preposition"],
        answer: "Pronoun"
    },
    {
        question: "Which of the following is an example of an indefinite article?",
        options: ["A", "The", "This", "That"],
        answer: "A"
    },
    {
        question: "In which type of sentence does the subject perform the action expressed by the verb?",
        options: ["Active voice", "Passive voice", "Imperative sentence", "Interrogative sentence"],
        answer: "Active voice"
    },
    {
        question: "Which of the following is a determiner?",
        options: ["Each", "Run", "Quickly", "On"],
        answer: "Each"
    },
    {
        question: "Which term refers to the verb form that functions as a noun?",
        options: ["Gerund", "Participle", "Infinitive", "Adverb"],
        answer: "Gerund"
    },
    {
        question: "What is the term for a group of words that has a subject and a verb but cannot stand alone as a sentence?",
        options: ["Dependent clause", "Independent clause", "Phrase", "Gerund"],
        answer: "Dependent clause"
    },
    {
        question: "Which of the following is a correlative conjunction?",
        options: ["Either...or", "Although", "But", "And"],
        answer: "Either...or"
    },
    {
        question: "Which of the following sentences is in passive voice?",
        options: ["The cake was eaten by John.", "John ate the cake.", "The cake is delicious.", "John will eat the cake."],
        answer: "The cake was eaten by John."
    },
    {
        question: "Which term refers to a verb form used to indicate an action that is hypothetical or not factual?",
        options: ["Subjunctive", "Indicative", "Imperative", "Conditional"],
        answer: "Subjunctive"
    },
    {
        question: "Which conjunction introduces a subordinate clause?",
        options: ["Although", "And", "But", "Or"],
        answer: "Although"
    },
    {
        question: "What is the correct form of the verb in the sentence: 'If I _____ a car, I would drive you to work'?",
        options: ["had", "have", "has", "will have"],
        answer: "had"
    },
    {
        question: "Which of the following is an example of a transitive verb?",
        options: ["Eat", "Run", "Sleep", "Laugh"],
        answer: "Eat"
    },
    {
        question: "What is the grammatical term for a word that links two clauses together?",
        options: ["Conjunction", "Preposition", "Adjective", "Verb"],
        answer: "Conjunction"
    },
    {
        question: "Which term refers to a word that modifies a verb, an adjective, or another adverb?",
        options: ["Adverb", "Adjective", "Conjunction", "Preposition"],
        answer: "Adverb"
    },
    {
        question: "Which punctuation mark is used to enclose additional information in a sentence?",
        options: ["Parentheses", "Comma", "Colon", "Dash"],
        answer: "Parentheses"
    },
    {
        question: "Which type of clause can function as a sentence by itself?",
        options: ["Independent clause", "Dependent clause", "Relative clause", "Adjective clause"],
        answer: "Independent clause"
    },
    {
        question: "Which term describes the omission of conjunctions between clauses in a sentence?",
        options: ["Asyndeton", "Polysyndeton", "Ellipsis", "Anaphora"],
        answer: "Asyndeton"
    },
    {
        question: "Which word in the sentence 'The quick brown fox jumps over the lazy dog' is the adjective?",
        options: ["Quick", "Jumps", "Dog", "Over"],
        answer: "Quick"
    },
    {
        question: "Which of the following is a collective noun?",
        options: ["Team", "Cat", "Quickly", "Under"],
        answer: "Team"
    },
    {
        question: "Which punctuation mark is used to separate items in a list?",
        options: ["Comma", "Period", "Exclamation mark", "Colon"],
        answer: "Comma"
    },
    {
        question: "Which of the following is an example of a countable noun?",
        options: ["Book", "Water", "Sugar", "Advice"],
        answer: "Book"
    },
    {
        question: "Which type of sentence is used to give orders or instructions?",
        options: ["Imperative", "Declarative", "Interrogative", "Exclamatory"],
        answer: "Imperative"
    },
    {
        question: "Which of the following is a reflexive pronoun?",
        options: ["Myself", "I", "Me", "You"],
        answer: "Myself"
    },
    {
        question: "Which term refers to a phrase that renames or provides more information about a noun?",
        options: ["Appositive", "Gerund", "Infinitive", "Clause"],
        answer: "Appositive"
    },
    {
        question: "Which type of sentence contains an independent clause and at least one dependent clause?",
        options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"],
        answer: "Complex sentence"
    },
    {
        question: "Which of the following is an example of a modal verb?",
        options: ["Can", "Run", "Beautiful", "Quickly"],
        answer: "Can"
    },
    {
        question: "Which rhetorical device involves the use of a word or phrase at the beginning of successive clauses or sentences for emphasis?",
        options: ["Anaphora", "Metonymy", "Antithesis", "Synecdoche"],
        answer: "Anaphora"
    },
    {
        question: "What term is used to describe a sentence where the main idea is delayed until the end?",
        options: ["Periodic sentence", "Loose sentence", "Balanced sentence", "Compound sentence"],
        answer: "Periodic sentence"
    },
    {
        question: "Which linguistic concept refers to the omission of parts of a sentence that are implied by context, often indicated by three dots?",
        options: ["Ellipsis", "Zeugma", "Litotes", "Chiasmus"],
        answer: "Ellipsis"
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
             <span>Your answer: <strong style="color: ${isCorrect ? 'white' : 'red'};">${userAnswer}</strong></span><br>
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
