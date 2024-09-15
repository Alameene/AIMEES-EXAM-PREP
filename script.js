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
    { username: "GOODLUCK", password: "23/208CHM/338" },
    { username: "MICKEY", password: "23/207ACC/832" },
    { username: "HAVILAH", password: "23/208CHM/399" },
    { username: "ABDULKADIR", password: "23/208CHM/387" },
    { username: "GERALD", password: "23/208CHM/356" },
    { username: "FAVOUR", password: "23/208CHM/359" },
    { username: "OYIZA", password: "23/208CHM/367" },
    { username: "MARY", password: "23/208CHM/385" },
    //THE ADMIN LOG-IN INFO
    { username: "ADMIN", password: "04926514", isAdmin: true }  // Admin account
    // Add more users as needed
];

const questions = [
    { 
        question: "National libraries are established by?", 
        options: ["Private universities", "Special interest groups", "Federal Government", "Non-governmental organizations"], 
        answer: "Federal Government" 
    },
    { 
        question: "The rules of the library are set by?", 
        options: ["Students", "Librarians", "Federal Government", "National Council"], 
        answer: "Librarians" 
    },
    { 
        question: "Public libraries are established to perform which function?", 
        options: ["Promote education", "Support businesses", "Facilitate entertainment", "Promote health awareness"], 
        answer: "Promote education" 
    },
    { 
        question: "The classification system used by most libraries is?", 
        options: ["Library of Congress", "Dewey Decimal Classification", "Universal Decimal Classification", "Harvard System"], 
        answer: "Dewey Decimal Classification" 
    },
    { 
        question: "What is a call number used for in a library?", 
        options: ["Locate a book", "Check out a book", "Reserve a book", "Borrow a book"], 
        answer: "Locate a book" 
    },
    { 
        question: "What is an index used for in a library?", 
        options: ["Locating journals", "Referencing authors", "Listing library rules", "Indicating where books are placed"], 
        answer: "Locating journals" 
    },
    { 
        question: "The following items are categorized as periodicals except?", 
        options: ["Journals", "Magazines", "Newspapers", "Textbooks"], 
        answer: "Textbooks" 
    },
    { 
        question: "A library catalogue is used to?", 
        options: ["Issue a library card", "Locate books in the library", "Reserve study rooms", "Manage library accounts"], 
        answer: "Locate books in the library" 
    },
    { 
        question: "A collection of books and materials in a specific subject area is referred to as?", 
        options: ["General Collection", "Special Collection", "Periodical Section", "Fiction Section"], 
        answer: "Special Collection" 
    },
    { 
        question: "How often are serials published?", 
        options: ["Weekly", "Monthly", "Annually", "At regular intervals"], 
        answer: "At regular intervals" 
    },
    { 
        question: "Which of the following is not a part of library services?", 
        options: ["Interlibrary loans", "Providing medical advice", "Information literacy sessions", "Access to digital resources"], 
        answer: "Providing medical advice" 
    },
    { 
        question: "Which type of library primarily serves private organizations or companies?", 
        options: ["Public Library", "Special Library", "National Library", "Academic Library"], 
        answer: "Special Library" 
    },
    { 
        question: "A library's reference section contains?", 
        options: ["Books for borrowing", "Fiction materials", "Non-circulating items", "Study guides"], 
        answer: "Non-circulating items" 
    },
    { 
        question: "What is the primary role of a librarian?", 
        options: ["Issue books", "Organize books", "Assist users in locating information", "Oversee library construction"], 
        answer: "Assist users in locating information" 
    },
    { 
        question: "Which library section contains dictionaries and encyclopedias?", 
        options: ["Fiction Section", "Periodical Section", "Reference Section", "Special Collection"], 
        answer: "Reference Section" 
    },
    { 
        question: "Which system is used to categorize books by subject in most libraries?", 
        options: ["Congress Classification", "Dewey Decimal System", "Harvard Classification", "Numerical System"], 
        answer: "Dewey Decimal System" 
    },
    { 
        question: "Which resource would you most likely use for researching journal articles?", 
        options: ["OPAC", "Abstracts", "Periodical indexes", "Audio-visual materials"], 
        answer: "Periodical indexes" 
    },
    { 
        question: "What is a 'reserve' in a library?", 
        options: ["Books that can be checked out for longer", "Books that cannot leave the library", "Special collection books", "Rare books"], 
        answer: "Books that cannot leave the library" 
    },
    { 
        question: "The purpose of an interlibrary loan is to?", 
        options: ["Allow access to e-books", "Borrow items from another library", "Reserve books for extended periods", "Gain access to special collections"], 
        answer: "Borrow items from another library" 
    },
    { 
        question: "Which term refers to the section of a library that archives old periodicals?", 
        options: ["Archive", "Catalog", "Reference", "Stack"], 
        answer: "Archive" 
    },
    { 
        question: "The primary users of academic libraries are?", 
        options: ["Students and faculty", "General public", "Private organizations", "Library staff"], 
        answer: "Students and faculty" 
    },
    { 
        question: "Which of the following best describes a periodical?", 
        options: ["Published once a year", "Published at regular intervals", "Updated monthly", "Released during library orientation"], 
        answer: "Published at regular intervals" 
    },
    { 
        question: "In which section of a library would you find academic journals?", 
        options: ["Reference Section", "Periodical Section", "Fiction Section", "Special Collection"], 
        answer: "Periodical Section" 
    },
    { 
        question: "What is an e-book?", 
        options: ["A physical book stored electronically", "An online version of a printed book", "A special reference guide", "A rare edition of a book"], 
        answer: "An online version of a printed book" 
    },
    { 
        question: "Which tool is used to search for books available in the library?", 
        options: ["Index", "OPAC", "Library card", "Journal"], 
        answer: "OPAC" 
    },
    { 
        question: "Which type of library primarily serves research institutions?", 
        options: ["Academic Library", "Public Library", "Special Library", "National Library"], 
        answer: "Academic Library" 
    },
    { 
        question: "The term 'circulation' in a library refers to?", 
        options: ["Borrowing and returning books", "Reserving study rooms", "Cataloging new books", "Archiving old journals"], 
        answer: "Borrowing and returning books" 
    },
    { 
        question: "Which section of a library would hold newspapers and magazines?", 
        options: ["Fiction Section", "Periodical Section", "Reference Section", "Special Collections"], 
        answer: "Periodical Section" 
    },
    { 
        question: "The main function of a 'library catalog' is to?", 
        options: ["List available books and resources", "Record borrowing history", "Display library hours", "Indicate overdue books"], 
        answer: "List available books and resources" 
    },
    { 
        question: "What is an abstract in academic publishing?", 
        options: ["A full article", "A brief summary of an article", "A reference citation", "A bibliography"], 
        answer: "A brief summary of an article" 
    },
    { 
        question: "What is an audio-visual material in a library?", 
        options: ["Printed books", "E-books", "Films and recordings", "Microfilm"], 
        answer: "Films and recordings" 
    },
    { 
        question: "Which of the following is not an electronic resource?", 
        options: ["E-journals", "E-books", "Printed textbooks", "Online databases"], 
        answer: "Printed textbooks" 
    },
    { 
        question: "A book's 'call number' typically indicates?", 
        options: ["The location of the book on the shelf", "The due date of the book", "The publisher of the book", "The number of pages"], 
        answer: "The location of the book on the shelf" 
    },
    { 
        question: "Which term describes an academic work presented for a degree?", 
        options: ["Thesis", "Periodical", "Catalog", "Serial"], 
        answer: "Thesis" 
    },
    { 
        question: "A library's online catalog is referred to as?", 
        options: ["OPAC", "Index", "Serial", "Thesaurus"], 
        answer: "OPAC" 
    },
    { 
        question: "A reference book that provides synonyms and antonyms is called?", 
        options: ["Encyclopedia", "Thesaurus", "Dictionary", "Bibliography"], 
        answer: "Thesaurus" 
    },
        { 
            question: "Which section of the library is most suitable for retrieving peer-reviewed journal articles?", 
            options: ["General Collection", "Periodical Section", "Reference Section", "Special Collection"], 
            answer: "Periodical Section" 
        },
        { 
            question: "The process of organizing materials according to subject is known as?", 
            options: ["Indexing", "Classification", "Cataloging", "Shelving"], 
            answer: "Classification" 
        },
        { 
            question: "The term ‘retrospective cataloging’ refers to?", 
            options: ["Cataloging newly acquired books", "Cataloging materials acquired prior to the introduction of a cataloging system", "Revising previously cataloged materials", "Organizing a special collection"], 
            answer: "Cataloging materials acquired prior to the introduction of a cataloging system" 
        },
        { 
            question: "Which of the following is an online bibliographic database?", 
            options: ["ERIC", "Thesaurus", "Dewey Decimal Classification", "Wikipedia"], 
            answer: "ERIC" 
        },
        { 
            question: "An abstracting service is most useful for?", 
            options: ["Borrowing books", "Identifying key articles in a subject field", "Accessing special collections", "Finding out-of-print books"], 
            answer: "Identifying key articles in a subject field" 
        },
        { 
            question: "Which classification system is primarily used in medical libraries?", 
            options: ["Dewey Decimal", "Universal Decimal", "Library of Congress", "National Library of Medicine Classification"], 
            answer: "National Library of Medicine Classification" 
        },
        { 
            question: "Which type of publication is most likely to include empirical research?", 
            options: ["Newspapers", "Scholarly Journals", "Trade Magazines", "Popular Magazines"], 
            answer: "Scholarly Journals" 
        },
        { 
            question: "Which tool is used to organize information on authors, titles, subjects, and books in a library?", 
            options: ["Bibliography", "Index", "Catalog", "Directory"], 
            answer: "Catalog" 
        },
        { 
            question: "In academic writing, a citation to another work that has been referenced by the author is called a?", 
            options: ["Primary source", "Secondary source", "Tertiary source", "Footnote"], 
            answer: "Secondary source" 
        },
        { 
            question: "The term 'monograph' refers to?", 
            options: ["A multi-volume set of books", "A detailed written study on a single specialized subject", "A journal article", "An entry in an encyclopedia"], 
            answer: "A detailed written study on a single specialized subject" 
        },
        { 
            question: "Which database is most relevant for searching psychological and behavioral science literature?", 
            options: ["PsycINFO", "ERIC", "PubMed", "JSTOR"], 
            answer: "PsycINFO" 
        },
        { 
            question: "A 'serial' in library terminology refers to?", 
            options: ["A book in a series", "A publication issued in parts over time", "A fiction book", "A research paper"], 
            answer: "A publication issued in parts over time" 
        },
        { 
            question: "The process of renewing a borrowed item refers to?", 
            options: ["Recalling", "Renewing", "Reserving", "Circulating"], 
            answer: "Renewing" 
        },
        { 
            question: "In which library system are books shelved according to a number that reflects their subject matter?", 
            options: ["Subject Shelving", "Dewey Decimal System", "Author Shelving", "Title Shelving"], 
            answer: "Dewey Decimal System" 
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
