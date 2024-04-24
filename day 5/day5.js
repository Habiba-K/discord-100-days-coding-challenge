// Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n\tQuestion 13");
var transportation = ["Honda motorcycle", "Civic", "Audi", "Prado"];
transportation.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode, "."));
});
// Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n\tQuestion 14");
var GuestList = ["Aniza", "Maryam", "Aaish"];
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited to dinner at my place."));
});
/* Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
> Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
> Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
> Print a second set of invitation messages, one for each person who is still in your list. */
console.log("\n\tQuestion 15");
var notAttend = "Maryam";
console.log("".concat(notAttend, " cannot attend the dinner\n"));
GuestList.splice(1, 1, "Muniba");
console.log("\nSecond set of invitation messages:");
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are cordially invited to dinner at my place."));
});