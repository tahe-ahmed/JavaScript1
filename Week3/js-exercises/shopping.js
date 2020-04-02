'use strict'

function main(){
    var groceryList = ["bananas", "milk"];
    addToShoppingCart("apple");
    addToShoppingCart("peach");
    addToShoppingCart("orange");

    function addToShoppingCart(item){
        groceryList.push(item);
        if (groceryList.length > 3) groceryList.shift();
        console.log(groceryList);
    }

}

main();
    

