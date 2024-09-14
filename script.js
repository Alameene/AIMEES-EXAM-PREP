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
     { username: "HAVILAH", password: "23/208CHM/399" },
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
    //THE ADMIN LOG-IN INFO
    { username: "ADMIN", password: "04926514", isAdmin: true }  // Admin account
    // Add more users as needed
];

const questions = [
    { 
        question: "Which library serves as a legal depository for the country?", 
        options: ["Academic Library", "Special Library", "National Library", "Private Library"], 
        answer: "National Library" 
    },
    { 
        question: "National libraries are established by?", 
        options: ["Private universities", "Special interest groups", "Federal Government", "Non-governmental organizations"], 
        answer: "Federal Government" 
    },
    { 
        question: "Public libraries are established to perform one of these functions?", 
        options: ["Provide information for entertainment purposes", "Discourage reading", "Publish literary journals", "Sell books"], 
        answer: "Provide information for entertainment purposes" 
    },
    { 
        question: "One of the uses of a university library is to?", 
        options: ["Provide fiction books to students", "Discourage the use of the internet", "Aid research and teaching", "Raise funds for the university"], 
        answer: "Aid research and teaching" 
    },
    { 
        question: "How many laws were laid down for the development of libraries and information science by Ranganathan?", 
        options: ["7", "4", "6", "5"], 
        answer: "5" 
    },
    { 
        question: "The symbol used in libraries for arranging books on the shelf is known as?", 
        options: ["Dewey Decimal Classification", "Colour coding system", "Open shelving", "Spine mark"], 
        answer: "Dewey Decimal Classification" 
    },
    { 
        question: "The term used to describe non-book materials kept for reading, study, and consultation is called?", 
        options: ["Fiction books", "Reference materials", "Audio-visual materials", "Supplementary Index"], 
        answer: "Audio-visual materials" 
    },
    { 
        question: "The term used for materials that cannot be borrowed from the library is?", 
        options: ["Reference materials", "Reserve materials", "Fiction books", "Periodicals"], 
        answer: "Reference materials" 
    },
    { 
        question: "Which of the following is used to access information in the library?", 
        options: ["Spine mark", "Card catalogue", "Dewey Decimal Classification", "Indexing"], 
        answer: "Card catalogue" 
    },
    { 
        question: "The record that assists in the management of periodicals in the library is called?", 
        options: ["Shelving guide", "Accession Register", "Kardex", "Catalogue card"], 
        answer: "Kardex" 
    },
    { 
        question: "Which of the following is used for shelving books in the library?", 
        options: ["Spine mark", "Serial number", "Index number", "Reference number"], 
        answer: "Spine mark" 
    },
    { 
        question: "The smallest division of the library book collection is known as?", 
        options: ["Subject heading", "Call number", "Volume", "Entry"], 
        answer: "Call number" 
    },
    { 
        question: "The form of cataloging in which the complete works of an author are described under a single heading is called?", 
        options: ["Union catalog", "Analytical catalog", "Collective catalog", "Author catalog"], 
        answer: "Author catalog" 
    },
    { 
        question: "Which of the following represents the intellectual content of a book?", 
        options: ["Publisher", "Book seller", "Author"], 
        answer: "Author" 
    },
    { 
        question: "Copyright violations in libraries occur when?", 
        options: ["Libraries share books for free", "Libraries duplicate works", "To punish users", "To create awareness"], 
        answer: "Libraries duplicate works" 
    },
    { 
        question: "How long can laws used in the library be in effect?", 
        options: ["20 years", "50 years", "100 years", "Indefinitely"], 
        answer: "50 years" 
    },
    { 
        question: "Which of these is an important factor in the classification of library materials?", 
        options: ["Author", "Title", "Subject", "Date of Publication"], 
        answer: "Subject" 
    },
    { 
        question: "The Dewey Decimal Classification has how many main classes?", 
        options: ["100", "10", "50", "500"], 
        answer: "10" 
    },
    { 
        question: "Periodicals in the library are arranged by?", 
        options: ["Title", "Date of publication", "Volume", "Call number"], 
        answer: "Date of publication" 
    },
    { 
        question: "An overdue notice is issued when?", 
        options: ["A book is lost", "A book is damaged", "A book is returned late", "A book is borrowed"], 
        answer: "A book is returned late" 
    },
    { 
        question: "Which section of the library is responsible for binding of materials?", 
        options: ["Acquisitions", "Reference", "Circulation", "Technical Services"], 
        answer: "Technical Services" 
    },
    { 
        question: "Library fines are imposed for which of the following reasons?", 
        options: ["Returning books early", "Returning damaged books", "Returning books late", "Damaging library property"], 
        answer: "Returning books late" 
    },
    { 
        question: "A library catalogue is divided into?", 
        options: ["Books and non-books", "Book and print", "Book and periodical", "Journals and books"], 
        answer: "Journals and books" 
    },
    { 
        question: "Which of the following is not an example of an electronic database?", 
        options: ["ERIC", "AGORA", "MEDLINE", "Newspapers"], 
        answer: "Newspapers" 
    },
    { 
        question: "Which of these is an electronic resource in the library?", 
        options: ["E-books", "Physical books", "Book indexes", "Card catalogues"], 
        answer: "E-books" 
    },
    { 
        question: "Knowledge and skills acquired using electronic technology is called?", 
        options: ["Computer literacy", "E-learning", "E-services", "Digital literacy"], 
        answer: "Digital literacy" 
    },
    { 
        question: "The part of the library that stores manuscripts is called?", 
        options: ["Special collections", "Reference section", "Circulation desk", "General collection"], 
        answer: "Special collections" 
    },
    { 
        question: "Which of these is a computerized system that allows users to locate resources?", 
        options: ["Index", "Catalogue", "Online Public Access Catalogue (OPAC)", "Bibliography"], 
        answer: "Online Public Access Catalogue (OPAC)" 
    },
    { 
        question: "The purpose of reference service in the library is?", 
        options: ["To assist in research", "To help users find materials", "To supervise reading rooms", "To catalog books"], 
        answer: "To help users find materials" 
    },
    { 
        question: "Which of the following is a function of an academic library?", 
        options: ["Provide reading materials", "Provide entertainment", "Conduct research", "Organize reading competitions"], 
        answer: "Provide reading materials" 
    },
    { 
        question: "The term 'circulation' in libraries refers to?", 
        options: ["Issuing and returning books", "Cataloguing books", "Binding books", "Organizing reading rooms"], 
        answer: "Issuing and returning books" 
    },
    { 
        question: "Which of these is the core function of a library?", 
        options: ["Lending books", "Organizing social events", "Fundraising", "Purchasing books"], 
        answer: "Lending books" 
    },
    { 
        question: "The person in charge of a library is known as?", 
        options: ["Administrator", "Librarian", "Technician", "Custodian"], 
        answer: "Librarian" 
    },
        // Existing questions...
        { 
            question: "Which of these is a function of a public library?", 
            options: ["Provide services to the general public", "Provide materials for private companies", "Focus solely on academic research", "Sell books to the public"], 
            answer: "Provide services to the general public" 
        },
        { 
            question: "Which section of the library is responsible for purchasing new materials?", 
            options: ["Reference section", "Technical Services", "Circulation section", "Acquisitions"], 
            answer: "Acquisitions" 
        },
        { 
            question: "Which system is used to classify library materials by subject?", 
            options: ["Card catalogue", "Open shelving", "Dewey Decimal System", "Serial number system"], 
            answer: "Dewey Decimal System" 
        },
        { 
            question: "Which of these is considered a non-book material?", 
            options: ["Encyclopedias", "Journals", "DVDs", "Fiction novels"], 
            answer: "DVDs" 
        },
        { 
            question: "The term used for the computerized list of a library's collection is?", 
            options: ["Library register", "Online Public Access Catalogue", "Book log", "Manual index"], 
            answer: "Online Public Access Catalogue" 
        },
        { 
            question: "Which section of the library handles user registrations?", 
            options: ["Technical services", "Circulation desk", "Reference desk", "Acquisitions"], 
            answer: "Circulation desk" 
        },
        { 
            question: "The person who assists library users in locating materials is called?", 
            options: ["Technician", "Reference librarian", "Administrator", "Supervisor"], 
            answer: "Reference librarian" 
        },
        { 
            question: "What does 'OPAC' stand for?", 
            options: ["Online Periodicals and Catalogues", "Online Public Access Catalogue", "Offline Public Access Catalogue", "Online Private Access Catalogue"], 
            answer: "Online Public Access Catalogue" 
        },
        { 
            question: "What is the process of removing outdated or damaged materials from the library called?", 
            options: ["Shelving", "Weeding", "Cataloguing", "Binding"], 
            answer: "Weeding" 
        },
        { 
            question: "Which of the following is a periodical publication?", 
            options: ["Dictionary", "Journal", "Atlas", "Encyclopedia"], 
            answer: "Journal" 
        },
        { 
            question: "What type of library serves schools and educational institutions?", 
            options: ["Public library", "National library", "School library", "Special library"], 
            answer: "School library" 
        },
        { 
            question: "The classification system that divides knowledge into ten main classes is called?", 
            options: ["Dewey Decimal Classification", "Library of Congress Classification", "Universal Decimal Classification", "National Library Classification"], 
            answer: "Dewey Decimal Classification" 
        },
        { 
            question: "Which of the following is not a characteristic of a reference book?", 
            options: ["Meant for short consultation", "Cannot be borrowed", "Contains current news", "Provides quick facts"], 
            answer: "Contains current news" 
        },
        { 
            question: "A database that provides abstracts and full-text scholarly articles is known as?", 
            options: ["OPAC", "Bibliography", "Digital database", "Kardex"], 
            answer: "Digital database" 
        },
        { 
            question: "Which of these materials can only be used within the library?", 
            options: ["Reference books", "Fiction novels", "Magazines", "DVDs"], 
            answer: "Reference books" 
        },
        { 
            question: "Which library department is responsible for indexing and abstracting journals?", 
            options: ["Circulation", "Acquisitions", "Technical Services", "Reference"], 
            answer: "Technical Services" 
        },
        { 
            question: "The process of grouping books by subject area is called?", 
            options: ["Cataloging", "Shelving", "Classification", "Indexing"], 
            answer: "Classification" 
        },
    
];

