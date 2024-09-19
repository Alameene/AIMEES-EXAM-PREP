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
