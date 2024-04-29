//  three more guests to invite to dinner.
/*Add a print statement to the end of your program informing people that you found a
bigger dinner table.*/

console.log(`\n\t\ Question 16
---------------------------------`);

var GuestList: string[] = ["Aniza", "Maryam", "Aaish"];
var notAttend : string = "Maryam";

console.log(`${notAttend} cannot attend the dinner\n`)
GuestList.splice(1,1,"Muniba");
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, I found a bigger dinner table so I invite more people `);
});
// add guest in the beggining
let BeginningGuest : string = "Nabiha";
GuestList.unshift(BeginningGuest);
// add guest in the middle
let midIndex = GuestList.length/2;
GuestList.splice(midIndex,0,"Sonia");
// add guest in the end use append()
let EndGuest : string = "Zubia";
GuestList.push(EndGuest);
//Print a new set of invitation messages, one for each person in your list.
console.log("\nSecond set of invitation messages:");
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, You can inivite more people on dinner.`);
});

console.log(`\n\t\ Question 17
---------------------------------`);
// Shrinking guest list:You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Add a new line that prints a message saying that you can invite only two people for dinner.
let GuestList2: string[] = ["Nabiha","Aniza","Sonia", "Muniba", "Aaish","Zubia"];
console.log("\n For limited seats, I invite only two people for dinner.\n");
// Remove guests from your list one at a time until only two names remain in your list.
while(GuestList2.length > 2){
    let removeGuest = GuestList2.pop();
    console.log(`Sorry, ${removeGuest} you can’t invite them to dinner.`)
}
console.log("\n");
//invite only 2 people
GuestList2.forEach(guest => {
    console.log(`Dear ${guest}, You're still inivited on dinner.`);
});
//remove last two people and show empty array
while(GuestList2.length > 0 ){
    GuestList2.pop();
} 
console.log("Final guest list: ", GuestList2);

console.log(`\n\t\ Question 18)
---------------------------------`);
//Print array without modify the actual list,
//Print array in alphabetical order, reverse alphabetical order without modify actual array
//reverse array two times 
//Print array in alphabetical order, reverse alphabetical order

let places : string[] = ["Paris","London", "Turkey", "Dubai", "Pakistan"];

//print array in original order
console.log(`Original Order:\n\t${places}`);

//Print your array in alphabetical order without modifying the actual list.([...places] creates a shallow copy of the places array using the spread operator (...). This copy ensures that the original array remains unchanged.)
console.log(`Alphabetical Order:\n\t${[...places].sort()}`);

//print array in original order
console.log(`Original Order:\n\t${places}`);

//print array in reverse alphabetical order without changing original list
console.log(`Reverse Alphabetical Order:\n\t${[...places].sort().reverse()}`);

//print array in original order
console.log(`Original Order:\n\t${places}`);

//print array in reverse order
console.log(`Reverse Order:\n\t${places.reverse()}`);

//again reverse order 
console.log(`Again Reverse Order:\n\t${places.reverse()}`);

// stored in alphabetical order 
console.log(`Stored in Alphabetical Order:\n\t${places.sort()}`);

//Sort array in reverse alphabetical order
console.log(`Reverse Alphabetical Order order has changed:\n\t${places.sort().reverse()}`);

//print array in new order
console.log(`New Order:\n\t${places}`);