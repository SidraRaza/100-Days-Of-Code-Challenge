// Question 1:Adding Comments: Choose two of the programs you’ve
// written, and add at least one comment to each. If the programs
// are straightforward at this point, just add your name and the 
// current date at the top of each program file. Then, write one 
// simple sentence describing what the program does.
// Ahmed, 2024-03-05
// This program prints a personal message.
var myName = "Ahmed";
console.log("Hello ".concat(myName, ", would you like to learn some TypeScript today?"));
// Question 2: Names: Store the names of a few of your friends in an array called names.
// Print each person’s name by accessing each element in the list, one at a time.
var names = ["Ahmed", "Ali", "Danish"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 3: Greetings: Use the array from Exercise 2. 
// Instead of just printing each person’s name, print a message to them. 
// The message should be the same for each person, but personalized with their name.
// let names: string[] = ["Ahmed", "Ali", "Danish"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some TypeScript today?"));
}
