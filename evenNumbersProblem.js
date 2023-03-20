const prompt = require("prompt-sync")();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let evenNumberChoice;

evenNumberChoice = prompt("Choose an even number: ");
let oddNumbers = numbers.map((number) => {
    if (number % 2 !== 0) {
        number = parseInt(evenNumberChoice);    
        return number;  
    } else {
        return number;
    }
});

console.log(oddNumbers)