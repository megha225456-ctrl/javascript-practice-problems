# JavaScript Practice Problems

This repository contains clean, modern JavaScript (ES6+) solutions with test cases for all 9 practice problems.

---

## 📋 Table of Contents

1. [Print Numbers 1 to 10](#1-print-numbers-1-to-10)
2. [Sum of an Array](#2-sum-of-an-array)
3. [Find Largest Number in an Array](#3-find-largest-number-in-an-array)
4. [Check if Number is Even or Odd](#4-check-if-number-is-even-or-odd)
5. [Reverse a Given String](#5-reverse-a-given-string)
6. [Merge Two Arrays Using Spread Operator](#6-merge-two-arrays-using-spread-operator)
7. [ES6 Filter for Even Numbers](#7-es6-filter-for-even-numbers)
8. [Rewrite Using Template Literals](#8-rewrite-using-template-literals)
9. [Rewrite Function as Arrow Function](#9-rewrite-function-as-arrow-function)
10. [Running the Code & Tests](#-how-to-run)

---

## Solutions

### 1. Print Numbers 1 to 10
**Question:** Write a loop to print numbers from 1 to 10.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### 2. Sum of an Array
**Question:** Write a function that takes an array of numbers and returns the sum.

```javascript
function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
console.log(sumArray([5, 10, 15, 20])); // Output: 50
```

---

### 3. Find Largest Number in an Array
**Question:** Write a function to find the largest number in an array.

```javascript
function findLargestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
  return Math.max(...numbers);
}

// Example usage:
console.log(findLargestNumber([12, 45, 7, 89, 23, 56])); // Output: 89
```

---

### 4. Check if Number is Even or Odd
**Question:** Write a function that checks if a number is even or odd.

```javascript
function checkEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Example usage:
console.log(checkEvenOrOdd(7));  // Output: Odd
console.log(checkEvenOrOdd(18)); // Output: Even
```

---

### 5. Reverse a Given String
**Question:** Write a function that reverses a given string.

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
```

---

### 6. Merge Two Arrays Using Spread Operator
**Question:**
Merge two arrays using the spread operator
```javascript
const a = [1, 2];
const b = [3, 4];
// Result should be [1, 2, 3, 4]
```

**Solution:**
```javascript
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

console.log(merged); // Output: [1, 2, 3, 4]
```

---

### 7. ES6 Filter for Even Numbers
**Question:**
Use ES6 filter to return even numbers from an array
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

**Solution:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```

---

### 8. Rewrite Using Template Literals
**Question:**
Rewrite the below using template literals:
```javascript
const name = "Alice";
const msg = "Hello " + name + ", welcome!";
```

**Solution:**
```javascript
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

console.log(msg); // Output: Hello Alice, welcome!
```

---

### 9. Rewrite Function as Arrow Function
**Question:**
Rewrite this function using an arrow function:
```javascript
function greet(name) {
  return "Hello, " + name;
}
```

**Solution:**
```javascript
// Standard Arrow Function:
const greet = (name) => {
  return `Hello, ${name}`;
};

// Concise single-line syntax:
const greetConcise = (name) => `Hello, ${name}`;

console.log(greet("Alice")); // Output: Hello, Alice
```

---

## 🚀 How to Run

### Run all solutions:
```bash
node index.js
# or
npm start
```

### Run automated tests:
```bash
node test.js
# or
npm test
```
