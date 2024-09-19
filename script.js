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
    }
];


let currentQuestionIndex = 0;
let selectedAnswers = [];
let username = "";

// Function to start the quiz after signing in
document.getElementById('details-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    username = document.getElementById('user-name').value;
    if (username) {
        document.querySelector('.first').style.display = 'none'; // Hide the sign-in form
        document.getElementById('exam-container').style.display = 'block'; // Show the exam questions
        displayQuestion(); // Display the first question
    }
});

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsElement.innerHTML += `
            <div>
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
}

// Function to save the selected answer
function saveAnswer(questionIndex) {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedAnswers[questionIndex] = selectedOption.value;
    }
}

// Function to handle next button click
function nextQuestion() {
    saveAnswer(currentQuestionIndex);

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('nextBtn').style.display = 'none'; // Hide the next button
        document.getElementById('submitBtn').style.display = 'block'; // Show the submit button
    }
}

// Function to handle submit button click
function submitExam() {
    saveAnswer(currentQuestionIndex);
    let score = 0;

    // Calculate score based on selected answers
    questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
            score++;
        }
    });

    // Hide the exam container and show the results container
    document.getElementById('exam-container').style.display = 'none';
    displayCorrectAnswers(score);
}

function displayCorrectAnswers(score) {
    const resultsContainer = document.getElementById('results-container');
    
    // Ensure the results container is scrollable and properly styled
    resultsContainer.style.display = 'block'; // Show results container
    resultsContainer.style.maxHeight = '80vh'; // Set max height to 80% of the viewport
    resultsContainer.style.overflowY = 'auto'; // Enable scrolling if needed
    resultsContainer.style.padding = '10px';  // Add padding for readability
    resultsContainer.style.backgroundColor = '#f9f9f9';  // Light background for readability
    
    // Display the score
    resultsContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;

    // Display question-by-question feedback
    resultsContainer.innerHTML += `<h3>Correct Answers:</h3>`;
    questions.forEach((q, index) => {
        const userAnswer = selectedAnswers[index] || "No answer selected";
        const isCorrect = userAnswer === q.answer;
        resultsContainer.innerHTML += `
            <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; background-color: #fff; max-width: 100%;">
                <strong>Question ${index + 1}:</strong> ${q.question}<br>
                <span>Your answer: <strong style="color: ${isCorrect ? 'green' : 'red'};">${userAnswer}</strong></span><br>
                ${isCorrect ? `<span style="color: green;">Correct!</span>` : `<span style="color: red;">Correct answer: ${q.answer}</span>`}
            </div>
        `;
    });

    // Add the restart button
    resultsContainer.innerHTML += `<button onclick="location.reload()">Restart Exam</button>`;
}


// Initialize quiz
window.onload = function() {
    document.getElementById('submitBtn').style.display = 'none';
};
