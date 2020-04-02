'use strict'

function main(){
    console.log(calculateDogAge(2));
    console.log(calculateDogAge(0.2));
    console.log(calculateDogAge(-1));
}

function calculateDogAge(humanYear){
    let dogYear;

    if (humanYear < 0) return "invalid humanYear ";
    else if (humanYear < 1)  dogYear = (humanYear * 7).toFixed(2) ;
    else  dogYear = (humanYear * 7);

    return `Your doggie is ${dogYear} years old in dog years` ;
}

main();


