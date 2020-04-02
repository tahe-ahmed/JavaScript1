'use strict'

function main(){
    console.log(giveCompliment("Tahe"));
}

function giveCompliment(myName){
    var complimentArray = ["great", "awsome", "amazing", "splendid","magnificent", "impressive", "extravagant", "nice", "good", "excellent"];
    let index = Math.floor(Math.random() * 10);
    return `You are ${complimentArray[index]}, ${myName}`;
}

main();