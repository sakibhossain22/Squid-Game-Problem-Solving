
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
        else if (modulusOf3 === 0) {
            console.log("Fizz")
        }
        else if (modulusOf5 === 0) {
            console.log("Buzz")
        }

        console.log(i)
    }

}

function findLargestNumber(numbers: number[]) {
    let largestNumber: number = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largestNumber) {
            largestNumber = element
        }
    }
    return largestNumber
}

function checkForPalindrome(text: string) {
    const reversedText = text.split("").reverse().join("")
    if (reversedText === text) {
        return true
    }
    return false
}

function sumOfArray(numbers: number[]) {
    let sum: number = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = element + sum
    }
    return sum
}

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

function multiplicationTable(n: number) {
    if (n < 1 || n > 100) {
        return "Please enter a number between 1 and 100.";
    }
    let table: string[] = []

    for (let i = 1; i <= 10; i++) {
        table.push((`${n} x ${i} = ${n * i}`))
    }
    return table
}

function checkPrimeNumber(n: number) {
    if (n > 1000) {
        return "Please input a number between 1 to 100"
    }
    if (n <= 1) {
        return false
    }
    if (n === 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function removeDuplicate(numbers: number[]) {
    let newArray: number[] = []
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (!newArray.includes(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

function celsiusToFahrenheit(celsius: number): number {

    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function countOccurenceesOfCharacters(text: string, char: string) {
    let splt = text.split("")
    let count: number = 0
    splt.map(s => {
        if (char.toLocaleLowerCase() === s.toLocaleLowerCase()) {
            count++
        }
    })
    return count
}
