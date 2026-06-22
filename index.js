const readline = require('readline/promises');

// Basic Math Operations
let x = 5; 
let y = 7; 
let p = 3; 
console.log(x + p); // Outputs: 8

let a = 5; 
let b = 7; 
let c = "9"; 
console.log(a + c); // Outputs: "59" (String concatenation)

// Day Picker CLI Application
async function run() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const user_input = await rl.question('Enter a whole number between 1 to 7: ');
        let parsed_input = Number(user_input);

        if (isNaN(parsed_input) || parsed_input < 1 || parsed_input > 7 || !Number.isInteger(parsed_input)) { 
            console.log("Invalid input"); 
        } else { 
            switch(parsed_input) { 
                case 1: console.log("Sunday"); break; 
                case 2: console.log("Monday"); break; 
                case 3: console.log("Tuesday"); break; 
                case 4: console.log("Wednesday"); break; 
                case 5: console.log("Thursday"); break; 
                case 6: console.log("Friday"); break; 
                case 7: console.log("Saturday"); break; 
                default: console.log("Invalid entry"); 
            } 
        }
    } catch (error) {
        console.error("An error occurred during input:", error);
    } finally {
        rl.close();
    }
}

// 1. IT & ACCESSORIES COMPANY SALES RECORD 
// Part 1.A: Sales calculations
const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];

function calculateTotalSales(salesArray) {
    let total = 0;
    for (let i = 0; i < salesArray.length; i++) {
        total += salesArray[i].quantity * salesArray[i].price;
    }
    return total;
}

// Part 1.B: Customers orders and receipt
const orders = [
    { item: "Cement", quantity: 2, price: 3.5 },
    { item: "Sand", quantity: 3, price: 4.0 },
    { item: "PVC", quantity: 1, price: 4.5 }
];

function generateReceipt(ordersArray) {
    let grandTotal = 0;
    console.log("\nReceipt:");
    console.log("----------------------");
    for (let i = 0; i < ordersArray.length; i++) {
        const itemTotal = ordersArray[i].quantity * ordersArray[i].price;
        grandTotal += itemTotal;
        console.log(`${ordersArray[i].item} - Quantity: ${ordersArray[i].quantity}, Price: $${ordersArray[i].price.toFixed(2)}, Total: $${itemTotal.toFixed(2)}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal.toFixed(2)}`);
}

// Execution Block
async function main() {
    // Run the interactive terminal question first
    await run();
    
    // Execute and print Part 1.A
    console.log("\n--- Sales Record Report ---");
    const totalRevenue = calculateTotalSales(sales);
    console.log(`Total Sales Revenue: $${totalRevenue.toFixed(2)}`);
    
    // Execute and print Part 1.B
    console.log("\n--- Customer Receipt ---");
    generateReceipt(orders);
}

main();


// <---SOLVED CONDITIONAL STATEMENTS WITH JAVASCRIPT--->

// The if statements

let man = 20;
if(man >= 18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}


let age = 18;
if(age >= 18){
    console.log("Young can vote ");
}else{
    console.log("You cannot vote");
}

//The else if statements use to test multiple conditions sequentially.

let time = 12; 
if (time < 12){
    console.log("Good morning");
}else if (time > 12){
    console.log("Good afternoon");
}else{
    console.log("Good evening");
};
 

// The else statements
 let isRaining = false;
 if(isRaining){
    console.log("Bring umbrella");
 }else{ 
    console.log("Do not bring umbrella");
 }

// Nested if else statements in JS

let yourAge = 20;
let hasID = true;

if (yourAge >= 18) {
    console.log("You are an adult.");

    if (hasID) {
        console.log("You are allowed to enter.");
    } else {
        console.log("You need an ID to enter.");
    }

} else {
    console.log("You are a minor. Access denied.");
}

// Switch Conditional Statements make comparison base on first match.

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;

  case "Tuesday":
    console.log("Second day of the week");
    break;

  case "Wednesday":
    console.log("Midweek");
    break;

  case "Thursday":
    console.log("Almost Friday");
    break;

  case "Friday":
    console.log("Weekend is near!");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;

  default:
    console.log("Invalid day");
}



//Ternary Operator 
let price = 100;

function getDiscountedPrice(isMember) {
  return isMember ? price * 0.8 : price;
}

console.log(getDiscountedPrice(true));  
console.log(getDiscountedPrice(false)); 


//Loop in JS

//example of for loop in JS
// Loop 1
for (let i = 1; i <= 12; i++) {
    console.log(i);
}

// Loop 2
for (let a = 1; a <= 5; a++) {
    console.log(a);
}

// Loop 3
for (let b = 2; b >= -2; b--) {
    console.log(b);
}

//Example of while loop in JS
let d = 1;

while (d <= 5) {
  console.log(d);
   d++;
}


//Do while loop
let m = 1;

do {
    console.log(m);
    m++;
} while (m <= 4);



// Return function

function divide(a, b) {
    return a / b;
}
let s1 = divide(32, 4);

console.log(s1);



// Arrays && Array methods  in JS:
// Arrays store various data types in [ ] . E.g const fruits = ["apple", "Orange" , "house"];
// array methods are:

// the push method is for adding new elements at the end of array
let set = ['John', 'Peter', 'Emma'];
set.push('Joel', 'Mary');
console.log(set);

// The pop method is for last element removal in array
let venn = ["A", "B", "C", "D"];

let removeVenn = venn.pop();


console.log("Venn are", venn);
console.log("removeVenn is", removeVenn);

// The Shift Method Removes first element from array
let diag = ['a', 'b', 'c', 'd'];
let removeDiag = diag.shift();

console.log("diag are", diag);
 console.log("removeDiag is", removeDiag);
 
// the unshift method is use for add 1 or more element to the beginning of array
let sam = ['Josh', 'Paul', 'Emmy'];
sam.unshift('Joe', 'Math');
console.log(sam);

//IndexOf method
let surely = ['x', 'y', 'z'];
let index = surely.indexOf('x');
console.log('Index of x is', index);

// The reverse method
let beam =['q', 'r', 's', 't'];
beam.reverse();
console.log(beam); 

// The length  method
const f = ['a', 'd', 'h', 'e', 'r'];
const numF = f.length;
console.log(numF);