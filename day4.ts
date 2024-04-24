// Q10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
/* console.log(`Dwayne Johnson once said, "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."`); */

let famous_person : string =  "Dwayne Johnson";
let message : string = `${famous_person} once said, "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."`;
console.log(message);
// Q11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names : string [] = ["Sara", "Iqra", "Rida" ,"Aniza"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

for(let i = 0; i< names.length; i++){
    console.log(`${names[i]} likes to play cricket`);
}