#! /bin/usr/env node

import inquirer from "inquirer";

// *Question 1:* Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Challenge Coding Qno:01
// Envirnment install:

//*Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hel
// Challenge Coding Qno:02
let personName:string = "Tahir";
console.log(`Here ${personName}, is learning Typescript`);
// in print: Here { Tahir } is learning Typescript

// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Challenge Coding Qno:03

let name1: String = "Imran";
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());    // in print: Imran

let name2: String = "Shahid";
console.log(name2.toLowerCase());    // in print: shahid

let name3: String = "Zahid";
console.log(name3.toUpperCase());// in print: ZAHID

// *Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// Challenge Coding Qno:04

let famousePerson:String = "Allama Iqbal"
let message1:string = `${famousePerson}, "have a very greatfull and peacefull poetry."`;
console.log(message1);        // in print: Allama Iqbal, "have a very greatfull and peacefull poetry."

// *Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Challenge Coding Qno:05

let authorName:String = "Imam Ahmed Raza";
let message2:String = `${authorName}, "is a great Scholar in the world."`;
console.log(message2);     // in print: Imam Ahmed Raza, "is a great Scholar in the world.

// *Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
// Challenge Coding Qno:06

let name4: string = "     Mustufa      ";
"/n"; 
console.log(name4);
console.log(name4.trim());
// in print:         Mustufa  (withspace)
//           Mustufa  (withoutspace)

//                 or

let name5: string = "     Mustufa      ";
"/t"; 
console.log(name5);
console.log(name5.trim());
// in print:         Mustufa  (withspace)
//           Mustufa  (withoutspace)

// *Question 7:* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
// Challenge Coding Qno:07

console.log( 4 + 4);       // in print:   8
console.log( 12 - 4);      // in print:   8
console.log( 4 * 2);       // in print:   8
console.log( 16 / 2);      // in print:   8

//*Question 8:* You should create four lines that look like this:    console.log(5 + 3)     Your output should simply be four lines with the number 8 appearing once on each line.
// Challenge Coding Qno:08
let favoriteNumber1: number = 9;
let message3: string = `"My favorite number is" ${favoriteNumber1}`;
console.log(message3);          // in print: "My favorite number is" 9
 
// *Question 9:* Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
// Challenge Coding Qno:09
let favoriteNumber2:number = 9;
let message4:string = `"My Wedding date is" ${favoriteNumber2}`;
console.log(message4);           // in print: "My Wedding date is" 9

// *Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Challenge Coding Qno:10
// "Muhammad Tahir Hasni" is starting Programming on 06 february 2024: 
let myName:string = "Muhammad Tahir Hasni";
let message5:string = `" ${myName} is starting Programming on 06 february 2024 at Govrnor House Karachi"`;
console.log(message5);     // in print: "Muhammad Tahir Hasni is starting Programming on 06 february 2024 at Govrnor House Karachi"

// *Question 11:* Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
// Challenge Coding Qno:11
let names1: string[] = ["Taimoor", "Iqbal", "Shakil",];
for (let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}   // in print: Taimoor
//               Iqbal
//               Shakil

// *Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// Challenge Coding Qno:12
let names2: string[] = ["Owais", "Ehsan", "Raof",];
for (let name6 of names2) {
    console.log(`Please ${name6}, do hard working`);
}

// *Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Challenge Coding Qno:13
let transport:string[] = ["Chicken Biryani","Beef Biryani","Mutton Biryani"];
transport.forEach(transport => {
    console.log(`I like a ${transport} to eating.`);
}); //   in print:   I like a Chicken Biryani to eating.
//                   I like a Beef Biryani to eating.
//                   I like a Mutton Biryani to eating.

// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Challenge Coding Qno:14
let guests1:string[] = ["Muhammad Shakil", "Muhammad Ibrahim","Muhammad Raof"];
guests1.forEach(guests => {
     console.log(`Dear ${guests}, please come to my home to Iftar Party.`);
});   // in print: Dear Muhammad Shakil, please come to my home to Iftar Party.
//                 Dear Muhammad Ibrahim, please come to my home to Iftar Party.
//                 Dear Muhammad Raof, please come to my home to Iftar Party.

// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// Challenge Coding Qno:15
let unableToAttend = "Muhammad Ibrahim";
console.log(`${"Muhammad Ibrahim"} can't make it to dinner.`);
let newGuest = "Muhammad Waqas";
guests1[guests1.indexOf("unableToAttend")] = newGuest;
guests1.forEach(guest => {
    console.log(`Dear ${newGuest}, would you like to join me for dinner`);
});   // in print: Muhammad Ibrahim can't make it to dinner.
//                 Dear Muhammad Waqas, would you like to join me for dinner
//                 Dear Muhammad Waqas, would you like to join me for dinner
//                 Dear Muhammad Waqas, would you like to join me for dinner.

// *Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.
// Challenge Coding Qno:16
 let guests2: string[] = ["Muhammad Zubair", "Muhammad Jalil", "Muhammad Nawaz"];
console.log("Great news! I found a bigger dinner table!");
guests2.unshift("Owais Ahmed");
guests2.splice(guests2.length / 2, 0, "Ehsan Ayyub");
guests2.push("Syed Raees Shah");

guests2.forEach(guest2 => {
    console.log(`Dear ${guest2}, would you like to join me for dinner?`);
});   // in print: Great news! I found a bigger dinner table!
//                 Dear Owais Ahmed, would you like to join me for dinner?
//                 Dear Muhammad Zubair, would you like to join me for dinner?
//                 Dear Ehsan Ayyub, would you like to join me for dinner?
//                 Dear Muhammad Jalil, would you like to join me for dinner?
//                 Dear Muhammad Nawaz, would you like to join me for dinner?
//                 Dear Syed Raees Shah, would you like to join me for dinner?

// *Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Challenge Coding Qno:17
console.log("Unfortunately, I can only invite three people for dinner.");

while (guests2.length > 2) {
    let removedGuest = guests2.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests1.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests2.splice(0, guests2.length);
console.log(guests2); // Shows an empty list
// in print:  Unfortunately, I can only invite two people for dinner.
//            Sorry, Syed Raees Shah, I can't invite you to dinner.
//            Sorry, Muhammad Nawaz, I can't invite you to dinner.
//            Sorry, Muhammad Jalil, I can't invite you to dinner.
//            Sorry, Ehsan Ayyub, I can't invite you to dinner.
//            Dear Muhammad Shakil, you're still invited to dinner.
//            Dear Muhammad Ibrahim, you're still invited to dinner.
//            Dear Muhammad Raof, you're still invited to dinner.
