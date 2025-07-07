// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet('Prof. Seno'));

// #1 Declaration of function to find all prime numbers from 2 to the argument (limit)
function findPrimes(limit) {
    let arr = [];
   
    for (let count1 = 2; count1 <= limit; count1++) {
        arr[count1] = 1;
    }    
    for (let count1 = 2; count1 <= limit; count1++) { // Main loop to find nonprime #s
        if (arr[count1]) {
            for (let count2 = count1 * 2; count2 <= limit; count2 += count1) {
                arr[count2] = 0;
            }    
        }
    }
    return arr;
}

// #2 Function definition to display all prime numbers from 2 to the argument (limit)
const showPrimes = function(limit) {
    let arr = findPrimes(limit);
    for (let i = 2; i <= limit; i++) {
        if (arr[i]) {
        console.log(i);
        }
    }
};

let limit = 22;
console.log("\nPrime numbers from 2 through " + limit + " are:")
showPrimes(limit);

// #3 Arrow function receives circle's radius, displays diameter, circumference, & area
const circle = r => {
    const PI = 3.14159; // Initialize pi as constant
    console.log("Diameter: " + (2 * r)); // Calculate & print diameter (2r)
    console.log("Circumference: " + (2 * PI * r)); // Print circumference (2πr)
    console.log("Area: " + (PI * r * r)); // Calculate & print area (πr*r)
}

let r = 10;
console.log("\nCircle radius: " + r);
circle(r);

// #4 Function declaration receives any quantity of numeric arguments and returns a
// two-element array: arr[0] is sum of all arguments, arr[1] is their average
function sumAverage(...theArgs) {
    let arr = [0, 0];
    let len = theArgs.length;
    for (let i = 0; i < len; i++) {
        arr[0] += theArgs[i];
    }
    arr[1] = arr[0] / len;
    return arr;
}

let a = 1, b = 2, c = 3;
console.log(`\nFor this set of numbers: ${a}, ${b}, ${c}`);
let arr1 = sumAverage(a, b, c);
console.log(`Their sum is ${arr1[0]}, and their average is ${arr1[1]}`);

// #5 Single-expression arrow function receives lengths of two short sides of right
// triangle and calculates length of hypotenuse (square root of sum of squared lengths)
const hypotenuse = (sideA, sideB) => Math.sqrt(sideA ** 2 + sideB ** 2); 

let x = 3, y = 4;
console.log(`\nFor a right triangle whose short sides measure ${x} and ${y},`);
console.log(`the hypotenuse measures ${hypotenuse(x, y)}`);