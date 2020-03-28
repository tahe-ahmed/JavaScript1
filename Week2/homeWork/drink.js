'use strict'

function main(){
    const drinkTypes = ["cola", "lemonade", "water"];
    const drinkTray = [];
    getDrinkArray(drinkTypes, drinkTray);
    console.log(`Hey guys, I brought a ${(drinkTray.toString()).replace(/,/g, ", ")}!`);
}

// a function that fills a given array with drinks and ensures any element cannot be repeated more than twice 
function getDrinkArray(drinkTypes, drinkTray){
    let ind = 0;
    for(let i = 0 ; i <5; i++){
        //check if the element has been added twice to the array using pre-defined function 
        if (getOccurrence(drinkTray, drinkTypes[ind])  === 2 ){
            ind++;
            drinkTray.push(drinkTypes[ind]);
        }else drinkTray.push(drinkTypes[ind]);   
    }
}

// a function that returns how many times an element has been repeated in any given array
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

main();