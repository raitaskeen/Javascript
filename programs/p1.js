const readlineSync = require('readline-sync');

class Question {
    constructor(text, options, correctAnswerIndex) {
        this.text = text;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

function main() {
    console.log("Welcome to the Rust Info Quiz!");

    let score = 0;

    const questions = [
        new Question("Which year was Rust first released?", ["2009", "2010", "2015", "2018"], 2),
        new Question("What ownership system does Rust use?", ["Garbage Collection", "Reference Counting", "Borrowing", "None of the above"], 2),
        new Question("Which of the following is a valid Rust keyword for defining an immutable variable?", ["mut", "const", "let", "var"], 2),
        new Question("What is Rust's primary focus?", ["Concurrency", "Memory Safety", "Object-Oriented Programming", "Dynamic Typing"], 1),
        new Question("Which tool is used for managing Rust projects and dependencies?", ["Cargo", "RustBuild", "RustPackage", "RustHub"], 0),
    ];

    for (const question of questions) {
        console.log(`Question: ${question.text}`);

        question.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        const userAnswerIndex = getUserInput(question.options.length);

        console.log(`Your answer: ${question.options[userAnswerIndex - 1]}`); // Display the user's answer

        if (userAnswerIndex - 1 === question.correctAnswerIndex) {
            console.log("Correct!");
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer is: ${question.options[question.correctAnswerIndex]}`);
        }

        console.log("---------------------");
    }

    console.log(`Quiz complete! Your final score is: ${score}/${questions.length}`);
}

function getUserInput(maxOptions) {
    while (true) {
        const userInput = readlineSync.question(`Enter the number of your answer (1-${maxOptions}): `);

        const userAnswerIndex = parseInt(userInput);

        if (!isNaN(userAnswerIndex) && userAnswerIndex >= 1 && userAnswerIndex <= maxOptions) {
            return userAnswerIndex;
        } else {
            console.log(`Invalid input. Please enter a number between 1 and ${maxOptions}.`);
        }
    }
}

main();
