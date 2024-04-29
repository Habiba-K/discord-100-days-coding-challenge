console.log("\n\t Question 19\n---------------------------------");
// Q19 - Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var GuestList = ["Nabiha", "Aniza", "Sonia", "Muniba", "Aaish", "Zubia"];
console.log("I am inviting ".concat(GuestList.length, " people to dinner."));
console.log("\n\t Question 20\n---------------------------------");
// Q20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var languages = ["HTML", "CSS", "Javascript", "Typescript", "Python"];
console.log("List of Programming Languages\n");
languages.forEach(function (lang) {
    console.log(lang);
});
console.log("\n\t Question 21\n---------------------------------");
// Q21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// create object
var studentobj = {
    stdName: "Habiba",
    courseName: "PIAIC",
    Venue: "Governor House",
    PhoneNo: 1234567890,
};
console.log("Information about Student: \n");
console.log("Student Name : ".concat(studentobj.stdName, " "));
console.log("Course Name : ".concat(studentobj.courseName, " "));
console.log("Venue : ".concat(studentobj.Venue, " "));
console.log("Phone Number : ".concat(studentobj.PhoneNo, " "));
