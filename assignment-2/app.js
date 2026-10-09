let total = Number(prompt("Here your total bill : "));
let tipPercentage = Number(prompt("Enter the tip percentage : "));

let percentage = tipPercentage/100 * total;
let totalbill = total + percentage;

console.log(`Subtotal : $${total}`);
console.log(`Tip Percentage : ${tipPercentage}%`);
console.log(`Calcutated tip : $${percentage}`);
console.log(`Total Amount to pay : $${totalbill}`);
