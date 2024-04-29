console.log(`\n\t\ Question 22
---------------------------------`);
// Index Error
var languages : string [] = ["Html", "Css", "Javascipt"];
/* console.log(languages[3]); */
console.log(languages[2]);

console.log(`\n\t\ Question 23
---------------------------------`);
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:

            /* let car = 'subaru';

            console.log("Is car == 'subaru'? I predict True.")

            console.log(car == 'subaru') */

/*Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car : string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'audi'? I predict True" );
console.log(car != 'audi');

console.log("Is car === 'subaru'? I predict True" );
console.log(car === 'subaru');

console.log("Is car > 'audi'? I predict True" );
console.log(car > 'audi');

console.log("Is car <= 'toyota'? I predict True" );
console.log(car <= 'toyota');

console.log("Is car == 'audi'? I predict False");
console.log(car == 'audi');

console.log("Is car >= 'toyota'? I predict False" );
console.log(car >= 'toyota');

console.log("Is car < 'audi'? I predict False" );
console.log(car < 'audi');

console.log("Is car === 'audi'? I predict False" );
console.log(car === 'audi');

console.log("Is car !== 'subaru'? I predict False" );
console.log(car !== 'subaru');

console.log(`\n\t\ Question 24
---------------------------------`);
// more conditional test
//Tests for equality and inequality with strings
let stdName : string = "Habiba";
console.log("\n\tTests for equality and inequality with strings");

console.log("Is Student Name == 'Habiba'? I predict True ");
console.log(stdName == 'Habiba');

console.log("Is Student Name != 'Habiba'? I predict False ");
console.log(stdName != 'Habiba');

//Tests using the lower case function
let country : string = "Pakistan";
console.log("\n\tTests using the lower case function");
console.log("Pakistan === 'pakistan'? I predict True ");
console.log(country.toLowerCase() === "pakistan");

//Numerical tests involving equality and inequality
let num : number = 10;
console.log("\n\tNumerical tests involving equality and inequality");

console.log("Is Number == 10 ? I predict True ");
console.log(num == 10);

console.log("Is Number != 10 ? I predict False ");
console.log(num != 10);

console.log("Is Number > 1 ? I predict True ");
console.log(num > 1);

console.log("Is Number < 1 ? I predict False ");
console.log(num < 1);

console.log("Is Number >= 10 ? I predict True ");
console.log(num >= 10);

console.log("Is Number >= 1 ? I predict True ");
console.log(num >= 1);

console.log("Is Number <= 10 ? I predict True ");
console.log(num <= 10);

console.log("Is Number <= 1 ? I predict False ");
console.log(num <= 1);

//Tests using "and" and "or" operators

console.log("\n\tTests using 'and' and 'or' operators");

console.log("Is Number > 5 && Number < 20? I predict True");
console.log(num > 5 && num < 20);
console.log("Is Number > 5 && Number < 9? I predict False");
console.log(num > 5 && num < 9);
console.log("Is Number > 11 && Number < 20? I predict False");
console.log(num > 11 && num < 20);
console.log("Is Number > 11 && Number <  9? I predict False");
console.log(num > 11 && num < 9);
console.log("\n");

console.log("Is Number > 5 || Number < 20? I predict True");
console.log(num > 5 || num < 20);
console.log("Is Number > 5 || Number < 9? I predict True");
console.log(num > 5 || num < 9);
console.log("Is Number > 11 || Number < 20? I predict True");
console.log(num > 11 || num < 20);
console.log("Is Number > 11 || Number <  9? I predict False");
console.log(num > 11 || num < 9);

//Test whether an item is in a array
console.log("\n\tTest whether an item is in a array");
var languages : string[]= ['Html', 'Css', 'Javascript', 'Typescript', 'Python'];

console.log("Is Python present in array? I predict True");
console.log(languages.indexOf('Python')!== -1);

//Test whether an item is not in a array
console.log("\n\tTest whether an item is not in a array");
console.log("Is Php present in array? I predict False");
console.log(languages.indexOf('Php')!== -1);

