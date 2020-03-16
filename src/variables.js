// var name //declaration
// name = "jaki" //assigment
var name = "Jaki"; //re-declare
let city = "Jakarta"; // no-declare, re-assign
const age = 15; // no re-declare, no re-assign

var name = "Joko";
// let city ; // error : duplicate Declaration
city = "bandung"; 
// const age = 17; // error : duplicate Declaration
// age = 17; //error : read-only

console.log(name, typeof name);
console.log(city, typeof city);
console.log(age, typeof age);

// data types
const sosialMedia = {
    instagram : "@Jaki_Andika",
    faceboock : "@jakisaja"
};

console.log(sosialMedia.faceboock, typeof sosialMedia);
console.log(sosialMedia.instagram, typeof sosialMedia);

const hobbies = ["music", "dancing", "sleeping"];
console.log(hobbies[0], typeof hobbies);
console.log(hobbies[1], typeof hobbies);
console.log(hobbies[2], typeof hobbies);

// Hoisting -> mengangkat 
var a ;
a = 1;
console.log(a);

// scope
let b = 2; //global scope
{
    let c = 3; //local scope
    var d = 4
    console.log(b);
}

{
    console.log(b);
    // console.log(c);
    console.log(d);
}