let examStartTime = null;
let currentQuestionIndex = 0;

document.getElementById('start-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}, Password: ${password}`); // Debug log

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.isAdmin) {
            viewResults();  // Admin login, view all results
        } else if (sessionStorage.getItem(username)) {
            alert("You have already attempted the exam.");
        } else {
            sessionStorage.setItem(username, true);
            startExam();
        }
    } else {
        alert("Invalid username or password.");
    }
});

function startExam() {
    console.log("Starting the exam"); // Debug log
    examStartTime = Date.now();
    document.querySelector('.first').style.display = 'none';
    const examContainer = document.getElementById('exam-container');
    examContainer.style.display = 'block';
    renderQuestion(currentQuestionIndex);
    startTimer(examContainer);
}

function renderQuestion(index) {
    console.log(`Rendering question ${index + 1}`); // Debug log
    const examContainer = document.getElementById('exam-container');
    examContainer.innerHTML = `<form id="exam-form"></form>`;
    const form = document.getElementById('exam-form');
    const q = questions[index];

    form.innerHTML = `
        <div>
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`).join('')}
        </div>
    `;

    // Add Previous button only if not on the first question
    if (index > 0) {
        form.innerHTML += `<button type="button" onclick="previousQuestion()">Previous</button>`;
    }

    // If last question, show the submit button, otherwise show Next
    if (index < questions.length - 1) {
        form.innerHTML += `<button type="button" onclick="nextQuestion()">Next</button>`;
    } else {
        form.innerHTML += `<button type="button" onclick="submitExam()">Submit Exam</button>`;
    }
}

function nextQuestion() {
    saveAnswer(currentQuestionIndex);
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
}

function previousQuestion() {
    saveAnswer(currentQuestionIndex);
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
}

function saveAnswer(index) {
    const formData = new FormData(document.getElementById('exam-form'));
    const selectedOption = formData.get(`q${index}`);
    if (selectedOption) {
        sessionStorage.setItem(`answer${index}`, selectedOption);
    }
}

function startTimer(container) {
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    container.prepend(timerElement);
    updateTimer();
}

function updateTimer() {
    const now = Date.now();
    const timeElapsed = Math.floor((now - examStartTime) / 1000);
    const timeRemaining = 30 * 60 - timeElapsed;

    if (timeRemaining <= 0) {
        submitExam();
        return;
    }

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    setTimeout(updateTimer, 1000);
}

function submitExam() {
    let score = 0;

    questions.forEach((q, index) => {
        const savedAnswer = sessionStorage.getItem(`answer${index}`);
        if (savedAnswer === q.answer) {
            score++;
        }
    });

    const username = document.getElementById('user-name').value;
    localStorage.setItem(username, score);
    animateScoreDisplay(score);
}

function animateScoreDisplay(score) {
    const examContainer = document.getElementById('exam-container');
    examContainer.style.display = 'none';

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    document.body.appendChild(scoreContainer);

    let currentScore = 0;
    const targetScore = score;
    const incrementSpeed = 50; // Speed of score increment in ms

    const scoreInterval = setInterval(() => {
        if (currentScore < targetScore) {
            currentScore++;
            scoreContainer.innerHTML = `<h2>Your Score: ${currentScore}</h2>`;
        } else {
            clearInterval(scoreInterval);
            setTimeout(showResults, 1000);  // Delay to show top 5 scorers
        }
    }, incrementSpeed);
}

function showResults() {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.style.display = 'none';

    const resultsContainer = document.createElement('div');
    document.body.appendChild(resultsContainer);

    const scores = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (users.find(u => u.username === key && !u.isAdmin)) {
            scores.push({ username: key, score: parseInt(localStorage.getItem(key)) });
        }
    }

    scores.sort((a, b) => b.score - a.score);

    resultsContainer.innerHTML = `<h2>Top 5 Scores</h2>`;
    scores.slice(0, 5).forEach((s, index) => {
        resultsContainer.innerHTML += `<p>${index + 1}. ${s.username} - ${s.score}</p>`;
    });
}

function viewResults() {
    document.querySelector('.first').style.display = 'none';

    const resultsContainer = document.createElement('div');
    document.body.appendChild(resultsContainer);

    const scores = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (users.find(u => u.username === key && !u.isAdmin)) {
            scores.push({ username: key, score: parseInt(localStorage.getItem(key)) });
        }
    }

    scores.sort((a, b) => b.score - a.score);

    resultsContainer.innerHTML = `<h2>All Scores</h2>`;
    scores.forEach((s, index) => {
        resultsContainer.innerHTML += `<p>${index + 1}. ${s.username} - ${s.score}</p>`;
    });
}
