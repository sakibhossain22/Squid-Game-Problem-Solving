// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.
// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
// Hint: Look into built-in string slicing or a simple loop.

function reverseString(text: string) {
    if (text.length > 1000) {
        return "String is too long! (Max 1000 characters)";
    }
    if (text.length === 0) {
        return "String is empty!";
    }
    const rev = text.split("").reverse()
    const reversed = rev.join("")
    return reversed
}
const result = reverseString("level")
// console.log(result)

// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
// Input: integer n
// Output: Printed lines or a list of strings.
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
// Hint: Use the modulo operator % to check for remainders.
function fizzBuzz(n: number) {
    if (n < 1 || n > 100) {
        console.log("Please enter a number between 1 and 100.");
        return;
    }
    for (let i = 1; i <= n; i++) {
        const modulusOf3 = i % 3
        const modulusOf5 = i % 5
        if (modulusOf3 === 0 && modulusOf5 === 0) {
            console.log("FizzBuzz")
        }
        if (modulusOf3 === 0) {
            console.log("Fizz")
        }
        if (modulusOf5 === 0) {
            console.log("Buzz")
        }

        console.log(i)
    }

}
// const fizzBuzzResult = fizzBuzz(15)



// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.

// Input: int[] nums
// Output: integer
// Constraints: Array will have at least one element.
// Edge Case: Array with all negative numbers.
// Hint: Initialize a variable with the first element of the array.

function findLargestNumber(numbers: number[]) {
    let largestNumber: number = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largestNumber) {
            largestNumber = element
        }
    }
    return largestNumber
}
const largestNumberResult = findLargestNumber([40, 60, 20, 80, 100, 10, 200])
// console.log(largestNumberResult)


// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.

// Input: string s
// Output: boolean
// Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
// Edge Case: "racecar" (true) vs "hello" (false).
// Hint: Compare the string with its reverse.

function checkForPalindrome(text: string) {
    const reversedText = text.split("").reverse().join("")
    if (reversedText === text) {
        return true
    }
    return false
}
const checkForPalindromeResult = checkForPalindrome("racecar")
console.log(checkForPalindromeResult)










// 5. Sum of Array Elements
// Task: Calculate the total sum of all numbers in an array.

// Input: int[] nums
// Output: integer
// Constraints: nums.length <= 500.
// Edge Case: Empty array (should return 0).
// Hint: Use an accumulator variable inside a loop.




















// 6. Count Vowels
// Task: Count how many vowels (a, e, i, o, u) are in a given string.

// Input: string s
// Output: integer
// Constraints: s contains English letters and spaces.
// Edge Case: String with no vowels.
// Hint: Iterate through the string and check if each character is in a "vowel" set.















// 7. Factorial Calculation
// Task: Find the factorial of a non-negative integer n.

// Input: integer n
// Output: integer
// Constraints: 0 <= n <= 12.
// Edge Case: n = 0 (Factorial of 0 is 1).
// Hint: Use a for-loop or recursion.

















// 8. Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.

// Input: int[] nums
// Output: int[]
// Constraints: nums.length <= 100.
// Edge Case: Array with no even numbers.
// Hint: Use the modulo operator inside a filter condition.














// 9. Fibonacci Sequence
// Task: Generate the first n numbers of the Fibonacci sequence.

// Input: integer n
// Output: int[]
// Constraints: n >= 1.
// Edge Case: n = 1.
// Hint: Start with [0, 1] and add the last two elements to get the next.














// 10. Find the Minimum in an Array
// Task: Given an array of integers, return the smallest value.

// Input: int[] nums
// Output: integer
// Constraints: Array will not be empty.
// Edge Case: Multiple elements with the same minimum value.
// Hint: Similar logic to finding the maximum.















// 11. Multiplication Table
// Task: Generate a multiplication table for a number n up to 10.

// Input: integer n
// Output: List of strings (e.g., "5 x 1 = 5").
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
// Hint: Use a simple loop from 1 to 10.














// 12. Check Prime Number
// Task: Determine if a number n is prime (only divisible by 1 and itself).

// Input: integer n
// Output: boolean
// Constraints: 1 <= n <= 1000.
// Edge Case: n = 1 (not prime), n = 2 (prime).
// Hint: Check divisibility from 2 up to the square root of n.








// 13. Remove Duplicates from a List
// Task: Given an array, return a new array with duplicate values removed.

// Input: int[] nums
// Output: int[]
// Constraints: Order of elements should be preserved.
// Edge Case: Array where all elements are the same.
// Hint: Use a "Set" data structure or check if an element is already in the result list.








// 14. Convert Celsius to Fahrenheit
// Task: Convert a temperature from Celsius to Fahrenheit.

// Input: float celsius
// Output: float
// Constraints: Formula: (C * 9/5) + 32.
// Edge Case: Negative temperatures.
// Hint: Basic arithmetic operation.










// 15. Count Occurrences of a Character
// Task: Given a string and a character, find how many times that character appears in the string.

// Input: string s, char c
// Output: integer
// Constraints: Case-sensitive.
// Edge Case: Character not present in the string.
// Hint: Use a counter variable and loop through the string.
