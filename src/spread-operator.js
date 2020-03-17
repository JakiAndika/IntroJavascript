/*

        Spread Operator 
    - Immutable vs Mutable Data
    - Spread Operator  ...
    - Read Parameter 

*/

// => Immutable --> tidak bisa berubah 
// => Mutable   --> bisa berubah


/*
Case : Copy & Update 
Rute : Don't change original
*/

// Immutable <-- primitive data type
let str = "hello world";
let newStr = str
newStr = "Update hellow world"
console.log(newStr);
console.log(str);

let num = 10
let newNum = num
newNum = 11
console.log(newNum);
console.log(num);


// Mutable <-- object
const book = {
    title: "Javascript Advance",
    author: "John Dhoe",
};

// const newBook = book // copy reference
const newBook = { ...book }; // copy reference
newBook.title = "Update Javascript Advance";
console.log(newBook);
console.log(book);

const hobbies = ["music", "dancing", "slepping"];
newHobbies = [...hobbies];
newHobbies.push("coding");
console.log(newHobbies);
console.log(hobbies);


const sum = (a, b, c) => a + b + c;
const number = [2, 4, 3]
const result = sum(...number)
console.log(result);

const sum2 = (...allNums) => {
    let total = 0
    allNums.forEach(num => total = total + num);
    return total;

}

const result2 = sum2(2, 4, 5, 7, 1, 8);
console.log(result2);