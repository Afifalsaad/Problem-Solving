// Problem 1: Reverse a String

const input = "hello world";
const copiedInput = [...input];
const reversedResult = copiedInput.reverse().join("");

// Problem 2: Count Vowels in a String

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const result = countVowels("javaScript");

// console.log(result);

// Problem 3: Check for Palindrome

function palindrome(str) {
  const copied = [...str];
  const reversed = copied.reverse().join("");
  if (str.toLowerCase() === reversed.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

const isPalindrome = palindrome("Civic");
// console.log(isPalindrome);

// Problem 4: Find the Maximum Number

function MaxNum(arr) {
  const input = arr;
  return Math.max(...input);
}
const num = MaxNum([1, 2, 3, 4, 5, 50, 5000]);
// console.log(num);

// Problem 5: Remove Duplicates from an Array

function removeDuplicate(arr) {
  let input = arr;
  let checkDuplicate = new Set(input);
  return [...checkDuplicate];
}

const output = removeDuplicate([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]);
// console.log(output);

// Problem 6: Sum of All Numbers in an Array

function sumOfNum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const sum = sumOfNum([1, 2, 3, 4, 10, 20, 100, 200]);
// console.log(sum);

// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}

const evenNumbers = findEvenNumbers([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
console.log(evenNumbers);

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..
