// Q1 - Install Node.js, TypeScript and VS Code on your computer.
// Done

// Q2 - Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName : string = "Eric";
console.log(`Hello  ${personName}, would you like to learn some Python today?\n`);

// Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log(personName.toUpperCase());
console.log(personName.toLowerCase());

let TitleCase= personName.replace(/\b\w/g, match => match.toUpperCase());
console.log(TitleCase); 