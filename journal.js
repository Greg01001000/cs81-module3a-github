// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet('Prof. Seno'));

// Definition of function to find all a number's factors and add them to check
// whether the number is perfect
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

const showPrimes = function(limit) {
    let arr = findPrimes(limit);
    for (let i = 2; i <= limit; i++) {
        if (arr[i]) {
        console.log(i);
        }
    }
};

showPrimes(22);