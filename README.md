# Problem Solving — Utility Functions & Algorithm Examples

This repository collects small, well-commented TypeScript solutions to common algorithmic and utility problems. The implementations live in [Problem Solving.ts](Problem Solving.ts#L1) and demonstrate clear, easy-to-follow approaches you can reuse or adapt.

## Contents

- `reverseString(text)` — Reverse a string with basic validation.
- `fizzBuzz(n)` — Classic FizzBuzz sequence printer.
- `findLargestNumber(numbers)` — Find the maximum in a numeric array.
- `checkForPalindrome(text)` — Test whether a string is a palindrome.
- `sumOfArray(numbers)` — Sum of array elements.
- `countVowel(text)` — Count vowels in a string (English letters only).
- `calculateFactorial(n)` — Factorial with simple bounds check.
- `findEvenNumbers(numbers)` — Return even numbers from an array.
- `fibonacciSequence(n)` — Generate first `n` Fibonacci numbers.
- `findMinimumInAnArray(numbers)` — Minimum value from an array.
- `multiplicationTable(n)` — Multiplication table for a number (1..10).
- `checkPrimeNumber(n)` — Simple primality check.
- `removeDuplicate(numbers)` — Remove duplicates while preserving order.
- `celsiusToFahrenheit(celsius)` — Temperature conversion helper.
- `countOccurenceesOfCharacters(text, char)` — Case-insensitive character count.

## Quick Examples

You can run individual functions interactively or create a small test harness. Example snippets below assume you load the functions from `Problem Solving.ts` or paste them into a TypeScript REPL.

Reverse a string

```ts
// Expected output: 'olleh'
console.log(reverseString('hello'))
```

FizzBuzz (first 15)

```ts
fizzBuzz(15)
// Prints: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, 10, 11, Fizz, 13, 14, FizzBuzz
```

Array helpers

```ts
console.log(findLargestNumber([3, 7, 2, 9])) // 9
console.log(sumOfArray([1,2,3,4])) // 10
console.log(removeDuplicate([1,2,2,3,1])) // [1,2,3]
```

Math & sequences

```ts
console.log(calculateFactorial(5)) // 120
console.log(fibonacciSequence(6)) // [0,1,1,2,3,5]
console.log(checkPrimeNumber(29)) // true
```

String utilities

```ts
console.log(checkForPalindrome('level')) // true
console.log(countVowel('Hello World')) // 3
console.log(countOccurenceesOfCharacters('Mississippi', 's')) // 4
```

## How to run

1. Install Node.js (v14+) and npm.
2. Add TypeScript tooling (optional) if you want to run with `ts-node`:

```bash
npm install --save-dev typescript ts-node @types/node
npx ts-node "Problem Solving.ts"
```

Alternatively, compile and run with `tsc`:

```bash
npx tsc Problem\ Solving.ts --target ES2019 --module commonjs
node Problem\ Solving.js
```

Note: `Problem Solving.ts` contains utility functions only — you may want to create a small runner file (e.g. `example.ts`) that imports or requires the functions and demonstrates them.

## Style and notes

- Functions include basic input validation and limits (see file for details).
- Complexity is intentionally simple and educational — suitable for learning or quick scripting tasks.
- The file is written in plain TypeScript to be easy to read and modify.

## Contributing

Feel free to:

- Open issues describing edge cases or suggested improvements.
- Submit PRs that add tests, improve validation, or export the functions as a module.

## License

This repository is provided as-is for learning and experimentation. Use however you like.

---
Generated from the solutions in [Problem Solving.ts](Problem Solving.ts#L1).
