const prompt = require("prompt-sync")(); //define window object
let availableRooms = 20;
const checkInLimitHour = 12;
const occupiedRooms = [];
let requiredRooms;
let checkInHour = 10;
let selectedRooms = 1;

while (availableRooms > 0) {
    requiredRooms = parseInt(prompt("How many rooms do you need? "));
    if (requiredRooms <= availableRooms && checkInHour <= checkInLimitHour) {
        availableRooms -= requiredRooms;
        for (let roomsIndex = 0; roomsIndex < requiredRooms; roomsIndex += 1) {
            occupiedRooms.push(selectedRooms);
            selectedRooms += 1;
        }
        requiredRooms === 1 ? console.log("1 room reservation applied") : console.log(`${requiredRooms} room reservations applied`);
        console.log(occupiedRooms);
        console.log(`${availableRooms} rooms still available`);
    } else {
        console.log('there are not available rooms');
    }
}





