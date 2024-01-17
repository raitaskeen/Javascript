const name = "Taskeen"
const age = 19
const repoCount = "50"
const isVerified = true

console.log(`My name is ${name} and I am ${age} years old. I have ${repoCount} public repositories on Github and I am ${isVerified ? "verified" : "not verified"}`);

const gameName = new String("PUBG")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.includes("U"));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.split("G"));
console.log(gameName.split("U"));
console.log(gameName.split(""));
console.log(gameName.split(" ").join("-"));
console.log(gameName.slice(1, 3));
console.log(gameName.split(" "));