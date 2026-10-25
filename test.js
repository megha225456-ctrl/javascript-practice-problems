const assert = require("assert");
const {
  sumArray,
  findLargestNumber,
  checkEvenOrOdd,
  reverseString,
  mergeArrays,
  filterEvenNumbers,
  createGreeting,
  greet,
  greetShort,
  mergedArray,
  evenNumbers,
  msg,
} = require("./index");

console.log("Running automated tests for Practice Problems...\n");

// Test Problem 2: sumArray
assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15, "sumArray should return 15 for [1, 2, 3, 4, 5]");
assert.strictEqual(sumArray([]), 0, "sumArray should return 0 for empty array");
assert.strictEqual(sumArray([-1, -2, 3]), 0, "sumArray should handle negative numbers");
console.log("✔ Problem 2 (sumArray) passed");

// Test Problem 3: findLargestNumber
assert.strictEqual(findLargestNumber([10, 5, 20, 8]), 20, "findLargestNumber should return 20");
assert.strictEqual(findLargestNumber([-10, -5, -20]), -5, "findLargestNumber should handle negatives");
assert.strictEqual(findLargestNumber([]), undefined, "findLargestNumber should handle empty array");
console.log("✔ Problem 3 (findLargestNumber) passed");

// Test Problem 4: checkEvenOrOdd
assert.strictEqual(checkEvenOrOdd(4), "Even", "4 should be Even");
assert.strictEqual(checkEvenOrOdd(7), "Odd", "7 should be Odd");
assert.strictEqual(checkEvenOrOdd(0), "Even", "0 should be Even");
assert.strictEqual(checkEvenOrOdd(-3), "Odd", "-3 should be Odd");
console.log("✔ Problem 4 (checkEvenOrOdd) passed");

// Test Problem 5: reverseString
assert.strictEqual(reverseString("hello"), "olleh", "reverseString('hello') should be 'olleh'");
assert.strictEqual(reverseString("racecar"), "racecar", "reverseString('racecar') should be 'racecar'");
assert.strictEqual(reverseString(""), "", "reverseString('') should be ''");
console.log("✔ Problem 5 (reverseString) passed");

// Test Problem 6: Merge two arrays using spread operator
assert.deepStrictEqual(mergedArray, [1, 2, 3, 4], "mergedArray should be [1, 2, 3, 4]");
assert.deepStrictEqual(mergeArrays([1, 2], [3, 4]), [1, 2, 3, 4]);
console.log("✔ Problem 6 (spread operator merge) passed");

// Test Problem 7: ES6 filter for even numbers
assert.deepStrictEqual(evenNumbers, [2, 4, 6], "evenNumbers should be [2, 4, 6]");
assert.deepStrictEqual(filterEvenNumbers([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
console.log("✔ Problem 7 (ES6 filter) passed");

// Test Problem 8: Template literals
assert.strictEqual(msg, "Hello Alice, welcome!", "msg should match template literal output");
assert.strictEqual(createGreeting("Alice"), "Hello Alice, welcome!");
console.log("✔ Problem 8 (template literals) passed");

// Test Problem 9: Arrow function greet
assert.strictEqual(greet("Alice"), "Hello, Alice", "greet('Alice') should return 'Hello, Alice'");
assert.strictEqual(greetShort("Alice"), "Hello, Alice", "greetShort('Alice') should return 'Hello, Alice'");
console.log("✔ Problem 9 (arrow function) passed");

console.log("\n==========================================");
console.log("🎉 All 9 problems passed all unit tests!");
console.log("==========================================");
