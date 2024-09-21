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
    { username: "GUEST", password: "0000" },
    { username: "GUEST-II", password: "1111" },
    // Admin account
    { username: "ADMIN", password: "04926514", isAdmin: true }  
    // Add more users as needed
];

// Questions array
const questions = [
    {
        question: "Which grammatical structure involves combining two independent clauses without a conjunction?",
        options: ["Comma splice", "Subordinate clause", "Run-on sentence", "Complex sentence"],
        answer: "Comma splice"
    },
    {
        question: "What is the term for a word that connects clauses or sentences, such as 'and', 'but', or 'or'?",
        options: ["Conjunction", "Preposition", "Article", "Interjection"],
        answer: "Conjunction"
    },
    {
        question: "What is the type of sentence that makes a statement or 'declares' something?",
        options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        answer: "Declarative"
    },
    {
        question: "Which term refers to a noun or pronoun that follows another noun to rename or identify it?",
        options: ["Appositive", "Gerund", "Participle", "Infinitive"],
        answer: "Appositive"
    },
    {
        question: "What is the function of the word 'although' in the sentence 'Although he was tired, he kept working'?",
        options: ["Subordinating conjunction", "Coordinating conjunction", "Adverb", "Preposition"],
        answer: "Subordinating conjunction"
    },
    {
        question: "Which part of speech connects a noun to another word, usually indicating location or time?",
        options: ["Preposition", "Conjunction", "Article", "Interjection"],
        answer: "Preposition"
    },
    {
        question: "Which sentence type expresses strong emotion and ends with an exclamation mark?",
        options: ["Exclamatory", "Imperative", "Declarative", "Interrogative"],
        answer: "Exclamatory"
    },
    {
        question: "What type of conjunction pairs with another to join equal sentence elements, like 'either...or'?",
        options: ["Correlative conjunction", "Subordinating conjunction", "Coordinating conjunction", "Interjection"],
        answer: "Correlative conjunction"
    },
    {
        question: "Which tense is used to describe an action that was ongoing in the past, like 'I was reading'?",
        options: ["Past continuous", "Present perfect", "Simple past", "Future continuous"],
        answer: "Past continuous"
    },
    {
        question: "What type of verb shows an action that happened before another action in the past?",
        options: ["Past perfect", "Present perfect", "Past continuous", "Future perfect"],
        answer: "Past perfect"
    },
    {
        question: "Which term describes the voice where the subject receives the action of the verb?",
        options: ["Passive voice", "Active voice", "Conditional voice", "Imperative voice"],
        answer: "Passive voice"
    },
    {
        question: "Which type of sentence is used to give commands or make requests?",
        options: ["Imperative", "Declarative", "Interrogative", "Exclamatory"],
        answer: "Imperative"
    },
    {
        question: "Which part of speech modifies a noun or pronoun, usually providing more detail?",
        options: ["Adjective", "Adverb", "Verb", "Preposition"],
        answer: "Adjective"
    },
    {
        question: "Which sentence component expresses the main action or state of being?",
        options: ["Verb", "Noun", "Adverb", "Adjective"],
        answer: "Verb"
    },
    {
        question: "Which term refers to a word or phrase that means the opposite of another word?",
        options: ["Antonym", "Synonym", "Homonym", "Homophone"],
        answer: "Antonym"
    },
    {
        question: "Which punctuation mark is used to separate independent clauses joined by a coordinating conjunction?",
        options: ["Comma", "Semicolon", "Colon", "Period"],
        answer: "Comma"
    },
    {
        question: "What is the role of the word 'quickly' in the sentence 'She ran quickly to catch the bus'?",
        options: ["Adverb", "Adjective", "Verb", "Preposition"],
        answer: "Adverb"
    },
    {
        question: "What type of clause contains both a subject and a predicate but cannot stand alone as a complete sentence?",
        options: ["Subordinate clause", "Independent clause", "Main clause", "Relative clause"],
        answer: "Subordinate clause"
    },
    {
        question: "Which punctuation mark is used to introduce a list, quotation, or explanation?",
        options: ["Colon", "Comma", "Semicolon", "Dash"],
        answer: "Colon"
    },
    {
        question: "What term is used to describe the repetition of similar sounds at the beginning of words?",
        options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"],
        answer: "Alliteration"
    },
    {
        question: "What is the grammatical term for words like 'and', 'but', and 'or' that join words or clauses?",
        options: ["Conjunctions", "Prepositions", "Adverbs", "Interjections"],
        answer: "Conjunctions"
    },
    {
        question: "Which term refers to a verb form that functions as a noun and ends in '-ing'?",
        options: ["Gerund", "Participle", "Infinitive", "Appositive"],
        answer: "Gerund"
    },
    {
        question: "What is the term for the mood of a verb used to express a command or request?",
        options: ["Imperative mood", "Indicative mood", "Subjunctive mood", "Interrogative mood"],
        answer: "Imperative mood"
    },
    {
        question: "What is the difference between 'affect' and 'effect'?",
        options: ["'Affect' is a verb, and 'effect' is a noun", "'Affect' is a noun, and 'effect' is a verb", "They are synonyms", "They are homophones"],
        answer: "'Affect' is a verb, and 'effect' is a noun"
    },
    {
        question: "Which punctuation mark is used to join two independent clauses without a conjunction?",
        options: ["Semicolon", "Colon", "Comma", "Dash"],
        answer: "Semicolon"
    },
    {
        question: "Which part of speech shows the relationship between a noun and another word in the sentence?",
        options: ["Preposition", "Conjunction", "Interjection", "Article"],
        answer: "Preposition"
    },
    {
        question: "What type of verb helps the main verb in a sentence express tense, mood, or voice?",
        options: ["Auxiliary verb", "Modal verb", "Action verb", "Linking verb"],
        answer: "Auxiliary verb"
    },
    {
        question: "Which term describes a word that modifies a verb, adjective, or other adverb?",
        options: ["Adverb", "Adjective", "Preposition", "Conjunction"],
        answer: "Adverb"
    },
    {
        question: "Which grammatical term refers to a phrase that renames or identifies a noun?",
        options: ["Appositive", "Participle", "Gerund", "Infinitive"],
        answer: "Appositive"
    },
    {
        question: "What is the term for the voice where the subject performs the action of the verb?",
        options: ["Active voice", "Passive voice", "Conditional voice", "Imperative voice"],
        answer: "Active voice"
    },
    {
        question: "Which part of a sentence expresses who or what performs the action?",
        options: ["Subject", "Predicate", "Object", "Complement"],
        answer: "Subject"
    },
    {
        question: "What term refers to an adjective or phrase that follows a linking verb and describes the subject?",
        options: ["Predicate adjective", "Direct object", "Adverbial clause", "Participle"],
        answer: "Predicate adjective"
    },
    {
        question: "What is the term for a verb form that functions as an adjective and often ends in '-ing' or '-ed'?",
        options: ["Participle", "Gerund", "Infinitive", "Appositive"],
        answer: "Participle"
    },
    {
        question: "What is the grammatical function of the word 'quickly' in the sentence 'He quickly finished the exam'?",
        options: ["Adverb", "Adjective", "Verb", "Preposition"],
        answer: "Adverb"
    },
    {
        question: "What is the role of a conjunction in a sentence?",
        options: ["To connect words, phrases, or clauses", "To modify a noun", "To express action", "To show possession"],
        answer: "To connect words, phrases, or clauses"
    },
    {
        question: "Which type of sentence structure contains one independent clause and one or more subordinate clauses?",
        options: ["Complex sentence", "Compound sentence", "Simple sentence", "Run-on sentence"],
        answer: "Complex sentence"
    },
    {
        question: "Which term refers to the base form of a verb, often preceded by 'to'?",
        options: ["Infinitive", "Gerund", "Participle", "Subjunctive"],
        answer: "Infinitive"
    },
    {
        question: "Which sentence type is used to ask a question?",
        options: ["Interrogative", "Declarative", "Imperative", "Exclamatory"],
        answer: "Interrogative"
    },
    {
        question: "Which grammatical mood is used to express hypothetical or contrary-to-fact situations?",
        options: ["Subjunctive", "Indicative", "Imperative", "Interrogative"],
        answer: "Subjunctive"
    },
    {
        question: "What is the grammatical function of the word 'it' in the sentence 'It is raining'?",
        options: ["Dummy subject", "Direct object", "Predicate", "Infinitive"],
        answer: "Dummy subject"
    },
    {
        question: "What term refers to a group of words with a subject and a verb that expresses a complete thought?",
        options: ["Independent clause", "Subordinate clause", "Phrase", "Appositive"],
        answer: "Independent clause"
    },
    {
        question: "Which type of verb expresses possibility, necessity, or permission?",
        options: ["Modal verb", "Auxiliary verb", "Action verb", "Linking verb"],
        answer: "Modal verb"
    },
    {
        question: "Which term describes the repetition of similar vowel sounds within words in close proximity?",
        options: ["Assonance", "Alliteration", "Consonance", "Onomatopoeia"],
        answer: "Assonance"
    },
    {
        question: "What is the role of a predicate in a sentence?",
        options: ["It expresses the action or state of being", "It renames the subject", "It shows the relationship between words", "It modifies the subject"],
        answer: "It expresses the action or state of being"
    },
    {
        question: "What is the grammatical function of a subject complement?",
        options: ["It follows a linking verb and describes or renames the subject", "It connects clauses in a sentence", "It expresses an action", "It modifies a verb"],
        answer: "It follows a linking verb and describes or renames the subject"
    },
    {
        question: "Which term refers to the word or phrase that receives the action of a transitive verb?",
        options: ["Direct object", "Indirect object", "Subject", "Predicate"],
        answer: "Direct object"
    },
    {
        question: "Which punctuation mark is used to indicate the omission of one or more words in a sentence?",
        options: ["Ellipsis", "Dash", "Comma", "Semicolon"],
        answer: "Ellipsis"
    },
    {
        question: "What is the term for a sentence fragment that lacks either a subject or a verb, making it incomplete?",
        options: ["Sentence fragment", "Run-on sentence", "Comma splice", "Complex sentence"],
        answer: "Sentence fragment"
    },
    {
        question: "Which type of modifier incorrectly appears far from the word it describes, leading to confusion?",
        options: ["Dangling modifier", "Misplaced modifier", "Appositive", "Infinitive"],
        answer: "Misplaced modifier"
    },
    {
        question: "What is the name of the punctuation mark used to indicate direct speech or a quotation?",
        options: ["Quotation marks", "Parentheses", "Colon", "Apostrophe"],
        answer: "Quotation marks"
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
