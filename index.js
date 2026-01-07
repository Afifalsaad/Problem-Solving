// Problem 1: Reverse a String

function reverseString(str) {
  const copiedInput = [...str];
  return (reversedResult = copiedInput.reverse().join(""));
}

const reversed = reverseString("hello  world");
console.log(reversed);

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
// console.log(evenNumbers);

// Problem 8: Capitalize First Letter of Each Word

function capitalizeWord(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

const theWord = capitalizeWord(
  "hello world is the first word of my javascript code"
);
// console.log(theWord);

// Problem 9: Find the Factorial of a Number

function factorialOfaNumber(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

const factorial = factorialOfaNumber(6);
// console.log(factorial);

// Problem 10: PingPong Challenge

function pingPong() {
  for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Ping Pong");
    } else if (i % 3 === 0) {
      console.log("ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// pingPong();
