const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//const newString = str.slice(0,3);
//let otherPartOfString = str.slice(3);
//let pigLatinStr = otherPartOfString + newString;
//console.log(pigLatinStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
//let myNewString = `Pig Latin ${otherPartOfString}${newString}`;
//console.log(myNewString);



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let indexStart = input.question("What character to start at?: ");
indexStart = number(indexStart);
const newString = str.slice(0,indexStart);
let otherPartOfString = str.slice(indexStart, str.length);
let pigLatinStr = otherPartOfString + newString;
let myNewString = `Pig Latin ${otherPartOfString}${newString}`;
console.log(myNewString);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
