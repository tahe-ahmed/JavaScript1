'use strict'

function main(){
    CreditCardValidator("9999777788880000");
    CreditCardValidator("6666666666661666");
    CreditCardValidator("a92332119c011112");
    CreditCardValidator("4444444444444444");
    CreditCardValidator(1111111111111110);
    CreditCardValidator(6666666666666661);
}

function CreditCardValidator(cardNumber) {
    //check the mentioned criteria
    if (cardNumber.length == 16 
        && isNumber(cardNumber) 
        && ((cardNumber % 10) % 2 === 0) 
        && isSameDigit(cardNumber) )
            console.log(`your card Number is valid and it is ${cardNumber}`);
        
     else 
        console.log("Your card Number is not valid");
}

// a function that checks the digit of the card number if there are a letter or char that is not a number
function isNumber(card){
    let num = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0 ; i < card.length; i++){
        if (!(card[i] in num)) return false;
    }
    return true;
}

//a function that checks the digit of the card if they are the same 
function isSameDigit(card){
    let digit = card[0];
    let i = 1;
    let flag = true;
    for(;i<card.length; i++){
        if ((digit === card[i])) flag =false;
        else return true;
    }
    return flag;
}

main();