// 1. Reverse a String

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
// console.log(reverseString("level"))

// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

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
// console.log(fizzBuzz(15))


// 3. Find the Largest Number in an Array

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
// console.log(findLargestNumber([40, 60, 20, 80, 100, 10, 200]))


// 4. Check for Palindrome

function checkForPalindrome(text: string) {
    const reversedText = text.split("").reverse().join("")
    if (reversedText === text) {
        return true
    }
    return false
}
const checkForPalindromeResult = checkForPalindrome("racecar")
// console.log(checkForPalindrome("racecar"))


// 5. Sum of Array Elements

function sumOfArray(numbers: number[]) {
    let sum: number = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = element + sum
    }
    return sum
}
// console.log(sumOfArray([5, 10, 20, 5, 10, 5])

// 6. Count Vowels

function countVowel(text: string) {
    const checkCharacter = /^[A-Za-z\s]*$/
    if (!checkCharacter.test(text)) {
        return "Only English letters and spaces are allowed"
    }
    let countVowel = 0
    const vowelSet = /[aeiou]/i
    const splitText = text.split("")

    for (let i = 0; i < splitText.length; i++) {
        const element = splitText[i];
        if (vowelSet.test(element)) {
            countVowel++
        }

    }
    return countVowel


}
// console.log(countVowel("sakib"))




// 7. Factorial Calculation
// Task: Find the factorial of a non-negative integer n.

function calculateFactorial(n: number) {
    if (n < 0 || n > 12) {
        return "Please input a number 0 to 12";
    }
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}
// console.log(calculateFactorial(5))



// 8. Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.

function findEvenNumbers(numbers: number[]) {
    if (numbers.length >= 100) {
        return "length of array cannot be more than 100"
    }
    let evenNumbers: number[] = []
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 === 0) {
            evenNumbers.push(element)
        }
    }
    return evenNumbers
}
// console.log(findEvenNumbers([5, 10, 50, 20, 29, 47, 63, 40]))



// 9. Fibonacci Sequence
// Task: Generate the first n numbers of the Fibonacci sequence.
function fibonacciSequence(n: number) {
    if (n === 1) {
        return [0];
    }
    let fiboNum = [0, 1]
    for (let i = 2; i < n; i++) {
        let next = fiboNum[i - 1] + fiboNum[i - 2]
        fiboNum.push(next)
    }
    return fiboNum
}
// console.log(fibonacciSequence(10))


// 10. Find the Minimum in an Array
// Task: Given an array of integers, return the smallest value.

// Input: int[] nums
// Output: integer
// Constraints: Array will not be empty.
// Edge Case: Multiple elements with the same minimum value.
// Hint: Similar logic to finding the maximum.
function findMinimumInAnArray(numbers: number[]) {
    if (numbers.length === 0) {
        return "Array will not be empty."
    }
    let minNumber: number = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (minNumber > element) {
            minNumber = element
        }
    }
    return minNumber
}


// console.log(findMinimumInAnArray([10, 5, 20, 2, 14, 15, 233, 100]))




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
