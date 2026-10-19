
console.log("--- Initializing Inventory System ---");

// 1. Data & Input Initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter new product name:");
let productPrice = prompt("Enter product price:");

// 2. Input Validation using if...else
if (
    productName === null ||
    productName.trim() === "" ||
    productPrice === null ||
    productPrice.trim() === ""
) {
    console.log("Invalid or missing input. Product not added.");
} else {
    const price = Number(productPrice);

    if (Number.isNaN(price) || !Number.isFinite(price) || price < 0) {
        console.log("Invalid price. Please enter a valid non-negative number.");
    } else {
        inventory.push({
            name: productName.trim(),
            price: price
        });

        console.log(
            `[Prompt executed: User adds "${productName.trim()}" at "$${price}"]`
        );
    }
}

// 3. Function to assign category using switch
function getCategory(price) {
    let category;

    switch (true) {
        case price < 50:
            category = "Budget";
            break;
        case price < 200:
            category = "Standard";
            break;
        default:
            category = "Premium";
    }

    return category;
}

// 4. Regular function with default parameter
function calculateTotal(items = inventory) {
    let total = 0;

    for (const item of items) {
        if (typeof item.price !== "number") {
            continue;
        }

        total += item.price;
    }

    return total;
}

// Arrow function with custom tax and discount
const calculateFinalPrice = (
    price,
    taxRate = 0,
    discountRate = 0
) => {
    const subtotal = price * (1 - discountRate);
    return subtotal * (1 + taxRate);
};

// 5. Process inventory using forEach()
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((item) => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

// 6. Search inventory using a loop and break
let searchName = "Monitor";
let found = false;

for (const item of inventory) {
    if (item.name.toLowerCase() === searchName.toLowerCase()) {
        found = true;
        break;
    }
}

console.log(
    found
        ? `Product Search: ${searchName} found.`
        : `Product Search: ${searchName} not found.`
);

// 7. Financial Analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal();

console.log(`Total Inventory Value: $${totalValue}`);

// filter() for products under $200
const affordableItems = inventory
    .filter((item) => item.price < 200)
    .map((item) => item.name);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableItems)
);

// map() to generate formatted report
const report = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", JSON.stringify(report));

// Demonstrate tax and discount calculation
console.log(
    "Laptop Price after 10% tax and 5% discount:",
    "$" + calculateFinalPrice(800, 0.10, 0.05).toFixed(2)
);

// 8. Block scope demonstration
{
    let localMessage = "Inventory report generated successfully.";
    console.log(localMessage);
}

// localMessage is only accessible inside the block.
