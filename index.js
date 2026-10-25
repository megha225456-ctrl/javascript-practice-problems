/**
 * JavaScript Practice Problems Solutions
 * --------------------------------------
 * Topic: Core JavaScript, Functions, and ES6 Features
 */

// ==========================================
// Problem 1: Write a loop to print numbers from 1 to 10.
// ==========================================
function printNumbers1To10() {
  console.log("Problem 1: Numbers from 1 to 10:");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ==========================================
// Problem 2: Write a function that takes an array of numbers and returns the sum.
// ==========================================
function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Expected an array of numbers");
  }
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// ==========================================
// Problem 3: Write a function to find the largest number in an array.
// ==========================================
function findLargestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}

// ==========================================
// Problem 4: Write a function that checks if a number is even or odd.
// ==========================================
function checkEvenOrOdd(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid input: Not a number";
  }
  return number % 2 === 0 ? "Even" : "Odd";
}

// ==========================================
// Problem 5: Write a function that reverses a given string.
// ==========================================
function reverseString(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str.split("").reverse().join("");
}

// ==========================================
// Problem 6: Merge two arrays using the spread operator
// Given:
//   const a = [1, 2];
//   const b = [3, 4];
// Result should be [1, 2, 3, 4]
// ==========================================
const a = [1, 2];
const b = [3, 4];
const mergedArray = [...a, ...b];

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// ==========================================
// Problem 7: Use ES6 filter to return even numbers from an array
// Given:
//   const numbers = [1, 2, 3, 4, 5, 6];
// ==========================================
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// ==========================================
// Problem 8: Rewrite the below using template literals
// Original:
//   const name = "Alice";
//   const msg = "Hello " + name + ", welcome!";
// ==========================================
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

function createGreeting(personName) {
  return `Hello ${personName}, welcome!`;
}

// ==========================================
// Problem 9: Rewrite this function using an arrow function
// Original:
//   function greet(name) {
//     return "Hello, " + name;
//   }
// ==========================================
const greet = (name) => {
  return `Hello, ${name}`;
};

// Concise single-line arrow function variant
const greetShort = (name) => `Hello, ${name}`;


// ==========================================
// Demonstration / Execution
// ==========================================
function runAll() {
  console.log("==========================================");
  console.log("   JavaScript Practice Problems Output    ");
  console.log("==========================================\n");

  // Problem 1
  console.log("--- 1. Loop 1 to 10 ---");
  printNumbers1To10();
  console.log();

  // Problem 2
  console.log("--- 2. Sum of Array ---");
  const sampleArr = [5, 10, 15, 20];
  console.log(`Array: [${sampleArr}]`);
  console.log(`Sum: ${sumArray(sampleArr)}\n`);

  // Problem 3
  console.log("--- 3. Largest Number in Array ---");
  const testArr = [12, 45, 7, 89, 23, 56];
  console.log(`Array: [${testArr}]`);
  console.log(`Largest Number: ${findLargestNumber(testArr)}\n`);

  // Problem 4
  console.log("--- 4. Check Even or Odd ---");
  console.log(`Number 7 is: ${checkEvenOrOdd(7)}`);
  console.log(`Number 18 is: ${checkEvenOrOdd(18)}\n`);

  // Problem 5
  console.log("--- 5. Reverse String ---");
  const originalStr = "JavaScript";
  console.log(`Original: "${originalStr}"`);
  console.log(`Reversed: "${reverseString(originalStr)}"\n`);

  // Problem 6
  console.log("--- 6. Merge Arrays with Spread Operator ---");
  console.log("Array a:", a);
  console.log("Array b:", b);
  console.log("Merged Result:", mergedArray);
  console.log();

  // Problem 7
  console.log("--- 7. Filter Even Numbers using ES6 filter ---");
  console.log("Input Array:", numbers);
  console.log("Filtered Even Numbers:", evenNumbers);
  console.log();

  // Problem 8
  console.log("--- 8. Template Literals ---");
  console.log("Output Message:", msg);
  console.log();

  // Problem 9
  console.log("--- 9. Arrow Function Greet ---");
  console.log("greet('Alice'):", greet("Alice"));
  console.log("greetShort('Bob'):", greetShort("Bob"));
  console.log();

  console.log("==========================================");
  console.log("       All Exercises Executed!            ");
  console.log("==========================================");
}

// Run if executed directly
if (require.main === module) {
  runAll();
}

module.exports = {
  printNumbers1To10,
  sumArray,
  findLargestNumber,
  checkEvenOrOdd,
  reverseString,
  mergeArrays,
  filterEvenNumbers,
  createGreeting,
  greet,
  greetShort,
  a,
  b,
  mergedArray,
  numbers,
  evenNumbers,
  name,
  msg,
};
