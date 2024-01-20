// Import the readline-sync library for user input
const readlineSync = require('readline-sync');

// Define a class to represent a question about programming languages
class LanguageInfoQuestion {
    constructor(question, options, correctAnswerIndex) {
        this.question = question;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

// Main function to run the quiz
function main() {
    console.log("Welcome to the Programming Language Info Quiz!");

    let score = 0;

    // Create an array of LanguageInfoQuestion objects
    const questions = [
        new LanguageInfoQuestion("Which language is known for its versatility and is used for both frontend and backend development?", ["Java", "Python", "JavaScript", "C#"], 2),
        new LanguageInfoQuestion("Which language is often used for scientific computing and data analysis?", ["Ruby", "Python", "Java", "C++"], 1),
        new LanguageInfoQuestion("In which language is Swift used to develop applications?", ["Swift", "Kotlin", "Objective-C", "Java"], 0),
        new LanguageInfoQuestion("Which language is commonly associated with web development and has frameworks like Django and Flask?", ["Ruby", "Python", "JavaScript", "Java"], 1),
        new LanguageInfoQuestion("What language is known for its emphasis on simplicity and readability?", ["C++", "Java", "Python", "C#"], 2),
    ];

    // Iterate through each question
    for (const question of questions) {
        console.log(`Question: ${question.question}`);

        // Display options for each question
        question.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        // Get user's answer
        const userAnswerIndex = getUserInput(question.options.length);

        console.log(`Your answer: ${question.options[userAnswerIndex - 1]}`); // Display the user's answer

        // Check if the user's answer is correct
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

// Function to get user input within a specified range
function getUserInput(maxOptions) {
    while (true) {
        const userInput = readlineSync.question(`Enter the number of your answer (1-${maxOptions}): `);

        const userAnswerIndex = parseInt(userInput);

        // Validate user input
        if (!isNaN(userAnswerIndex) && userAnswerIndex >= 1 && userAnswerIndex <= maxOptions) {
            return userAnswerIndex;
        } else {
            console.log(`Invalid input. Please enter a number between 1 and ${maxOptions}.`);
        }
    }
}

// Run the quiz
main();
