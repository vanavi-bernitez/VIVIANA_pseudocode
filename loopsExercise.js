//FOR
const array = [['Hola','Adios'], 1, ['Hi', 'By'], 2, ['Ciao', 'Addio'], 3, ['Bonjour', 'Adieu']];
let objectCounter = 0;
const newArray = [];

for (let items = 0; items < array.length; items += 1) {
    if (typeof array[items] === 'object') {
        newArray.push(array[items]);
        objectCounter += 1;
    } else {
        continue;
    }
}
console.log(`${objectCounter} elements within the main array are of type object`);
console.log(newArray);

//NESTED FOR
const arr = [[1,2], [3,4,5]];
for (let outer = 0; outer < arr.length; outer += 1) {
    for (let inner = 0; inner < arr[outer].length; inner += 1) {
        console.log(`${outer}-${inner}`);
    }
}

//WHILE
const prompt = require("prompt-sync")();
let sum = 0;
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
}

console.log(`The sum is ${sum}.`);

//DO WHILE
let sumDoWhile = 0;
let numberDoWhile = 0;

do {
    sumDoWhile += numberDoWhile;
    numberDoWhile = parseInt(prompt('Enter a number: '));
} while(numberDoWhile >= 0)

console.log(`The sum is ${sumDoWhile}.`);





