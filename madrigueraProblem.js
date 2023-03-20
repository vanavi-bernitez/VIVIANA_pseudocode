const prompt = require("prompt-sync")(); //define window object
const flavors = ['natural', 'coconut', 'almond', 'vanilla'];
const stockFlavors = [5, 5, 2, 0];
const priceFlavors = [14000, 14000, 16000, 16000];
let productIndex;
let confirmFlavorChoice;
let productQuantity;
let productDemand;

const sellerNotification = (askedQuantity, currentQuantity) => {
    productDemand = askedQuantity - currentQuantity;
    return `Missing units to cover the demand for ${flavors[productIndex]}-flavored yogurt: ${productDemand}`;
};

const yogurtBuy = (productIndex) => {
    if (flavors[productIndex] !== undefined) {
        console.log(`Your choice is ${flavors[productIndex]}. Do you want to change it? `);
        confirmFlavorChoice = prompt("yes/no: ");
        while(confirmFlavorChoice === 'yes') {
            productIndex = prompt("Enter the id of the yogurt flavor you want 0 1 2 3: ");
            if(flavors[productIndex] !== undefined) {
                console.log(`You change to ${flavors[productIndex]}. Want to change again? `);
                confirmFlavorChoice = prompt("yes/no: ");
            } else {
                console.log(`The menu options are 0 1 2 3. Want to try again?`);
                confirmFlavorChoice = prompt("yes/no: ");
            }
        }
        console.log(`Currently, we have in stock ${stockFlavors[productIndex]} units of ${flavors[productIndex]} yogurt.`);
        productQuantity = prompt(`How much yogurt do you want?. `);
        let numberProductQuantity = parseInt(productQuantity);
        if (productQuantity <= stockFlavors[productIndex]) {
            let sale = priceFlavors[productIndex] * numberProductQuantity;
            console.log(`Purchase is ${sale} COP`);
            stockFlavors[productIndex] = stockFlavors[productIndex] - numberProductQuantity;
        } else {
            console.log('This product is out of stock right now. Come back soon!');
            sellerNotification(numberProductQuantity, stockFlavors[productIndex]);     
        }     
    } else {
        console.log('This is an invalid menu option.');
    }
}

//MAIN PROGRAM
console.log("Hi!, we offer the next products: ");
console.log(" 0. flavor: natural \n    price: 14000");
console.log(" 1. flavor: coconut \n    price: 14000");
console.log(" 2. flavor: almond  \n    price: 16000");
console.log(" 3. flavor: vanilla \n    price: 16000");

productIndex = prompt("Enter the id of the yogurt flavor you want 0 1 2 3: ");
yogurtBuy(productIndex);




