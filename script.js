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
        question: "What is the primary function of a semicolon in a sentence?",
        options: ["To connect independent clauses", "To indicate a pause", "To introduce a list", "To separate items in a series"],
        answer: "To connect independent clauses"
    },
    {
        question: "Which type of sentence expresses a command or request?",
        options: ["Interrogative", "Declarative", "Exclamatory", "Imperative"],
        answer: "Imperative"
    },
    {
        question: "What term describes a word that has the same or nearly the same meaning as another word?",
        options: ["Antonym", "Synonym", "Homonym", "Prefix"],
        answer: "Synonym"
    },
    {
        question: "What is the purpose of an exclamation point in a sentence?",
        options: ["To indicate a question", "To show strong emotion", "To connect clauses", "To list items"],
        answer: "To show strong emotion"
    },
    {
        question: "Which of the following is an example of a compound sentence?",
        options: ["She likes tea.", "She likes tea, and he likes coffee.", "Although she likes tea, she drinks coffee.", "She drinks coffee."],
        answer: "She likes tea, and he likes coffee."
    },
    {
        question: "What do we call the introductory words or phrases that provide context in a sentence?",
        options: ["Modifiers", "Prepositional phrases", "Adverbials", "Subordinate clauses"],
        answer: "Adverbials"
    },
    {
        question: "Which punctuation mark is used to indicate a pause stronger than a comma but weaker than a period?",
        options: ["Semicolon", "Colon", "Comma", "Dash"],
        answer: "Semicolon"
    },
    {
        question: "What is a complex sentence?",
        options: ["A sentence with one independent clause and one or more dependent clauses", "A sentence with two independent clauses", "A sentence that is very long", "A simple sentence with added details"],
        answer: "A sentence with one independent clause and one or more dependent clauses"
    },
    {
        question: "What do we call the part of the sentence that tells who or what the sentence is about?",
        options: ["Predicate", "Object", "Subject", "Complement"],
        answer: "Subject"
    },
    {
        question: "What is the term for a word or phrase that describes the subject of a sentence?",
        options: ["Modifier", "Subject complement", "Predicate adjective", "Adverb"],
        answer: "Modifier"
    },
    {
        question: "Which type of clause can stand alone as a complete sentence?",
        options: ["Dependent clause", "Independent clause", "Relative clause", "Adverbial clause"],
        answer: "Independent clause"
    },
    {
        question: "What is the function of a conjunction in a sentence?",
        options: ["To connect words or groups of words", "To indicate a question", "To express strong feelings", "To provide additional information"],
        answer: "To connect words or groups of words"
    },
    {
        question: "What do we call the specific word or group of words that the subject of a sentence performs the action on?",
        options: ["Object", "Predicate", "Subject", "Complement"],
        answer: "Object"
    },
    {
        question: "What is an interrogative sentence?",
        options: ["A sentence that asks a question", "A sentence that makes a statement", "A sentence that gives a command", "A sentence that expresses excitement"],
        answer: "A sentence that asks a question"
    },
    {
        question: "What do we call an adjective that modifies a noun in a specific way?",
        options: ["Predicate adjective", "Descriptive adjective", "Limiting adjective", "Compound adjective"],
        answer: "Limiting adjective"
    },
    {
        question: "What is a gerund?",
        options: ["A verb form ending in -ing that functions as a noun", "A verb form used in the past tense", "A type of adjective", "A conjunction"],
        answer: "A verb form ending in -ing that functions as a noun"
    },
    {
        question: "Which of the following is a misplaced modifier?",
        options: ["She quickly ran to the store.", "He saw a dog on the way to the park.", "The man with the hat walked his dog.", "The man walked his dog in a hurry."],
        answer: "The man with the hat walked his dog."
    },
    {
        question: "What is a dangling modifier?",
        options: ["A modifier that does not clearly connect to the word it describes", "A modifier placed at the end of the sentence", "A modifier that is too long", "A modifier that uses too many adjectives"],
        answer: "A modifier that does not clearly connect to the word it describes"
    },
    {
        question: "What is the term for a verb that shows the subject's action or state of being?",
        options: ["Linking verb", "Action verb", "Transitive verb", "Intransitive verb"],
        answer: "Action verb"
    },
    {
        question: "What is a prepositional phrase?",
        options: ["A group of words that begins with a preposition and ends with a noun", "A phrase that shows action", "A type of subordinate clause", "A group of words without a subject"],
        answer: "A group of words that begins with a preposition and ends with a noun"
    },
    {
        question: "What do we call the main idea of a sentence, typically found in the predicate?",
        options: ["Subject", "Verb", "Object", "Predicate"],
        answer: "Predicate"
    },
    {
        question: "Which punctuation mark is used before a list of items?",
        options: ["Comma", "Semicolon", "Colon", "Period"],
        answer: "Colon"
    },
    {
        question: "What is the function of a relative clause in a sentence?",
        options: ["To provide additional information about a noun", "To ask a question", "To express a command", "To connect two independent clauses"],
        answer: "To provide additional information about a noun"
    },
    {
        question: "What type of noun refers to a general category rather than a specific instance?",
        options: ["Proper noun", "Common noun", "Collective noun", "Abstract noun"],
        answer: "Common noun"
    },
    {
        question: "What is an oxymoron?",
        options: ["A figure of speech that combines contradictory terms", "A statement that is clearly false", "A type of analogy", "A type of metaphor"],
        answer: "A figure of speech that combines contradictory terms"
    },
    {
        question: "Which of the following is an example of an adverb?",
        options: ["Quickly", "Car", "Happy", "Beautiful"],
        answer: "Quickly"
    },
    {
        question: "What do we call a sentence that uses a subject and a verb to express a complete thought?",
        options: ["Compound sentence", "Complex sentence", "Simple sentence", "Run-on sentence"],
        answer: "Simple sentence"
    },
    {
        question: "Which type of narrative perspective uses 'I' or 'we'?",
        options: ["Second-person", "Third-person", "First-person", "Omniscient"],
        answer: "First-person"
    },
    {
        question: "What is the purpose of a thesis statement?",
        options: ["To summarize the main points of an essay", "To introduce a new topic", "To provide evidence", "To present a specific argument"],
        answer: "To present a specific argument"
    },
    {
        question: "What is the term for a comparison between two unlike things using 'like' or 'as'?",
        options: ["Metaphor", "Simile", "Alliteration", "Hyperbole"],
        answer: "Simile"
    },
    {
        question: "Which of the following is a compound-complex sentence?",
        options: ["Although it was raining, I went for a walk and met a friend.", "I enjoy reading books.", "She loves music, but she doesn't play any instruments.", "He is tall."],
        answer: "Although it was raining, I went for a walk and met a friend."
    },
    {
        question: "What do we call the central idea or theme in a piece of literature?",
        options: ["Plot", "Setting", "Motif", "Message"],
        answer: "Message"
    },
    {
        question: "What is an anecdote?",
        options: ["A short personal story used to illustrate a point", "A summary of a book", "A character's inner thoughts", "A description of a setting"],
        answer: "A short personal story used to illustrate a point"
    },
    {
        question: "Which type of literary device involves the repetition of initial consonant sounds?",
        options: ["Alliteration", "Onomatopoeia", "Assonance", "Imagery"],
        answer: "Alliteration"
    },
    {
        question: "What is the main purpose of a persuasive essay?",
        options: ["To inform the reader", "To entertain the reader", "To convince the reader of a particular viewpoint", "To describe a person or place"],
        answer: "To convince the reader of a particular viewpoint"
    },
     {
        question: "Which sentence is an example of passive voice?",
        options: ["She baked a cake.", "The cake was baked by her.", "She is baking a cake.", "She will bake a cake."],
        answer: "The cake was baked by her."
    },
    {
        question: "What is the term for a sentence that combines two or more independent clauses without proper punctuation?",
        options: ["Complex sentence", "Fragment", "Run-on sentence", "Compound sentence"],
        answer: "Run-on sentence"
    },
    {
        question: "What is the function of a subordinating conjunction?",
        options: ["To connect independent clauses", "To introduce a dependent clause", "To join two verbs", "To modify a noun"],
        answer: "To introduce a dependent clause"
    },
    {
        question: "Which of the following is an example of a coordinating conjunction?",
        options: ["However", "And", "Although", "Because"],
        answer: "And"
    },
    {
        question: "What do we call a word that takes the place of a noun in a sentence?",
        options: ["Verb", "Adverb", "Pronoun", "Adjective"],
        answer: "Pronoun"
    },
    {
        question: "What is the difference between a phrase and a clause?",
        options: [
            "A phrase has a subject and a verb, while a clause does not.",
            "A clause has a subject and a verb, while a phrase does not.",
            "A phrase expresses a complete thought, while a clause does not.",
            "There is no difference."
        ],
        answer: "A clause has a subject and a verb, while a phrase does not."
    },
    {
        question: "Which of the following is an example of an interjection?",
        options: ["Wow!", "Run", "Quickly", "Under"],
        answer: "Wow!"
    },
    {
        question: "Which sentence is in the future perfect tense?",
        options: [
            "She will be playing the piano.",
            "She has played the piano.",
            "She will have played the piano.",
            "She plays the piano."
        ],
        answer: "She will have played the piano."
    },
    {
        question: "What is the function of a demonstrative pronoun?",
        options: ["To indicate proximity to the speaker", "To introduce a dependent clause", "To show possession", "To modify an adjective"],
        answer: "To indicate proximity to the speaker"
    },
    {
        question: "Which punctuation mark is used to separate items in a list?",
        options: ["Colon", "Semicolon", "Comma", "Period"],
        answer: "Comma"
    },
    {
        question: "Which of the following is an example of a reflexive pronoun?",
        options: ["Hers", "Themselves", "He", "Their"],
        answer: "Themselves"
    },
    {
        question: "Which of the following is a correct example of subject-verb agreement?",
        options: [
            "The dogs runs fast.",
            "The cat run fast.",
            "The dog run fast.",
            "The dog runs fast."
        ],
        answer: "The dog runs fast."
    },
    {
        question: "What is the term for a noun that represents a group of people or things?",
        options: ["Proper noun", "Abstract noun", "Collective noun", "Concrete noun"],
        answer: "Collective noun"
    },
    {
        question: "What do we call the mood of a verb that expresses a wish, suggestion, or hypothetical situation?",
        options: ["Indicative", "Imperative", "Interrogative", "Subjunctive"],
        answer: "Subjunctive"
    },
    {
        question: "What is the correct past tense form of the verb 'to fly'?",
        options: ["Flied", "Flyed", "Flown", "Flew"],
        answer: "Flew"
    },
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
