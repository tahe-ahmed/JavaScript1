var str0 = "str0";
var str1 = "str1";
const obj0 = {
    2:
    "obj0"
};
const obj1 = {
    43:
    "obj1"
};

console.log(typeof str0 == typeof str1);
console.log(typeof str0 == typeof obj0);
console.log(typeof str0 == typeof obj1);
console.log(typeof str1 == typeof obj0);
console.log(typeof str1 == typeof obj1);
console.log(typeof obj1 == typeof obj0);
console.log("");

console.log(typeof str0);
console.log(typeof obj0);
console.log("");

console.log((typeof str0 == typeof str1) ? "SAME TYPE" : "NOT THE SAME...");
console.log((typeof str0 == typeof obj0) ? "SAME TYPE" : "NOT THE SAME...");
console.log((typeof str0 == typeof obj1) ? "SAME TYPE" : "NOT THE SAME...");
console.log((typeof str1 == typeof obj0) ? "SAME TYPE" : "NOT THE SAME...");
console.log((typeof str1 == typeof obj1) ? "SAME TYPE" : "NOT THE SAME...");
console.log((typeof obj1 == typeof obj0) ? "SAME TYPE" : "NOT THE SAME...");

