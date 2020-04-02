'use strict'

function main(){
    const cartForParty ={
        beers : 1.75,
        chips : 0.99,
        book : 3.65,
        pen : 1.25,
        apple : 2.99
    }
    console.log(`total price : ${calculateTotalPrice(cartForParty)}`);
    
    function calculateTotalPrice(cartForParty){

        let total = 0;
        for (let [key, value] of Object.entries(cartForParty)) {
            total += value;
            console.log(`${key}: ${value}`);
        }
        return total;
    }
}

main();