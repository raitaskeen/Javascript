// Define a class representing a person
class Person {
    // Class constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to get person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Function to greet a person
function greet(person) {
    console.log(`Hello, ${person.getDetails()}!`);
}

// Enum representing days of the week
const DaysOfWeek = {
    Sunday: 'Sunday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
};

// Interface representing a shape
class Shape {
    // Method to calculate area
    calculateArea() {
        // This method will be overridden by subclasses
    }
}

// Class representing a circle extending the Shape class
class Circle extends Shape {
    // Class constructor
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Implementation of the calculateArea method
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Type alias for a function that takes two numbers and returns a number
const MathOperation = (a, b) => a + b;

// Function to perform a math operation
function performMathOperation(a, b) {
    return MathOperation(a, b);
}

// Create a person object
const john = new Person("John Doe", 25);

// Greet the person
greet(john);

// Use the DaysOfWeek enum
const today = DaysOfWeek.Wednesday;
console.log(`Today is ${today}`);

// Create a circle
const myCircle = new Circle(5.0);
console.log(`The area of the circle is: ${myCircle.calculateArea()}`);

// Use the MathOperation type alias
const result = performMathOperation(10.0, 20.0);
console.log(`Result of the math operation: ${result}`);
