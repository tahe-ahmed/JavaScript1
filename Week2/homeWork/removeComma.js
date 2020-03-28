'use strict'

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

// remove the comma using a build-in method replace()
myString = myString.replace(/,/g, " ");
console.log(myString);
