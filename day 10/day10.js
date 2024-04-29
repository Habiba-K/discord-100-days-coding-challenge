console.log("\n\t Question 28\n---------------------------------");
/* Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
 */
var age = 0;
if (age > 0 && age < 2) {
    console.log("You are a baby");
}
else if (age >= 2 && age < 4) {
    console.log("You are a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("You are a kid");
}
else if (age >= 13 && age < 20) {
    console.log("You are a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("You are a adult");
}
else if (age >= 65) {
    console.log("You are an elder.");
}
else {
    console.log("You are enter a wrong age");
}
console.log("\n\t Question 29\n---------------------------------");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "orange", "banana"];
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("I really like apple");
}
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("I really like banana");
}
if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("I really like mango");
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("I really like orange");
}
if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("I really like grapes");
}
console.log("\n\t Question 30\n---------------------------------");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.\
var usernames = ["admin", "eric", "john", "jane", "james"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
console.log("\n\t Question 31\n---------------------------------");
