'use strict'

var mealRecipe = {
    title: "mealName",
    servings: 1,
    ingredients: [
        "item0",
        "item1",
        "item2"
    ]
}

// loging the declared object formated 
console.log(`Meal name : ${mealRecipe.title} \n` + 
            `Serves : ${mealRecipe.servings} \n` + 
            `Ingredients:\n${mealRecipe.ingredients.join('\n')}`);