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
