console.log("\n\t Question 1\n---------------------------------");
console.log("installed all related softwares");
// Q1 - Install Node.js, TypeScript and VS Code on your computer.
// Done
console.log("\n\t Question 2\n---------------------------------");
// Q2 - Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Eric";
console.log("Hello  ".concat(personName, ", would you like to learn some Python today?\n"));
console.log("\n\t Question 3\n---------------------------------");
// Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
var TitleCase = personName.replace(/\b\w/g, function (match) { return match.toUpperCase(); });
console.log(TitleCase);
