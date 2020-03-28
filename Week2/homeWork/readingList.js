'use strict'

function main(){
    var readingList = getBookArray();
    checkRecommendation(readingList);
}

// a function that returns an array of objects
function getBookArray(){
    let array = [
        {
            title:"Be Vigilant But Not Afraid",
            author:  "Barack Obama and Michelle Obama",
            alreadyRead: true
        },
        {
            title:"The Alchemist",
            author:"Paulo Coelho",
            alreadyRead: true
        },
        {
            title:"The Secret Daily Teachings",
            author: "Rhonda Byme",
            alreadyRead: false
        }
    ]
    return array;
}

// a function that print on the console recommendation about the books based on if they already read or not
function checkRecommendation(arr){
    // using forEach() to iterate over each element of the parameter array 
    arr.forEach(element => {
        element.alreadyRead ? console.log("You already read \""+ element.title +" by " + element.author + "\"")
        : console.log("You need to read \""+ element.title +" by " + element.author + "\"")
    });
}

main();


