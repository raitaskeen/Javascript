const readlineSync = require('readline-sync');

// Function to calculate age in different units
function calculateAge(birthYear, currentYear) {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInMonth = 30; // Assuming an average month has 30 days
    const monthsInYear = 12;

    // Calculate age in years, months, days, hours, and seconds
    const ageInYears = currentYear - birthYear;
    const ageInMonths = ageInYears * monthsInYear;
    const ageInDays = ageInYears * daysInMonth * monthsInYear;
    const ageInHours = ageInDays * hoursInDay;
    const ageInSeconds = ageInHours * minutesInHour * secondsInMinute;

    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays,
        hours: ageInHours,
        seconds: ageInSeconds,
    };
}

// Function to display the result
function displayResult(birthYear, currentYear) {
    const age = calculateAge(birthYear, currentYear);

    // Display the result
    console.log(`Your age is:`);
    console.log(`Years: ${age.years}`);
    console.log(`Months: ${age.months}`);
    console.log(`Days: ${age.days}`);
    console.log(`Hours: ${age.hours}`);
    console.log(`Seconds: ${age.seconds}`);
}

// Get the birth year from the user
const birthYearString = readlineSync.question('Enter your birth year: ');
const birthYear = parseInt(birthYearString);

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate and display the result
displayResult(birthYear, currentYear);
