
 // Standard function with default parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

// Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

// Display function results
console.log("Standard Function Area (Default 5x4):", calculateArea());
console.log("Arrow Function Area (Custom 10x3):", calculateAreaArrow(10, 3));

// Demonstrate block scope
{
    let blockVar = 100;
    console.log("Inside Block:", blockVar);
}

// Accessing block-scoped variable outside the block
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)");
}
