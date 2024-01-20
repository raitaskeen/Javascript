const readlineSync = require('readline-sync');

// Define the Question structure
class Question {
    constructor(text, options, correctAnswerIndex) {
        this.text = text;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

// Main function to run the quiz
function main() {
    console.log("Welcome to the General Knowledge Quiz!");

    let score = 0;

    // Create an array of Question objects
    const questions = [
        new Question("What is the capital of France?", ["Berlin", "Paris", "Madrid", "Rome"], 1),
        new Question("Which planet is known as the Red Planet?", ["Mars", "Venus", "Jupiter", "Saturn"], 0),
        new Question("In which year did the Titanic sink?", ["1905", "1912", "1920", "1931"], 1),
        new Question("Who painted the Mona Lisa?", ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], 1),
        new Question("What is the largest mammal in the world?", ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"], 2),
    ];

    // Iterate through each question
    for (const question of questions) {
        console.log(`Question: ${question.text}`);

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
