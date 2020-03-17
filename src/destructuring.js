/*

        Destructuring
    - object
    - array
    - functiong parameter

*/
// => Object
const user = {
    firstName: "Jhon",
    lastName: "Dhoe",
    country: "Indonesia",
    language: "Bahasa",
    link: {
        sosial: {
            twitter: "https://twitter.com/jhondoe",
            facebook: "https://facebook.com/jhondoe"
        },
        web: {
            blog: "https://jhondoe.com"
        }
    }
};

// let firstName = user.firstName;
// let lastName = user.lastName;
let { firstName, lastName, language: lang } = user;
let { twitter, facebook } = user.link.sosial
console.log(firstName, lastName, lang, twitter, facebook);


// => Array 
let myArray = [1, 2, 3, [4.1, 4.2, 4.3]];
// let a = myArray[0];
// let b = myArray[1];
// let c = myArray[2];
const [a, b, c, [d, e, f]] = myArray;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`f = ${f}`);


// => Function Parameter
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

console.log(fullName(user))
